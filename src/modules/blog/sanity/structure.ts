import type { StructureResolver } from "sanity/structure"

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog Ceinfes")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("postCategory").title("Posts categories"),
      S.documentTypeListItem("investigationPost").title("Investigation Posts"),
      S.documentTypeListItem("investigationCategory").title("Investigation posts categories"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["post", "postCategory", "investigationPost", "investigationCategory"].includes(item.getId()!)
      ),
    ])
