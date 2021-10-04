import axios from "axios";
import { API_URL } from "./api";

export const getSuperheroes = async () => {
  try {
    const { data } = await axios.get(API_URL + "api/superheroes");
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const createdSuperhero = async (superhero) => {
  try {
    const { data } = await axios.post(API_URL + "api/superheroes", superhero);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getOneSuperhero = async (id) => {
  try {
    const { data } = await axios.get(API_URL + "api/superheroes/" + id);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteSuperhero = async (id) => {
  try {
    const { data } = await axios.delete(API_URL + "api/superheroes/" + id);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateSuperhero = async (superhero) => {
  try {
    const { data } = await axios.put(API_URL + "api/superheroes", superhero);
    return data;
  } catch (e) {
    console.log(e);
  }
};
