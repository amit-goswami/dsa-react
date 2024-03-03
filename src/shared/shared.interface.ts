export enum USELOCAL_STORAGE {
  USER_TOKEN = "userToken",
}

export interface IUser {
  name: string | null;
}

export enum LOGIN_TOKEN {
  TOKEN = "amit",
}

export enum AUTH_MESSAGE {
  TOKEN_REQUIRED = "Token is required",
  INVALID_TOKEN = "Invalid token",
  USER_LOGGED_IN = "User logged in successfully",
  USER_LOGGED_OUT = "User logged out successfully",
}
