export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  slug?: string;
  client?: string;
  year?: string;
  coverImage?: string;
  gallery?: string[];
  shortDescription?: string;
  description?: string;
  featured?: boolean;
  visible?: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
  image?: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  email: string;
  bio: string;
  image: string;
  linkedin: string;
  instagram: string;
  visible: boolean;
  projects: Project[];
  new?: boolean;

}