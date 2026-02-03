import { Injectable } from "@nestjs/common";

@Injectable()
export class RatingService {
  rate(payload: { mangaId: string; score: number }) {
    return {
      message: "Rating saved",
      payload
    };
  }
}
