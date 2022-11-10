let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  //if statement

  productsContainer.innerHTML = filteredProducts
    .map(({id,title,image,price}) => {
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            alt="product"
            class="product-img img"
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    })
    .join(" ");
};

displayProducts();