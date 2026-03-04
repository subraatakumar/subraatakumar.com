# The 5-Layer Architecture Model

We are using a strict layered model:

```
App Layer
Module Layer
Core Layer
Shared Layer
Data Layer
```

Let’s break that down.

### App Layer

Navigation and global orchestration only.

### Module Layer

Feature-level business logic (archive, tagging, sharing, settings).

### Core Layer

Infrastructure:

- Encryption
- Secure storage
- Filesystem
- Config
- Devtools

### Shared Layer

Reusable, presentational UI components only.

### Data Layer

Encrypted Realm database.

Each layer has boundaries.

No cross-contamination.

If layers bleed into each other, refactoring becomes inevitable.

---

# Folder Structure (Production-Ready From Day One)

We created a structure that supports growth:

```
src/
  app/
  core/
  modules/
  shared/
```

This is not over-engineering.

This is prevention.

Most MVPs collapse because everything lives inside `screens/`.

We are separating:

- Infrastructure from features
- Business logic from UI
- Storage from services
- Reusable systems from product modules

---

# Strict Architectural Rules (Non-Negotiable)

From today onward:

- No business logic inside UI components.
- No direct Realm calls inside screens.
- Repository layer handles database access.
- Services handle business logic.
- Encryption lives only inside `core/security`.
- File handling lives only inside `core/fileSystem`.
- Modules never depend directly on other modules.
- No hardcoded theme values in UI.

These rules are boring.

And that’s the point.

Boring architecture scales.