import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const postDir = path.join(process.cwd(), "posts", params.slug);
  const filePath = path.join(postDir, `${params.slug}.html`);

  if (!fs.existsSync(filePath)) notFound();

  let fileContent = fs.readFileSync(filePath, "utf-8");

  // Rewrite image paths to point to this post's images folder
  fileContent = fileContent.replace(
    /src="images\/(.*?)"/g,
    `/posts/${params.slug}/images/$1`,
  );

  return (
    <article className="prose prose-lg mx-auto">
      <div dangerouslySetInnerHTML={{ __html: fileContent }} />
    </article>
  );
}
