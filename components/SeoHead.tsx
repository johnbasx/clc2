import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

const SeoHead = () => {
  return (
    <>
      <Head>
        <NextSeo
          title='CLC2 | Corporate Leaders Conclave 2023'
          description='We welcome you all to the second edition of "CLC - Corporate
          Leaders Conclave". The CLC is an exclusive platform for
          corporates, entrepreneurs, students and teachers, held as part of
          the conclave designed to bring together business leaders to
          discuss effective strategies, promote efficient practices, solve
          certain problems and make a business case for sustainable
          solutions. The Conclave with the presence of corporate leaders
          along with motivational speakers will help expound further on how
          businesses can be made profitable provided that they remain
          responsible as well.'
          facebook={{ appId: "980206109610650" }}
          useAppDir={true}
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"'
        />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon'></link>
      </Head>
    </>
  );
};

export default SeoHead;
