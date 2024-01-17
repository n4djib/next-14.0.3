import React from "react";

type Props = {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
};

function layout({ children, users, revenue, notifications }: Props) {
  return (
    <>
      {children}
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex">{notifications}</div>
      </div>
    </>
  );
}

export default layout;
