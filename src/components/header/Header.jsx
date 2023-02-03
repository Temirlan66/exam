import React, { memo } from "react";
import MyButton from "../button/MyButton";

const Header = () => {
  return (
    <>
      <MyButton>Вay theme</MyButton>
      <MyButton>Night theme</MyButton>
    </>
  );
};

export default memo(Header);
