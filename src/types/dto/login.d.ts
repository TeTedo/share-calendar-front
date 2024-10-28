interface IGoogleLoginRequest {
  code: string;
}

interface ILoginResponse {
  token: ITokenDto;
  member: IMemberDto;
}
