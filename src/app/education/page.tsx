export default function EducationPage() {
  return (
    <main className="space-y-12 pb-16">
      <div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Education & Certifications</h1>
        <p className="text-zinc-400">Academic background and professional qualifications</p>
      </div>

      <div className="space-y-8">
        {/* 42 Luxembourg - Main Card */}
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-emerald-400">
                42 Luxembourg
              </h2>
              <p className="text-sm text-zinc-500">Software Engineering</p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-400">
              Level 11.67/21
            </span>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Common Core – Completed
              </h3>
              <p className="text-sm text-zinc-300">
                Common Core completed with 28+ projects in C/C++, UNIX programming,
                networking, multithreading, HTTP servers, Docker, and TypeScript web
                development.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Advanced Specialization – In Progress
              </h3>
              <p className="text-sm text-zinc-300">
                DevOps & Cybersecurity specialization, focusing on containerization, 
                infrastructure automation, security hardening, and network administration.
              </p>
            </div>
          </div>
        </article>

        {/* Other Education */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-200">Other Education</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></span>
              <div>
                <h3 className="font-semibold text-zinc-200">Luxembourgish A1</h3>
                <p className="text-sm text-zinc-500">INLL · 2023</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></span>
              <div>
                <h3 className="font-semibold text-zinc-200">Command & Staff Diploma</h3>
                <p className="text-sm text-zinc-500">Higher School of Aviation</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></span>
              <div>
                <h3 className="font-semibold text-zinc-200">Technical Logistics Certificate</h3>
                <p className="text-sm text-zinc-500">Northrop Grumman, USA</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></span>
              <div>
                <h3 className="font-semibold text-zinc-200">Radio Engineering Mastery Certificate</h3>
                <p className="text-sm text-zinc-500">Professional Qualification</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></span>
              <div>
                <h3 className="font-semibold text-zinc-200">ICT Qualification</h3>
                <p className="text-sm text-zinc-500">Northrop Grumman, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
