// @flow
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {	
        site {	
          siteMetadata {	
            title	
            subtitle	
            copyright	
	    disqusShortname
	    url
            menu {	
              label	
              path	
            }	
            author {	
              name	
              photo	
              bio	
              contacts {       	
                twitter	
                github	
              }	
            }	
          }	
        }	
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
