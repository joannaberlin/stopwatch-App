import { useEffect, useState } from 'react';
import Timer from './components/Timer/Timer';
import styles from './components/Timer/Timer.module.scss';

const App = () => {
	const [time, setTime] = useState(0);
	const [start, setStart] = useState(false);

	useEffect(() => {
		let interval = null;

		if (start) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [start]);

	const startTimer = () => {
		setStart(true);
	};

	const stopTimer = () => {
		setStart(false);
	};

	const resetTimer = () => {
		setTime(0);
		setStart(false);
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
