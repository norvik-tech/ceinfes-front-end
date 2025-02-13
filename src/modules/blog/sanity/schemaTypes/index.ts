import { type SchemaTypeDefinition } from "sanity"

import { postCategoryType } from "./postCategoryType"
import { postType } from "./postType"
import { investigationPostType } from "./investigationPostType"
import { investigationCategoryType } from "./investigationCategoryType"
import { postSectionType } from "./postSectionType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postCategoryType,
    postType,
    investigationPostType,
    investigationCategoryType,
    postSectionType,
  ],
}
