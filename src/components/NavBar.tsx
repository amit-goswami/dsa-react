import { UserAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const NavBar = () => {
  const { user, signIn, logOut } = UserAuth();
  const { theme, toggleTheme } = useTheme();
  return (
    <section className="flex">
      <nav>
        <div>
          {user && <button onClick={() => logOut()}>Logout</button>}
          {!user && <button onClick={() => signIn()}>Login</button>}
        </div>
      </nav>
      <div className="logo" onClick={() => toggleTheme()}>
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </div>
    </section>
  );
};

export default NavBar;
