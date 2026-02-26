---
title: "Day 7 : Service Layer Introduced"
description: "Session 1 of a 180-day mentoring journey: introducing the Service Layer to isolate business logic, validation, and ID generation — keeping UI and repository clean."
date: "2026-02-26"
image: "/images/180days/day-7.png"
slug: "day-7-service-layer"
tags:
  - service-layer
  - repository
  - architecture
  - uuid
  - validation
excerpt: "Session 1 of a 180-day mentoring journey: Service layer added to isolate business rules and centralize ID generation."
author: "Subrata Kumar Das"
updated: "2026-02-26"
draft: false
readingTime: "4 min"
---

This is Session 1 of a 180-day mentoring journey building a real mobile app destined for app stores.

Day 4 → Foundation

Day 5 → Encryption

Day 6 → Repository (Warehouse Clerk)

Now…

# Today we introduce the **Service Layer**.

Until yesterday, the system looked like this:

```
UI (temporary)
   ↓
Repository
   ↓
Encrypted Realm
```

Clean. Stable. Structured.

But incomplete.

Because something was missing.

---

# 🏭 The Problem Without Service Layer

Right now:

- UI generates IDs
- UI decides what is valid
- UI calls repository directly
- UI controls business flow

That violates our architectural rules :

> No business logic inside UI components.
> 
> 
> Services contain business logic.
> 

So today, we fix that.

---

# 🧠 What Service Layer Does

If Repository is the **warehouse clerk**,

Service is the **warehouse manager**.

The manager:

- Decides if request is valid
- Generates ID
- Applies business rules
- Coordinates multiple actions
- Calls repository

Repository only executes.

Service decides.

---

# 📁 Day 7 Implementation

### `src/modules/archive/archive.service.ts`

```tsx
import { ArchiveRepository } from './archive.repository';
import { v4 as uuidv4 } from 'uuid';

export type CreateEntryInput = {
  title: string;
  content: string;
};

export class ArchiveService {
  private repository = new ArchiveRepository();

  createEntry(input: CreateEntryInput) {
    if (!input.title.trim()) {
      throw new Error('Title cannot be empty');
    }

    const entry = {
      id: uuidv4(),
      title: input.title.trim(),
      content: input.content.trim(),
      createdAt: new Date(),
    };

    this.repository.create(entry);
  }

  getEntries() {
    return this.repository.getAll();
  }

  deleteEntry(id: string) {
    this.repository.delete(id);
  }
}
```

---

# 🔄 Updated Flow (Correct Architecture)

```
UI
   ↓
Service Layer ✅
   ↓
Repository Layer
   ↓
Encrypted Realm
```

Now:

- UI doesn’t know about UUID
- UI doesn’t validate
- UI doesn’t access Realm
- UI only talks to Service

This is clean layering.

---

# 🧱 Why This Matters

Because Offline Life Archive is not:

- A demo CRUD app
- A tutorial clone
- A messy MVP

It is:

> “Your private digital life. Stored locally. Owned by you.”
> 

And ownership requires disciplined architecture.

---

# 🧪 Day 7 Test

Inside `App.tsx` (temporary test):

```tsx
const service = new ArchiveService();

service.createEntry({
  title: 'Service Layer Entry',
  content: 'Now business logic is isolated.',
});

console.log(service.getEntries().length);
```

Now UI speaks only to Service.

Repository is no longer visible from UI.

Boundary respected.

---

# 🎯 What We Achieved Today

✔ Business logic isolated

✔ ID generation centralized

✔ Validation introduced

✔ Repository shielded

✔ Layered architecture completed

Core → Repository → Service → UI

Now the structure matches our blueprint .

---

Tomorrow:

We stop testing in `App.tsx`.

We build the first real feature screen using proper hooks.

Warehouse is fully operational.

If you’re ready, say:

> Warehouse manager stable.
> 

And we move forward. 🚀

---

## 🔧 Day 7 — Practical Exploration (Service Layer)

If you’re building along, don’t just copy the service file.

Stress it. Break it. Observe it.

That’s how layering becomes instinct.

---

### 1️⃣ Try Creating an Entry with Empty Title

In your temporary test:

```tsx
service.createEntry({
  title: '',
  content: 'This should fail',
});
```

