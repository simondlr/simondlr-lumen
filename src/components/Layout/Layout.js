import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <script>{`
        window.upsettings = {'api_key': 'e1dd42ae-b6a5-d9516226ef'}
       `}</script>
      <script>{`
        (function(){var w=window;var up=w.Upscribe;if(typeof up==="function"){up('reattach_activator');up('update',upsettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Upscribe=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://upscri.be/js/snippet.js';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if( w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
      `}</script>
    </Helmet>
    {children}
  </div>
);

export default Layout;
