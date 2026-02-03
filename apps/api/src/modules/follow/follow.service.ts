import { Injectable } from "@nestjs/common";

@Injectable()
export class FollowService {
  follow(payload: { userId: string; mangaId: string }) {
    return {
      message: "Followed",
      payload
    };
  }
}
