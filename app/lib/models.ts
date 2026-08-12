export interface Project {
  id: string;
  title: string;
  coverImage: string;
  location: string;
  country: string;
  category: string;
  slug?: string;
  client?: string;
  year: number;
  area: number;
  gallery: string[];
  shortDescription?: string;
  description?: {
    en: string;
    es: string;
  }
  featured?: boolean;
  visible?: boolean;
  home?: boolean;
  finalized?: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
  isNew?: boolean;
}

export interface StorageSize {
  used: number;
  percent: number;
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

export interface CurrentUser {
  email: string;
  password: string;
  token: string;
  avatar: string;
  role: string;
  name: string;
  createAt: string;
}

export interface UserAuth {
  email: string,
  pwd: string;
}

export interface LanguagesTab {
  tab: keyof Languages;
  prev: keyof Languages;
}

export type IsDirty = { state: boolean, form: Dictionary };

export interface Languages {
  en: Dictionary,
  es: Dictionary
}

export interface Dictionary {
  id: keyof Languages;
  label: string;
  navigation: {
    label: string;
    home: string;
    projects: string;
    staff: string;
    contact: string;
  },
  pages: {
    home: {
      banner: {
        title: string;
        subtitle: string;
      },
      philosophy: {
        title: string;
        subtitle: string;
      }
    },
    projects: {
      name: string;
      tag: string;
    },
    contact: {
      name: string;
      title: string;
      subtitle: string;
    },
    staff: {
      name: string;
      title: string;
    }
  },
  general: {
    copyright: string;
    email: string;
    phone: string;
    location: string;
    country: string;
  }
}
