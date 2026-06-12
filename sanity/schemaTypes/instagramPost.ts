import { defineField, defineType } from 'sanity'

export const instagramPost = defineType({
  name: 'instagramPost',
  title: 'Instagram',
  type: 'document',
  description: '인스타그램 게시물 큐레이션 — 보여줄 게시물의 썸네일·링크·캡션을 등록합니다.',
  fields: [
    defineField({
      name: 'image',
      title: 'Thumbnail',
      type: 'image',
      description: '게시물 대표 이미지 (인스타에서 저장해 업로드)',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'permalink',
      title: 'Instagram URL',
      type: 'url',
      description: '게시물 링크 (예: https://www.instagram.com/p/XXXX/)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: '한 줄 캡션 (선택)',
    }),
    defineField({
      name: 'postedAt',
      title: 'Posted at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'postedAtDesc',
      by: [{ field: 'postedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
    prepare({ title, media }) {
      return { title: title || 'Instagram Post', media }
    },
  },
})
