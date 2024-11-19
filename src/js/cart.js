fetch('./pages/components/cart.html')
  .then((response) => response.text())
  .then((html) => {
    document.getElementById('popup-container').innerHTML = html
    initPopup()
  })

function initPopup() {
  const toggleButton = document.querySelectorAll('#toggle-cart')
  const popup = document.getElementById('popup-screen')
  const closeButton = document.getElementById('close-cart')

  // Show popup
  toggleButton.forEach((btn) => {
    btn.addEventListener('click', function () {
      popup.classList.add('show')
    })
  })
  // Hide popup when clicking on the close button
  closeButton.addEventListener('click', function () {
    popup.classList.remove('show')
  })

  // Hide popup when clicking outside the box
  popup.addEventListener('click', function (event) {
    if (event.target === popup) {
      popup.classList.remove('show')
    }
  })
}
