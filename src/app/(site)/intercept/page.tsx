import React from "react";
import Link from "next/link";

function InterceptPage() {
  return (
    <div>
      <h1>Page </h1>
      <Link href="/intercept/f1">Go to f1 (intercepted)</Link>
      <br />
      <br />
      <Link href="/intercept/f2">Go to f2 (intercepted)</Link>
      <br />
      <br />
      <Link href="/intercept/f3">Go to f3</Link>
    </div>
  );
}

export default InterceptPage;
