import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

interface Params {
  slug: string;
}

// Static export: provide all slugs
export async function generateStaticParams(): Promise<Params[]> {
  const postsDir = path.join(process.cwd(), "posts");
  const folders = fs
    .readdirSync(postsDir, { withFileTypes: true })
    .filter((f) => f.isDirectory())
    .map((f) => f.name);

  return folders.map((slug) => ({ slug }));
}

// Async page component
export default async function BlogPost({ params }: { params: Params }) {
  const slug = params.slug;

  const postDir = path.join(process.cwd(), "posts", slug);
  const filePath = path.join(postDir, `${slug}.html`);

  if (!fs.existsSync(filePath)) notFound();

  let fileContent = fs.readFileSync(filePath, "utf-8");

  // Rewrite image paths
  fileContent = fileContent.replace(
    /src="images\/(.*?)"/g,
    `/posts/${slug}/images/$1`,
  );

  return (
    <article className="prose prose-lg mx-auto p-6">
      <div dangerouslySetInnerHTML={{ __html: fileContent }} />
    </article>
  );
}
