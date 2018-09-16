const slider = document.getElementById('speed-slider');
const sliderValueContainer = document.getElementById('speed-slider-value');
slider.addEventListener('input', (ev) => {
	sliderValueContainer.innerHTML = ev.target.value;
});
