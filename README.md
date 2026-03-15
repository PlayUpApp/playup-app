# PlayUp: Your Sports Matchmaking Hub ⚽🏀🏐

Welcome to the official **PlayUp** repository! This is a cross-platform mobile application designed to transform amateur sports culture, allowing users to connect, organize, and play matches efficiently and professionally.

> **🚧 DEVELOPMENT STATUS: EARLY STAGE / ACTIVE ARCHITECTURE**
> *This project is currently in its initial development phase. The core architecture (Expo Router + TypeScript) and secure authentication flow (Firebase Auth) have been successfully established. We are currently planning the scalable database schema before resuming active feature sprints.*

---

## 🚀 Overview
**PlayUp** is a comprehensive solution developed with **Expo (React Native)** and **Firebase**. Our platform solves critical issues such as player shortages, logistical disorganization, and the difficulty of finding opponents in urban and peri-urban environments.

The current architecture is centered around football (soccer), but it is designed to be highly scalable to multiple disciplines like volleyball and basketball, integrating an active community through user profiles and social messaging.

---

## ✨ Brand Identity and Value
We adhere to strict brand guidelines to ensure a consistent and reliable user experience:

* **Mission**: Facilitate the organization of sports events by connecting people and teams so they can play without depending on a full roster.
* **Target Audience**: Active individuals aged 16 to 40 in urban areas.
* **Values**: Connection, Accessibility, Trust, Activation, and Inclusion.
* **Voice and Tone**: Formal, clear, direct, respectful, motivating, and professional.

---

## 🛠️ Tech Stack & Design

* **Framework:** Expo (React Native) with Expo Router (File-based routing).
* **Language:** TypeScript.
* **Backend & Auth:** Firebase (Firebase Auth v10+).

### 🎨 Visual Design
All components adhere to the following visual guidelines:
* **Impact Typography (Poppins):** Used for titles and high-level hierarchy.
* **Reading Typography (Inter):** Applied to body text and descriptions.
* **Color Palette**: 
    * **Primary**: Violets and electric blues (#170055, #3E00FF, #AE00FB).
    * **Secondary**: Cyan and pastel tones for details (#7900FF, #548CFF, #93FFD8, #CFFFDC).

---

## 🔥 Authentication & Firebase
Currently, the **Firebase Auth** module is fully implemented and functional.

### Available User Flows:
1.  **Registration:** New account creation via email and password.
2.  **Login:** Secure access with credential validation.
3.  **Password Recovery:** Automated flow where the system sends a real reset email to the user.

> **📌 SESSION PERSISTENCE NOTE**
> The app manages session persistence natively through the Firebase SDK, ensuring the user state remains active across app restarts.

---

## 📂 Project Structure

| Directory / File | Function |
| :--- | :--- |
| `app/` | Contains screens and navigation logic (File-based routing). |
| `assets/images/` | Stores graphic and visual brand assets. |
| `components/` | Reusable UI components. |
| `config/` | Technical configuration for external services. |
| `constants/` | Constant values such as corporate colors and global configs. |
| `hooks/` | Custom React hooks for shared logic. |
| `scripts/` | Utility scripts for development. |
| `eslint.config.js` | Code quality and styling rules configuration. |
| `tsconfig.json` | TypeScript engine configuration. |

---

## 📝 Getting Started

### 1. Prerequisites
* [Node.js](https://nodejs.org/) (LTS version recommended).
* **npm** or **yarn**.
* **Expo Go** installed on your mobile device or a configured emulator.

### 2. Local Installation
Clone the repository and install dependencies:

```bash
git clone [https://github.com/PlayUpApp/playup-app.git](https://github.com/PlayUpApp/playup-app.git)
cd playup-app
npm install
```

### 3. Environment Variables
To enable authentication, create a `.env` file in the root of the project with your Firebase credentials:

```env
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Run the App
Start the Expo development server:

```bash
npx expo start
```

---

## 🤝 Contributing Flow
To maintain code quality and scalability, please follow this standard:

1. **Fork & Branch:** Create a descriptive branch (`feat/feature-name` or `fix/bug-description`).
2. **Semantic Commits:** Use prefixes (`feat:`, `fix:`, `docs:`, `style:`).
3. **Pull Request:** Submit a PR detailing your changes and attach UI screenshots if applicable.

---