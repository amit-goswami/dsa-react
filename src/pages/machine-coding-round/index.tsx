import React from "react";
import {
  DateSelector,
  ReactCarousel,
  SequenceSelector,
  TreeRenderer,
} from "../../components/machine-coding-round";
import withLoggedInOnly from "../../middlewares/withLoggedInOnly";

const MachineCodingRound = () => {
  return (
    <React.Fragment>
      <ReactCarousel />
      <DateSelector />
      <TreeRenderer />
      <SequenceSelector />
    </React.Fragment>
  );
};

export default withLoggedInOnly(MachineCodingRound);
