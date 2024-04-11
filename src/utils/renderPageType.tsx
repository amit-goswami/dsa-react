import Harkirat from "../pages/harkirat";
import HomePage from "../pages/home";
import MachineCodingRound from "../pages/machine-coding-round";

const renderPageType = (selectedNavBarItem: number) => {
  switch (selectedNavBarItem) {
    case 0:
      return <HomePage />;
    case 1:
      return <Harkirat />;
    case 2:
      return <MachineCodingRound />;
    default:
      return null;
  }
};

export default renderPageType;
