# Frontegg – React + Vite integration demo

Small Vite + React application that integrates Frontegg’s hosted-login and Admin-Portal.  
Everything shown below is **implemented and working**; no additional features were added beyond these screens.

---

## What you can see

1. **Hosted login box** – sign-in with magic-link (email) or Google.  
2. **Sign-up page** – new users can register a tenant (company) and continue by magic-link.  
3. **Home screen** – after authentication the user’s name and avatar are displayed, with quick buttons:  
   *show access-token*, *logout*, and *settings* (Admin-Portal).  
4. **Admin-Portal – Profile tab** – user can view / edit personal details.  
5. **Admin-Portal – Users tab** – shows existing users; `vikram.moule@frontegg.com` was invited with the **Limited Admin** role (pending approval).

---

## Screenshots

| Flow | File |
|------|------|
| Hosted login (sign-in) | `images/signin.png` |
| Hosted sign-up | `images/signup.png` |
| Home page (after login) | `images/login.png` |
| Admin-Portal → Profile | `images/settings.png` |
| Admin-Portal → Users | `images/users.png` |

> All screenshots are stored in the `images/` folder of this repository.

---

## Run locally

```bash
git clone https://github.com/<your-username>/frontegg-assignment.git
cd frontegg-assignment
npm install
npm run dev           # opens http://localhost:5173
