import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { CubeTitles, HomePageData, ThemeData } from 'utils/constants';

export function mapSubThemes(data: ThemeData) {
  return data.contentfulTheme.sousThemes.map((st) => ({
    id: st.contentful_id,
    title: st.titre,
    image: st.image.fixed.src,
    services: st.services
  }))
}

function getCubeTitles(themes: { contentful_id: string, titreDuCube: string }[]) {
  const cubeTitles: CubeTitles = {}

  themes.forEach((theme) => {
    cubeTitles[theme.contentful_id] = theme.titreDuCube;
  })
  return cubeTitles
}

export function mapHomePageData(data: HomePageData) {
  return {
    title: data.contentfulPagePrincipale.titre,
    aPropos: documentToReactComponents(JSON.parse(data.contentfulPagePrincipale.aPropos.raw)),
    subTitleServices: data.contentfulPagePrincipale.sousTitreNosServices,
    phone: data.contentfulPagePrincipale.telephone,
    email: data.contentfulPagePrincipale.courriel,
    cubeTitles: getCubeTitles(data.allContentfulTheme.nodes)
  }
}
