export type UserProfileToken = {
  userName: string;
  email: string;
  token: string;
  role: Role;
};

export type UserProfile = {
  userName: string;
  email: string;
  role: Role;
};

export enum Role {
  general = "general",
  admin = "admin",
  agent = "agent",
}
