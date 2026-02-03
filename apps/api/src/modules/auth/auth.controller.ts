import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(@Body() payload: { email: string; password: string; username: string }) {
    return this.authService.register(payload);
  }

  @Post("login")
  login(@Body() payload: { email: string; password: string }) {
    return this.authService.login(payload);
  }

  @Post("refresh")
  refresh(@Body() payload: { refreshToken: string }) {
    return this.authService.refresh(payload.refreshToken);
  }
}
