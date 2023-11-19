import { MicroCMSContentId, MicroCMSDate, MicroCMSImage, MicroCMSListResponse } from "microcms-js-sdk";
import { ListContentCategory } from "./category";
import { Tag } from "./tag";

export type Archive = {
  title?: string;
  content?: string;
  eyecatch?: MicroCMSImage;
  category?: ListContentCategory;
  tags?: Array<ListContentTag>;
} & MicroCMSContentId &
  MicroCMSDate;

export type Archives = MicroCMSListResponse<Archive>;
