const responsePokemon = async (data) => {
  try {
    const num = data;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const jsonData = await response.json();
    showPokemon(jsonData);
  } catch (e) {
    console.log("deu ruim!");
  }
};

const showPokemon = (dados) => {
  const namePokemon = document.querySelector(".namePokemon");
  const imagemPokemon = document.querySelector(".imagemPokemon");
  const typePokemon = document.querySelector(".typePokemon");
  console.log(namePokemon);
  namePokemon.innerHTML = `${dados.name.toUpperCase()}`;
  imagemPokemon.innerHTML = `<img src="${dados.sprites.front_default}"/>`;
  dados.types.map((indice, tipo) => {
    typePokemon.innerHTML = `<p id="${indice}"> tipo: ${tipo.type.name}</p>`;
  });
};

const buttonOpen = document.querySelector(".open-modal");
const modalContainer = document.querySelector(".modal-container");
const buttonClose = document.querySelector(".close-modal");
buttonOpen.addEventListener("click", () => {
  const num = document.querySelector(".option").value;
  responsePokemon(num);
  modalContainer.classList.add("show");
});
buttonClose.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
