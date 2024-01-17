import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-gray-500 border-2 border-solid p-10 m-1 shadow-md hover:shadow-xl rounded">
      {children}
    </div>
  );
}

export default Card;
