import { Body, Controller, Post } from "@nestjs/common";
import { AdminService } from "./admin.service";

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post("manga")
  createManga(@Body() payload: { title: string; type: string }) {
    return this.adminService.createManga(payload);
  }

  @Post("chapter")
  uploadChapter(@Body() payload: { mangaId: string; chapterNumber: number }) {
    return this.adminService.uploadChapter(payload);
  }
}
