---
title: "Stop Shipping 20 Locale Files in React Native: On-Device Translation for Dynamic Language Packs"
description: "Learn how to avoid shipping dozens of locale JSON files by generating and caching a dynamic language pack in React Native."
date: "2026-06-02"
tags:
  - react-native
  - i18n
  - localization
  - language-pack
  - translation
  - mobile
author: "Subrata Kumar Das"
readingTime: "8 min"
excerpt: "Instead of bundling every locale file in your app, use a dynamic language pack that translates missing keys on device, caches results locally, and keeps your bundle lean."
draft: false
slug: "dynamic-language-pack"
---

> *"What if your app only shipped one source language, but still understood every user in their preferred locale?"*

![](/images/react-native-language-pack.jpg)

This article shows how to build a React Native internationalization strategy that avoids shipping every locale as a separate file. Instead, you keep a source language, translate missing keys on device, and cache the generated language pack locally.

By the end of this article, you'll understand:

- Why static locale files become a maintenance burden
- How on-device translation can fill missing strings without server-side pipelines
- What `@tcbs/react-native-language-translator` does for React Native apps
- How to cache and ship only the language data users actually need

---

# Stop Shipping 20 Locale Files in React Native: On-Device Translation for Dynamic Language Packs

Internationalization in mobile apps usually starts clean and then gets expensive.

At first, you keep a couple of JSON files:

- `en.json`
- `es.json`
- `fr.json`

That works when your product is small and the set of languages is stable.

It breaks down when:

- you want to support many languages
- the product team keeps changing copy
- translated files drift out of sync
- some languages are only partially used
- you do not want to run every string through a server-side translation pipeline

This is the problem `@tcbs/react-native-language-translator` is trying to solve.

It lets a React Native app keep a source language, translate missing keys on device, and cache the generated language pack locally.

