import React from 'react'
import { ThemeSectionLeft, ThemeSectionRight } from 'components/ThemeSection';

interface subTheme {
  id: string;
  title: string;
  image: string;
  services: string[];
}

interface ThemePage {
  subThemes: subTheme[];
}

const ThemePage = ({subThemes}: ThemePage) => {
  return (
    <div className="section text-center top-of-page">
      {subThemes.map((subTheme, index) => {
        return(
          index%2 === 0 ? (
            <ThemeSectionRight
              title={subTheme.title}
              image={subTheme.image}
              services={subTheme.services}
            />
          ) : (
            <ThemeSectionLeft
              title={subTheme.title}
              image={subTheme.image}
              services={subTheme.services}
            />
          )
        );
      })}
    </div>
  )
}

export default ThemePage;
