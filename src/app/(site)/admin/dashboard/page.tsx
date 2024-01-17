import { getServerSession } from "next-auth/next";
import ClientSession from "./ClientSession";
import { authOptions } from "@/lib/next-auth/authOptions";

async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="text-xl">Dashboard Page</h1>
      <br />
      <p>Server Session: {JSON.stringify(session)}</p>
      <br />
      <ClientSession />
    </div>
  );
}

export default DashboardPage;
