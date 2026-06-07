import { cookies } from "next/headers";
import TestChatButton from "@/components/TestChatButton";
import ChatDrawer from "@/components/ChatDrawer";

export default async function Dashboard() {
  const cookieStore = await cookies();

  const accessToken =
    cookieStore.get("sf_access_token")?.value;

  const instanceUrl =
    cookieStore.get("sf_instance_url")?.value;

  return (
    <>
      <main className="p-8">
        <h1 className="text-3xl font-bold">
          Salesforce AI Agent Dashboard
        </h1>

        <div className="mt-6 space-y-4">
          <p>
            Connected Status:{" "}
            {accessToken
              ? "✅ Yes"
              : "❌ No"}
          </p>

          <p>
            Instance URL:{" "}
            {instanceUrl ??
              "Not Available"}
          </p>

        </div>
      </main>

      <ChatDrawer />
    </>
  );
}