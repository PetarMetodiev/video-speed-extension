const slider = document.getElementById('speed-slider');
const sliderValueContainer = document.getElementById('speed-slider-value');
const resultSpeedSlider = document.getElementById('result-speed-slider');

const currentValue = {
	value: 0
};

resultSpeedSlider.addEventListener('input', (ev) => {
	slider.value = ev.target.value || 0;
});

slider.addEventListener('input', (ev) => {
	resultSpeedSlider.value = ev.target.value;
});
