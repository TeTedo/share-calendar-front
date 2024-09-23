interface TGoogleLoginRequest {
  code: string;
}

interface TGoogleLoginResponse {
  token: TTokenDto;
  member: TMemberDto;
}
