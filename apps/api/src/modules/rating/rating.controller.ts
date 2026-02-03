import { Body, Controller, Post } from "@nestjs/common";
import { RatingService } from "./rating.service";

@Controller("ratings")
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post()
  rate(@Body() payload: { mangaId: string; score: number }) {
    return this.ratingService.rate(payload);
  }
}
