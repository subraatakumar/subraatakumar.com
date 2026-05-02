---
title: "The CocoaPods Sunset: What Dec 2, 2026 Means for Your React Native App"
description: ""
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
readingTime: "8 min"
excerpt: ""
---

## Introduction to CocoaPods
Before Swift Package Manager (SPM) became the native standard, the iOS world belonged to CocoaPods.

## What is CocoaPods?
CocoaPods is a dependency manager for Swift and Objective-C Cocoa projects. In simple terms, it’s a tool that automates the process of adding, updating, and managing third-party libraries (like Firebase, Alamofire, or Lottie) in your Xcode projects. Instead of manually dragging source files into your project and worrying about build settings, you define what you need in a single text file called a Podfile.

## Who Created and Manages It?

* Founders: It was started by Eloy Durán and Fabio Pelosin.
* Management: The project is maintained by a core team of volunteers, including developers like Samuel Giddins, Danielle Lancashire, and others, with contributions from the broader open-source community.
* Governance: While it is an open-source project hosted on [GitHub](https://github.com/cocoapods/cocoapods), it operates through a centralized registry called the CocoaPods Trunk.

## When Did It Start?

* Release Date: Development began in August 2011, and the first public release was on September 1, 2011.
* Inspiration: It was heavily inspired by the Ruby community's dependency managers, RubyGems and Bundler. This is why CocoaPods itself is built with Ruby and installed as a "gem".

## Where and How is it Used?

* Platforms: It supports almost the entire Apple ecosystem: iOS, macOS, watchOS, and tvOS.
* The Workflow:
1. Create a Podfile in your project directory.
   2. List your dependencies (e.g., pod 'Alamofire').
   3. Run pod install in your terminal.
   4. CocoaPods creates an .xcworkspace file, which you must use instead of the standard .xcodeproj to ensure all libraries are linked correctly.

## Why was it a Game-Changer?
Before CocoaPods, integrating a library was a manual "nightmare" of copying files, managing header search paths, and manually linking frameworks. CocoaPods centralized this into a searchable hub (cocoapods.org) that now hosts over 100,000 libraries and is used in over 3 million apps.
Do you want me to help you draft the next section of the blog, focusing on why the transition to a read-only state is happening?

-----

# The Sunset Era
Yes, CocoaPods is scheduled to move to a permanent read-only state on December 2, 2026. 
After this date, the [CocoaPods Trunk](https://guides.cocoapods.org/making/getting-setup-with-trunk.html) (the central registry) will no longer accept new Podspecs or updates to existing ones.

## Key Impact on Developers

* Existing Projects: Your current apps will not break immediately. Existing versions of libraries will remain accessible for installation as long as [GitHub](https://github.com/) and [jsDelivr](https://www.jsdelivr.com/) stay operational.
* New Updates: You will no longer be able to push new versions of your own libraries or receive updates for third-party dependencies through the official trunk.
* Security & Compatibility: Since no new versions can be published, critical security patches or fixes for new iOS versions will eventually stop being delivered via CocoaPods. [1, 2, 4, 5, 6, 7] 

## Migration & Next Steps
The CocoaPods team and major library maintainers like [Firebase](https://firebase.google.com/docs/ios/cocoapods-deprecation) recommend migrating to Swift Package Manager (SPM), which is Apple’s official and natively integrated solution for managing dependencies. 

Timeline for 2026 Transition:

* September–October 2026: Second round of notification emails to all contributors.
* November 1–7, 2026: A test run of the read-only mode to identify potential automation breaks.
* December 2, 2026: The Trunk becomes permanently read-only. [1, 4, 8, 9] 

-----

# Impacct of React Native Apps

For React Native projects, the 2026 CocoaPods read-only transition is a major shift because React Native has heavily relied on CocoaPods for iOS dependency management. However, the ecosystem is already pivoting to adapt. [1, 2, 3] 
## Immediate Impact on React Native Apps

* No Immediate Breakage: Your existing React Native apps using CocoaPods will continue to build and run after December 2026. The read-only state just means you cannot publish new Pods.
* pod install Still Works: You will still be able to install existing versions of libraries. The underlying infrastructure (specs repo, CDN) will remain online.
* Update Freeze: The real risk is that critical native modules (like react-native-maps, react-native-firebase) will eventually stop receiving updates via CocoaPods. You won't get security patches or compatibility fixes for future iOS versions if you stay on CocoaPods. 

## The Path Forward: React Native & SPM
The React Native community and core team are actively moving towards Swift Package Manager (SPM) as the new standard. 

   1. React Native is adopting SPM:
   * Recent versions of React Native have started introducing support for SPM.
      * Future versions (likely becoming standard well before Dec 2026) will default to or strongly encourage SPM for native modules.
   2. Library Migration:
   * Major libraries like [Firebase](https://firebase.google.com/docs/ios/cocoapods-deprecation) have already announced they will stop publishing to CocoaPods in October 2026 and require SPM for updates.
      * Popular community libraries (react-native-maps, sentry-react-native) are following suit, adding SPM support to their iOS installation instructions.

# transition from CocoaPods to Swift Package Manager (SPM)

The transition from CocoaPods to Swift Package Manager (SPM) changes how native iOS code is linked to your React Native app. In the "old" way, everything happened in a separate terminal process, whereas the "new" way is integrated directly into Xcode or handled automatically by the React Native CLI.

## The "Earlier" Way: CocoaPods (Manual & Terminal-Heavy)
In older versions of React Native, you had to manage a separate environment (Ruby) just to install iOS dependencies.
Example: Installing react-native-device-info

   1. Install via JS: You’d run npm install react-native-device-info.
   2. Edit the Podfile: You would navigate to the ios/ folder and find a text file called Podfile.
   
   # ios/Podfile
   target 'MyApp' do
     pod 'RNDeviceInfo', :path => '../node_modules/react-native-device-info'end
   
   3. Run Command: You had to run pod install in your terminal.
   4. The Result: CocoaPods created a .xcworkspace file. You could no longer use the standard .xcodeproj file to build your app; you were forced to use the workspace. [3, 4] 

------------------------------
## The "New" Way: SPM (Integrated & Native)
With the transition starting in React Native 0.75 and becoming standard in versions like 0.84+, the process is becoming "frictionless". [2, 5, 6] 
## Method A: The spm_dependency Helper (Since v0.75) [2] 
React Native introduced a bridge so you can use SPM packages inside your existing Podfile setup without needing a .podspec for every single library. [2, 7] 
Example in ios/Podfile:

# New helper introduced for the transition
spm_dependency(
  'Atomics', 
  url: 'https://github.com', 
  requirement: { kind: 'upToNextMajorVersion', minimumVersion: '1.1.0' }
)

## Method B: Pure SPM (Future/Full Migration)
In a fully migrated or "Pure SPM" React Native app, the ios/ folder becomes much cleaner:

   1. No Ruby/Gems: You don't need to install CocoaPods or manage Ruby versions on your machine.
   2. No pod install: You simply open the project in Xcode. Xcode automatically detects the dependencies, downloads them, and links them.
   3. Xcode GUI: You can add packages by going to File > Add Packages and pasting a GitHub URL.
   4. Faster CI: Build times are often 30–40% faster because the entire "install pods" step is eliminated from your build pipelines. [1, 4, 6, 8] 

## Summary of the Shift

| Feature [3, 4, 6, 9, 10] | Earlier (CocoaPods) | After SPM Transition |
|---|---|---|
| Tooling | Requires Ruby, Gem, and CocoaPods | Built directly into Xcode/Swift |
| Primary File | Podfile & Podfile.lock | Package.swift or Xcode Project settings |
| Install Step | cd ios && pod install | Automatic (on open) or CLI-handled |
| Project File | Must use .xcworkspace | Can go back to .xcodeproj |
| Maintenance | Managed by community | Managed by Apple |


## Action Plan for React Native Developers

* Expo Users: If you are using Expo (especially with [CNG - Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation/)), much of this complexity is abstracted away. Expo manages the native iOS project generation and is migrating its internal templates to be compatible with these changes.
* For Bare Workflow / CLI Users:
    * Audit Dependencies: Check your package.json and native dependencies. Look for "Installation" sections in their docs—if they support SPM, they will list it.
    * Plan for SPM: Start experimenting with moving native dependencies to SPM where supported. You can often mix CocoaPods and SPM in the same Xcode project during the transition, though it can be tricky.
    * Watch for React Native Updates: Keep your React Native version up to date. The tooling to automate this migration will improve significantly in upcoming releases (0.76+ and beyond).