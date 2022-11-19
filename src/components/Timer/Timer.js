const Timer = ({ time }) => {
	//time in HH:mm:ss.ms format
	//tu mam tylko konwertować czas pobrany w milisekundach do danego formatu i renderować w widoku
	let milliseconds, seconds, minutes, hours;

	const msToTime = (ms) => {
		milliseconds = parseInt((time % 1000) / 100);
		seconds = parseInt((time / 1000) % 60);
		minutes = parseInt((time / (1000 * 60)) % 60);
		hours = parseInt((time / (1000 * 60 * 60)) % 24);

		hours = hours < 10 ? '0' + hours : hours;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		return (
			<h2>
				{hours}:{minutes}:{seconds}:{milliseconds}
			</h2>
		);
	};

	return <div>{msToTime(time)}</div>;
};

export default Timer;
