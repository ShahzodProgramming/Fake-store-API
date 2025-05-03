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
            <th><button class="btn btn-danger">Delete</button><br><button class="btn btn-primary">Edit</button></th>
        </tr>
        `;
  });
}
