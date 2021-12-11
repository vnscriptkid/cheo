import Header from "../components/Header";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/globals.css";

{
  /* <script type="text/javascript" src="http://yoursite.com/mapdata.js"></script>		
<script  type="text/javascript" src="http://yoursite.com/worldmap.js"></script> */
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <main>
        {/* <Script type="text/javascript" src="/js/mapdata.js" />
        <Script type="text/javascript" src="/js/worldmap.js" /> */}
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
