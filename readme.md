# Restroworks Assignment – Next.js + Payload CMS

This repository contains a **monorepo** setup with:
- **Next.js (App Router)** as the frontend
- **Payload CMS** as a headless backend
- **MongoDB** as the database

---

## Repository Structure


---

## Prerequisites

- Node.js 18+
- npm / pnpm / yarn
- MongoDB (Atlas recommended)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd restroworks-demo

cd apps/cms
npm install

Create .env in apps/cms:

PAYLOAD_SECRET=super-secret-key
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/restroworks
PORT=3000

npm run dev

http://localhost:3001/admin


Setup Frontend

cd apps/frontend
npm install

Create .env.local in apps/frontend:

NEXT_PUBLIC_CMS_URL=http://localhost:3000

Start the frontend:

npm run dev

Frontend URLs:

http://localhost:3001/en

http://localhost:3001/es

http://localhost:3001/en/contact
