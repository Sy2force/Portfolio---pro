# Shay Acoca Portfolio

A modern portfolio built with Next.js 14, TypeScript, Tailwind CSS and MongoDB Atlas to showcase my full stack projects, capture contact messages and host project comments.

## About

This portfolio is designed to present my projects clearly and professionally for startup and junior developer opportunities. It includes a private admin dashboard, a MongoDB-backed contact form and per-project visitor comments.

## 🚀 Tech Stack

- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MongoDB Atlas + Mongoose
- **Translations**: English & French support
- **Deployment**: Vercel / Render compatible

## � Portfolio MongoDB Admin

This project ships with a full backend on top of Next.js App Router:

- `/api/contact` — public POST + admin-only GET (Bearer token)
- `/api/contact/[id]` — admin-only PATCH (status) + DELETE
- `/api/comments` — public GET + POST per project
- `/api/comments/[id]` — DELETE restricted to the original author email
- `/api/auth` — admin login (compares against `ADMIN_PASSWORD`)
- `/admin` — private dashboard with stats, filters, status update, delete

### Required environment variables

Create a local `.env.local` (never commit it):

```env
MONGODB_URI=mongodb+srv://YOUR_USER:YOUR_PASSWORD@cluster0.ticelk0.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0
ADMIN_PASSWORD=admin123
```

> ⚠️ Replace `admin123` with a strong password before deploying to production.
> ⚠️ If your MongoDB password was ever exposed (committed, screenshotted, sent in chat), rotate it immediately in MongoDB Atlas → Database Access.

A safe template is provided in `.env.example`. The file `.env.local` is git-ignored.

### Install & run

```bash
npm install
npm run dev
```

Then open:

- Public site: http://localhost:3000
- Admin dashboard: http://localhost:3000/admin

### Build

```bash
npm run build
npm start
```

### Manual tests

1. **Homepage** — verify visible info: `shayacoca20@gmail.com`, `053-3700551`, Jerusalem, Israel.
2. **Contact form** — submit a message of type `recruteur`, expect success state and a new MongoDB document.
3. **Admin** — open `/admin`, wrong password is rejected, `admin123` is accepted, the message appears in the list, status can be changed, deletion works.
4. **Comments** — open any project card, click "Voir / ajouter des commentaires", post a comment, refresh the page → comment still visible, delete button only appears for comments you own (tracked in `localStorage`).
5. **Build** — `npm run build` exits without errors.

## 📁 Project Structure (key files)

```
app/
├── admin/page.tsx              # Private admin dashboard
├── api/
│   ├── auth/route.ts           # Admin password check
│   ├── contact/route.ts        # POST contact, GET messages (admin)
│   ├── contact/[id]/route.ts   # PATCH/DELETE messages (admin)
│   ├── comments/route.ts       # GET/POST project comments
│   └── comments/[id]/route.ts  # DELETE own comment
├── layout.tsx
└── page.tsx                    # Homepage
components/
├── contact.tsx                 # Contact form (MongoDB-powered)
├── project-card.tsx            # Project card + comments toggle
├── project-comments.tsx        # Comments per project
├── hero.tsx                    # Hero section
└── ...
lib/
├── mongodb.ts                  # Mongoose connection cache
├── models/
│   ├── ContactMessage.ts       # Mongoose model (timestamps + status)
│   └── Comment.ts              # Mongoose model
└── translations.ts             # i18n (Jerusalem, Israel)
data/
└── projects.ts                 # Project data (FitWell URL updated)
```

## � Security checklist

- `.env.local` is in `.gitignore` and must never be committed.
- The MongoDB password used during setup must be rotated if it was ever shared in plain text.
- `ADMIN_PASSWORD` should be replaced with a strong value in production.
- Admin endpoints (`GET /api/contact`, `PATCH/DELETE /api/contact/[id]`) require an `Authorization: Bearer <ADMIN_PASSWORD>` header.

## 📱 Features

- Fully responsive Tailwind UI
- Bilingual content (English / French)
- MongoDB-backed contact form (recruteur, startup, partenariat, autre)
- Per-project comments with author-only delete (via `localStorage`)
- Private admin dashboard with stats, filters and CRUD on messages

---

Built with Next.js 14, TypeScript, Tailwind CSS and MongoDB.

