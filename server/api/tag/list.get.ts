import type { Tags } from "~/types/tag";
import { TagsError, TagsNotExistError } from "~/server/utils/errors";
import { FetchError, fetchGet } from "~/server/utils/microcms";

export default defineEventHandler(async (): Promise<Tags> => {
  let retval;

  try {
    retval = await fetchGet<Tags>(`/v1/tags`, {
      fields: ["id", "name"],
    });
  } catch (exception) {
    if (exception instanceof FetchError) {
      if (exception.statusCode === 404) {
        throw TagsNotExistError;
      }
    }
    throw TagsError;
  }

  if (!retval) throw TagsError;

  return retval;
});
