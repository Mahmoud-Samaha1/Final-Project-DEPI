// get Gategories
let categoriesInput = document.getElementById("cat-id");
async function getCategories() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categories = await response.json();
    console.log(categories);
    categoriesInput.innerHTML = `<option selected value="All">All</option>`;
    categories.forEach((category) => {
      categoriesInput.innerHTML += `
        <option value="${category}">
          ${category}
        </option>
      `;
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}
getCategories();
// =============================================
// get all products
let productContainer = document.getElementById("productContainer");
// let addBtn = document.getElementById("addBtn");
let isAddBtn = false;
let allProducts;

async function getAllProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products);
    allProducts = products;
    products.forEach((product) => {
      productContainer.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 prod-card"
    >
    <div class="card my-3">
            <div
            class="card-img card-header bg-transparent border-0 shadow-none w-50 d-flex"
            >
            <img
                src="${product.image}"
                class="card-img-top p-3 justify-content-center"
                alt="..."
            
            />
            </div>
            <div class="card-body text-center">
            <h5 class="card-title fs-6">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="bg-success w-25 text-light rounded text-center m-auto">
                ${product.price} $
            </p>
            </div>
            <div class="mb-2 bg-transparent shadow-none border-0">
            
            <button
            id="addBtn-${product.id}"
                class="btn btn-primary addBtn"
                >Add to Card
            </button>
            <a
                class="btn btn-primary ms-2 details"
                href="productDetails.html" 
                >Details
            </a>
            <div>
                <div
                id="addToCartDiv-${product.id}"
                class="d-none d-flex  justify-content-around align-items-center"
                
                >
                <input
                    type="number"
                    class="form-control h-50 w-50"
                    [(ngModel)]="amount"
                    id="count-id"
                    aria-describedby="helpId"
                    placeholder=""
                    min="1"
                />
                <button
                    type="button"
                    class="btn bg-warning"
                    (click)="add();apearAddBtn = true"
                >
                    Add
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    `;
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

getAllProducts();

let addBtns = document.getElementsByClassName("addBtn");

console.log(addBtns);
function name1() {
  for (let i = 0; i < addBtns.length; i++) {
    debugger
    addBtns[i].onclick = function () {
      btn.classList.add("d-none");
      console.log("done");
    }

  }
}
name1();

