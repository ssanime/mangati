import { Controller, Get, Param } from "@nestjs/common";
import { MangaService } from "./manga.service";

@Controller("manga")
export class MangaController {
  constructor(private readonly mangaService: MangaService) {}

  @Get()
  list() {
    return this.mangaService.list();
  }

  @Get(":id")
  detail(@Param("id") id: string) {
    return this.mangaService.detail(id);
  }
}
