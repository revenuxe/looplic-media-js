import { defineArrayMember, defineField, defineType } from "sanity";

const categories = [
  { title: "AI Video", value: "AI Video" },
  { title: "Strategy", value: "Strategy" },
  { title: "SEO", value: "SEO" },
  { title: "UGC", value: "UGC" },
  { title: "Production", value: "Production" },
  { title: "Performance Creative", value: "Performance Creative" },
];

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (rule) => rule.required().min(20).max(80),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "settings",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      group: "content",
      validation: (rule) => rule.required().min(80).max(180),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "settings",
      options: {
        list: categories,
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      group: "settings",
      of: [defineArrayMember({ type: "string" })],
      options: {
        layout: "tags",
      },
      validation: (rule) => rule.required().min(2).max(8),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "settings",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Updated at",
      type: "datetime",
      group: "settings",
    }),
    defineField({
      name: "readingTime",
      title: "Reading time",
      description: "Estimated reading time in minutes.",
      type: "number",
      group: "settings",
      initialValue: 5,
      validation: (rule) => rule.required().min(1).max(30),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      group: "settings",
      to: [{ type: "author" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      group: "content",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required().min(20).max(140),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Paragraph", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            annotations: [
              {
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    title: "URL",
                    type: "url",
                    validation: (rule) =>
                      rule.uri({
                        allowRelative: true,
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  }),
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          name: "quote",
          title: "Pull quote",
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Quote text",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "byline",
              title: "Byline",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "text",
              subtitle: "byline",
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(3),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
      group: "seo",
      validation: (rule) => rule.required().min(35).max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
      group: "seo",
      validation: (rule) => rule.required().min(120).max(170),
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      group: "seo",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
        }),
    }),
  ],
  orderings: [
    {
      title: "Published date, newest",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage",
    },
  },
});
