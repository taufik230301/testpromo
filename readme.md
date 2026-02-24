

---

```markdown
# Project Promo App

Project ini terdiri dari **Backend (`be-promo`)** dan **Frontend (`my-test-app`)**, dengan database container di dalam backend untuk menyimpan data promo.

## 📁 Struktur Folder

```

root/
│
├─ be-promo/
│   ├─ db/            # Database container
│   ├─ src/           # Source code backend (API, server, models)
│   └─ package.json
│
└─ my-test-app/       # Frontend (React Native / Expo / Web)
└─ package.json

````

---

## 🛠 Setup & Jalankan

### 1. Jalankan Database Container

```bash
cd be-promo/db
docker compose up -d
docker exec -i promo_postgres psql -U postgres -d promo_db < init.sql
````

### 2. Jalankan Backend (`be-promo`)

```bash
cd be-promo
npm install
npm run dev
```

