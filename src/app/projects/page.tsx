export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Projects</h1>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">
          Cardiology Clinic SPA – NestJS, Angular, PostgreSQL
        </h2>
        <p className="text-gray-700">
          Single‑page application for a cardiology clinic with a NestJS REST
          API, Angular frontend, and PostgreSQL database for patients,
          appointments, exams, and reports. [file:2]
        </p>
        <p className="text-gray-700">
          Implements secure authentication and role‑based access control
          (admin, doctor, assistant), validated forms, and Docker/Docker
          Compose for one‑command startup. [file:2]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">
          ft_transcendence – Full‑Stack Web Application
        </h2>
        <p className="text-gray-700">
          Team capstone project delivering a complete web application
          (frontend, backend, database) with containerized deployment and
          multi‑user support. [file:2]
        </p>
        <p className="text-gray-700">
          Covers real‑time features, user management, cybersecurity, and
          DevOps, with structured project organization and documentation. [file:2]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">
          Minishell – UNIX Shell in C
        </h2>
        <p className="text-gray-700">
          Fully functional shell supporting command parsing, pipes,
          redirections, and signal handling with fork/exec/wait, verified with
          Valgrind. [file:2]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">
          Webserv – HTTP/1.1 Server
        </h2>
        <p className="text-gray-700">
          Configurable HTTP/1.1 server built with socket programming and
          non‑blocking I/O, including request parsing, responses, and CGI
          integration. [file:2]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">
          Inception – Dockerized Infrastructure
        </h2>
        <p className="text-gray-700">
          Multi‑service Docker Compose setup with Nginx, database, and backend
          services, emphasizing container isolation, networking, and
          reproducibility. [file:2]
        </p>
      </section>
    </main>
  );
}
