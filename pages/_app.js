import App, { Container } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";

export default class MyApp extends App {
  render() {
    const { Component, pageProps, title = "Default title" } = this.props;
    return (
      <Container>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
