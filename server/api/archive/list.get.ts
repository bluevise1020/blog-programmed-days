import type { Archives } from "~/types/archive";
import { ArchivesError, ArchivesNotExistError } from "~/server/utils/errors";
import { FetchError, fetchGet } from "~/server/utils/microcms";

export default defineEventHandler(async (): Promise<Archives> => {
  let retval;

  try {
    retval = await fetchGet<Archives>(`/v1/blogs`, {
      fields: ["id", "title", "eyecatch", "publishedAt", "createdAt", "category", "tags"],
    });
  } catch (exception) {
    if (exception instanceof FetchError) {
      if (exception.statusCode === 404) {
        throw ArchivesNotExistError;
      }
    }
    throw ArchivesError;
  }

  if (!retval) throw ArchivesError;

  return retval;
});
