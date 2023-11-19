import type { Archive } from "~/types/archive";
import { ArchiveError, ArchiveNotFoundError } from "~/server/utils/errors";
import { FetchError, fetchGet } from "~/server/utils/microcms";

export default defineEventHandler(async (event): Promise<Archive> => {
  const contentId = getRouterParam(event, "contentId") ?? undefined;
  if (!contentId) throw ArchiveNotFoundError;

  let retval;

  try {
    retval = await fetchGet<Archive>(`/v1/blogs/${contentId}`);
  } catch (exception) {
    if (exception instanceof FetchError) {
      if (exception.statusCode === 404) {
        throw ArchiveNotFoundError;
      }
    }
    throw ArchiveError;
  }

  if (!retval) throw ArchiveError;

  return retval;
});
