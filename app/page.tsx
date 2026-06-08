import { cookies } from "next/headers";
import ChatDrawer from "@/components/ChatDrawer";

export default async function Home() {
  const cookieStore = await cookies();

  const accessToken =
    cookieStore.get("sf_access_token")?.value;

  const instanceUrl =
    cookieStore.get("sf_instance_url")?.value;

  return (
    <>
      <main className="p-8">
        <h1 className="text-4xl font-bold">
          Salesforce AI Agent
        </h1>

        <p className="mt-2 text-gray-600">
          OpenAI + Salesforce MCP Reference Implementation
        </p>

        <div className="mt-8 rounded border p-6">
          <h2 className="text-xl font-semibold">
            Salesforce Connection
          </h2>

          <p className="mt-4">
            Connected:{" "}
            {accessToken
              ? "✅ Yes"
              : "❌ No"}
          </p>

          <p className="mt-2 break-all">
            Instance URL:{" "}
            {instanceUrl ??
              "Not Connected"}
          </p>

          {!accessToken && (
            <a
              href="/api/auth/login"
              className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white"
            >
              Connect Salesforce
            </a>
          )}
        </div>

        <div className="mt-8 rounded border p-6">
          <h2 className="text-xl font-semibold">
            Project Overview
          </h2>

          <p className="mt-4">
            This application demonstrates a
            custom Salesforce MCP client
            built with Next.js and deployed
            to Vercel.
          </p>

          <ul className="mt-4 list-disc pl-6">
            <li>
              OAuth Authentication
            </li>
            <li>
              Salesforce MCP Integration
            </li>
            <li>
              Tool Discovery
            </li>
            <li>
              SOQL Query Execution
            </li>
            <li>
              AI Agent Architecture
            </li>
          </ul>
        </div>
      </main>
      <ChatDrawer />
    </>
  );
}