---
title: "Day 12: Implementing Navigation with TypeScript"
description: "A guide to building a type-safe navigation system in React Native using React Navigation and TypeScript, eliminating common errors and improving code maintainability."
date: "2026-03-03"
image: "/images/180days/day-0.png"
slug: "day-12-implementing-navigation-with-typescript"
tags:
  - react-native
  - typescript
  - react-navigation
  - type-safety
  - Subrata Kumar Das
excerpt: "Learn how to implement a robust, type-safe navigation system in a React Native and TypeScript project. We'll set up React Navigation, define typed routes to prevent errors, and show how to trigger navigation between screens."
author: "Subrata Kumar Das"
updated: "2026-03-04"
draft: false
readingTime: "9 min"
---

# Day 12: Implementing Navigation with TypeScript

Yesterday we converted the **static screens generated using Stitch** into working React Native components.

The UI now exists, but the screens are still **isolated**.

They do not communicate with each other yet.

Today we solve that problem by implementing **navigation**.

Navigation is what turns separate screens into an actual **mobile application experience**.

When a user taps **“Create Memory”**, the app must open the **New Entry screen**.

When they tap an entry, the app must open **Memory Details**.

To achieve this we will implement **React Navigation with TypeScript**.

---

# Why Navigation Matters

Navigation is the **skeleton of a mobile application**.

Without navigation:

- screens cannot connect
- users cannot move between features
- app flow cannot exist

Navigation defines:

- how screens transition
- how parameters move between screens
- how back navigation works
- how the app structure evolves

In a well-architected app, navigation should be **predictable and centralized**.

---

# Navigation Strategy for This Project

Mobile apps typically combine multiple navigation systems:

- Stack Navigation
- Bottom Tabs
- Drawer Navigation
- Modal Navigation

Implementing everything at once creates confusion.

Instead we follow a **progressive navigation approach**.

### Step 1 (Today)

Implement **Stack Navigation only**

### Step 2 (Tomorrow)

Introduce **Bottom Tab Navigation**

### Step 3 (Later)

Add:

- modals
- overlays
- special flows

This keeps the architecture **clean and beginner friendly**.

---

# Screens Generated From Stitch

During earlier days we used **Stitch AI** to generate UI mockups.

Those mockups were converted into React Native screens.

The following folders were created:

```
stitch_generated_screen/

choose_appearance
import_archive
memory_detail
new_entry_screen
onboarding_completion_standardized
pin_lock_overlay
privacy_by_design
security_setup
settings
unified_archive_timeline_updated_fab
unified_empty_state_minimal
welcome_standardized

```

These represent the **UI foundation of the application**.

Now we connect them through navigation.

---

# Screens Included in Stack Navigation

For Day 12 we will include the following screens in the navigation stack.

| Screen | Purpose |
|------|------|
| welcome_standardized | First screen shown when the app launches |
| privacy_by_design | Explains privacy-first philosophy |
| security_setup | User configures encryption security |
| choose_appearance | Light / dark theme selection |
| onboarding_completion_standardized | Final onboarding confirmation |
| unified_archive_timeline_updated_fab | Main archive timeline |
| unified_empty_state_minimal | Empty archive placeholder |
| new_entry_screen | Create a new memory |
| memory_detail | View stored memory |
| settings | App settings |
| import_archive | Import encrypted archive |

Important note:

`pin_lock_overlay` is **not part of navigation**.

It is implemented as an **overlay security layer** above navigation.

This follows the architecture rule that session locking must wrap the navigation container instead of becoming a route.

---

# Current Navigation Flow

The initial onboarding flow looks like this:

```

Welcome
↓
Privacy by Design
↓
Security Setup
↓
Choose Appearance
↓
Onboarding Completed
↓
Archive Timeline

```

From the **Archive Timeline**, users can navigate to:

```

Archive Timeline
↓
New Entry
↓
Memory Detail

```

Additional screens:

```

Archive Timeline
↓
Settings
↓
Import Archive

````

---

# Installing React Navigation

First install required dependencies.

```bash
yarn add @react-navigation/native @react-navigation/native-stack
yarn add react-native-screens react-native-safe-area-context
````

These libraries provide:

* stack navigation
* screen lifecycle management
* native performance optimizations

---

# Creating Type-Safe Navigation

In many apps developers write:

```
navigation.navigate("NewEntry")
```

This is risky.

Why?

Because `"NewEntry"` is a **magic string**.

If we misspell it:

```
navigation.navigate("NewEnty")
```

The error appears **only at runtime**.

TypeScript solves this.

---

# Defining Navigation Types

Create:

```
navigation/types.ts
```

```typescript
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export const SCREENS = {
  TIMELINE: 'Timeline',
  NEW_ENTRY: 'NewEntry',
} as const;

export type RootStackParamList = {
  [SCREENS.TIMELINE]: undefined;
  [SCREENS.NEW_ENTRY]: { entryId?: string };
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
```

