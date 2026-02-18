# Resoome

Resoome is a modern, professional, and efficient resume builder application built with React, Vite, and Tailwind CSS. It empowers users to create high-quality resumes with ease, providing a seamless experience from data entry to final PDF generation.

## 🚀 Features

- **Intuitive Resume Builder**: Easy-to-use interface for adding education, experience, skills, and more.
- **Real-time Preview**: See your changes instantly as you build your resume.
- **Professional Templates**: Choose from high-quality templates (We only have one template at the moment, Harvard Style).
- **PDF Export**: Generate high-quality PDF versions of your resume using `@react-pdf/renderer`.
- **Import/Export Data**: Save and load your resume data for future editing.

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jcarintoc/resoome.git
   cd resoome
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Project Structure

- `src/components`: UI and feature-specific components.
- `src/features`: Core logic for resume building, importing, and previewing.
- `src/pages`: Main application views.
- `src/templates`: Resume templates and design configurations.
- `src/hooks`: Custom React hooks for application logic.
