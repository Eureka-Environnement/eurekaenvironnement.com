import { ThemeData } from 'utils/constants';

export function mapSubThemes(data: ThemeData) {
  return data.contentfulTheme.sousThemes.map((st) => ({
    id: st.contentful_id,
    title: st.titre,
    image: st.image.fixed.src,
    services: st.services
  }))
}
