export default function ProjectsPage() {
  return (
    <main className="space-y-12 pb-16">
      <div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-zinc-400">
          Selected backend, DevOps, and systems projects from 42 Luxembourg and personal work
        </p>
      </div>

      <div className="space-y-8">
        {/* Cardiology Clinic SPA */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h2 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
            Cardiology Clinic SPA
          </h2>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              NestJS
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Angular
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              PostgreSQL
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Docker
            </span>
          </div>
          <div className="space-y-2 text-sm text-zinc-300">
            <p>
              Single‑page application for a cardiology clinic with a NestJS REST API, Angular
              frontend, and PostgreSQL database managing patients, appointments, exams, and reports.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-400">
              <li>
                Designed the database schema and implemented role‑based access control for admin,
                doctor, and assistant users.
              </li>
              <li>
                Containerized the stack with Docker Compose for one‑command local and demo deployments,
                including environment‑specific configuration.
              </li>
              <li>
                Source code stored in a private 42 repository; architectural walk‑through available
                on request.
              </li>
            </ul>
          </div>
        </article>

        {/* ft_transcendence */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h2 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
            ft_transcendence
          </h2>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              TypeScript
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              WebSockets
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Docker
            </span>
          </div>
          <div className="space-y-2 text-sm text-zinc-300">
            <p>
              Team capstone project delivering a complete web application (frontend, backend, and
              database) with containerized deployment and multi‑user support.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-400">
              <li>
                Contributed to real‑time features using WebSockets, including matchmaking and
                live game state updates.
              </li>
              <li>
                Helped design authentication, authorization, and security checks, and automated local
                setup with Docker Compose.
              </li>
              <li>
                Source code stored in a private 42 repository; detailed code and infra overview
                available during interviews.
              </li>
            </ul>
          </div>
        </article>

        {/* Webserv */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h2 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
            Webserv – HTTP/1.1 Server
          </h2>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              C++
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Networking
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              CGI
            </span>
          </div>
          <div className="space-y-2 text-sm text-zinc-300">
            <p>
              Configurable HTTP/1.1 server built with socket programming and non‑blocking I/O,
              handling request parsing, responses, and CGI integration.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-400">
              <li>
                Implemented configuration parsing, routing, and error handling for multiple virtual
                hosts and locations.
              </li>
              <li>
                Worked on non‑blocking event loop and connection management to support multiple
                concurrent clients.
              </li>
              <li>
                Source code stored in a private 42 repository; protocol and implementation details
                can be presented in person.
              </li>
            </ul>
          </div>
        </article>

        {/* Minishell */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h2 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
            Minishell
          </h2>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              C
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              UNIX
            </span>
          </div>
          <div className="space-y-2 text-sm text-zinc-300">
            <p>
              Fully functional Unix‑like shell supporting command parsing, pipes, redirections, and
              signal handling with fork/exec/wait.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-400">
              <li>
                Implemented parser, pipeline handling, and signal management (SIGINT/SIGQUIT) with
                correct behavior in interactive mode.
              </li>
              <li>
                Ensured zero leaks and robust error handling, validated with Valgrind on large test
                suites.
              </li>
              <li>
                Source code stored in a private 42 repository; happy to walk through design choices
                and edge cases.
              </li>
            </ul>
          </div>
        </article>

        {/* Inception */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h2 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
            Inception
          </h2>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Docker
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Docker Compose
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Nginx
            </span>
          </div>
          <div className="space-y-2 text-sm text-zinc-300">
            <p>
              Multi‑service Docker Compose setup with Nginx, database, and application services,
              emphasizing container isolation, networking, and reproducibility.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-400">
              <li>
                Defined separate Dockerfiles and services with named volumes, networks, and
                environment‑based configuration.
              </li>
              <li>
                Configured Nginx as a reverse proxy and handled TLS and routing between services.
              </li>
              <li>
                Project lives in a private 42 repository; deployment and architecture can be shown
                on request.
              </li>
            </ul>
          </div>
        </article>

        {/* Doom-Nukem 3D */}
        <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <h2 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
            Doom‑Nukem 3D
          </h2>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              C
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              MinilibX
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Raycasting
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              SDL2
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Pthread
            </span>
          </div>
          <div className="space-y-3 text-sm text-zinc-300">
            <p>
              3D first‑person shooter using raycasting for real‑time rendering, inspired by classic
              Doom and Duke Nukem 3D, with a custom engine and tools.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg bg-zinc-800/50 p-3">
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Core Features
                </h3>
                <ul className="space-y-1 text-xs text-zinc-400">
                  <li>• Custom raycasting engine</li>
                  <li>• Physics &amp; collision detection</li>
                  <li>• Dynamic lighting system</li>
                  <li>• Built‑in level editor</li>
                </ul>
              </div>
              <div className="rounded-lg bg-zinc-800/50 p-3">
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Advanced
                </h3>
                <ul className="space-y-1 text-xs text-zinc-400">
                  <li>• Network multiplayer (TCP/IP)</li>
                  <li>• Multithreaded rendering with pthreads</li>
                  <li>• Audio system (WAV)</li>
                  <li>• Interactive elements &amp; basic AI</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-zinc-400">
              Engine and tools are part of a private 42 repository; technical deep‑dive available
              in an interview.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
