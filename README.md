# Frontegg • React + Vite demo

This repository contains my solution for the **Tier-1 Technical Support Engineer** home assignment.  
The application is a minimal Vite + React SPA that demonstrates a basic, working Frontegg integration.

---

## What is implemented

1. **Hosted Login Box** – sign-in / sign-up with magic-link (email) and an optional Google button.  
2. **Home page** – after authentication it shows the user’s name, profile picture, and three quick actions:
   *Show token*, *Logout*, and *Settings*.  
3. **Admin Portal** (opens as a modal):
   - **Profile** tab  
   - **Users** tab – user **vikram.moule@frontegg.com** was invited with the custom “Limited Admin” role (magic-link only).  
   - **Audit Logs** and **API Tokens** are visible.  
4. **Logout** clears the session and redirects back to the app.  
5. The entire flow works locally on `http://localhost:5173`.

---

## Visual tour

| Step | Screenshot |
|------|------------|
| Hosted login (sign-in) | <img src="https://github.com/user-attachments/…/signin.png" width="450"/> |
| Hosted sign-up | <img src="https://github.com/user-attachments/…/signup.png" width="450"/> |
| Home page | <img src="https://github.com/user-attachments/…/login.png" width="450"/> |
| Admin Portal → Profile | <img src="https://github.com/user-attachments/…/settings.png" width="450"/> |
| Admin Portal → Users | <img src="https://github.com/user-attachments/…/users.png" width="450"/> |

> All five PNG files are stored in the root of the repository (update the paths if you move them to another folder).

---

## Running locally

```bash
git clone https://github.com/<your-username>/frontegg-assignment.git
cd frontegg-assignment
npm install
npm run dev         # opens http://localhost:5173
