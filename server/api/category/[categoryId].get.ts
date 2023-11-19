import type { Archives } from "~/types/archive";
import type { Category } from "~/types/category";
import { CategoryError, CategoryNotFoundError } from "~/server/utils/errors";
import { FetchError, fetchGet } from "~/server/utils/microcms";

type Retval = { archives?: Archives | null; category?: Category | null };

export default defineEventHandler(async (event): Promise<Retval> => {
  const categoryId = getRouterParam(event, "categoryId") ?? undefined;
  if (!categoryId) throw CategoryNotFoundError;

  const retval: Retval = { archives: null, category: null };

  try {
    retval.category = await fetchGet<Category>(`/v1/categories/${categoryId}`);
  } catch (exception) {
    if (exception instanceof FetchError) {
      if (exception.statusCode === 404) {
        throw CategoryNotFoundError;
      }
    }
    throw CategoryError;
  }

  try {
    retval.archives = await fetchGet<Archives>(`/v1/blogs`, {
      fields: ["id", "title", "eyecatch", "publishedAt", "createdAt", "category", "tags"],
      filters: `category[equals]${categoryId}`,
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
