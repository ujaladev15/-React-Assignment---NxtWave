# React Dynamic List App

A React application that fetches data from a public API and dynamically renders multiple list components. Users can view two pre-populated lists and create additional editable lists on the fly.

## 🚀 Features

### ✅ Initial API-based Lists
- The app fetches 20 posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts).
- Displays the first 10 post titles in **List 1** and the next 10 in **List 2**.
- These lists are **non-editable** and are only shown for display.

### ➕ Create New List
- A **"Create New List"** button is centered on the screen.
- Clicking the button adds a new list (e.g., "List 3", "List 4", etc.) with:
  - A text input field.
  - An **"Add Item"** button to append items to the list.

### ✏️ Editable New List
- Only the **latest created list** is editable.
- Previous custom lists become **read-only** once a new list is added.
- You can add multiple items dynamically to the currently editable list.

### 🎨 Styling
- Lists have a light blue background with padding and rounded borders.
- The "Create New List" button is styled in **blue** and centered.
- Input fields and buttons are styled for consistency and clarity.

---

## 🛠️ Tech Stack

- **React** (Functional Components with Hooks)
- **Fetch API** for retrieving public data

---

Link: https://www.loom.com/share/e4d57f802d4046a8b76c220809ee509b?sid=66618504-d3ff-4cb7-ad4b-564386a396e9
