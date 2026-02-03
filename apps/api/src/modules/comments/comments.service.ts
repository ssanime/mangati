import { Injectable } from "@nestjs/common";

@Injectable()
export class CommentsService {
  list(chapterId: string) {
    return {
      chapterId,
      comments: []
    };
  }

  create(chapterId: string, message: string) {
    return {
      chapterId,
      message,
      status: "created"
    };
  }
}
