// @flow
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

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
        Receive all new content I publish to your inbox! Sign up for my newsletter. No spam. <a href="https://simondlr.substack.com/">https://simondlr.substack.com/</a>
      </p>
    </div>
  );
};

export default Author;
