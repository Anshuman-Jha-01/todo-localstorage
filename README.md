# Todo List Application

The **Todo List Application** is a web-based task management tool that allows users to organize their tasks into predefined categories. Tasks can be added, viewed, and removed dynamically, with all data being persistently stored using the browser's localStorage. The application also features a clean and responsive design, ensuring an engaging user experience.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Project Structure](#project-structure)

---

## Project Overview

This application provides users with a straightforward way to manage their daily tasks. Users can:
- Add tasks to categories like Personal, Work, Shopping, Coding, and Health.
- View tasks dynamically organized under each category.
- Remove tasks with a single click.
- Leverage browser localStorage to persist tasks across sessions.

---

## Features

- **Category-based Task Management:**
  - Users can add tasks to predefined categories.
  - Each category is displayed in a dropdown for better organization.
- **Dynamic Updates:**
  - Real-time updates to the task list upon addition or deletion.
- **Persistent Storage:**
  - Tasks are saved using the browser's localStorage and retrieved upon reload.
- **Responsive Design:**
  - Optimized for various screen sizes with intuitive styles.
- **Interactive Elements:**
  - Hover effects for buttons and dropdown menus for improved usability.

---

## Technologies Used

- **Frontend:**
  - HTML5 for structure.
  - CSS3 for styling and responsive design.
- **JavaScript:**
  - DOM manipulation for interactivity.
  - localStorage for persistent task storage.

---

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Anshuman-Jha-01/todo-localstorage.git
   cd todo-localstorage

2. Open the Project:
    - Open ```index.html``` in your browser to run the application.

---

## Usage
1. **Adding Tasks:**
    - Enter a task in the input field.
    - Select a category from the dropdown.
    - Click the "Add Task" button to add the task to the selected category.

2. **Viewing Tasks:**
    - Click on a category's button to view the tasks in that category.

3. **Removing Tasks:**
    - Click on a task to remove it from the list and localStorage.

---

## Components
1. ```index.html:```
    - Contains the layout for the task input, category selection, and task lists.

2. ```style.css:```
    - Provides responsive and visually appealing styles.
    - Includes hover effects for buttons, dropdowns, and task items.

3. ```app.js:```
    - Handles task addition, deletion, and category-wise organization.
    - Utilizes localStorage to persist tasks across sessions.

---

## Project Structure

```bash
    /src
    ├── app.js               # Main JavaScript file for functionality
    ├── index.html           # HTML file containing the app structure
    └──  style.css           # CSS file for styling the application
  ```


