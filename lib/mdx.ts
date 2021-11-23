import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

//remark packages
import remarkMath from "remark-math";

//rehype packages
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism/lib/src";

const root = process.cwd();

export function getFiles() {
    return;
};


