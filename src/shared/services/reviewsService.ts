import axios, { AxiosResponse } from "axios";
import { ReviewType } from "../models/Review";

export default class reviewsService {
  static async getReviews(): Promise<ReviewType[] | undefined> {
    try {
      const { data } = await axios.get("http://localhost:7777/api/reviews");
      return data;
    } catch (error) {
      console.error(error);
    }
      
  }
}
