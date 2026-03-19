import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-16 pb-16">
      {/* 🔥 Currently Building Banner */}
      <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 backdrop-blur">
        <p className="text-sm text-emerald-400 font-medium">
          🚧 Currently building: <span className="text-emerald-300">LëtzPulse</span> — 
          a sovereign cardiology platform for ECG data analysis, clinical workflows, 
          and secure healthcare deployment in Luxembourg.
        </p>
      </section>

      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Backend & Systems Engineer · DevOps · 42 Luxembourg
          </p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-zinc-100">
            Ali Rahmoune
          </h1>
          <p className="text-xl text-zinc-400">
            C/C++ · Go · TypeScript · Distributed Systems
          </p>
        </div>

        <div className="max-w-2xl space-y-4 text-zinc-300">
          <p className="text-lg leading-relaxed">
            Backend and systems-focused engineer with strong foundations in C/C++,
            networking, and Linux, building production-oriented platforms in
            healthcare and public services.
          </p>

          <p className="text-base leading-relaxed text-zinc-400">
            I design APIs, containerized systems, and full-stack applications using
            Go, NestJS, Angular, and PostgreSQL, with a focus on performance,
            scalability, and real-world deployment.
          </p>
        </div>
      </section>

      {/* 📊 Metrics Section */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Projects Built", value: "10+" },
          { label: "Dockerized Apps", value: "8+" },
          { label: "APIs Designed", value: "15+" },
          { label: "Tech Stack Depth", value: "Full-Stack + Systems" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-center"
          >
            <p className="text-lg font-semibold text-emerald-400">
              {item.value}
            </p>
            <p className="text-xs text-zinc-400">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Skills and Highlights */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Skills */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Core Skills
          </h2>

          <ul className="space-y-3 text-sm text-zinc-300">
            <li>• C, C++, Go, Python, TypeScript, SQL</li>
            <li>• REST APIs, NestJS, Node.js, Express</li>
            <li>• Docker, Docker Compose, CI/CD</li>
            <li>• Linux, TCP/IP, HTTP, concurrency</li>
          </ul>
        </div>

        {/* Highlights */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Project Highlights
          </h2>

          <ul className="space-y-3 text-sm text-zinc-300">
            <li>• LëtzPulse – cardiology platform (ECG + workflows)</li>
            <li>• AI Scribe – automated medical documentation</li>
            <li>• LuxBase – public service discovery API (Go)</li>
            <li>• Custom HTTP server & Unix shell (C/C++)</li>
          </ul>
        </div>
      </section>

      {/* ✉️ Contact CTA */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center backdrop-blur">
        <h2 className="text-xl font-semibold text-zinc-100 mb-2">
          Interested in my work?
        </h2>
        <p className="text-sm text-zinc-400 mb-4">
          I can provide code walkthroughs, architecture explanations, and live demos
          of my projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-400"
          >
            Request Demo
          </a>

          <Link
            href="/projects"
            className="inline-flex items-center rounded-full border border-zinc-700 px-6 py-3 text-sm text-zinc-100 hover:border-zinc-500"
          >
            View Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
