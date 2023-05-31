import { useRouter } from 'next/router'
import Head from "next/head";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import DetailAnimal from "../../components/detailAnimal";
import styles from "../../../styles/DetailMarineAnimal.module.css";


const Detail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>detailAnimal</title>
        <meta name="Bogue web site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {id && <DetailAnimal id={id}/>}
    </>
  );
};

export default Detail;
