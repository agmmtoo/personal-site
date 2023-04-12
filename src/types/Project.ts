export default interface Project {
    name: string;
    featured?: boolean;
    description: string;
    url: string;
    repo: string;
    slug: string;
    tags: string[];
  }