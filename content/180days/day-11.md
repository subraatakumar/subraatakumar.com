---
title: "Day 11: AI-Assisted Translation — From Web to Native"
description: "We take the AI-generated HTML/CSS from Day 8 and, using GitHub Copilot as our pairing partner, translate it into a beautiful, functional React Native component. A practical lesson in prompt-driven development."
date: "2026-03-02"
image: "/images/180days/day-11.png"
slug: "day-11-ai-assisted-translation-from-web-to-native"
tags:
  - react-native
  - stylesheet
  - ai-assisted-development
  - github-copilot
  - prompt-engineering
excerpt: "Using GitHub Copilot with targeted prompts, we translate AI-generated web designs (HTML/CSS) into a live React Native component, bridging the gap between web-centric design tools and native reality."
author: "Subrata Kumar Das"
updated: "2026-03-02"
draft: false
readingTime: "7 min"
---

**Previously on the journey:**
- The application's backend is solid: Service → Repository → Encrypted Realm.
- The UI vision is clear: On Day 8, we used an AI design tool ("Stitch") to generate beautiful, minimal mockups and, crucially, a set of corresponding HTML and CSS files.

The weekend is over. It’s Monday. The architectural foundation is set, and the design blueprint is in hand. Today, we build the bridge between them. We will bring the main **Archive Timeline** screen to life.

But we won’t do it alone. In the spirit of this "AI era" journey, we’ll use another AI tool, **GitHub Copilot**, as our intelligent pairing partner to translate the web design into native reality.

---

### The Challenge: A Tale of Two Worlds

The AI design tool gave us web code. It thinks in terms of the **Document Object Model (DOM)**: `<div>`s, `<p>`s, and CSS properties like `box-shadow`.

React Native, however, builds for a different world. It commands **native UI components**: `<View>`, `<Text>`, and uses a JavaScript-based styling system (`StyleSheet`) that doesn't understand CSS syntax directly.

| Web (From AI Tool) | React Native (Our Goal) |
| :--- | :--- |
| `<div>` | `<View>` |
| `<p>`, `<h2>` | `<Text>` |
| `class="card"` | `style={styles.card}` |
| `box-shadow: ...` | `shadowColor, shadowOffset, elevation...` |

We can't just copy-paste. We must **translate**. And for this translation work, a tool like GitHub Copilot is not a shortcut—it’s a force multiplier.

---

### The Process: Prompt-Driven Translation with GitHub Copilot

Our goal is to create `src/screens/ArchiveTimelineScreen.tsx`. We'll do this by giving Copilot clear instructions, context, and code to work with.

#### Step 1: Create the Component and Provide Context

First, create the file. To give Copilot the best possible context, we'll paste the HTML and CSS from our AI design tool directly into the file as comments.

**File: `src/screens/ArchiveTimelineScreen.tsx`**
```typescriptreact
// The AI design tool gave us this HTML structure for an entry card:
/*
<div class="entry-card">
  <p class="entry-date">2026-03-01</p>
  <h2 class="entry-title">First day of spring</h2>
  <p class="entry-preview">Walked through the park and felt the sun.</p>
  <div class="tags-container">
    <span class="tag">nature</span>
    <span class="tag">walk</span>
  </div>
</div>
*/

// And it gave us this CSS:
/*
.entry-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  border: 1px solid #dee2e6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}
.entry-date {
  font-size: 12px;
  color: #868e96;
  margin-bottom: 5px;
}
... (and so on for other classes)
*/

// Now, let's start building.
```

#### Step 2: Prompting for JSX Structure

With the context in place, we can write a prompt (as a comment) asking Copilot to generate the JSX.

```typescriptreact
// PROMPT for Copilot:
// Based on the HTML comment above, create a stateless React Native component named EntryCard
// that takes `item` as a prop. Use <View> and <Text> components.

// --- After this line, Copilot will suggest the following code ---
```

Copilot will generate a functional component that looks remarkably close to what we need, correctly mapping divs and paragraphs to Views and Texts.

#### Step 3: Prompting for Style Translation

This is the magic step. We ask Copilot to perform the translation from CSS to a StyleSheet object.

```typescriptreact
// PROMPT for Copilot:
// Now, convert the CSS comment block above into a React Native StyleSheet object named 'styles'.
// Convert properties to camelCase.
// For the 'box-shadow', create a cross-platform solution using 'shadow' properties for iOS
// and 'elevation' for Android.

// --- Copilot's turn ---
```

By providing a specific instruction for `box-shadow`, we guide the AI to handle the most complex part of the translation correctly. This is the difference between a generic prompt and an expert one.