Expected:

It should throw:

```
Title cannot be empty
```

Now ask yourself:

- Where did validation happen?
- Did Repository handle it?
- Did UI know about validation logic?

Correct answer:

Service handled it.

Repository remained clean.

That boundary is intentional.

---

### 2️⃣ Remove Validation Temporarily

Comment out:

```tsx
if (!input.title.trim()) {
  throw new Error('Title cannot be empty');
}
```

Now try creating empty title again.

It will succeed.

That proves:

- Repository does not enforce business rules.
- Service owns business rules.

Revert the change after observing.

---

### 3️⃣ Move UUID to Repository (Then Undo It)

Temporarily shift ID generation into repository.

Observe how it feels:

- Repository now decides identity.
- Business logic leaks into data layer.
- Responsibility becomes unclear.

Undo it.

Identity belongs to service.

Repository should not “decide.”

---

### 4️⃣ Log the Flow

Add temporary logs:

In `archive.service.ts`:

```tsx
console.log('[Service] Validating & preparing entry');
```

In `archive.repository.ts`:

```tsx
console.log('[Repository] Writing to database');
```

Now observe console:

```
[Service] ...
[Repository] ...
```

You can visually see the flow:

UI → Service → Repository → Realm

Layering becomes tangible.

---

### 5️⃣ Try Calling Repository Directly from UI (Then Delete It)

Temporarily import repository inside `App.tsx`.

Call:

```tsx
repo.create(...)
```

Now compare:

- Which feels architecturally correct?
- Which respects blueprint rules ?
- Which scales?

Delete direct repository usage.

That discomfort is learning.

---

### 6️⃣ Add a New Business Rule

Inside service:

Add rule:

- Title must be at least 3 characters.

Observe:

- No change required in repository.
- No schema change.
- UI remains untouched.

This is the power of separation.

---

### 🧠 What Day 7 Really Teaches

Repository protects access.

Service protects logic.

Encryption protects data.

Each layer has one responsibility.

And that discipline is what protects the system long-term .

---

## 📚 Further Reading & References (Day 7 — Service Layer)

If you're exploring deeper into today’s implementation, these references strengthen the foundation behind the Service Layer decision.

---

### 🧠 Service Layer Pattern (Conceptual Foundation)

Martin Fowler — Service Layer Pattern:

https://martinfowler.com/eaaCatalog/serviceLayer.html

This explains:

- Why business logic should not live inside controllers (or UI)
- How services coordinate workflows
- Why separation prevents chaos as systems grow

Today’s implementation directly aligns with this idea.

---

### 🧱 Clean Architecture (Layer Responsibility)

Robert C. Martin (Uncle Bob) — Clean Architecture Concepts:

https://blog.cleancoder.com/

Focus on:

- Separation of concerns
- Dependency direction
- Keeping business rules independent of frameworks

Our layering model reflects this philosophy .

---

### 🏗 Repository vs Service (Clear Responsibility Difference)

A helpful explanation of responsibilities:

https://enterprisecraftsmanship.com/posts/service-layer-vs-repository-pattern/

Understand:

- Repository = data access abstraction
- Service = business rule orchestration
- Why mixing them creates long-term instability

---

### 🆔 UUID Best Practices

Official UUID package documentation:

https://www.npmjs.com/package/uuid

Why this matters:

- ID generation belongs to business layer
- Identity is not a storage concern
- Separation of identity from persistence keeps system flexible

---

### 🔐 Domain-Driven Design (Optional Deep Dive)

If you want to understand where Service Layer fits in larger systems:

https://martinfowler.com/bliki/DomainDrivenDesign.html

Not required for MVP.

But useful if you want to see how today’s decision scales to enterprise systems.

---

### 📌 Context Reminder

Offline Life Archive is:

> “Your private digital life. Stored locally. Owned by you.”
> 

Service Layer ensures:

- Business rules stay isolated
- UI stays calm and replaceable
- Repository remains boring and predictable
- Architecture remains extraction-ready

---

Day 7 is where the system stopped being “just storage”

and started becoming a structured application.

If you’re ready:

Day 8 → Real Screen + Custom Hooks (No more temporary App.tsx tests). 🚀