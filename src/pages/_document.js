/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import MaterialUiServerStyleSheets from '@material-ui/styles/ServerStyleSheets';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    const host = ctx.req.rawHeaders[ctx.req.rawHeaders.indexOf('Host') + 1];
    const blockRobots = host.includes('heroku');

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />)),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        blockRobots,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Mobile Heizung & Mobile Heizzentrale von ASOSmobil</title>
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <link href="/modules/styles/bootstrap-datepicker3.min.css" rel="stylesheet" type="text/css" />
          <link href="/modules/extern/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/modules/styles/style.css" rel="stylesheet" type="text/css" />
          <link rel="apple-touch-icon" sizes="180x180" href="/inhalte/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/inhalte/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/inhalte/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/inhalte/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/inhalte/favicon/safari-pinned-tab.svg" color="#929292" />
          <meta name="msapplication-TileColor" content="#414141" />
          <meta name="theme-color" content="#ffffff" />
          <script src="/modules/extern/jquery/jquery.min.js" />
          <script src="/modules/extern/js/bootstrap.min.js" />
          <script src="/modules/js/bootstrap-datepicker.min.js" />
          <script src="/modules/js/script.js" />
        </Head>
        <body className="home page-template-default page page-id-6  color-custom style-default button-default layout-full-width no-content-padding header-split header-semi header-fw minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menu-link-color boxed2fw mobile-tb-center mobile-side-slide mobile-menu mobile-mini-ml-lc tablet-sticky mobile-sticky mobile-tr-header tr-header be-reg-2073">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
