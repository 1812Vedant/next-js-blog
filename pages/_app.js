import "../styles/globals.css";
//this is needed at this position if you want to use global css
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
