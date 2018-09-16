const slider = document.getElementById('speed-slider');
const sliderValueContainer = document.getElementById('speed-slider-value');
const resultSpeedNumber = document.getElementById('result-speed-number');

resultSpeedNumber.addEventListener('input', (ev) => {
	slider.value = ev.target.value || 0;
});

resultSpeedNumber.addEventListener('blur', (ev) => {
	// Prevents values from outside slider range
	resultSpeedNumber.value = slider.value;
})

slider.addEventListener('input', (ev) => {
	resultSpeedNumber.value = ev.target.value;
});

slider.addEventListener('mouseup', (ev) => {
	console.log('Set video playback speed to: ', ev.target.value);
})
