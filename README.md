# 🍽️ Miracooks

**Miracooks** is an AI-powered food ordering platform built with a modern full-stack architecture. It enables users to browse dishes, place orders, receive intelligent recommendations, and much more — all with a delightful user experience.

---

## 🧱 Tech Stack

| Layer        | Tech                               |
| ------------ | ---------------------------------- |
| Frontend     | [Next.js 14+](https://nextjs.org), [TailwindCSS](https://tailwindcss.com), TypeScript |
| Backend/API  | [NestJS](https://nestjs.com), [Node.js 18+](https://nodejs.org) |
| Database     | [PostgreSQL](https://www.postgresql.org) |
| AI Layer     | OpenAI (or alternatives TBD)       |
| Auth         | (Coming Soon) NextAuth.js or Passport.js |
| Payments     | Paystack, Bank Transfer Integration |
| DevOps       | [Turborepo](https://turbo.build), GitHub Actions CI/CD |
| Messaging    | Email + SMS, WhatsApp, Live Chat   |

---

## 📁 Monorepo Structure (Turborepo)

miracooks/
├── apps/
│ ├── web/ # Next.js frontend
│ └── api/ # NestJS backend API (coming soon)
├── packages/ # Shared config, types, utils (TBD)
├── .github/ # CI/CD workflows
├── .gitignore
├── package.json # Workspace manager
├── turbo.json # Turborepo config
└── README.md


---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18.x
- pnpm ≥ 8.x
- PostgreSQL (local or cloud)

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/miracooks.git
cd miracooks
pnpm install

### 2. Clone & Install

```bash
pnpm dev