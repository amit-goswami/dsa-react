import React from "react";
import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar";
import useAppStore from "./store/app.store";
import renderPageType from "./utils/renderPageType";
import { UserAuth } from "./contexts/AuthContext";

function App() {
  const { user } = UserAuth();
  const { selectedNavBarItem } = useAppStore();
  return (
    <React.Fragment>
      <NavBar />
      {user && (
        <React.Fragment>
          <div className="app">{renderPageType(selectedNavBarItem)}</div>
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
