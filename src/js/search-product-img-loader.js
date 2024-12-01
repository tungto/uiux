const images = [
    '1.png', '2.png', '3.png', '4.png', '5.png',
    '6.png', '7.png', '8.png', '9.png'
];

const productGrid = document.getElementById('productGrid');
images.forEach(image => {
    const productHTML = `
<div class="col-md-4">
    <div class="card">
        <img src="/images/rings/${image}" class="card-img-top" alt="Product Image">
        <div class="card-body">
            <h6 class="card-title">Diamond rings</h6>
            <p class="card-text">$240.00</p>
        </div>
    </div>
</div>
`;
    productGrid.innerHTML += productHTML;
});