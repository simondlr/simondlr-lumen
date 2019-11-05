// @flow
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  siteUrl: string,
  description?: string,
  pathname: string
};

const Layout = ({ children, title, siteUrl, description, pathname }: Props) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={`${siteUrl}${pathname}/twitter-card.jpg`} />

    </Helmet>
    {children}
  </div>
);

export default Layout;
