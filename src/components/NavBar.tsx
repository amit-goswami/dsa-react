import { UserAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const { user, signIn, logOut } = UserAuth();
  return (
    <nav>
      {user && <button onClick={() => logOut()}>Logout</button>}
      {!user && <button onClick={() => signIn()}>Login</button>}
    </nav>
  );
};

export default NavBar;
