var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [60000000, 6000000000],
    connect: true,
    range: {
        'min': 60000000,
        'max': 6000000000
    },
    step: 10000000,
    format: {
      to: function(value) {
        return Math.round(value).toLocaleString('fa-IR');
      },
      from: function(value) {
        return Number(value.replace(/,/g, ''));
      }
    }
});

const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');

slider.noUiSlider.on('update', function (values, handle) {
    minPrice.textContent = values[0];
    maxPrice.textContent = values[1];
});