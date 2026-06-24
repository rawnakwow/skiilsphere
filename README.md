# 🌐 SkillSphere

SkillSphere is a highly interactive, full-stack online learning platform designed to connect students with industry experts. The application delivers robust form validations, seamless state routing, and dynamic data binding built for fast rendering cycles.

🔗 **Live Deployment URL**: skiilsphere.vercel.app
🔗 **gitHub URL**: https://github.com/rawnakwow/skiilsphere.git

 

---

## ⚡ Key Features

* **Advanced Authentication Flow**: Integrated email/password registration alongside secure **Google OAuth single sign-on** handshakes.
* **Compound Form Architectures**: Leverages modern structural fields with absolute layer scaling to prevent transparent event-blocking bugs.
* **Polymorphic Design Pattern Overhaul**: Adheres to modern component specifications using utility hooks to maintain routing states.
* **Context-Free Framework Foundations**: Optimized architecture removing heavy structural root wrappers to minimize bundle footprint.
* **Database State Resolution**: Server-side engine utilizing persistent connection states to prevent multi-thread connection dropouts.

---

## 🛠️ Tech Stack & Powered Dependencies

### Core Framework Layout
* **Next.js v16 (Turbopack)**: App Router engine driving blazing fast client-side rendering.
* **React v19**: Modern layout architecture using hook-based element bindings.

### Interface & Animation UI
* **@heroui/react (v3)**: Primitive layout elements driving the core user field aesthetics.
* **@heroui/styles**: Custom variation hooks powering unified composition across standard HTML elements.
* **Tailwind CSS**: Utility-first CSS class structure driving custom dark-mode properties.
* **Framer Motion**: Lightweight animation pipeline managing page layout transitions.
* **React Icons**: Specialized asset sets (`FaUser`, `FaEnvelope`, `FaLock`, `FaImage`, `FaGoogle`).

### Data Flow & Database Infrastructure
* **Better-Auth (v3)**: Lightweight security utility managing serverless cookie tracking profiles.
* **@better-auth/mongo-adapter**: High-performance translation layer mapping sessions onto storage.
* **MongoDB**: NoSQL cloud infrastructure engine tracking active workspace records.
* **React-Toastify**: Direct event toast notifications framework signaling authorization state shifts.

---

## 🚀 Local Installation & Deployment

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rawnakwow/skiilsphere.git
   cd skillsphere
   ```

2. **Install Project Dependencies**:
   ```bash
   npm install
   ```

3. **Configure the Environment File (`.env`)**:
   Create a `.env` file at the root of your project directory and assign your active keys:
   ```env
   BETTER_AUTH_SECRET="your_32_character_random_string_here"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   BETTER_AUTH_URL="http://localhost:3000"
   MONGODB_URI="your_mongodb_atlas_connection_string"
   GOOGLE_CLIENT_ID="your_google_oauth_client_id"
   GOOGLE_CLIENT_SECRET="your_google_oauth_client_secret"
   ```

4. **Launch the Local Development Server**:
   ```bash
   npm run dev
   ```
