import React from "react";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

function PhotosLayout({ children, modal }: Props) {
  return (
    <>
      <div>{modal}</div>
      <div>{children}</div>
    </>
  );
}

export default PhotosLayout;
