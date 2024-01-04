import Head from "next/head";

function PagesMetaHead({
  title,
  keywords,
  description,
  ogDescription,
  ogSiteName,
}) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

PagesMetaHead.defaultProps = {
  title: "محمد الهويمل",
  keywords:
    "محمد الهويمل , آل هويمل , الهويمل , محمد عبدالعزيز الهويمل , مكتب التعليم بالرين , مكتب التعليم بمحافظة الرين ",
  description:
    "&#x645;&#x62D;&#x645;&#x62F; &#x628;&#x646; &#x639;&#x628;&#x62F;&#x627;&#x644;&#x639;&#x632;&#x64A;&#x632; &#x627;&#x644;&#x647;&#x648;&#x64A;&#x645;&#x644;",
  ogDescription:
    "&#x645;&#x62D;&#x645;&#x62F; &#x628;&#x646; &#x639;&#x628;&#x62F;&#x627;&#x644;&#x639;&#x632;&#x64A;&#x632; &#x627;&#x644;&#x647;&#x648;&#x64A;&#x645;&#x644;",
  ogSiteName:
    "&#x645;&#x62D;&#x645;&#x62F; &#x627;&#x644;&#x647;&#x648;&#x64A;&#x645;&#x644;",
};

export default PagesMetaHead;
