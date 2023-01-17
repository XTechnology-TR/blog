import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  	  <meta http-equiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
			<meta name="format-detection" content="telephone=no" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description" content="Bilim ve Teknoloji alandında kendini geliştirmek isteyenlerin ilgi duyacağı makale, eğitim ve haberleri bu bölümden takip edebilirsiniz.
        ${CMS_NAME}" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
			    <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
    </Head>
  )
}
