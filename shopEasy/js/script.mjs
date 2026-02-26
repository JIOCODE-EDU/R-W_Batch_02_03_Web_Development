import {getProducts} from './products.mjs'

const displayProducts = (productToDispaly) => {

  const container = document.getElementById("products_container");

  console.log('productToDispaly' , productToDispaly);
  
  if (!container) return;

  if (productToDispaly.length === 0) {
    container.innerHTML = `
     <div class="col-12">
        <div>
        <span>
        <i class="bi bi-search"></i>
        </span>
        <h3>No Products Found.</h3>
        <p>Try adjusting your search or filter</p>
        </div>
     </div>
    `;

    return;
  }

  container.innerHTML = productToDispaly.map((p) => {
    return `
    <div class="col py-4">
      <div class="card" style="width: 18rem;">
        <img src=${p.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-truncate">${p.name}</h5>
          <p class="card-text text-truncate">${p.description}</p>
          <p class="card-text">$${p.price}</p>
        </div>
        <div class="card-body">
          <a href="#" class="btn btn-primary">AddToCart</a>
        </div>
      </div>
    </div>
  `;
  });
};

// filter

const filterProducts = () => {

  const searchTerm = document.getElementById('search-input').value.toLowerCase()
  
  const category = document.getElementById('category-filter').value

  const sortby = document.getElementById('sort-filter').value

  let products =  getProducts()

  // search
  
  if(searchTerm){
    products = products.filter((p) => p.name.toLowerCase().includes(searchTerm))
  }

  // category

  if(category !== 'all'){
    products = products.filter((p) => p.category === category)
  }

  // sort

  switch(sortby){
    case 'price-low':
      products.sort((a , b) => a.price - b.price)
    
    case 'price-high':
      products.sort((a , b) => b.price - a.price)

    case 'name':
      products.sort((a , b) => a.name.localCompare(b.name))

    }
  
    displayProducts(products);

  }

  
  filterProducts()

  document.addEventListener('click' , )

displayProducts(getProducts());
