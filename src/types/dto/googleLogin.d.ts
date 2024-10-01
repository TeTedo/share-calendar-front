interface TGoogleLoginRequest {
  code: string;
}

interface TLoginResponse {
  token: TTokenDto;
  member: TMemberDto;
}
