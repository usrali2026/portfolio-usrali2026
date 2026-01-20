import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Software Developer · DevOps · 42 Luxembourg
          </p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-zinc-100">
            Ali Rahmoune
          </h1>
          <p className="text-xl text-zinc-400">
            C/C++ & DevOps Developer
          </p>
        </div>
        <div className="max-w-2xl space-y-4 text-zinc-300">
          <p className="text-lg leading-relaxed">
            Software Developer (C/C++) with a strong background in systems,
            networking, and Linux, now extending into TypeScript-based full‑stack
            web development (NestJS, Angular, PostgreSQL).
          </p>
          <p className="text-base leading-relaxed text-zinc-400">
            Trained at 42 Luxembourg through an intensive, project‑based curriculum
            focused on UNIX programming, multithreading, networking, HTTP servers,
            Docker containerization, and software rigor.
          </p>
        </div>
      </section>

      {/* Skills and Highlights Grid */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Key Skills Card */}
        <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Key Skills
          </h2>
          <ul className="space-y-3 text-sm text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
              <span>
                <strong className="text-zinc-200">Programming:</strong> C, C++, Bash, Python, JavaScript/TypeScript, SQL
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
              <span>
                <strong className="text-zinc-200">Web:</strong> HTTP/1.1, REST APIs, NestJS, Angular, Node.js
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
              <span>
                <strong className="text-zinc-200">DevOps:</strong> Docker, Docker Compose, CI/CD with GitHub Actions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
              <span>
                <strong className="text-zinc-200">Systems:</strong> Linux, TCP/IP, routing, DNS, SSH, VoIP
              </span>
            </li>
          </ul>
        </div>

        {/* Highlights Card */}
        <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Project Highlights
          </h2>
          <ul className="space-y-3 text-sm text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
              <span>Cardiology clinic SPA (NestJS, Angular, PostgreSQL, Docker)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
              <span>ft_transcendence full‑stack web app with real‑time features</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
              <span>Custom HTTP/1.1 server and UNIX shell in C/C++</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
              <span>Multi‑service Docker Compose infra and CI/CD workflows</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/40"
        >
          View Projects
        </Link>
        <Link
          href="/experience"
          className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-zinc-100 backdrop-blur transition-all hover:border-zinc-500 hover:bg-zinc-800/50"
        >
          Experience
        </Link>
        <Link
          href="/education"
          className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-zinc-100 backdrop-blur transition-all hover:border-zinc-500 hover:bg-zinc-800/50"
        >
          Education
        </Link>
      </section>
    </main>
  );
}
