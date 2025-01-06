export interface UserDto {
  userId: string;
  fullName: string;
  userName: string;
  email: string;
  roles: string;
  isEmailVerified?: boolean;
  isPhoneNumberVerified?: boolean;
}
