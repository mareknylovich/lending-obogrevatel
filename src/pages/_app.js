import App from 'next/app';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'next/router';
import withRedux from 'next-redux-wrapper';

// import '../utils/i18n';

// import '../assets/css/main.css';

import initStore from '../utils/redux';
import { routing } from '../routes';
import { RouteHandler, Header, Footer, Onload } from '../containers';
import { getQuery } from '../utils/navigation';

class MyApp extends App {
  // Fetching serialized(JSON) store state
  static async getInitialProps({ Component, ctx }) {
    await routing({ ...ctx });
    const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx }) : {};

    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);

    if (typeof window !== 'undefined') {
      const ref = getQuery('ref');

      if (ref) {
        localStorage.setItem('ref', ref);
      }
    }
  }

  render() {
    const { Component, pageProps, store, router } = this.props;

    return (
      <ReduxProvider store={store}>
        <RouteHandler />
        <Onload />
        <CssBaseline />
        {router.pathname.includes('/payment') ? (
          <Component {...pageProps} />
        ) : (
          <div className="page">
            {typeof window !== 'undefined' && <Header />}
            <Component {...pageProps} />
            <Footer />
          </div>
        )}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
var onWebChat={ar:[], set: function(a,b){if (typeof onWebChat_==='undefined'){this.ar.
push([a,b]);}else{onWebChat_.set(a,b);}},get:function(a){return(onWebChat_.get(a));},
w:(function(){ var ga=document.createElement('script'); ga.type = 'text/javascript';
ga.async=1;ga.src=('https:'==document.location.protocol?'https:':'http:') + 
'//www.onwebchat.com/clientchat/71a4f9f04d8a29c4c9c375a77ceae19f';var s=
document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})()}
          `,
          }}
        />
      </ReduxProvider>
    );
  }
}

export default withRouter(withRedux(initStore, { debug: false })(MyApp));
