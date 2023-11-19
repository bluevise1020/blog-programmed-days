import type { Categories } from "~/types/category";
import { CategoriesError, CategoriesNotExistError } from "~/server/utils/errors";
import { FetchError, fetchGet } from "~/server/utils/microcms";

export default defineEventHandler(async (): Promise<Categories> => {
  let retval;

  try {
    retval = await fetchGet<Categories>(`/v1/categories`, {
      fields: ["id", "name"],
    });
  } catch (exception) {
    if (exception instanceof FetchError) {
      if (exception.statusCode === 404) {
        throw CategoriesNotExistError;
      }
    }
    throw CategoriesError;
  }

  if (!retval) throw CategoriesError;

  return retval;
});
