import { MicroCMSListContent, MicroCMSListResponse } from "microcms-js-sdk";

export type Tag = {
  name?: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type Tags = MicroCMSListResponse<Tag>;

export type ListContentTag = MicroCMSListContent & Tag;
