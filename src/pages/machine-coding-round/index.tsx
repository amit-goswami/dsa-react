import { ReactCarousel } from "../../components/machine-coding-round";
import withLoggedInOnly from "../../middlewares/withLoggedInOnly";

const MachineCodingRound = () => {
  return <ReactCarousel />;
};

export default withLoggedInOnly(MachineCodingRound);
