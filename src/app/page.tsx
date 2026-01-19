import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <section className="mb-12">
        <h1 className="mb-3 text-3xl font-bold">
          Ali Rahmoune – C/C++ & DevOps Developer
        </h1>
        <p className="mb-2 text-gray-700">
          Software Developer (C/C++) with a strong background in systems,
          networking, and Linux, now extending into TypeScript-based full‑stack
          web development (NestJS, Angular, PostgreSQL). [file:2]
        </p>
        <p className="mb-2 text-gray-700">
          Trained at 42 Luxembourg through an intensive, project‑based
          curriculum focused on UNIX programming, multithreading, networking,
          HTTP servers, Docker containerization, and software rigor. [file:2]
        </p>
        <p className="text-gray-700">
          Combines 25+ years of IT operations experience with modern web stack
          expertise, currently specializing in DevOps and Cybersecurity. [file:2]
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">Key skills</h2>
        <ul className="ml-6 list-disc space-y-1 text-gray-700">
          <li>Programming: C, C++, Bash, Python, JavaScript/TypeScript, SQL. [file:2]</li>
          <li>Web: HTTP/1.1, REST APIs, NestJS, Angular, Node.js. [file:2]</li>
          <li>DevOps: Docker, Docker Compose, CI/CD with GitHub Actions. [file:2]</li>
          <li>Systems & Networking: Linux admin, TCP/IP, routing, DNS, SSH, VoIP. [file:2]</li>
          <li>Cybersecurity: input validation, SQLi/XSS protection, secure auth, HTTPS/WSS. [file:2]</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">Highlights</h2>
        <ul className="ml-6 list-disc space-y-1 text-gray-700">
          <li>
            Full‑stack SPA for a cardiology clinic (NestJS, Angular, PostgreSQL, Docker). [file:2]
          </li>
          <li>
            ft_transcendence Pong and full‑stack web app with real‑time features and security. [file:2]
          </li>
          <li>
            Custom HTTP/1.1 server and UNIX shell in C/C++. [file:2]
          </li>
          <li>
            Multi‑service Docker Compose infrastructure and CI/CD workflows. [file:2]
          </li>
        </ul>
      </section>

      <section className="flex flex-wrap gap-4">
        <Link href="/projects" className="text-blue-600 underline">
          View projects
        </Link>
        <Link href="/experience" className="text-blue-600 underline">
          Professional experience
        </Link>
        <Link href="/education" className="text-blue-600 underline">
          Education & certifications
        </Link>
      </section>
    </main>
  );
}
