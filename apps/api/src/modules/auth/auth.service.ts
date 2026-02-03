import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  async register(payload: { email: string; password: string; username: string }) {
    const hashedPassword = await bcrypt.hash(payload.password, 10);

    return {
      message: "User registered",
      user: {
        email: payload.email,
        username: payload.username,
        password: hashedPassword
      }
    };
  }

  async login(payload: { email: string; password: string }) {
    return {
      accessToken: "access-token",
      refreshToken: "refresh-token",
      email: payload.email
    };
  }

  async refresh(refreshToken: string) {
    return {
      accessToken: "new-access-token",
      refreshToken
    };
  }
}
