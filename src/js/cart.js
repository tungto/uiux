fetch('../pages/components/cart.html')
  .then((response) => response.text())
  .then((html) => {
    console.log(html)
    document.getElementById('cart-popup-container').innerHTML = html
  })
  .then(() => {
    initPopup()
    initCartFunction()
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

function initCartFunction() {
  // Get the minus and plus buttons
  const minusBtn = document.querySelectorAll('.minus')
  const plusBtn = document.querySelectorAll('.plus')
  const inputField = document.querySelectorAll('.quantity-input')

  // Decrease input value
  inputField.forEach((input, index) => {
    input.value = 1
    minusBtn[index].addEventListener('click', () => {
      const currentValue = parseInt(input.value) || 0
      if (currentValue > 0) {
        input.value = currentValue - 1
      }
    })

    plusBtn[index].addEventListener('click', () => {
      const currentValue = parseInt(input.value) || 0
      if (currentValue < 999) {
        input.value = currentValue + 1
      }
    })
    input.addEventListener('keypress', allowNumbersOnly)
    input.addEventListener('input', validateInput)
  })
}

function allowNumbersOnly(event) {
  const charCode = event.charCode || event.keyCode
  // Allow only digits (0–9) and control keys (e.g., backspace)
  if (charCode < 48 || charCode > 57) {
    event.preventDefault()
  }
}

function validateInput(inputEvent) {
  const value = parseInt(inputEvent.target.value) || 0
  console.log(value)
  if (value < 0) inputEvent.target.value = 0
  if (value > 999) inputEvent.target.value = 999
  // console.log(
  //   `Debug value of the input field was changed. ${inputEvent.target.value}}`
  // )
}
