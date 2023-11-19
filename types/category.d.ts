import { MicroCMSListContent } from "microcms-js-sdk";

export type Category = {
  name?: string;
};

export type Categories = MicroCMSListResponse<Category>;

export type ListContentCategory = MicroCMSListContent & Category;
