import {useState} from "react";
import styles from '../assets/css/dice-style.module.css';

function Dice(){
    const [valueGuess, setValueGuess] = useState('');
//global variable
    const randNum = Math.floor(Math.random())*10 + 1;

    const valueChange = (e) => {
        setValueGuess(e.target.value);
    };

    function guessIt(val){
        let gNum = Number(val);
        console.log(randNum, gNum);
        if (gNum !== randNum){
            setValueGuess('');
            return alert('You wrong');
        }
        return alert('Nice Answer');
    }

    return (
        <body>
        <header>
            <h1>Guess My Number!</h1>
            <p className={styles.between}>(Between 1 and 20)</p>
            <button className={styles.btn}>Again!</button>
            <div className={styles.number}>?</div>
        </header>
        <main>
            <section className={styles.left}>
                <input type="number" className={styles.guess} value={valueGuess} onChange={valueChange}/>
                <button className={styles.btn} onClick={()=>guessIt(valueGuess)}>Check!</button>
            </section>
            <section className={styles.right}>
                <p className={styles.message}>Start guessing...</p>
                <p className={styles.labelScore}>💯 Score: <span className="score">20</span></p>
                <p className="label-highscore">
                    🥇 Highscore: <span className="highscore">0</span>
                </p>
            </section>
        </main>
        </body>
    )
}

export default Dice;
