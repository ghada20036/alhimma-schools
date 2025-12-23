import React from 'react';

const ClassButtons: React.FC = () => {
  const classes = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <div className="class-buttons">
      {classes.map((c) => (
        <button key={c} className="button-gradient class-btn" aria-pressed="false">{c}</button>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="page-root">
      <header className="top-nav">لوحة التحكم - مدارس الهمة العلمية الأهلية</header>
      <main className="main-content">
        <h1 className="center-credit">إعداد وبرمجة: أ. غادة الحيدري</h1>
        <section className="controls">
          <h2>اختر الصف</h2>
          <ClassButtons />
        </section>
      </main>
    </div>
  );
}
