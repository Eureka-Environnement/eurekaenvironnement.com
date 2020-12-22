export const HOME_PAGE = '/';
export const GENIE_PAGE = '/genie-civil';
export const EAU_PAGE = '/eau'
export const RESIDENTIEL_PAGE = '/residentiel'
export const RECHERCHE_PAGE = '/recherche-et-developpement'
export const MATIERES_PAGE = '/matieres-residuelles'
export const SOL_PAGE = '/sol'

interface subTheme {
  contentful_id: string;
  image: {
    fixed: {
      src: string;
    }
  }
  services: string[];
  titre: string;
}

export interface ThemeData {
  contentfulTheme: {
    sousThemes: subTheme[];
  }
}