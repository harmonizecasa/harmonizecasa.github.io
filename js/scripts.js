function listarDados(data) {
  const dataList = document.getElementById("product-list");
  dataList.innerHTML = "";

  data.forEach((item) => {
    const h3 = document.createElement("h3");
    h3.textContent = item.name;
    const img = document.createElement("img");
    img.src = item.image;

    const link = document.createElement("a");
    link.classList.add("product-item");
    link.appendChild(img);
    link.appendChild(h3);
    link.href = item.link;

    dataList.appendChild(link);
  });
}

function fazerRequisicao() {
  const url = "https://harmonize-back-production.up.railway.app/products"; // Substitua pela URL da sua API

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Chamar a função para listar os dados no HTML
      listarDados(data);
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });
}

fazerRequisicao();
