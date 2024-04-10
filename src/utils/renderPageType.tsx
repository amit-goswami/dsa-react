import Harkirat from "../pages/harkirat";
import HomePage from "../pages/home";

const renderPageType = (selectedNavBarItem: number) => {
  switch (selectedNavBarItem) {
    case 0:
      return <HomePage />;
    case 1:
      return <Harkirat />;
    default:
      return null;
  }
};

export default renderPageType;
