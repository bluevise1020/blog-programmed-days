export const ArchiveError = createError({
  message: "処理を続行できませんでした。",
  statusCode: 500,
  statusMessage: `archive/error`,
});

export const ArchiveNotFoundError = createError({
  message: "指定の記事が見付かりません。",
  statusCode: 404,
  statusMessage: `archive/not-found`,
});

export const ArchivesError = createError({
  message: "処理を続行できませんでした。",
  statusCode: 500,
  statusMessage: `archives/error`,
});

export const ArchivesNotExistError = createError({
  message: "記事一覧が存在しません。",
  statusCode: 500,
  statusMessage: `archives/not-exist`,
});

export const CategoryError = createError({
  message: "処理を続行できませんでした。",
  statusCode: 500,
  statusMessage: `category/error`,
});

export const CategoryNotFoundError = createError({
  message: "指定のカテゴリーが見付かりません。",
  statusCode: 404,
  statusMessage: `category/not-found`,
});

export const CategoriesError = createError({
  message: "処理を続行できませんでした。",
  statusCode: 500,
  statusMessage: `categories/error`,
});

export const CategoriesNotExistError = createError({
  message: "カテゴリー一覧が存在しません。",
  statusCode: 404,
  statusMessage: `categories/not-exist`,
});

export const TagError = createError({
  message: "処理を続行できませんでした。",
  statusCode: 500,
  statusMessage: `tag/error`,
});

export const TagNotFoundError = createError({
  message: "指定のタグが見付かりません。",
  statusCode: 404,
  statusMessage: `tag/not-found`,
});

export const TagsError = createError({
  message: "処理を続行できませんでした。",
  statusCode: 500,
  statusMessage: `tags/error`,
});

export const TagsNotExistError = createError({
  message: "タグ一覧が存在しません。",
  statusCode: 404,
  statusMessage: `tags/not-exist`,
});
