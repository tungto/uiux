fetch('./pages/components/cart.html')
  .then((response) => response.text())
  .then((html) => {
    document.getElementById('popup-container').innerHTML = html
    initPopup()
  })

function initPopup() {
  let toggleButton = document.getElementById('toggle-cart')
  let popup = document.getElementById('popup-screen')
  let closeButton = document.getElementById('close-cart')

  // Show popup
  toggleButton.addEventListener('click', function () {
    popup.classList.add('show')
  })

  // Hide popup when clicking on the close button
  closeButton.addEventListener('click', function () {
    popup.classList.remove('show')
  })

  // Hide popup when clicking on the backdrop (outside the popup-box)
  popup.addEventListener('click', function (event) {
    if (event.target === popup) {
      popup.classList.remove('show')
    }
  })
}