Now TypeScript will enforce:

* valid screen names
* correct parameters

---

# Creating the Stack Navigator

Inside `App.tsx`:

```typescript
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS, RootStackParamList } from './navigation/types';

import ArchiveTimelineScreen from './screens/ArchiveTimelineScreen';
import NewEntryScreen from './screens/NewEntryScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.TIMELINE}>
        <Stack.Screen
          name={SCREENS.TIMELINE}
          component={ArchiveTimelineScreen}
        />

        <Stack.Screen
          name={SCREENS.NEW_ENTRY}
          component={NewEntryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

This defines the **navigation stack**.

---

# Triggering Navigation

Inside the timeline screen we can open the new entry screen.

```typescript
import React from 'react';
import { Pressable, Text } from 'react-native';

import { SCREENS } from '../navigation/types';
import type { ScreenProps } from '../navigation/types';

const ArchiveTimelineScreen = ({ navigation }: ScreenProps<typeof SCREENS.TIMELINE>) => {
  return (
    <Pressable onPress={() => navigation.navigate(SCREENS.NEW_ENTRY)}>
      <Text>Create Memory</Text>
    </Pressable>
  );
};

export default ArchiveTimelineScreen;
```

---

# Accessing Navigation Parameters

If editing an entry we may pass an ID.

```
navigation.navigate(SCREENS.NEW_ENTRY, {
  entryId: "memory_123"
})
```

Inside the screen:

```typescript
const { entryId } = route.params;
```

---

# Placeholder Screen

For now we create a simple placeholder.

```typescript
import React from 'react';
import { View, Text, Button } from 'react-native';

import type { ScreenProps } from '../navigation/types';
import { SCREENS } from '../navigation/types';

const NewEntryScreen = ({ navigation }: ScreenProps<typeof SCREENS.NEW_ENTRY>) => {
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
      <Text>New Entry Screen - Coming Soon</Text>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default NewEntryScreen;
```

---

# Architecture Rule for Navigation

Navigation belongs **only to the App Layer**.

Example folder:

```
src/app/navigation/
```

Feature modules must **not directly control navigation**.

This keeps architecture clean and predictable.

---

# Common Navigation Mistakes Beginners Make

### 1. Using Magic Strings

Bad:

```
navigation.navigate("Profile")
```

Better:

```
navigation.navigate(SCREENS.PROFILE)
```

---

### 2. Not Using TypeScript

Without types:

* invalid parameters crash the app
* refactoring becomes dangerous

---

### 3. Mixing Navigation With Business Logic

Navigation should not live inside services.

It belongs to the **UI layer only**.

---

### 4. Creating Too Many Navigators

Beginners often create:

* nested stacks
* nested drawers
* nested tabs

Too early.

Start simple.

---

### 5. Using Navigation for Security

Security should **never rely on navigation routes**.

Instead implement security as an **overlay layer**.

---

# Your Turn: Practical Exercises

### Exercise 1

Add a **Settings Screen**.

Update:

```
SCREENS.SETTINGS
```

Add it to the stack navigator.

---

### Exercise 2

Pass a parameter when opening New Entry.

```
navigation.navigate(SCREENS.NEW_ENTRY, {
  entryId: "entry_001"
})
```

---

### Exercise 3

Customize the header title.

```
<Stack.Screen
  name={SCREENS.NEW_ENTRY}
  component={NewEntryScreen}
  options={{ title: "Create Memory" }}
/>
```

---

### Exercise 4

Change animation style.

```
options={{ animation: "slide_from_bottom" }}
```

---

# Further Reading

### React Navigation Official Docs

[https://reactnavigation.org/docs/getting-started](https://reactnavigation.org/docs/getting-started)

Topics covered:

* stack navigation
* tab navigation
* passing parameters
* navigation lifecycle

---

### TypeScript With React Navigation

[https://reactnavigation.org/docs/typescript](https://reactnavigation.org/docs/typescript)

Learn how TypeScript prevents:

* invalid routes
* missing parameters
* runtime navigation crashes

---

### Mobile Navigation Design

Understanding mobile navigation patterns improves UX design.

Recommended reading:

* Material Design Navigation Patterns
* Apple Human Interface Guidelines

---

### Clean Architecture Concepts

Navigation should stay isolated from business logic.

Search topics like:

* Clean Architecture
* Separation of Concerns
* Modular App Design

These ideas help build scalable mobile applications.

---

# Tomorrow (Day 13)

Today we implemented **Stack Navigation**.

Tomorrow we introduce:

### Bottom Tab Navigation

The app will evolve into a realistic mobile layout:

```
Archive
Search
Shared
Settings
```

We will integrate tabs **without breaking the stack navigation architecture created today**.

---

See you on **Day 13**.

