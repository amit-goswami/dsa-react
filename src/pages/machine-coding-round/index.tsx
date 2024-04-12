import React from "react";
import { ReactCarousel } from "../../components/machine-coding-round";
import { DateSelector } from "../../components/machine-coding-round";
import withLoggedInOnly from "../../middlewares/withLoggedInOnly";

const MachineCodingRound = () => {
  return (
    <React.Fragment>
      <ReactCarousel />
      <DateSelector />
    </React.Fragment>
  );
};

export default withLoggedInOnly(MachineCodingRound);
