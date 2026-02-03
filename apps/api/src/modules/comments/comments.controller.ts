import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CommentsService } from "./comments.service";

@Controller("comments")
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get(":chapterId")
  list(@Param("chapterId") chapterId: string) {
    return this.commentsService.list(chapterId);
  }

  @Post(":chapterId")
  create(
    @Param("chapterId") chapterId: string,
    @Body() payload: { message: string }
  ) {
    return this.commentsService.create(chapterId, payload.message);
  }
}
