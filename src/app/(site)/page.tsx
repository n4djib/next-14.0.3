// import { getUsers, getUser } from "@/lib/drizzle/users";

import TestTRPC from "../_components/TestTRPC";

export default async function Home() {
  // const users = await getUsers();
  // const user = await getUser("n4djib@gmail.com");

  // console.log({ users });

  return (
    <main className="">
      <h1 className="text-3xl">NextJs 14.0.2 </h1>
      {/* <p>{JSON.stringify(users)}</p> */}
      {/* <p>{JSON.stringify(user)}</p> */}
      <TestTRPC />
    </main>
  );
}
