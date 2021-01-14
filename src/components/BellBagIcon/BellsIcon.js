import React from "react";
import { SvgIcon } from "@material-ui/core";
import { ReactComponent as BellBag } from "../../images/bells.svg";

function BellsIcon() {
  return (
    <SvgIcon style={{ fill: "#52442f" }}>
      <BellBag />
    </SvgIcon>
  );
}

export default BellsIcon;
