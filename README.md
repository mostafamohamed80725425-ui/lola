# نظام إعادة الاتصال بقلب ليلى 💌

مشروع React (Vite) — موقع رومانسي تفاعلي لمصالحة ليلى.

## هيكل المشروع

```
laila-project/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx                     # نقطة الدخول
    ├── App.jsx                      # المكوّن الرئيسي اللي بيجمع كل الأقسام
    ├── hooks/
    │   └── useInView.js             # هوك لمعرفة إمتى العنصر يظهر في الشاشة
    ├── styles/
    │   ├── tokens.js                # كل الألوان والستايلات (design tokens)
    │   └── animations.css           # كل الحركات والـ keyframes
    └── components/
        ├── NodeField.jsx            # الشبكة العصبية المتحركة في الخلفية
        ├── FloatingHeartsButterflies.jsx  # القلوب والفراشات الطايرة
        ├── ButterflySVG.jsx         # رسمة الفراشة
        ├── ShootingStars.jsx        # النجوم الشهب
        ├── CursorTrail.jsx          # أثر القلوب اللي بيتبع الماوس
        ├── ClickBurst.jsx           # انفجار قلوب عند أي ضغطة
        ├── BootScreen.jsx           # شاشة تشغيل النظام (Boot)
        ├── ScannerSection.jsx       # سكانر القلب (SCAN.EXE)
        ├── MemorySection.jsx        # كبسولات الذكريات
        ├── ApologyTerminal.jsx      # سجل الاعتذار (APOLOGY.LOG)
        ├── TimelineSection.jsx      # تايم لاين قصة الحب
        ├── PromiseInstall.jsx       # قائمة الوعود
        ├── MessageGenerator.jsx     # مولد رسايل عشوائي
        ├── EnvelopeSection.jsx      # ظرف الرسالة المقفول
        └── ReconnectSection.jsx     # زرار الشحن الختامي
```

## طريقة التشغيل

لازم يكون عندك [Node.js](https://nodejs.org) (نسخة 18 أو أحدث) مثبت على جهازك.

1. فك ضغط الملف وادخل على مجلد المشروع:
   ```bash
   cd laila-project
   ```

2. نصّب المكتبات:
   ```bash
   npm install
   ```

3. شغّل المشروع محليًا:
   ```bash
   npm run dev
   ```

4. افتحي اللينك اللي هيظهر في الترمينال (عادة `http://localhost:5173`).

## عمل نسخة نهائية (Build) للرفع أونلاين

```bash
npm run build
```

هيطلعلك مجلد `dist/` فيه الموقع جاهز تحطه على أي استضافة (Vercel, Netlify, GitHub Pages... إلخ).

## تعديل المحتوى

- **النصوص/الرسايل**: هتلاقيها كمصفوفات (arrays) في أول كل ملف كومبوننت (زي `memories` في `MemorySection.jsx` أو `messages` في `MessageGenerator.jsx`).
- **الألوان**: كلها متجمعة في `src/styles/tokens.js` تحت كائن `S`.
- **الحركات**: كل الـ CSS animations في `src/styles/animations.css`.

## المكتبات المستخدمة

- [React](https://react.dev) + [Vite](https://vitejs.dev)
- [lucide-react](https://lucide.dev) للأيقونات
