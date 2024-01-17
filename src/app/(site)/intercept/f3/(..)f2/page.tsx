import React from "react";
import Link from "next/link";

function InterceptedF2Page() {
  return (
    <div>
      Intercepted F2 Page
      <br />
      <Link href="/intercept">Go Back</Link>
      <br />
      <Link href="/intercept/f3">Go to F3</Link>
    </div>
  );
}

export default InterceptedF2Page;
