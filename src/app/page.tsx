import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Home() {
  const postsDir = path.join(process.cwd(), "posts");
  const folders = fs
    .readdirSync(postsDir, { withFileTypes: true })
    .filter((f) => f.isDirectory())
    .map((f) => f.name);

  const posts = folders.map((folder) => ({
    slug: folder,
    title: folder.replace(/-/g, " "),
  }));

  return (
    <main>
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2 capitalize">
                {post.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
