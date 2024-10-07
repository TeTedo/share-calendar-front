type TGoogleLoginRequest = {
  code: string;
};

type TGoogleLoginResponse = {
  token: TTokenDto;
  member: TMemberDto;
};
