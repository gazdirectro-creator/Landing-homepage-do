import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-600">PROIECT.js</div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold">Get Started</button>
      </nav>
      <main className="px-6 pt-20 pb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-slate-900">Responsive Landing Page</h1>
        <p className="text-lg text-slate-600 mb-10">Built with Next.js and Tailwind CSS to demonstrate clean architecture.</p>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border rounded-xl shadow-sm bg-slate-50">
            <h3 className="font-bold text-xl mb-2">Performance</h3>
            <p className="text-slate-600">Optimized for Core Web Vitals.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm bg-slate-50">
            <h3 className="font-bold text-xl mb-2">Responsive</h3>
            <p className="text-slate-600">Works on mobile, tablet, and desktop.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm bg-slate-50">
            <h3 className="font-bold text-xl mb-2">Clean Code</h3>
            <p className="text-slate-600">Semantic HTML and modern structure.</p>
          </div>
        </section>
      </main>
      <footer className="py-12 border-t text-center text-slate-400 text-sm">© 2026 Technical Demo</footer>
    </div>
  );
}
