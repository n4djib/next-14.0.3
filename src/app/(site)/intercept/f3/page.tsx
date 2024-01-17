import React from "react";
import Link from "next/link";

function F3Page() {
  return (
    <div>
      F3 Page
      <br />
      <Link href="/intercept">Go Back</Link>
      <br />
      <Link href="/intercept/f2">Go to F2</Link>
    </div>
  );
}

export default F3Page;
