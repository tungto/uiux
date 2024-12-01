const minSlider = document.querySelector('.slider.min');
const maxSlider = document.querySelector('.slider.max');
const sliderRange = document.querySelector('.slider-range');

function updateSliderRange() {
    const minValue = parseInt(minSlider.value, 10);
    const maxValue = parseInt(maxSlider.value, 10);

    const percentMin = ((minValue - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
    const percentMax = ((maxValue - maxSlider.min) / (maxSlider.max - minSlider.min)) * 100;

    sliderRange.style.left = `${percentMin}%`;
    sliderRange.style.width = `${percentMax - percentMin}%`;
}

function validateMinSlider() {
    if (parseInt(minSlider.value, 10) >= parseInt(maxSlider.value, 10)) {
        minSlider.value = parseInt(maxSlider.value, 10) - 1000;
    }
    updateSliderRange();
}
function validateMaxSlider() {
    if (parseInt(maxSlider.value, 10) <= parseInt(minSlider.value, 10)) {
        maxSlider.value = parseInt(minSlider.value, 10) + 1000;
    }
    updateSliderRange();
}

minSlider.addEventListener('input', validateMinSlider);
maxSlider.addEventListener('input', validateMaxSlider);

updateSliderRange();