// header, footer
fetch('./components/navbar-component.html')
  .then((response) => response.text())
  .then((content) => {
    document.getElementById('navbar').innerHTML = content
  })
fetch('./components/footer-component.html')
  .then((response) => response.text())
  .then((content) => {
    document.getElementById('footer').innerHTML = content
  })
