import { defineField, defineType } from "sanity"

export const postSectionType = defineType({
  name: "section",
  title: "Section",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Section Title",
    }),
    defineField({
      name: "description",
      type: "markdown",
      title: "Section Description",
    }),
  ],
})