Package: [@tcbs/react-native-language-translator](https://www.npmjs.com/package/@tcbs/react-native-language-translator)

---

## The problem

Many React Native apps treat localization as a static asset problem:

1. keep one JSON file per language
2. ship all of them in the app
3. update all of them whenever English changes

That model has real costs.

### 1. Translation files become operational debt

Every new feature adds more keys. Every copy change forces translators to update multiple locale files. Over time, the translation layer becomes a maintenance queue.

The result is predictable:

- missing keys
- stale translations
- untranslated fallback strings
- inconsistent release quality across languages

### 2. Shipping many locales is wasteful

Most users only need one target language. But many apps ship every locale anyway. That increases bundle size and creates a lot of dead weight for users who will never use most of those files.

### 3. Dynamic product copy is hard to localize well

If your app changes quickly, static translation files lag behind. Teams either accept stale translations or build a backend workflow to keep everything synchronized.

That is often more infrastructure than the app actually needs.

### 4. Server-side translation is not always the right tradeoff

Calling a translation API at runtime introduces:

- latency
- API cost
- network dependency
- privacy considerations
- offline failure modes

For some apps, that is acceptable. For many mobile flows, it is not.

---

## The idea behind the package

Instead of treating every target language as a fully prebuilt asset, this package treats translation as a local capability.

The app keeps one source dictionary, typically English, and then:

1. detects the user’s target language
2. checks whether that language is supported
3. downloads the native translation model for the language pair
4. translates missing keys on device
5. stores the translated values locally
6. applies the cached values to the app’s i18n layer

That changes the architecture in a useful way:

- the source language stays canonical
- target languages are generated incrementally
- only needed translations are downloaded and cached
- the app can improve coverage over time without shipping every locale file up front

---

## What solution is it providing?

`@tcbs/react-native-language-translator` provides three things:

### 1. A React Native native bridge for on-device translation

The package exposes a native translator module for:

- Android via Google ML Kit Translate
- iOS via ML Kit Translate through the native bridge

This gives JavaScript code a simple interface for:

- checking supported language pairs
- preparing language models
- translating batches of strings
- reading downloaded languages

### 2. A supported language catalog

The package includes a ready-to-use supported languages list for building UI such as:

- language pickers
- onboarding preference screens
- settings pages

Each entry contains:

- language code
- display name
- flag

It also includes a small alias normalization layer, for example:

- `hn -> hi`
- `od -> or`

That matters because app-internal language codes and translator-supported codes do not always match cleanly.

### 3. A language-pack generation workflow

This is the more interesting part.

The package does not only translate text. It helps build a practical runtime flow around translation:

- flatten a source dictionary
- compare it with cached and bundled translations
- identify missing keys
- translate only the missing values
- save them into a repository abstraction
- apply them back into your i18n resource bundle

That turns translation from a one-off API call into a reusable app pattern.

---

## How is it providing that solution?

The package is opinionated in a useful way: it separates the translation engine from your app’s storage and i18n implementation.

### Layer 1: Native translation

The `createNativeTranslatorModule()` API exposes methods such as:

- `getSupportedLanguages()`
- `getDownloadedLanguages()`
- `isSupported(source, target)`
- `prepareLanguagePair(source, target)`
- `translateBatch(texts, source, target)`

This is the lowest-level layer. It is responsible for native translation model setup and translation execution.

### Layer 2: Language code normalization

The package normalizes language tags and resolves aliases before calling the native layer.

This helps when:

- your app uses short internal aliases
- user profile data stores non-standard codes
- upstream systems do not agree on locale naming

It reduces friction between app-specific language identifiers and translator-supported codes.

### Layer 3: Coverage-based language pack generation

The `ensureLanguagePackReady()` helper does most of the workflow orchestration.

Conceptually, it does this:

1. flatten the source dictionary
2. read existing cached translations
3. inspect the currently bundled translations
4. calculate what is missing or still effectively untranslated
5. prepare the language pair
6. translate missing values in chunks
7. persist generated translations
8. return coverage information

This design matters because production localization is not binary. It is not just “translated” or “not translated.” You need to know:

- how many keys exist
- how many are ready
- how many are still missing
- how many are still identical to source text

The package exposes that coverage model directly.

### Layer 4: Storage-agnostic integration

The package does not force a database choice.

Instead, you provide a repository adapter with methods like:

- `getMapForLanguage()`
- `upsertMany()`

That means you can back it with:

- SQLite
- Realm
- MMKV-backed structured persistence
- any custom local store

The same pattern applies to your i18n layer. You provide an adapter with methods such as:

- `getResourceBundle()`
- `addResourceBundle()`

So the package can work with your existing localization setup rather than replacing it.

---

## How many languages does it support?

The current package exports **59 supported languages**.

Examples include:

- English
- Spanish
- French
- German
- Arabic
- Hindi
- Bengali
- Gujarati
- Tamil
- Telugu
- Japanese
- Korean
- Chinese
- Russian
- Portuguese
- Turkish
- Ukrainian
- Vietnamese

The full list is available directly from the package through `supportedLanguages` and `getSupportedLanguages()`.

This is enough to cover a broad set of global product scenarios while keeping the app-side integration simple.

---

## Why this approach is useful

There is a practical middle ground between “ship every locale file forever” and “call a translation API on every screen.”

This package sits in that middle ground.

### It reduces translation maintenance pressure

You still keep a canonical source dictionary, but you do not need every target language file to be complete before the app can function.

### It keeps the app responsive to copy changes

If new English keys appear, the app can generate and cache missing translated entries instead of waiting for a full manual localization cycle.

### It works with offline-first thinking better than API translation

Once models and translations are downloaded, the app can reuse them locally.

### It avoids forcing a backend translation service

That can be useful for teams that want fewer moving parts or tighter privacy boundaries around runtime text handling.

---

## A realistic usage example

Here is the simple path:

```ts
import {
  createNativeTranslatorModule,
  getSupportedLanguages,
  isLanguageSupported,
  resolveTranslatorLanguageCode,
} from '@tcbs/react-native-language-translator';

const selectedLanguage = 'od';
const targetLanguage = resolveTranslatorLanguageCode(selectedLanguage);

if (!isLanguageSupported(targetLanguage)) {
  throw new Error('Unsupported language');
}

const languageOptions = getSupportedLanguages({ includeEnglish: true });
const translator = createNativeTranslatorModule();

await translator.prepareLanguagePair('en', targetLanguage);

const translated = await translator.translateBatch(
  ['Settings', 'Store'],
  'en',
  targetLanguage,
);
```

That is useful if you only need direct string translation.

But the more production-ready pattern is language-pack generation:

```ts
import {
  applyCachedLanguagePack,
  createNativeTranslatorModule,
  ensureLanguagePackReady,
} from '@tcbs/react-native-language-translator';

await ensureLanguagePackReady({
  sourceLanguage: 'en',
  targetLanguage: selectedCode,
  sourceDictionary: enJson,
  i18n,
  repository: localizedOverrideRepository,
  nativeModule: createNativeTranslatorModule(),
});

applyCachedLanguagePack({
  languageCode: selectedCode,
  i18n,
  repository: localizedOverrideRepository,
});
```

This is where the package becomes more than a translator wrapper. It becomes infrastructure for a dynamic localization workflow.

---

## What teams should know before using it

This is not magic. There are still operational realities.

### 1. Translation models are runtime assets

Models need to be downloaded for the language pair. That means:

- first use can take time
- network availability matters during preparation
- you should show clear user-facing progress states

### 2. Generated translations should be treated as cached output

You should think of generated language packs as local derived data, not as your source of truth.

The source dictionary remains your canonical content.

### 3. Quality expectations should be explicit

On-device translation is useful, but you still need product judgment.

For critical legal, medical, financial, or brand-sensitive copy, human review may still be necessary.

### 4. Good UX matters

If you adopt this approach, the app should explain:

- that language resources may need downloading
- that translation happens on device
- that results are cached locally
- that some screens may improve in coverage over time

---

## Where this package fits best

This approach is especially useful for apps that:

- ship fast and change copy often
- want broad language reach without shipping many static locale files
- want local generation and local caching
- already have an i18n setup and just need a translation generation layer
- want to avoid a runtime translation backend for common flows

It is less ideal if your localization model requires:

- formally reviewed translations for every string before release
- a centralized translation management system as the only allowed source
- strict server-mediated copy governance

---

## Final take

The interesting part of `@tcbs/react-native-language-translator` is not just that it translates strings.

It provides a workable architecture for dynamic localization in React Native:

- source language as canonical input
- native on-device translation as the engine
- cached language packs as local derived output
- coverage-aware helpers to manage completeness

That is a practical model for teams that want broader language support without turning localization into a backend-heavy system.

If you want to try it, the package is here:

[https://www.npmjs.com/package/@tcbs/react-native-language-translator](https://www.npmjs.com/package/@tcbs/react-native-language-translator)
