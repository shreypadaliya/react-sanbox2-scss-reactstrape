// Icon.js

import React from "react";
import { ReactComponent as Icon1 } from "../assets/svgs/SVG (11).svg";
import { ReactComponent as Icon2 } from "../assets/svgs/SVG (22).svg";
import { ReactComponent as Icon3 } from "../assets/svgs/SVG (3).svg";
import { ReactComponent as Icon4 } from "../assets/svgs/SVG (4).svg";
import { ReactComponent as Icon5 } from "../assets/svgs/SVG (5).svg";
import { ReactComponent as Icon6 } from "../assets/svgs/SVG (6).svg";
import { ReactComponent as Icon7 } from "../assets/svgs/SVG.svg";
import { ReactComponent as Icon8 } from "../assets/svgs/SVG (1).svg";
import { ReactComponent as Icon9 } from "../assets/svgs/SVG (2).svg";
import { ReactComponent as Icon10 } from "../assets/svgs/SVG (7).svg";
import { ReactComponent as Icon11 } from "../assets/svgs/SVG (8).svg";
import { ReactComponent as Icon12 } from "../assets/svgs/SVG (9).svg";

export const Icon = ({ name, ...props }) => {
  switch (name) {
    case "icon1":
      return <Icon1 {...props} />;
    case "icon2":
      return <Icon2 {...props} />;
    case "icon3":
      return <Icon3 {...props} />;
    case "icon4":
      return <Icon4 {...props} />;
    case "icon5":
      return <Icon5 {...props} />;
    case "icon6":
      return <Icon6 {...props} />;
    case "icon7":
      return <Icon7 {...props} />;
    case "icon8":
      return <Icon8 {...props} />;
    case "icon9":
      return <Icon9 {...props} />;
    case "icon10":
      return <Icon10 {...props} />;
    case "icon11":
      return <Icon11 {...props} />;
    case "icon12":
      return <Icon12 {...props} />;
    default:
      return null;
  }
};
