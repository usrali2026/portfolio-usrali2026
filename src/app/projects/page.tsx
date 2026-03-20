export default function ProjectsPage() {
  return (
    <main className="space-y-16 pb-16">

      {/* ================= Header ================= */}
      <div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-zinc-400">
          Backend, systems, and full-stack projects spanning healthcare, public platforms,
          real-time applications, and low-level engineering.
        </p>
      </div>

      {/* ================= Project Highlights ================= */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Project Highlights
        </h2>
        <ul className="space-y-3 text-sm text-zinc-300">
          <li>• QuickPark – real-time smart parking platform</li>
          <li>• Parcel Tracking – Angular 21 app with full E2E tests</li>
          <li>• LëtzPulse – cardiology platform (ECG + workflows)</li>
          <li>• AI Scribe – AI-powered medical documentation assistant</li>
          <li>• LuxBase – public service discovery API (Go)</li>
          <li>• Medical SPA – modern clinic management system</li>
        </ul>
      </section>

      {/* ================= Mini Project Cards ================= */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* QuickPark */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur
                        hover:border-emerald-400 hover:scale-105 hover:shadow-lg
                        transition-transform transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">QuickPark</h3>
          <p className="text-xs text-zinc-400 mb-2">
            Real-time smart parking platform with live availability and interactive maps.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="badge hover:scale-110 transition-transform duration-200">NestJS</span>
            <span className="badge hover:scale-110 transition-transform duration-200">Angular 21</span>
            <span className="badge hover:scale-110 transition-transform duration-200">PostgreSQL</span>
            <span className="badge hover:scale-110 transition-transform duration-200">Socket.IO</span>
            <span className="badge hover:scale-110 transition-transform duration-200">Leaflet</span>
            <span className="badge hover:scale-110 transition-transform duration-200">Docker</span>
          </div>
        </div>

        {/* Parcel Tracking */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur
                        hover:border-emerald-400 hover:scale-105 hover:shadow-lg
                        transition-transform transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">Parcel Tracking</h3>
          <p className="text-xs text-zinc-400 mb-2">
            Modern Angular 21 standalone app with full E2E test coverage 🎉
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="badge hover:scale-110 transition-transform duration-200">Angular 21</span>
            <span className="badge hover:scale-110 transition-transform duration-200">TailwindCSS</span>
            <span className="badge hover:scale-110 transition-transform duration-200">Playwright</span>
          </div>
        </div>
      </section>

      {/* ================= Featured Projects ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-zinc-100">🚀 Featured Projects</h2>

        {/* QuickPark */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur
                            transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h3 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400">
            QuickPark – Real-Time Smart Parking Platform
          </h3>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="badge">NestJS</span>
            <span className="badge">Angular 21</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Socket.IO</span>
            <span className="badge">Leaflet</span>
            <span className="badge">Docker</span>
          </div>
          <p className="text-sm text-zinc-300">
            Full-stack parking management system with real-time availability updates,
            interactive maps, search/favorites, and admin controls.
          </p>
        </article>

        {/* Parcel Tracking */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur
                            transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h3 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400">
            Parcel Tracking – Modern Angular 21 App
          </h3>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="badge">Angular 21</span>
            <span className="badge">TailwindCSS</span>
            <span className="badge">Playwright</span>
          </div>
          <p className="text-sm text-zinc-300">
            Modern Angular 21 standalone app with full E2E test coverage 🎉
          </p>
        </article>

        {/* Other Featured Projects */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur
                            transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
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
            and clinical workflow management with data sovereignty in mind.
          </p>
        </article>

        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur
                            transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h3 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400">
            AI Scribe – Medical Documentation Assistant
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
            AI system converting doctor-patient consultation audio into structured medical notes.
          </p>
        </article>

        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur
                            transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
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
            API-first platform for discovering Luxembourg’s digital public services
            with structured metadata and interoperability tooling.
          </p>
        </article>

        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur
                            transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h3 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400">
            Medical SPA – Clinic Management System
          </h3>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="badge">Angular 21</span>
            <span className="badge">Express</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Docker</span>
          </div>
          <p className="text-sm text-zinc-300">
            Full-stack medical clinic system supporting patients, appointments, billing, and reports.
          </p>
        </article>
      </section>

      {/* ================= 42 School Projects ================= */}
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
          </article>
        ))}
      </section>
    </main>
  );
}
