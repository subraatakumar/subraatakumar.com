---
title: "Day 6 : Repository Layer Comes to Life"
description: ""
date: "2026-02-24"
---

Today we bring the **Warehouse Clerk** into code.

Until now:

- Realm is encrypted.
- Database initializes safely.
- Core layer is stable.

But nothing can *use* the database yet.

Today we implement:

> Data access abstraction.
> 

Strictly aligned with architecture rules

And still within MVP boundaries

No UI logic explosion.

No service yet.

Just repository.

---

# 📘 Day 6 — Repository Layer Implementation

---

![https180days.subraatakumar.com.png](attachment:547679c6-0af4-4c34-bcd0-6b6e55289b87:https180days.subraatakumar.com.png)

---

## 6.1 Why Repository Now?

Encryption protects storage.

But modules should never call Realm directly .

If UI imports Realm:

- Business logic leaks.
- Schema changes break screens.
- Extraction becomes painful.

So today we implement:

```
modules/archive/archive.repository.ts
```

This is the only place allowed to talk to Realm.

---

## 6.2 What Repository Is Responsible For

Repository handles:

- Create entry
- Fetch entries
- Delete entry
- Update entry

It does **not**:

- Validate business rules
- Generate IDs
- Apply domain logic
- Coordinate multi-step workflows

Those belong to Service (Day 7).

---

## 6.3 Create Repository File

### 📁 `src/modules/archive/archive.repository.ts`

```tsx
import { getRealm } from '../../core/storage/realm';

export type EntryInput = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};

export class ArchiveRepository {

  create(entry: EntryInput) {
    const realm = getRealm();

    realm.write(() => {
      realm.create('Entry', entry);
    });
  }

  getAll() {
    const realm = getRealm();
    return realm.objects('Entry').sorted('createdAt', true);
  }

  delete(id: string) {
    const realm = getRealm();

    realm.write(() => {
      const entry = realm.objectForPrimaryKey('Entry', id);
      if (entry) {
        realm.delete(entry);
      }
    });
  }
}
```

Notice:

- Repository imports only `getRealm`
- No business validation
- No UI references
- No ID generation

Clean boundary.

---

## 6.4 Temporary Test (Still No Service)

For testing only (temporary):

Inside `App.tsx`, after initialization:

```tsx
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { initializeRealm } from './src/core/storage/realm';
import { ArchiveRepository } from './src/modules/archive/archive.repository';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  console.log('App component rendered');

  useEffect(() => {
    console.log('useEffect triggered');

    async function init() {
      console.log('Calling initializeRealm...');

      try {
        await initializeRealm();
        console.log('Encrypted Realm initialized successfully');

        // --- Day 6 Repository Test ---
        const repo = new ArchiveRepository();

        console.log('Creating test entry...');
        repo.create({
          id: uuidv4(),
          title: 'First Entry',
          content: 'Encrypted and stored locally.',
          createdAt: new Date(),
        });

        const entries = repo.getAll();
        console.log('Current Entries Count:', entries.length);

      } catch (error) {
        console.error('Realm initialization failed:', error);
      }
    }

    init();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Offline Life Archive</Text>
    </View>
  );
}
```

This confirms:

- Realm writes correctly.
- Encryption works with writes.
- Data retrieval works.

After confirming → remove direct repository usage from App.

Because UI must not depend on repository long term .

---

# 🔍 What You Should See in Console (First Run)

```
App component rendered
useEffect triggered
Calling initializeRealm...
Encrypted Realm initialized successfully
Creating test entry...
Current Entries Count: 1
```

If you reload app multiple times:

Entry count will increase:

```
Current Entries Count: 2
Current Entries Count: 3
```

That confirms:

✔ Repository writes work

✔ Encryption does not block writes

✔ Retrieval works

✔ Realm persists data

---

# ⚠ Important Reminder

This direct repository usage inside `App.tsx` is:

- Only for Day 6 testing.
- Not architecturally correct long-term.

Tomorrow (Day 7):

We introduce Service layer.

Then flow becomes:

```
UI → Service → Repository → Encrypted Realm
```

---

Now tell me:

Does entry count increase on each reload?

If yes → Repository layer stable. 🚀

---

## 6.5 What This Achieves

Now architecture looks like:

```
UI (temporary)
   ↓
Repository
   ↓
Encrypted Realm
```

Tomorrow:

```
UI
   ↓
Service
   ↓
Repository
   ↓
Encrypted Realm
```

We are building layers step-by-step.

---

## 6.6 What We Still Did NOT Do

