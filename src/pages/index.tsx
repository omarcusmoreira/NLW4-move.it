import React from "react";
import Head from 'next/head';
import { CompletedChalenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile"
import { ChallengeBox } from "../components/ChallengeBox";

import styles from "../styles/components/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContex";

export default function Home() {
  return (

    <div className={styles.container}>

      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />
      
      <CountdownProvider>
        <section>
          <div>
            
            <Profile />
            <CompletedChalenges />
            <Countdown/>

          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>

    </div>  
  )
}
