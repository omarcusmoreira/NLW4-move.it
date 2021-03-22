import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/completedChallenges.module.css'

export function CompletedChalenges(){

    const { challengesCompleted } = useContext(ChallengesContext);
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}