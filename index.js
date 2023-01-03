const container = document.querySelector(".container");

const getUsers = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const json = await response.json();

  json.map((a) => {
    const data = `<div>

    <div class="product">
    <img
      src="${a.image}"
      alt="${a.title}"
      class="product-image"
    />
    <div class="product-detail">
      <h1>${a.title}</h1>
      <h4>${a.category}</h4>
      <h4>${a.price}</h4>
    </div>
    </div>`;

    container.insertAdjacentHTML("beforeend", data);
  });
};

getUsers();
