import jwt from 'jsonwebtoken';

class Token {
  jwt;

  secret: string;

  jwtConfig: object;

  constructor() {
    this.jwt = jwt;
    this.secret = process.env.JWT_SECRET || 'secret';
    this.jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
  }

  public async generateToken(entry: object): Promise<string> {
    const token = this.jwt.sign(entry, this.secret, this.jwtConfig);
    return token;
  }
}

export default Token;
