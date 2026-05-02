---
title: "The CocoaPods Sunset: What Dec 2, 2026 Means for Your React Native App"
description: "Explore what the CocoaPods read-only transition on December 2, 2026, means for React Native apps, the shift to Swift Package Manager (SPM), and how to prepare your projects."
date: "2026-05-02"
slug: "cocoapods-sunset-react-native-app"
tags:
  - cocoapods
  - react-native
  - ios
  - swift
  - software-development
author: "Subrata Kumar Das"
updated: "2026-05-02"
draft: false
readingTime: "10 min"
excerpt: "CocoaPods is moving to a read-only state in Dec 2026. Learn how this impacts your React Native apps and the path forward with Swift Package Manager (SPM)."
---

## Introduction to CocoaPods
Before Swift Package Manager (SPM) became the native standard, the iOS world belonged to CocoaPods.

## What is CocoaPods?
CocoaPods is a dependency manager for Swift and Objective-C Cocoa projects. In simple terms, it’s a tool that automates the process of adding, updating, and managing third-party libraries (like Firebase, Alamofire, or Lottie) in your Xcode projects. Instead of manually dragging source files into your project and worrying about build settings, you define what you need in a single text file called a Podfile.

## Who Created and Manages It?

* **Founders:** It was started by Eloy Durán and Fabio Pelosin.
* **Management:** The project is maintained by a core team of volunteers, including developers like Samuel Giddins, Danielle Lancashire, and others, with contributions from the broader open-source community.
* **Governance:** While it is an open-source project hosted on [GitHub](https://github.com/cocoapods/cocoapods), it operates through a centralized registry called the CocoaPods Trunk.

## When Did It Start?

* **Release Date:** Development began in August 2011, and the first public release was on September 1, 2011.
* **Inspiration:** It was heavily inspired by the Ruby community's dependency managers, RubyGems and Bundler. This is why CocoaPods itself is built with Ruby and installed as a "gem".

## Where and How is it Used?

* **Platforms:** It supports almost the entire Apple ecosystem: iOS, macOS, watchOS, and tvOS.
* **The Workflow:**
   1. Create a `Podfile` in your project directory.
   2. List your dependencies (e.g., `pod 'Alamofire'`).
   3. Run `pod install` in your terminal.
   4. CocoaPods creates an `.xcworkspace` file, which you must use instead of the standard `.xcodeproj` to ensure all libraries are linked correctly.

## Why was it a Game-Changer?
Before CocoaPods, integrating a library was a manual "nightmare" of copying files, managing header search paths, and manually linking frameworks. CocoaPods centralized this into a searchable hub (cocoapods.org) that now hosts over 100,000 libraries and is used in over 3 million apps.

-----

# The Sunset Era
Yes, CocoaPods is scheduled to move to a permanent read-only state on **December 2, 2026**. 
After this date, the [CocoaPods Trunk](https://guides.cocoapods.org/making/getting-setup-with-trunk.html) (the central registry) will no longer accept new Podspecs or updates to existing ones.

## Why is CocoaPods Sunsetting?
Maintaining a package manager that serves millions of apps is a massive undertaking.
* **Volunteer Burnout:** The project relies entirely on volunteers. The burden of keeping the infrastructure running, fixing bugs, and updating for every new Xcode release has outpaced the available resources.
* **Server Costs:** Hosting the global CDN for hundreds of thousands of packages is incredibly expensive. 
* **The Rise of SPM:** Apple introduced Swift Package Manager (SPM) built directly into Xcode. With SPM now mature enough to handle complex dependency graphs, the community no longer needs a third-party tool for this primary function.

## Key Impact on Developers

* **Existing Projects:** Your current apps will not break immediately. Existing versions of libraries will remain accessible for installation as long as [GitHub](https://github.com/) and [jsDelivr](https://www.jsdelivr.com/) stay operational.
* **New Updates:** You will no longer be able to push new versions of your own libraries or receive updates for third-party dependencies through the official trunk.
* **Security & Compatibility:** Since no new versions can be published, critical security patches or fixes for new iOS versions will eventually stop being delivered via CocoaPods.

## Migration & Next Steps
The CocoaPods team and major library maintainers like [Firebase](https://firebase.google.com/docs/ios/cocoapods-deprecation) recommend migrating to Swift Package Manager (SPM), which is Apple’s official and natively integrated solution for managing dependencies. 

**Timeline for 2026 Transition:**

* **September–October 2026:** Second round of notification emails to all contributors.
* **November 1–7, 2026:** A test run of the read-only mode to identify potential automation breaks.
* **December 2, 2026:** The Trunk becomes permanently read-only.

-----

# Impact on React Native Apps

For React Native projects, the 2026 CocoaPods read-only transition is a major shift because React Native has heavily relied on CocoaPods for iOS dependency management. However, the ecosystem is already pivoting to adapt.

## Immediate Impact on React Native Apps

* **No Immediate Breakage:** Your existing React Native apps using CocoaPods will continue to build and run after December 2026. The read-only state just means you cannot publish new Pods.
* **`pod install` Still Works:** You will still be able to install existing versions of libraries. The underlying infrastructure (specs repo, CDN) will remain online.
* **Update Freeze:** The real risk is that critical native modules (like `react-native-maps`, `@react-native-firebase/app`) will eventually stop receiving updates via CocoaPods. You won't get security patches or compatibility fixes for future iOS versions if you stay on CocoaPods. 

## The Path Forward: React Native & SPM

The React Native community and core team are actively moving towards Swift Package Manager (SPM) as the new standard. 

1. **React Native 0.76+ and the New Architecture:**
   With the rollout of the New Architecture (TurboModules and Fabric) becoming the default, library maintainers are rewriting their native code layers anyway. This provides the perfect window to drop CocoaPods support and adopt SPM entirely. Future versions of the React Native template will default to or strongly encourage SPM for native modules.

2. **Library Migration:**
   * Major libraries like [Firebase](https://firebase.google.com/docs/ios/cocoapods-deprecation) have already announced they will stop publishing to CocoaPods in October 2026 and require SPM for updates.
   * Popular community libraries (`react-native-maps`, `sentry-react-native`) are following suit, adding SPM support to their iOS installation instructions.

## Summary of the Shift

| Feature | Earlier (CocoaPods) | After SPM Transition |
|---|---|---|
| Tooling | Requires Ruby, Gem, and CocoaPods | Built directly into Xcode/Swift |
| Primary File | `Podfile` & `Podfile.lock` | `Package.swift` or Xcode Project settings |
| Install Step | `cd ios && pod install` | Automatic (on open) or CLI-handled via Autolinking |
| Project File | Must use `.xcworkspace` | Can go back to `.xcodeproj` |
| Maintenance | Managed by community volunteers | Managed by Apple natively |

---

(Note for Dev.to readers: Knowing the change is coming is only half the battle. If you want to see the exact code snippets for Method A (`spm_dependency`), learn how React Native handles Autolinking with SPM, discover how to handle legacy libraries that won't update, and follow a step-by-step migration guide for your bare React Native apps, **[read the full technical migration guide on my blog](#)**.)

---

## The Technical Deep Dive: Transitioning from CocoaPods to SPM

*(The following sections dive deep into the code and mechanics of the migration. Welcome to the technical guide!)*

The transition from CocoaPods to Swift Package Manager (SPM) changes how native iOS code is linked to your React Native app. In the "old" way, everything happened in a separate terminal process, whereas the "new" way is integrated directly into Xcode or handled automatically by the React Native CLI.

## How Autolinking Changes with SPM
React Native developers rarely wrote `pod '...'` manually because of **Autolinking**. The `@react-native-community/cli` historically scanned your `node_modules`, found `.podspec` files, and dynamically added them to your Podfile.

With the move to SPM, Autolinking is evolving. The CLI will now either generate Xcode project configurations, utilize local Swift packages, or inject dependencies into a generated `Package.swift` file—entirely bypassing Ruby and CocoaPods.

## The "Earlier" Way: CocoaPods (Manual & Terminal-Heavy)
In older versions of React Native, you had to manage a separate environment (Ruby) just to install iOS dependencies.
Example: Installing `react-native-device-info`

1. **Install via JS:** You’d run `npm install react-native-device-info`.
2. **Edit the Podfile (pre-autolinking):** You would navigate to the `ios/` folder and find a text file called `Podfile`.
   ```ruby
   # ios/Podfile
   target 'MyApp' do
     pod 'RNDeviceInfo', :path => '../node_modules/react-native-device-info'
   end
   ```
3. **Run Command:** You had to run `pod install` in your terminal.
4. **The Result:** CocoaPods created a `.xcworkspace` file. You could no longer use the standard `.xcodeproj` file to build your app; you were forced to use the workspace. 

## The "New" Way: SPM (Integrated & Native)
With the transition starting in React Native 0.75 and becoming standard in upcoming versions, the process is becoming frictionless.

### Method A: The `spm_dependency` Helper (Since v0.75)
React Native introduced a bridge so you can use SPM packages inside your existing Podfile setup without needing a `.podspec` for every single library. This is crucial for the transition phase.

Example in `ios/Podfile`:
```ruby
# New helper introduced for the transition
spm_dependency(
  'Atomics', 
  url: 'https://github.com/apple/swift-atomics.git', 
  requirement: { kind: 'upToNextMajorVersion', minimumVersion: '1.1.0' }
)
```

### Method B: Pure SPM (Future/Full Migration)
In a fully migrated or "Pure SPM" React Native app, the `ios/` folder becomes much cleaner:

1. **No Ruby/Gems:** You don't need to install CocoaPods or manage Ruby versions on your machine.
2. **No `pod install`:** You simply open the project in Xcode. Xcode automatically detects the dependencies, downloads them, and links them natively.
3. **Xcode GUI:** You can add packages by going to *File > Add Packages* and pasting a GitHub URL.
4. **Faster CI:** Build times are often 30–40% faster because the entire "install pods" phase is eliminated from your build pipelines.

## Edge Cases, Gotchas, and Unmaintained Libraries

The transition won't be completely smooth for everyone. Here are the primary issues you will face:

1. **Legacy / Abandoned Libraries:**
   What happens if an older library you depend on (e.g., an obscure Bluetooth module) is abandoned by its creator and never gets a `Package.swift` file?
   * *Solution:* You will likely need to fork the repository, add a basic `Package.swift` file yourself to expose its native code, and point your `package.json` to your GitHub fork instead of the npm registry.
2. **Mixing CocoaPods and SPM (Duplicate Symbols):**
   During the transition, you might have some libraries installed via CocoaPods and some via SPM. If an SPM package and a CocoaPod both depend on the *same* underlying C/C++ library, you will get "Duplicate Symbol" linker errors.
   * *Solution:* You must ensure strict dependency resolution, often forcing one package manager to defer to the other, or accelerating your migration so everything uses SPM.

## Action Plan for React Native Developers

* **Expo Users:** If you are using Expo (especially with [CNG - Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation/)), much of this complexity is abstracted away. Expo manages the native iOS project generation and is migrating its internal templates to be compatible with these changes. You largely just need to keep your Expo SDK version updated.
* **For Bare Workflow / CLI Users:**
    * **Audit Dependencies:** Check your `package.json` and native dependencies. Look for "Installation" sections in their docs—if they support SPM, they will list it.
    * **Plan for SPM:** Start experimenting with moving native dependencies to SPM where supported using the `spm_dependency` macro.
    * **Watch for React Native Updates:** Keep your React Native version up to date. The tooling to automate this migration will improve significantly in upcoming releases (0.76+ and beyond).