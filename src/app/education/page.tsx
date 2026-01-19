export default function EducationPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Education & certifications</h1>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          42 Luxembourg – Software Engineering
        </h2>
        <p className="mb-2 text-gray-700">
          Common Core completed with 28+ projects in C/C++, UNIX programming,
          networking, multithreading, HTTP servers, Docker, and TypeScript web
          development. [file:1][file:2]
        </p>
        <p className="text-gray-700">
          Advanced Part in progress (DevOps & Cybersecurity specialization),
          current level 11.67/21, focusing on containerization, infra
          automation, security hardening, and network administration. [file:1][file:2]
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">Other education</h2>
        <ul className="ml-6 list-disc space-y-1 text-gray-700">
          <li>Luxembourgish A1 – INLL (2023). [file:2]</li>
          <li>Command & Staff Diploma – Higher School of Aviation. [file:2]</li>
          <li>Technical Logistics Certificate – Northrop Grumman, USA. [file:2]</li>
          <li>Radio Engineering Mastery Certificate. [file:2]</li>
          <li>ICT Qualification – Northrop Grumman, USA. [file:2]</li>
        </ul>
      </section>
    </main>
  );
}
