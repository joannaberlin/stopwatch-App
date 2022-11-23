import { useEffect, useState } from 'react';
import Timer from './components/Timer/Timer';
import styles from './components/Timer/Timer.module.scss';

const App = () => {
	const [time, setTime] = useState(0);
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		return () => {
			if (timer) {
				clearInterval(timer);
			}
		};
	}, [timer]);

	const startTimer = () => {
		if (!timer) {
			setTimer(
				setInterval(() => {
					setTime((prevValue) => prevValue + 10);
				}, 10)
			);
		}
	};

	const stopTimer = () => {
		clearInterval(timer);
		setTimer(null);
	};

	const resetTimer = () => {
		setTime(0);
	};

	return (
		<div className={styles.container}>
			<Timer time={time} />
			<div>
				<button className={styles.button} onClick={startTimer}>
					Start
				</button>
				<button className={styles.button} onClick={stopTimer}>
					Stop
				</button>
				<button className={styles.button} onClick={resetTimer}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default App;
