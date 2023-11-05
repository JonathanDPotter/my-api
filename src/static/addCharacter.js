const characters = document.getElementById("characters");

const getCharacters = async () => {
  const response = await fetch("/api/characters");
  const json = await response.json();
  characters.innerHTML = "";
  const tableHeader = document.createElement("tr");

  Object.keys(json[0]).forEach((key) =>
    tableHeader.appendChild(
      Object.assign(document.createElement("th"), { textContent: key })
    )
  );
  tableHeader.appendChild(
    Object.assign(document.createElement("th"), { textContent: "Delete" })
  );
  characters.appendChild(tableHeader);

  json.forEach((character) => {
    const row = document.createElement("tr");
    Object.values(character).forEach((value) =>
      row.appendChild(
        Object.assign(document.createElement("td"), { textContent: value })
      )
    );
    row.appendChild(
      Object.assign(document.createElement("td"), {
        innerHTML: `<i class="fi fi-bs-trash"></i>`,
        onclick: () => deleteCharacter(character.ID),
      })
    );

    characters.appendChild(row);
  });
};

getCharacters();

async function deleteCharacter(ID) {
  const choice = confirm(
    `Are you sure that you want to delete character with ID ${ID}?`
  );
  choice && (await fetch(`/api/characters/${ID}`, { method: "DELETE" }));
  getCharacters();
}

const inputs = Array.from(document.getElementsByTagName("input"));

const submitButton = document.getElementsByTagName("button")[0];

submitButton.onclick = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch("/api/characters", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Name: inputs[0].value,
        HomePlanet: inputs[1].value,
        Age: inputs[2].value,
        Gender: inputs[3].value,
      }),
    });
    getCharacters();
  } catch (error) {
    console.log(error);
  }
};
