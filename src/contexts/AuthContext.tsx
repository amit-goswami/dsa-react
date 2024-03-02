import toast from "react-hot-toast";
import NotAuthenticated from "../components/NotAuthenticated";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import {
  AUTH_MESSAGE,
  IUser,
  LOGIN_TOKEN,
  USELOCAL_STORAGE,
} from "../shared/shared.interface";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface IAuthContext {
  user: IUser | null;
  loading: Boolean;
  signIn: () => string | undefined;
  logOut: () => void;
}

const AuthContext = React.createContext<IAuthContext>({
  user: null,
  loading: true,
  signIn: () => "",
  logOut: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  const { getItem, removeItem, setItem } = useLocalStorage(
    USELOCAL_STORAGE.USER_TOKEN
  );

  const signIn = () => {
    const token = prompt("Enter your token");
    if (!token || token !== LOGIN_TOKEN.TOKEN)
      return toast.error(AUTH_MESSAGE.INVALID_TOKEN);
    setItem(token);
    setUser({
      name: token,
    });
    toast.success(AUTH_MESSAGE.USER_LOGGED_IN);
  };

  const logOut = () => {
    setUser(null);
    removeItem();
    toast.success(AUTH_MESSAGE.USER_LOGGED_OUT);
  };

  const checkIsUserLoggedIn = () => {
    const token = getItem();
    if (!token) {
      return setUser(null);
    }
    return setUser({ name: null });
  };

  useEffect(() => {
    setLoading(false);
    return () => checkIsUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, logOut }}>
      {loading ? <NotAuthenticated /> : children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);
