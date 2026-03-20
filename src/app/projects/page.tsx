export default function ProjectsPage() {
  return (
    <main className="space-y-16 pb-16">

      {/* Header */}
      <div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-zinc-400">
          Backend, systems, and full-stack projects spanning healthcare, public platforms,
          real-time applications, and low-level engineering.
        </p>
      </div>

      {/* Project Highlights */}
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

      {/* Mini Project Cards */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* QuickPark */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur hover:border-emerald-400 hover:scale-105 hover:shadow-lg transition-transform transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">QuickPark</h3>
          <p className="text-xs text-zinc-400 mb-2">
            Real-time smart parking platform with live availability and interactive maps.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="badge">NestJS</span>
            <span className="badge">Angular 21</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Socket.IO</span>
            <span className="badge">Leaflet</span>
            <span className="badge">Docker</span>
          </div>
        </div>

        {/* Parcel Tracking */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur hover:border-emerald-400 hover:scale-105 hover:shadow-lg transition-transform transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">Parcel Tracking</h3>
          <p className="text-xs text-zinc-400 mb-2">
            Modern Angular 21 standalone app with full E2E test coverage 🎉
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="badge">Angular 21</span>
            <span className="badge">TailwindCSS</span>
            <span className="badge">Playwright</span>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-zinc-100">🚀 Featured Projects</h2>

        {[
          {
            title: "QuickPark – Real-Time Smart Parking Platform",
            desc: "Full-stack parking management system with real-time availability updates, interactive maps, search/favorites, and admin controls.",
            badges: ["NestJS", "Angular 21", "PostgreSQL", "Socket.IO", "Leaflet", "Docker"]
          },
          {
            title: "Parcel Tracking – Modern Angular 21 App",
            desc: "Modern Angular 21 standalone app with full E2E test coverage 🎉",
            badges: ["Angular 21", "TailwindCSS", "Playwright"]
          },
          {
            title: "LëtzPulse – Sovereign Cardiology Platform",
            desc: "Full-stack cardiology platform designed for ECG data collection, analysis, and clinical workflow management with data sovereignty in mind.",
            badges: ["NestJS", "Angular", "PostgreSQL", "Docker"]
          },
          {
            title: "AI Scribe – Medical Documentation Assistant",
            desc: "AI system converting doctor-patient consultation audio into structured medical notes.",
            badges: ["NestJS", "Angular", "Python", "Whisper", "LLMs", "Docker"]
          },
          {
            title: "LuxBase – Public Service Discovery Platform",
            desc: "API-first platform for discovering Luxembourg’s digital public services with structured metadata and interoperability tooling.",
            badges: ["Go", "PostgreSQL", "Angular", "Docker"]
          },
          {
            title: "Medical SPA – Clinic Management System",
            desc: "Full-stack medical clinic system supporting patients, appointments, billing, and reports.",
            badges: ["Angular 21", "Express", "PostgreSQL", "Docker"]
          }
        ].map((project) => (
          <article key={project.title} className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
            <h3 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400">{project.title}</h3>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.badges.map(b => <span key={b} className="badge">{b}</span>)}
            </div>
            <p className="text-sm text-zinc-300">{project.desc}</p>
          </article>
        ))}
      </section>

      {/* 42 School Projects + Independent Systems */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-zinc-100">
          🧪 42 School & Independent Systems Projects
        </h2>

        {[
          { title: "Webserv – HTTP/1.1 Server", desc: "Custom HTTP server in C++ with non-blocking I/O, routing, and CGI support." },
          { title: "Minishell", desc: "Unix shell implementation with parsing, pipes, redirections, and signals." },
          { title: "ft_transcendence", desc: "Full-stack multiplayer web app with real-time features using WebSockets." },
          { title: "Inception", desc: "Docker-based multi-service infrastructure with Nginx reverse proxy." },
          { title: "Doom-Nukem 3D", desc: "Raycasting 3D engine with physics, rendering, and multiplayer features." },
          { title: "Inception-of-Things (IoT)", desc: "IoT platform with multi-device applications, K3s/K3d orchestration, and Argo CD deployment." },
          { title: "System Administration Projects", desc: "K3s & Vagrant, K3d & Argo CD, automated multi-server setups." },
          { title: "music-room – Music Mobile Solution", desc: "Full-stack mobile solution with user management, live music voting, playlist control, collaborative editing, IoT & Spotify integration." },
          { title: "WordPress Automation Stack", desc: "Production-ready Docker/Ansible stack with WordPress, PHPMyAdmin, MySQL, Prometheus, Grafana." },
          { title: "BADASS – Network Administration", desc: "BGP simulation and network automation using GNS3 & Docker containers." },
          { title: "ft_hangouts – Mobile Contact Manager", desc: "Android app for managing contacts and sending text messages, with modern mobile UX." }
        ].map((project) => (
          <article key={project.title} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
            <p className="text-sm text-zinc-400">{project.desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
