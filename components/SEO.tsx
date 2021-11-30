/*
import React from 'react'
import { FC, useContext } from 'react';
import { ArticleJsonLd, NextSeo } from 'next-seo';

import websiteJson from "../website.json";
import { BlogContext } from '../lib/BlogContext';
import { PostInterface } from '../lib/PostInterface';

const {
    locale,
    title,
    description,
    author
} = websiteJson.languages.default;

export const DefaultSEOProps = {
    title,
    description,
    openGraph: {
        type: "website", 
        locale,
        title,
        description,
        additionalMetaTags: [{
            name: "author",
            content: author
        }]
    }
};

export const PageSeo = ({title, description}: {title: string, description: string}) => {
    return (
        <NextSeo
        title={title}
        description={description}
        openGraph={{
            title,
            description
        }}
        />
    );
};

interface BlogSeoProps extends PostInterface {
    url?: string;
    images?: string | string[];
}

export const BlogSeo: FC<BlogSeoProps> = ({
    title,
    summary,
    summary_generated,
    date,
    lastmod,
    url,
    tags,
    images = [],
    coverImage
}) => {
    const{
        title: siteTitle,
        author
    } = useContext(BlogContext);

    const publishedAt = new Date(date).toISOString();
    const modifiedAt = new Date(lastmod || date).toISOString();
    let imagesArr = 
        images.length === 0
        ? [bannerUrl]
        : typeof images === "string"
        ? [images]
        : images;

        const featuredImages = imagesArr.map(img => {
    return {
      url: `${siteUrl}${img}`,
      alt: title
    };
  });
  if (coverImage) {
    featuredImages.unshift({
      url: `${imageRoot}${coverImage}`,
      alt: title
    });
  }

    
   return (
       <>
        <NextSeo
            title={`${title} | ${siteTitle}`}
            description={summary || summary_generated}
            openGraph={{
                type: "article",
                article: {
                    publishedTime: publishedAt,
                    modifiedTime: modifiedAt,
                    authors: [author],
                    tags
                },
                //url,
                title,
                description: summary || summary_generated,
                //images: featuredImages
            }}
            /*
            additionalMetaTags={[
                {name: "twitter:image",
                content: featuredImages[0].url
            }
            ]}
            */
           /*
        />
        <ArticleJsonLd
               authorName={author}
               dateModified={publishedAt}
               datePublished={modifiedAt}
               description={summary || summary_generated}
               /*images={
                   (featuredImages && featuredImages.map(image => image.url)) || null
               }
               */
              /*
               publisherName={author}
               title={title} url={''} images={[]} publisherLogo={''}           //url = {url}
            />
       </>
   )
    
}
*/

import React from 'react'

export default function SEO() {
    return (
        <div>
            
        </div>
    )
}
