export type LoginResponse = SuccessLoginResponse | FailureLoginResponse;

export interface LoginFormData {
  username: string;
  password: string;
}
export interface SuccessLoginResponse {
  token: string;
  redirect: string;
}
export interface FailureLoginResponse {
  error: string;
}
