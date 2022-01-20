import type { AppProps } from 'next/app';

import { UIProvider } from '@contexts/ui';

import '../styles/globals.css';

const Noop = ({ children }: { children: React.ReactNode }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
