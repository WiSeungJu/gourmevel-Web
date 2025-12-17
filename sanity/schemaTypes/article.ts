import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: '리스트에 보여질 짧은 설명',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Gourmevel',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Review', value: 'review'},
          {title: 'Essay', value: 'essay'},
          {title: 'News', value: 'news'},
          {title: 'Interview', value: 'interview'},
        ]
      }
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isTop',
      title: 'Top Article',
      type: 'boolean',
      description: 'Top Articles 섹션에 노출할지 여부',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      hidden: true, // 기존 body 숨김
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content Sections',
      description: '이미지와 텍스트가 짝을 이루는 섹션들을 추가하세요.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'section',
          title: 'Section',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                }
              ]
            },
            {
              name: 'text',
              title: 'Text',
              type: 'array', 
              of: [{type: 'block'}] // 서식 있는 텍스트 지원
            },
            {
              name: 'layout',
              title: 'Layout',
              type: 'string',
              options: {
                list: [
                  {title: 'Image Left / Text Right', value: 'left'},
                  {title: 'Image Right / Text Left', value: 'right'},
                  {title: 'Image Top / Text Bottom', value: 'top'},
                ],
                layout: 'radio'
              },
              initialValue: 'top'
            }
          ],
          preview: {
            select: {
              media: 'image',
              layout: 'layout',
              // 텍스트 미리보기는 선택적으로 가져오거나 생략하여 에러 방지
              title: 'text.0.children.0.text'
            },
            prepare({title, media, layout}) {
              // 텍스트가 있으면 텍스트를 제목으로, 없으면 레이아웃 정보 표시
              const displayTitle = title 
                ? (title.length > 30 ? title.substring(0, 30) + '...' : title) 
                : `Section (${layout || 'top'})`;
                
              return {
                title: displayTitle,
                media: media,
                subtitle: 'Content Section'
              }
            }
          }
        }
      ]
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})

