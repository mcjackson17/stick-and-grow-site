import { getAllPosts } from '@/lib/blog'

export default function sitemap() {
  const posts = getAllPosts()

  const blogEntries = posts.map(post => ({
    url: `https://stickandgrow.co/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [
    {
      url: 'https://stickandgrow.co',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://stickandgrow.co/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogEntries,
  ]
}
