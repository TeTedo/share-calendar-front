interface IGoogleLoginRequest {
  code: string;
}

interface IGoogleLoginResponse {
  token: ITokenDto;
  member: IMemberDto;
}
