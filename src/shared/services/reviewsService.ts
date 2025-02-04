import axios, { AxiosResponse } from "axios";
import { ReviewType } from "../models/Review";

export default class reviewsService {
  static async getReviews(): Promise<ReviewType[] | undefined> {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/reviews`);
      return data;
    } catch (error) {
      console.error(error);
    }
      
  }
}
