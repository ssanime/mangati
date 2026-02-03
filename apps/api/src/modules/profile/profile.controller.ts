import { Body, Controller, Patch } from "@nestjs/common";
import { ProfileService } from "./profile.service";

@Controller("profile")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Patch()
  update(
    @Body()
    payload: {
      userId: string;
      displayName?: string;
      bio?: string;
      social?: Record<string, string>;
    }
  ) {
    return this.profileService.update(payload);
  }
}
