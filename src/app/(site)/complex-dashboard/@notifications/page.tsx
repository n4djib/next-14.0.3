import Card from "@/app/_components/Card";

import Link from "next/link";

function Notifications() {
  return (
    <Card>
      Notifications <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}

export default Notifications;