#### Step 4: Assemble, Review, and Refine

Copilot isn't perfect; it's a "co-pilot." It provides a high-quality draft. Our job as the lead pilot is to review, refine, and integrate. We connect our `useArchiveEntries` hook (to respect our architecture), wire up the `FlatList`, and ensure the styles generated by Copilot align perfectly with our desired aesthetic.

---

### The Final Code (AI-Assisted)

After assembling the pieces and performing minor touch-ups, our final component looks like this:

**File: `src/screens/ArchiveTimelineScreen.tsx`**
```typescriptreact
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useArchiveEntries } from '../hooks/useArchiveEntries'; // Respecting our architecture

/**
 * A card component to display a single archive entry.
 * Its structure was first drafted by GitHub Copilot based on an HTML comment.
 */
const EntryCard = ({ item }) => (
  <View style={styles.entryCard}>
    <Text style={styles.entryDate}>{item.date}</Text>
    <Text style={styles.entryTitle}>{item.title}</Text>
    <Text style={styles.entryPreview}>{item.preview}</Text>
    <View style={styles.tagsContainer}>
      {item.tags.map(tag => <Text key={tag} style={styles.tag}>{tag}</Text>)}
    </View>
  </View>
);

const ArchiveTimelineScreen = () => {
  const { entries } = useArchiveEntries();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Archive</Text>

      <View style={styles.searchBar}>
        <Text style={styles.searchText}>Search...</Text>
      </View>

      <FlatList
        data={entries}
        renderItem={({ item }) => <EntryCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

/**
 * These styles were translated from CSS by GitHub Copilot, with manual review
 * and refinement, especially for the cross-platform shadow properties.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Off-white
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  searchBar: {
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchText: {
    color: '#868e96',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Ensure space for the FAB
  },
  entryCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    // Shadow properties refined from Copilot's suggestion
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowOpacity: 0.08, // iOS
    shadowRadius: 4, // iOS
    elevation: 3, // Android
  },
  entryDate: {
    fontSize: 12,
    color: '#868e96',
    marginBottom: 5,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#212529',
  },
  entryPreview: {
    fontSize: 14,
    color: '#495057',
    lineHeight: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 12,
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#e9ecef',
    color: '#495057',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    overflow: 'hidden',
  },
  fab: {
    position: 'absolute',
    right: 25,
    bottom: 40,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ced4da',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  fabText: {
    fontSize: 30,
    color: '#495057',
    fontWeight: '300',
  },
});

export default ArchiveTimelineScreen;
```

---

### 🎯 Day 11 Outcome

Today, we successfully transformed a static web design into a live, styled React Native component. We didn't just write code; we directed an AI to do the heavy lifting of translation for us.

**The key takeaway is a new development skill: Prompt Engineering.** Our value was not in typing `backgroundColor` a dozen times, but in crafting a precise prompt that instructed an AI to do it correctly, and then using our expertise to validate and refine the result. We acted as architects and quality assurance, not just as bricklayers.

**Next up:** The screen looks beautiful but is static. On Day 12, we will bring it to life by implementing navigation, making the floating action button open the `Create New Entry` screen.

---

### 🔧 Your Turn: Practical Exercises

1.  **Translate Another Component:** Take the HTML/CSS for the "New Entry" screen from the Day 8 files and use the same prompt-driven process to create a new `CreateEntryScreen.tsx` component.
2.  **Implement the Empty State:** Our current code assumes there are always entries. Modify `ArchiveTimelineScreen.tsx` to show the "empty state" design from Day 8 when the `entries` array is empty. (Hint: Use a conditional render: `entries.length === 0 ? <EmptyStateComponent /> : <FlatList ... />`).
3.  **Experiment with Prompts:** Go back to the style translation prompt. Change it to be less specific (e.g., remove the instruction about `box-shadow`). How does Copilot's output change? Now, try being more specific (e.g., "Use a larger shadow radius for a softer feel"). Observe the difference.

### 📚 Further Reading

-   **React Native Styling:** [StyleSheet API Documentation](https://reactnative.dev/docs/stylesheet)
-   **Styling Cheatsheet:** [React Native vs. Web CSS](https://github.com/vhpoet/react-native-styling-cheat-sheet) - An excellent resource for manual translations.
-   **GitHub Copilot Best Practices:** [Getting the most out of GitHub Copilot](https://github.blog/2023-06-20-getting-the-most-out-of-github-copilot/)
-   **View Component and Shadows:** [React Native View Style Props](https://reactnative.dev/docs/view-style-props)
