export const HOME_PAGE = '/';
export const GENIE_PAGE = '/genie-civil';
export const EAU_PAGE = '/eau'
export const RESIDENTIEL_PAGE = '/residentiel'
export const RECHERCHE_PAGE = '/recherche-et-developpement'
export const MATIERES_PAGE = '/matieres-residuelles'
export const SOL_PAGE = '/sol'

export const RECHERCHE_ID = "9DBnCfNBEAAsWqpkn2ktv"
export const GENIE_ID = "6Vg5EPnIcLDyEKyUwnOQof"
export const MATIERES_ID = "7qBwcNqCMT9HpuhEkD0Sne"
export const RESIDENTIEL_ID = "LcXKSBMEyzeJfLTydzYPr"
export const SOL_ID = "4vLwbIphuyrjFMf6qzcZNZ"
export const EAU_ID = "5PodCONh0xxf0cUWqoTtyl"

export const APROPOS_ID = 'aPropos'
export const SERVICES_ID = 'services'
export const CONTACT_ID = 'contact'
export const LOGO_ID = 'logoBtn'

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

export interface HomePageData {
  contentfulPagePrincipale: {
    courriel: string;
    telephone: string;
    titre: string;
    aPropos: {
      raw: string;
    }
    sousTitreNosServices: string;
  }
  allContentfulTheme: {
    nodes: {
      contentful_id: string;
      titreDuCube: string;
    }[]
  }
}

export interface CubeTitles {
  [id: string]: string;
}
