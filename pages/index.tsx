import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {IndexPosts} from "../components/pages/IndexPosts"

import { getAllFilesFrontMatter } from '../lib/mdx';
import { FrontMatterInterface } from '../lib/FrontMatterInterface';
import { PostInterface } from '../lib/PostInterface';

import websiteJson from "../website.json";

interface PageProps {
  posts: PostInterface[];
}

const getStaticProps: GetStaticProps<PageProps> = async () => {
  const posts = await getAllFilesFrontMatter();
  return { props: {posts} }
}

const Home: NextPage<PageProps> = ({posts}) => {
  const filteredPosts = posts && posts.slice(0, websiteJson.maxPosts);
  return <IndexPosts posts={filteredPosts} />;
}

export {getStaticProps};
export default Home;
