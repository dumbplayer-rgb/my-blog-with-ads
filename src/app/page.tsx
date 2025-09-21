import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Home() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((file) => {
    const slug = file.replace(".html", "");
    return { slug, title: slug.replace(/-/g, " ") };
  });

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold capitalize">{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
