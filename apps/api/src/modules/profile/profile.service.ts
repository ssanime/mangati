import { Injectable } from "@nestjs/common";

@Injectable()
export class ProfileService {
  update(payload: {
    userId: string;
    displayName?: string;
    bio?: string;
    social?: Record<string, string>;
  }) {
    return {
      message: "Profile updated",
      payload
    };
  }
}
