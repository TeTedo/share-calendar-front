export class TokenUtil {
  static setRefreshToken(tokenDto: TTokenDto) {
    localStorage.setItem("refresh", tokenDto.refresh);
  }
}
