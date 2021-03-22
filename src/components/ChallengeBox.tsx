import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { CountdownContext } from '../contexts/CountdownContex';
import styles from '../styles/components/ChallengeBox.module.css'


export function ChallengeBox (){
    
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext)

    function handleFailedChallenge(){
        resetChallenge();
        resetCountdown();
    }

    function handleCompletedChallenge(){
        completeChallenge();
        resetCountdown();
    }

    return (

        <div className={styles.challengeBoxContainer}>

            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>
                        Ganhe {activeChallenge.amount}XP
                    </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>
                    <footer>
                        <button
                            type = "button"
                            className={ styles.challengeFailedButton }
                            onClick = { handleFailedChallenge }
                        >
                            Falhei
                        </button>
                        <button
                            type = "button"
                            className={styles.challengeSucceededButton}
                            onClick = { handleCompletedChallenge }
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avançe de level completando desafios
                    </p>
    
                </div>
            )}
        </div>
    )
}