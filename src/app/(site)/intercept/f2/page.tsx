import React from "react";
import Link from "next/link";

function F2Page() {
  return (
    <div>
      F2 Page
      <br />
      <Link href="/intercept">Go Back</Link>
      <br />
      <Link href="/intercept/f3">Go to F3</Link>
    </div>
  );
}

export default F2Page;
