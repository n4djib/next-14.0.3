import React from "react";
import Link from "next/link";

function F1Page() {
  return (
    <div>
      <span className="text-red-600">Intercepted</span> F1 Page{" "}
      <Link href="/intercept">Go Back</Link>
    </div>
  );
}

export default F1Page;
