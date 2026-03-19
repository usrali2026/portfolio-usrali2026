export default function ProjectsPage() {
  return (
    <main className="space-y-16 pb-16">
      <div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-zinc-400">
          Backend, systems, and full-stack projects spanning healthcare, public platforms,
          and low-level engineering
        </p>
      </div>

      {/* ================= REAL-WORLD PROJECTS ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-zinc-100">
          🚀 Selected Projects (Real-World / Product)
        </h2>

        {/* LëtzPulse */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h3 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400">
            LëtzPulse – Sovereign Cardiology Platform
          </h3>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="badge">NestJS</span>
            <span className="badge">Angular</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Docker</span>
          </div>
          <p className="text-sm text-zinc-300">
            Full-stack cardiology platform designed for ECG data collection, analysis,
            and clinical workflow management, with a focus on data sovereignty and
            integration within Luxembourg’s healthcare ecosystem.
          </p>
          <ul className="mt-3 list-disc pl-5 text-xs text-zinc-400 space-y-1">
            <li>ECG data ingestion and structured patient health tracking</li>
            <li>Role-based dashboards for doctors, assistants, and admins</li>
            <li>Designed for secure cloud and on-premise deployment</li>
            <li>Built with interoperability in mind for healthcare systems</li>
          </ul>
          <p className="mt-3 text-xs text-zinc-400">
            Detailed architecture, code walkthrough, and deployment demo available on request.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-zinc-500">Private repository</span>
            <span className="text-xs text-emerald-400">Code & demo available on request</span>
          </div>
        </article>

        {/* AI Scribe */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h3 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400">
            Healthcare AI Scribe – Medical Documentation Assistant
          </h3>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="badge">NestJS</span>
            <span className="badge">Angular</span>
            <span className="badge">Python</span>
            <span className="badge">Whisper</span>
            <span className="badge">LLMs</span>
            <span className="badge">Docker</span>
          </div>
          <p className="text-sm text-zinc-300">
            AI-powered system that converts doctor-patient consultation audio into
            structured medical notes, reducing manual documentation workload.
          </p>
          <ul className="mt-3 list-disc pl-5 text-xs text-zinc-400 space-y-1">
            <li>Audio upload → transcription → structured note generation</li>
            <li>Dashboard to review consultations and track time saved</li>
            <li>GDPR-compliant design with consent and deletion endpoints</li>
            <li>Dockerized for easy local and clinical deployment</li>
          </ul>
          <p className="mt-3 text-xs text-zinc-400">
            Detailed architecture, AI pipeline explanation, and demo available on request.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-zinc-500">Private repository</span>
            <span className="text-xs text-emerald-400">Code & demo available on request</span>
          </div>
        </article>

        {/* LuxBase */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h3 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400">
            LuxBase – Public Service Discovery Platform
          </h3>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="badge">Go</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Angular</span>
            <span className="badge">Docker</span>
          </div>
          <p className="text-sm text-zinc-300">
            API-first platform for discovering and integrating Luxembourg’s digital
            public services through structured metadata and interoperability tooling.
          </p>
          <ul className="mt-3 list-disc pl-5 text-xs text-zinc-400 space-y-1">
            <li>Service catalog with structured metadata and quality signals</li>
            <li>Backend in Go for efficient query handling and scalability</li>
            <li>Designed for interoperability between public institutions</li>
            <li>Supports integration for startups and service providers</li>
          </ul>
          <p className="mt-3 text-xs text-zinc-400">
            Architecture deep-dive and API design walkthrough available on request.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-zinc-500">Private repository</span>
            <span className="text-xs text-emerald-400">Code & demo available on request</span>
          </div>
        </article>

        {/* Medical SPA */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h3 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400">
            Modern Cardiology Management System
          </h3>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="badge">Angular 21</span>
            <span className="badge">Express</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Docker</span>
          </div>
          <p className="text-sm text-zinc-300">
            Full-stack medical clinic system supporting patient management,
            appointments, vitals, billing, and reporting with a modern Angular UI.
          </p>
          <ul className="mt-3 list-disc pl-5 text-xs text-zinc-400 space-y-1">
            <li>Complete patient lifecycle from registration to reporting</li>
            <li>Angular Signals for modern reactive state management</li>
            <li>Multi-language support (EN/FR/DE/LU)</li>
            <li>Role-based authentication and access control</li>
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-zinc-500">Private repository</span>
            <span className="text-xs text-emerald-400">Code & demo available on request</span>
          </div>
        </article>

        {/* Parcel Tracking */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h3 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400">
            Modern Parcel Tracking System
          </h3>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="badge">Angular 21</span>
            <span className="badge">TailwindCSS</span>
            <span className="badge">Playwright</span>
          </div>
          <p className="text-sm text-zinc-300">
            Modern Angular application with full E2E testing and a polished UI for
            parcel tracking and history management.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-zinc-500">Private repository</span>
            <span className="text-xs text-emerald-400">Code & demo available on request</span>
          </div>
        </article>
      </section>

      {/* ================= 42 PROJECTS ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-zinc-100">
          🧪 42 School Projects (Systems & Low-Level)
        </h2>

        {[
          {
            title: "Webserv – HTTP/1.1 Server",
            desc: "Custom HTTP server in C++ with non-blocking I/O, routing, and CGI support.",
          },
          {
            title: "Minishell",
            desc: "Unix shell implementation with parsing, pipes, redirections, and signals.",
          },
          {
            title: "ft_transcendence",
            desc: "Full-stack multiplayer web app with real-time features using WebSockets.",
          },
          {
            title: "Inception",
            desc: "Docker-based multi-service infrastructure with Nginx reverse proxy.",
          },
          {
            title: "Doom-Nukem 3D",
            desc: "Raycasting 3D engine with physics, rendering, and multiplayer features.",
          },
        ].map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4"
          >
            <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
            <p className="text-sm text-zinc-400">{project.desc}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-zinc-500">Private (42 project)</span>
              <span className="text-xs text-emerald-400">
                Code walkthrough available on request
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
