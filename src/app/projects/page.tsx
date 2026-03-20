export default function ProjectsPage() {
  return (
    <main className="space-y-16 pb-16">
      <div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-zinc-400">
          Backend, systems, and full-stack projects spanning healthcare, public platforms,
          and real-time applications.
        </p>
      </div>

      {/* ================= Mini Project Cards ================= */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* QuickPark Card */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur hover:border-emerald-400 transition-all">
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
          <div className="mt-2 flex gap-3">
            <a href="#" className="text-xs text-emerald-400 hover:underline">Live Demo</a>
            <a href="#" className="text-xs text-emerald-400 hover:underline">GitHub</a>
          </div>
        </div>

        {/* Parcel Tracking Card */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur hover:border-emerald-400 transition-all">
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">Parcel Tracking</h3>
          <p className="text-xs text-zinc-400 mb-2">
            Modern Angular 21 standalone app with full E2E test coverage 🎉
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="badge">Angular 21</span>
            <span className="badge">TailwindCSS</span>
            <span className="badge">Playwright</span>
          </div>
          <ul className="mt-2 list-disc pl-4 text-xs text-zinc-400 space-y-1">
            <li>Responsive UI with animations</li>
            <li>Auth: Forms, guards, protected routes</li>
            <li>Search + filters + copy feedback</li>
            <li>Sortable history table (20 parcels)</li>
            <li>Multilingual: FR/EN/DE/LU</li>
          </ul>
          <div className="mt-2 flex gap-3">
            <a href="#" className="text-xs text-emerald-400 hover:underline">Live Demo</a>
            <a href="#" className="text-xs text-emerald-400 hover:underline">GitHub</a>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-zinc-100">
          🚀 Featured Projects
        </h2>

        {/* QuickPark */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
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
          <ul className="mt-3 list-disc pl-5 text-xs text-zinc-400 space-y-1">
            <li>Interactive map-based UI using Leaflet</li>
            <li>Real-time updates via WebSocket (Socket.IO)</li>
            <li>REST + WebSocket hybrid backend architecture (NestJS)</li>
            <li>Dockerized full-stack deployment (frontend + backend + database)</li>
            <li>Designed for smart city and production-ready usage</li>
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-zinc-500">Independent project</span>
            <div className="flex gap-3">
              <a href="#" className="text-xs text-emerald-400 hover:underline">Live Demo</a>
              <a href="#" className="text-xs text-emerald-400 hover:underline">GitHub</a>
            </div>
          </div>
        </article>

        {/* Parcel Tracking */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
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
          <ul className="mt-3 list-disc pl-5 text-xs text-zinc-400 space-y-1">
            <li>Responsive UI with animations</li>
            <li>Auth: Forms, guards, protected routes</li>
            <li>Search + filters + copy feedback</li>
            <li>Sortable history table (20 parcels)</li>
            <li>Multilingual: FR/EN/DE/LU</li>
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-zinc-500">Independent project</span>
            <div className="flex gap-3">
              <a href="#" className="text-xs text-emerald-400 hover:underline">Live Demo</a>
              <a href="#" className="text-xs text-emerald-400 hover:underline">GitHub</a>
            </div>
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
