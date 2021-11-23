import { FrontMatterInterface } from "./FrontMatterInterface";

export interface PostInterface extends FrontMatterInterface {
    slug: string;
    fileName?: string;
    wordCount?: number;
}