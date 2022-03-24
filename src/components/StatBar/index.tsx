import React from 'react';

interface IProps {
  value: number;
}

import {
  BackgroundBar,
  TopBar
} from "./styles"

const StatBar = ({value}: IProps) => {
  const percentage = (value / 255) * 100;

  const defineTopBarColor = () => {
    let color = "white"

    if (value >= 0 && value <= 51) {
      color = "#EEDD1D";
    } else if(value > 51 && value <= 102) {
      color = "#EEC51D";
    } else if(value > 102 && value <= 153) {
      color = "#EE9E1D";
    } else if(value > 153 && value <= 204) {
      color = "#EE681D";
    } else {
      color = "#EE2C1D";
    }

    return color;
  }

  return (
    <>
      <BackgroundBar>
        <TopBar 
          style={{ backgroundColor: defineTopBarColor(), width: `${percentage}%` }}
        />
      </BackgroundBar>
    </>
  );
}

export default StatBar;