- No service layer
- No validation logic
- No timeline screen
- No tags
- No search

We are respecting boundaries.

---

## 6.7 What This Phase Clarifies

Repository:

- Abstracts database access.
- Protects storage structure.
- Prevents cross-layer contamination.
- Makes future database swap possible.
- Keeps modules clean.

Encryption protects data.

Repository protects access.

Both are infrastructure decisions.

---

# 🎯 Day 6 Outcome

Encrypted storage + structured data access.

Now the system can persist entries safely.

Tomorrow (Day 7):

Service layer introduces business rules.

Warehouse manager enters the system.

---

If you’re ready, say:

> Repository layer stable.
> 

And we move to Day 7 — Service implementation with real validation logic.

---

## 🔧 Day 6 — Practical Exploration

If you’re building alongside this journey, here are a few things worth trying before moving to Day 7.

---

### 1️⃣ Verify Persistence Properly

Restart the app multiple times.

Observe:

- Does the entry count increase?
- Does data survive app restarts?
- Does it survive a Metro reload?

Now try:

- Kill the app completely.
- Reopen it.

You should still see the existing entries count increase with every new run.

If data disappears, something is wrong in your Realm setup.

---

### 2️⃣ Break the Encryption Intentionally

Go to `realm.ts`.

Temporarily replace:

```tsx
encryptionKey: key
```

With:

```tsx
encryptionKey: generateEncryptionKey()
```

Now restart the app.

It should fail to open the database.

That failure is good.

It proves encryption is real.

Revert the change after testing.

---

### 3️⃣ Add a Manual Delete Test

Inside `App.tsx`, after fetching entries:

- Pick the first entry.
- Call `repo.delete(id)`.
- Log the count again.

Observe how repository encapsulates database operations cleanly.

You’ll start feeling the value of abstraction.

---

### 4️⃣ Try Calling Realm Directly (Then Undo It)

Inside `App.tsx`, import Realm directly and create an entry.

Notice:

- How messy it feels.
- How you’re bypassing architectural rules .
- How UI now knows too much about storage.

Delete that code immediately after observing.

This exercise makes boundaries real.

---

### 5️⃣ Add a Console Log Inside Repository

Inside `archive.repository.ts`, add:

```tsx
console.log('[Repository] Creating entry');
```

Now watch the flow in logs.

You’ll begin to see:

UI → Repository → Realm

Tomorrow:

UI → Service → Repository → Realm

Layering becomes visible.

---

## 🧠 What This Phase Is Really About

This isn’t about CRUD.

It’s about discipline.

The repository is the warehouse clerk.

It doesn’t decide business rules.

It doesn’t validate input.

It only handles structured data access.

And that separation is what protects the system long-term .

---

When you’re done exploring, say:

> Repository layer stable.
> 

Then Day 7 begins.

Service layer enters.

Warehouse manager takes control. 🚀

---

## 📚 Further Reading & References (Day 6)

If you’re exploring deeper or want to understand the foundations behind today’s implementation, these are useful official resources:

---

### 🔐 Realm Database (React Native)

Official Realm React Native Documentation:

https://www.mongodb.com/docs/realm/sdk/react-native/

Useful sections to review:

- Opening a Realm
- Writing transactions
- Querying data
- Sorting results
- Primary keys

Understanding Realm objects and live results will help when we build the timeline screen later.

---

### 🧱 Repository Pattern (Conceptual Understanding)

A clear conceptual explanation:

https://martinfowler.com/eaaCatalog/repository.html

This explains why we isolate data access behind a repository layer and how it prevents storage leakage into business logic.

---

### 🆔 UUID in JavaScript

If you’re using UUID for entry IDs:

https://www.npmjs.com/package/uuid

Understand:

- Why UUID v4 is random
- Why IDs should be generated in service layer (not repository)
- Difference between identity and encryption

---

### 🔒 React Native Secure Storage (Keychain / Keystore)

We used secure storage for encryption key management:

https://github.com/oblador/react-native-keychain

Important sections:

- setGenericPassword
- getGenericPassword
- Android vs iOS differences

---

### 🧠 Clean Architecture (High-Level Overview)

If you want a broader understanding of layering philosophy:

https://blog.cleancoder.com/

This helps connect:

- Repository
- Service
- UI
- Infrastructure

to larger system design thinking.

---

## 📌 Important Context

Everything we’re building aligns with:

- Product boundaries
- Architectural discipline

We are not building a CRUD demo.

We are building a privacy-first system with intentional structure.

---