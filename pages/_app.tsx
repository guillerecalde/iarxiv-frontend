import type { AppProps } from 'next/app';

import '../styles/globals.css';

const Noop = ({ children }: { children: React.ReactNode }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
