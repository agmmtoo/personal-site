export default interface Project {
    name: string;
    featured?: boolean;
    description: string;
    url: string;
    slug: string;
    tags: string[];
    hidden?: boolean;
  }