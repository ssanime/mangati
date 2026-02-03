import { Controller, Get, Param } from "@nestjs/common";
import { ChaptersService } from "./chapters.service";

@Controller("chapters")
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @Get(":mangaId")
  list(@Param("mangaId") mangaId: string) {
    return this.chaptersService.list(mangaId);
  }
}
