import { AppProps } from 'next/app';
import { FC } from 'react';
import '../styles/index.css';
import Header from '../shared/Header';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
);

export default MyApp;
