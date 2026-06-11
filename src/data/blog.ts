export interface BlogPost {
  slug: string;
  source: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary?: string;
    image?: string;
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Empty for now - add blog posts here later
  return [];
}

export async function getPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}
