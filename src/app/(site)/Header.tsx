import { Session } from "next-auth";
import Link from "next/link";
import Logout from "../_components/Logout";

type Props = {
  session: Session | null;
};

export default async function Header({ session }: Props) {
  let un: string = "";
  if (session && session.user) {
    const u: any = session.user;
    un = u.username;
  }

  return (
    <div className="bg-gray-400 flex text-lg justify-between px-3 Header">
      <div className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/admin/dashboard">Dashboard</Link>
        {/* <Link href="/admin/users">Users</Link> */}
        {/* <Link href="/static">Static</Link> */}
        <Link href="/modals">Modals</Link>
        {/* <Link href="/complex-dashboard">Complex</Link> */}
        <Link href="/photos">Photos</Link>
      </div>

      <div className="flex gap-2">
        {session ? (
          <>
            {/* <Link href="/profile">Profile ({un})</Link> */}
            <Link href="/profile">({un})</Link>
            <Logout />
          </>
        ) : (
          <>
            <Link href="/auth/register">Register</Link>
            <Link href="/auth/login">Sign In</Link>
          </>
        )}
      </div>
    </div>
  );
}
