import { defineField, defineType } from 'sanity'

export const photo = defineType({
  name: 'photo',
  title: 'Photography',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'place',
      title: 'Place / Menu',
      type: 'string',
      description: '매장명 또는 메뉴명 (예: 정식당, 시그니처 코스)',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: '사진에 대한 짧은 설명 (선택)',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Food / 메뉴', value: 'food' },
          { title: 'Space / 공간', value: 'space' },
          { title: 'Mood / 무드', value: 'mood' },
        ],
        layout: 'radio',
      },
      initialValue: 'food',
    }),
    defineField({
      name: 'orientation',
      title: 'Orientation',
      description: '갤러리 레이아웃용. 세로 사진은 portrait, 가로/와이드는 landscape 로 지정하면 더 자연스럽게 배치됩니다.',
      type: 'string',
      options: {
        list: [
          { title: 'Portrait (세로)', value: 'portrait' },
          { title: 'Landscape (가로)', value: 'landscape' },
          { title: 'Square (정방형)', value: 'square' },
        ],
        layout: 'radio',
      },
      initialValue: 'portrait',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      description: '갤러리 상단에 크게 노출할지 여부',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'place',
      subtitle: 'category',
      media: 'image',
    },
  },
})
