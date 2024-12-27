const images = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.png',
  '12.png',
]

const productGrid = document.getElementById('productGrid')
images.forEach((image, index) => {
  const productHTML = `
        <div class="col-md-3">
            <a class="card" href='../pages/product-detail.html' >
                <img src="/images/rings/${image}" class="card-img-top" alt="Product Image">
                <div class="card-body text-center">
                    <h6 class="card-title">${index % 2 === 0 ? 'Diamond Ring' : index % 3 === 0 ? 'Krystal Earring' : 'Melody Necklace'}</h6>
                    <p class="card-text">$240.00</p>
                </div>
            </a>
        </div>
    `
  productGrid.innerHTML += productHTML
})
