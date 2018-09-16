const slider = document.getElementById('speed-slider');
const sliderValueContainer = document.getElementById('speed-slider-value');
const resultSpeedSlider = document.getElementById('result-speed-slider');

resultSpeedSlider.addEventListener('input', (ev) => {
	slider.value = ev.target.value || 0;
});

resultSpeedSlider.addEventListener('blur', function (ev) {
	if (!ev.target.value) {
		this.value = slider.value;
	}
})

slider.addEventListener('input', (ev) => {
	resultSpeedSlider.value = ev.target.value;
});

slider.addEventListener('mouseup', (ev) => {
	console.log('Set video playback speed to: ', ev.target.value);
})
