const fetchProducts = async () => {
    const productContainer = document.querySelector('#product-container');
    try{
        const response = await fetch('https://fakestoreapi.com/products');
        if(!response.ok){
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log(data);
        
        let html = '';
        data.forEach(product => {
            html += `
                <div class="col-lg-4 col-md-4 col-sm-12 mb-3">
                    <div class="card">
                    <div class="mt-2" style="height: 20vh;">
                        <img src="${product.image}" alt="Product Image" class="h-100 w-100 object-fit-contain">
                    </div>
                    <div class="card-body">
                        <h6 class="card-text text-dark">${product.title}</h6>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <p class="card-text text-dark">$${product.price}</p>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <p class="card-text text-dark text-end">${product.rating.count} sold</p>
                            </div>
                        </div>
                        <p class="text-justify">${product.description.slice(0,200) + '...'}</p>
                    </div>
                    <div class="card-footer text-muted">
                    Ratings: ${product.rating.rate}
                    </div>
                </div>
                </div>
            `;
        });
        productContainer.innerHTML = html;
    }catch (err){
        console.error('An error occured:',err);
        
    }
};

fetchProducts();