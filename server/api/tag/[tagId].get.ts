import type { Archives } from "~/types/archive";
import type { Tag } from "~/types/tag";
import { TagError, TagNotFoundError } from "~/server/utils/errors";
import { FetchError, fetchGet } from "~/server/utils/microcms";

type Retval = { archives?: Archives | null; tag?: Tag | null };

export default defineEventHandler(async (event): Promise<Retval> => {
  const tagId = getRouterParam(event, "tagId") ?? undefined;
  if (!tagId) throw TagNotFoundError;

  const retval: Retval = { archives: null, tag: null };

  try {
    retval.tag = await fetchGet<Tag>(`/v1/tags/${tagId}`);
  } catch (exception) {
    if (exception instanceof FetchError) {
      if (exception.statusCode === 404) {
        throw TagNotFoundError;
      }
    }
    throw TagError;
  }

  try {
    retval.archives = await fetchGet<Archives>(`/v1/blogs`, {
      fields: ["id", "title", "eyecatch", "publishedAt", "createdAt", "category", "tags"],
      filters: `tags[contains]${tagId}`,
    });
  } catch (exception) {
    if (exception instanceof FetchError) {
      if (exception.statusCode === 404) {
        throw ArchivesNotExistError;
      }
    }
    throw ArchivesError;
  }

  return retval;
});
