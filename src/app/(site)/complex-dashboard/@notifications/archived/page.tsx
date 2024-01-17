import Card from "@/app/_components/Card";
import React from "react";
import Link from "next/link";

function ArchivedNotifications() {
  return (
    <Card>
      Archived Notifications <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}

export default ArchivedNotifications;
