import fs from "fs";
import path from "path";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), "posts", `${params.slug}.html`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return (
    <article className="prose prose-lg mx-auto">
      <div dangerouslySetInnerHTML={{ __html: fileContent }} />

      {/* After Post Ad */}
      <div className="mt-8">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="YOUR-ADSENSE-CLIENT-ID"
          data-ad-slot="1122334455"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script
          dangerouslySetInnerHTML={{
            __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
          }}
        />
      </div>
    </article>
  );
}
