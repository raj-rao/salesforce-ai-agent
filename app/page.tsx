import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">
        Salesforce AI Agent
      </h1>

      <p className="mt-4">
        Phase 2 implementation.
      </p>

      <div className="mt-6">
        <a
          href="/api/auth/login"
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Connect Salesforce
        </a>
      </div>
    </main>
  );
}