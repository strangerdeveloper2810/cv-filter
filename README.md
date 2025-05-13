# 🧠 CV Filter App (Monorepo)

CV Filter App là một ứng dụng nội bộ hỗ trợ team HR lọc CV ứng viên dựa vào mức độ phù hợp với mô tả công việc (JD). HR có thể upload JD và nhiều CV, hệ thống sẽ đánh giá mức độ match dựa trên keyword và trả kết quả kèm biểu đồ trực quan.

## 🚀 Tech Stack

- **Monorepo**: pnpm + turborepo
- **Frontend**: React + Rsbuild + TypeScript
- **Backend**: Express.js + TypeScript + Prisma ORM
- **Database**: MySQL
- **ORM**: Prisma
- **Dev Tools**: Turbo, Nodemon, ESLint, Prettier, Biome

---

## 📁 Project Structure

```
cv-filter/
├── apps/
│   ├── frontend/       # React + Rsbuild
│   └── backend/        # Express + Prisma
├── prisma/             # Shared prisma config (optional)
├── docker-compose.yml  # MySQL (optional)
├── turbo.json          # Turbo task config
├── pnpm-workspace.yaml # Workspace packages
├── package.json        # Root script & devDependencies
```

---

## 🛠️ Local Development

### ✅ Yêu cầu

- Node.js v18+
- pnpm (cài bằng `npm i -g pnpm`)
- MySQL server đang chạy (localhost hoặc docker)

### 🧶 1. Clone project và cài dependencies

```bash
git clone https://github.com/your-username/cv-filter.git
cd cv-filter
pnpm install
```

### ⚙️ 2. Cấu hình database

Tạo file `.env` trong `apps/backend/`:

```env
DATABASE_URL="mysql://username:password@localhost:3306/cv_filter_db"
```

> Đảm bảo đã tạo database `cv_filter_db` trước đó.

---

### 🔧 3. Khởi tạo Prisma

```bash
pnpm migrate       # Chạy Prisma migrate
pnpm generate      # (Tự động gọi trong migrate)
```

---

### 🧪 4. Chạy dev cả frontend & backend

```bash
pnpm dev
```

- Frontend: chạy trên `http://localhost:3000`
- Backend: chạy trên `http://localhost:3001`

---

## 📦 Scripts

| Lệnh           | Mô tả                     |
| -------------- | ------------------------- |
| `pnpm dev`     | Chạy cả FE & BE song song |
| `pnpm build`   | Build cả project          |
| `pnpm migrate` | Prisma migrate dev DB     |
| `pnpm lint`    | Lint code toàn bộ project |

---

## 🧠 Tính năng chính (MVP)

- [x] Upload JD (PDF hoặc text)
- [x] Upload nhiều CV (PDF)
- [x] Tự động phân tích, so khớp keyword
- [x] Tính % match
- [x] Hiển thị bảng kết quả và biểu đồ

---

## 🏗️ Định hướng mở rộng

- [ ] Semantic matching dùng AI (OpenAI Embedding)
- [ ] Lưu kết quả lịch sử vào DB
- [ ] Export báo cáo PDF
- [ ] Authentication phân quyền cho HR

---

## ✨ Contributors

- [Trinh Nguyen](https://github.com/your-username)

---

## 🪄 License

MIT © 2025
