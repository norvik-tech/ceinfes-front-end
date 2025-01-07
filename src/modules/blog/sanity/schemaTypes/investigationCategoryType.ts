import { TagIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const investigationCategoryType = defineType({
  name: "investigationCategory",
  title: "Investigation category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "thumbnail",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bannerImage",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
})
