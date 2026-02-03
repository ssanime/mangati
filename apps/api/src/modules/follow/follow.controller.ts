import { Body, Controller, Post } from "@nestjs/common";
import { FollowService } from "./follow.service";

@Controller("follow")
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post()
  follow(@Body() payload: { userId: string; mangaId: string }) {
    return this.followService.follow(payload);
  }
}
