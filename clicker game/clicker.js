let clicks = 0;
const TIMEOUT = 5000; // Время в миллисекундах

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');
const baBaah = document.querySelector('#ba-baah');

function start() {
	const startTime = Date.now();

	display.textContent = Math.floor(TIMEOUT / 1000) + "с";

	button.onclick = () => {
		clicks++;
		counter.textContent = clicks;
		if (clicks === 10) {
			baBaah.style.display = 'block';
		}
	};

	const interval = setInterval(() => {
		const delta = Date.now() - startTime;
		const remainingTime = Math.max(TIMEOUT - delta, 0);
		display.textContent = Math.ceil(remainingTime / 1000) + "с";
	}, 100);

	const timeout = setTimeout(() => {
		button.onclick = null;
		display.textContent = "Игра окончена";
		baBaah.style.display = 'none';

		clearInterval(interval);
		clearTimeout(timeout);
	}, TIMEOUT);
}

button.onclick = start;