import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

import { FrontMatterInterface } from "./FrontMatterInterface";
//import { PostInterface } from "./PostInterface";

//remark packages
import remarkMath from "remark-math";

//rehype packages
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism/lib/src";
import { PostInterface } from "./PostInterface";


const root = process.cwd();

export async function getFiles(language: string = "default") {
    return fs.readdirSync(path.join(root, "src", language));
}

export function formatSlug(slug: string) {
    return slug.replace(/\.(mdx|md)/, "");
}

export function dateSortDesc(a: number | string, b: number | string) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}

export async function getFileBySlug(
    slug: string,
    language: string = "default"
    ) {
        const mdxPath = path.join(root, "src", language, `${slug}.mdx`);
        const mdPath = path.join(root, "src", language, `${slug}.md`);
        const source = fs.existsSync(mdxPath)
        ? fs.readFileSync(mdxPath, "utf8")
        : fs.readFileSync(mdPath, "utf8");

        const { data, content } = matter(source);
        const mdxSource = await serialize(content, {
            mdxOptions: {
                remarkPlugins: [
                    require("remark-slug"),
                    require("remark-autolink-headings"),
                    require("remark-math"),
                    require("remark-code-titles"),
                    [require("remark-oembed"), {syncWidget: true}]
                ],
                rehypePlugins: [
                    require("rehype-katex"),
                    require("rehype-prism")
                ]
            }
        });

        return {
            mdxSource,
            frontMatter:{
                wordCount: content.split(/\s+/gu).length,
                slug: slug || null,
                filename: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
                ...data
            } as unknown as PostInterface
        };
}

export async function getAllFilesFrontMatter(language: string = "default"){
    const files = fs.readdirSync(path.join(root, "src", language));
    const allFrontMatter: PostInterface[] = [];

    files.forEach(file => {
        const source = fs.readFileSync(
            path.join(root, "src", language, file),
            "utf8"
        );
        const data = matter(source).data as FrontMatterInterface;
        if(data.draft !== true ) {
            allFrontMatter.push({...data, slug: formatSlug(file) })
        }
    });

    return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}


