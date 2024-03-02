import { UserAuth } from "../contexts/AuthContext";

interface UseLoggedOutOnlyProps {}

export function withLoggedInOnly<P extends UseLoggedOutOnlyProps>(
  Component: React.ComponentType<P>
) {
  return function useLoggedOutOnlyWrapper(props: P) {
    const { user } = UserAuth();
    const isUserLoggedIn = user;
    return isUserLoggedIn ? <Component {...props} /> : null;
  };
}

export default withLoggedInOnly;
