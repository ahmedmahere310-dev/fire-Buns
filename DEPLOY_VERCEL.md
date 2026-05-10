# نشر المشروع على Vercel

> ⚠️ التعديلات دي تتعمل **على جهازك المحلي بعد ما تعمل clone للريبو من GitHub**.
> ماتعملهاش من داخل Lovable لأنها هتكسر الـ Preview.

## الخطوات

### 1. اربط GitHub من Lovable (مرة واحدة)
- Plus (+) → GitHub → Connect project → Create Repository

### 2. Clone الريبو على جهازك
```bash
git clone <your-repo-url>
cd <your-repo>
git checkout -b vercel-deploy
```

### 3. بدّل الـ config
```bash
# شيل باكدج Lovable الداخلي
bun remove @lovable.dev/vite-tanstack-config

# ضيف الباكدجات الأصلية
bun add -D @tanstack/react-start vite @vitejs/plugin-react @tailwindcss/vite vite-tsconfig-paths

# احذف ملفات Cloudflare
rm wrangler.jsonc src/server.ts

# بدّل vite.config.ts بنسخة Vercel
mv vite.config.ts vite.config.lovable.ts.bak
mv vite.config.vercel.ts vite.config.ts
```

### 4. ظبط package.json
خلي السكربتات كده:
```json
"scripts": {
  "dev": "vite dev",
  "build": "vite build",
  "start": "vite start"
}
```

### 5. ارفع وانشر
```bash
git add -A
git commit -m "switch to vercel adapter"
git push -u origin vercel-deploy
```

ادخل على [vercel.com](https://vercel.com) → New Project → اختار الريبو → اختار branch `vercel-deploy` → Deploy.

### 6. متغيرات البيئة (لو بتستخدم Lovable Cloud)
في Vercel → Project Settings → Environment Variables ضيف أي مفاتيح موجودة في `.env` المحلي:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- وأي secrets تانية

## ملحوظة
- branch `main` سيبه زي ما هو علشان Lovable يفضل شغال
- استخدم `vercel-deploy` للنشر بس
