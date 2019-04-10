import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';

export const PureAuthor = ({ data }) => {
  const { author } = data.site.siteMetadata;

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        <a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Twitter.
        </a><br />
        Stay in touch with my newsletter! I only send updates on new content. <a href="https://upscri.be/94bbf3/">https://upscri.be/94bbf3/</a>
      </p>
    </div>
  );
};

export const Author = (props) => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author {
              name
              bio
              contacts {       
                twitter
              }
            }
          }
        }
      }
    `}
    render={(data) => <PureAuthor {...props} data={data} />}
  />
);

export default Author;
