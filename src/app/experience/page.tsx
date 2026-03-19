export default function ExperiencePage() {
  return (
    <main className="space-y-12 pb-16">
      <div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Professional Experience</h1>
        <p className="text-zinc-400">25+ years in IT operations, systems, and networks</p>
      </div>

      <div className="space-y-8">
        {/* Main Experience Block */}
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur">
          <h2 className="mb-4 text-2xl font-semibold text-emerald-400">
            IT / Systems & Networks Roles
          </h2>
          <p className="mb-2 text-sm text-zinc-500">2001–2024</p>
          <div className="space-y-3 text-sm text-zinc-300">
            <p>
              Managed and operated critical IT and network infrastructures across
              telecommunications, aviation, and logistics sectors, designing and
              maintaining secure, hardened Linux‑based systems.
            </p>
            <p>
              Led technical teams, coordinated cross‑functional projects, and
              worked in mission‑critical production environments with strict
              operational constraints.
            </p>
          </div>
        </article>

        {/* Role Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur">
            <h3 className="mb-1 font-semibold text-zinc-200">Office Head – Contract Management</h3>
            <p className="text-sm text-zinc-500">2016–2018</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur">
            <h3 className="mb-1 font-semibold text-zinc-200">IT/CMMS & Networks Manager</h3>
            <p className="text-sm text-zinc-500">2013–2016</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur">
            <h3 className="mb-1 font-semibold text-zinc-200">Network & Links Operations Manager</h3>
            <p className="text-sm text-zinc-500">2012–2013</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur">
            <h3 className="mb-1 font-semibold text-zinc-200">IT & Networks Manager</h3>
            <p className="text-sm text-zinc-500">2008–2012</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur md:col-span-2">
            <h3 className="mb-1 font-semibold text-zinc-200">Technical Consultant – ICT</h3>
            <p className="text-sm text-zinc-500">2018–2024</p>
          </div>
        </div>
      </div>
    </main>
  );
}
