export interface SectionData {
  key: string;
  heading: string;
  body: string[];
  order: number;
}

export interface HomeData {
  slug: string;
  title: string;
  updatedAt: string;
  sections: SectionData[];
}



