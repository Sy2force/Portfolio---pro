# Shay Acoca Portfolio

A modern portfolio built with Next.js, TypeScript and Tailwind CSS to showcase my full stack projects and professional profile.

## About

This portfolio is designed to present my projects clearly and professionally for startup and junior developer opportunities.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Translations**: English & French support
- **Contact Form**: Formspree integration
- **Deployment**: Ready for Vercel

## 📁 Project Structure

```
shay-acoca-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── navbar.tsx          # Sticky navigation
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section with attribute cards
│   ├── projects.tsx        # Projects section
│   ├── project-card.tsx    # Individual project card
│   ├── skills.tsx          # Skills section with categories
│   ├── experience.tsx      # Experience/Education timeline
│   ├── why-hire-me.tsx     # Value proposition section
│   ├── contact.tsx         # Contact section with form
│   ├── footer.tsx          # Footer component
│   └── section-title.tsx   # Reusable section title
├── data/
│   ├── projects.ts         # Project data
│   ├── skills.ts           # Skills data
│   └── experience.ts       # Experience data
├── lib/
│   ├── utils.ts            # Utility functions (cn helper)
│   ├── translations.ts     # English & French translations
│   └── language-context.tsx # Language context provider
├── public/
│   ├── projects/           # Project images
│   └── resume.pdf          # Add your resume here
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
└── .eslintrc.json
```

## 🛠️ Installation

### Prerequisites

- Node.js 18+ installed
- npm package manager

### Setup Instructions

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your Formspree ID

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## 🏗️ Building for Production

```bash
# Set up environment variables for production
# Add NEXT_PUBLIC_FORMSPREE_ID to your deployment environment

npm run build
npm start
```

## 📦 Deployment to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Add your environment variable `NEXT_PUBLIC_FORMSPREE_ID` in Vercel project settings

## 🎨 Customization

### Environment Variables

Create a `.env.local` file (copy from `.env.local.example`):

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here
```

**To set up Formspree for email functionality:**

1. Go to [Formspree.io](https://formspree.io) and sign up
2. Create a new form and get your Form ID
3. Add the Form ID to your `.env.local` file
4. The contact form will now send emails directly to your inbox

### Placeholders to Update

Update the following placeholders in the code:

1. **LinkedIn**: Replace `YOUR_LINKEDIN_USERNAME` in:
   - `components/hero.tsx`
   - `components/contact.tsx`
   - `components/footer.tsx`

2. **Email**: Replace `shayacoca@example.com` in:
   - `components/contact.tsx`
   - `components/footer.tsx`

3. **Resume**: Add your resume PDF to `public/resume.pdf`

4. **Project Images**: Add screenshots to `public/projects/`:
   - `fitwell.png`
   - `opticglass.png`
   - `flavors-of-israel.png`

### Projects

The portfolio currently showcases 3 projects:
- **FitWell**: Fitness & Wellness SaaS Platform
- **OpticGlass**: Premium Eyewear E-commerce
- **Flavors of Israel**: Restaurant Discovery Platform

Edit `data/projects.ts` to add or modify projects.

## 📱 Features

- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Fast Performance**: Built with Next.js for optimal loading
- **SEO Optimized**: Proper metadata and Open Graph tags
- **Accessible**: Semantic HTML and ARIA labels
- **Modern Design**: Clean, minimalist aesthetic inspired by Vercel/Linear
- **Smooth Animations**: Subtle Framer Motion animations
- **Bilingual Support**: English & French with language toggle
- **Contact Form**: Integrated with Formspree for direct email delivery
- **Language Persistence**: Language preference saved in localStorage

## 🎯 Sections

1. **Navbar**: Sticky navigation with smooth scroll, Resume button, and language toggle
2. **Hero**: Professional introduction with availability badge
3. **About**: Background story with 3 attribute cards
4. **Projects**: 3 detailed project case studies with live demos
5. **Skills**: Categorized skills (Frontend, Backend, Tools, Product)
6. **Experience**: Timeline of education and experience
7. **Why Hire Me**: Value proposition for recruiters
8. **Contact**: Contact information and form with email integration
9. **Footer**: Minimal footer with social links
10. **Resume Page**: Bilingual resume with print functionality

---

Built with Next.js, TypeScript and Tailwind CSS
