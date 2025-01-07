import { DocumentTextIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const investigationPostType = defineType({
  name: "investigationPost",
  title: "Investigation post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "mainImage",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: { type: "investigationCategory" } }),
      ],
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "markdown",
    }),
  ],
})
