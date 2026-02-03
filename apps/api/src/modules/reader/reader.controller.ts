import { Body, Controller, Post } from "@nestjs/common";
import { ReaderService } from "./reader.service";

@Controller("reader")
export class ReaderController {
  constructor(private readonly readerService: ReaderService) {}

  @Post("progress")
  saveProgress(@Body() payload: { userId: string; chapterId: string; page: number }) {
    return this.readerService.saveProgress(payload);
  }
}
