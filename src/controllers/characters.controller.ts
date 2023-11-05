import query from "../db/utils";

interface charData {
  name: string;
  homePlanet: string | "Unknown";
  age: number | "Unknown";
  gender: "Male" | "Female";
}

const getCharacters = async (id: string | undefined) => {
  return id
    ? await query("SELECT * FROM characters WHERE ID=?", [id])
    : await query("SELECT * FROM characters");
};

const addCharacter = async (data: charData) => {
  return await query("INSERT INTO characters SET ?", [data]);
};

const updateCharacter = async (id: string, data: charData) => {
  return await query("UPDATE characters SET ? WHERE ID=?", [data, id]);
};

const deleteCharacter = async (id: string) => {
  return await query("DELETE FROM characters WHERE ID = ?", [id]);
};

const controller = {
  getCharacters,
  addCharacter,
  updateCharacter,
  deleteCharacter,
};

export default controller;
