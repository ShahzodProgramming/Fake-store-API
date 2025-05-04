const api = "https://fakestoreapi.com/products";

getProduct();
function getProduct() {
  console.log("reading");

  fetch(api)
    .then((res) => res.json())
    .then((data) => displayProduct(data));
}

function displayProduct(list_products) {
  const table = document.querySelector("#table-body");

  list_products.forEach((element) => {
    table.innerHTML += `
        <tr>
            <th>${element.id}</th>
            <th>${element.title}</th>
            <th>${element.category}</th>
            <th>${element.price}</th>
            <th><img src="${element.image}" width= "100px"></th>
            <th><button onclick="deletedProduct(${element.id})" class="btn btn-danger">Delete</button><br><button class="btn btn-primary">Edit</button></th>
        </tr>
        `;
  });
}

//post product secton

const elAddProBtn = document.querySelector("#eddProBtn");
const productModal = document.querySelector(".modal");
const BtnClose = document.querySelector(".btn-close");
const elProForm = document.querySelector("#productForm");

elAddProBtn.addEventListener("click", () => {
  productModal.style.display = "block";
});

BtnClose.addEventListener("click", () => {
  productModal.style.display = "none";
});

elProForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = elProForm["id"].value;
  const title = elProForm["title"].value;
  const price = elProForm["price"].value;
  const description = elProForm["description"].value;
  const category = elProForm["category"].value;
  const image = elProForm["image"].files[0];

  const product = {
    id: id,
    title: title,
    price: price,
    description: description,
    category: category,
    image: image,
  };

  fetch(`https://fakestoreapi.com/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Product added successfully");
      productModal.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
    });
});

//deleted Product

function deletedProduct(id) {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("Product deleted successfully");
    });
}
