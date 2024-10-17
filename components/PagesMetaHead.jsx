import Head from "next/head";

function PagesMetaHead({
  title,
  keywords,
  description,
  ogDescription,
  ogSiteName,
  ogUrl,
  ogImageUrl,
  verification,
}) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="INDEX, FOLLOW, ARCHIVE" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImageUrl} />

      <meta charSet="utf-8" />
      <link rel="icon" href="/public/favicon.ico" />
      <meta name="google-site-verification" content={verification} />

      <title>{title}</title>
    </Head>
  );
}

PagesMetaHead.defaultProps = {
  title: "محمد الهويمل",
  keywords:
    "محمد الهويمل , آل هويمل , الهويمل , محمد عبدالعزيز الهويمل ,هويمل,ال قزعان, القزعان, مكتب التعليم بالرين , مكتب التعليم بمحافظة الرين ",
  description:
    "&#x645;&#x62D;&#x645;&#x62F; &#x628;&#x646; &#x639;&#x628;&#x62F;&#x627;&#x644;&#x639;&#x632;&#x64A;&#x632; &#x627;&#x644;&#x647;&#x648;&#x64A;&#x645;&#x644;",
  ogDescription:
    "&#x645;&#x62D;&#x645;&#x62F; &#x628;&#x646; &#x639;&#x628;&#x62F;&#x627;&#x644;&#x639;&#x632;&#x64A;&#x632; &#x627;&#x644;&#x647;&#x648;&#x64A;&#x645;&#x644;",
  ogSiteName:
    "&#x645;&#x62D;&#x645;&#x62F; &#x627;&#x644;&#x647;&#x648;&#x64A;&#x645;&#x644;",
  ogUrl: "https://www.mohammedh.sa", // Replace with your URL
  ogImageUrl: "/public/hero.jpg", // Replace with your image URL
  verification: "WVx7eEsjASR60PqML6j_K3wSyROLR5qqp890",
};

export default PagesMetaHead;
