
export interface Personal {
  slug: string;
  published: boolean;
  updatedAt: string;
  data: {
    Email: string;
    Teléfono: string;
    WhatsApp: string;
  };
}
// Nueva interfaz para HomeData según el nuevo formato
export interface HomeSectionCard {
  src: string;
  text?: string;
  h3?: string;
  services?: string[];
}

export interface HomeSection {
  key: string;
  heading?: string;
  src?: string;
  body?: string[];
  order: number;
  h3?: string;
  services?: string[];
  cards?: HomeSectionCard[];
}

export interface HomeData {
  slug: string;
  title: string;
  published: boolean;
  updatedAt: string;
  sections: HomeSection[];
}

// Interfaz para la sección "Sobre mí"
export interface AboutData {
  slug: string;
  title: string;
  published: boolean;
  updatedAt: string;
  sections: string[];
}



