const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-math")],
    rehypePlugins: [
      require("rehype-prism"),
      require("rehype-join-line"),
      require("rehype-katex"),
    ],
  },
});

const nextConfig = {
  target: "serverless",

  trailingSlash: true,
  
  pageExtensions: ["jsx", "js", "mdx", "ts", "tsx"],

  env: {
    VERSION: require("./package.json").version,
  },


};

module.exports = withMDX(nextConfig);