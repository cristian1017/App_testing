import axios from "axios";

export const getInfoLogin = async () => {
  try {
    const {data} = await axios.get("../../../login.json");
    return data;
  } catch (error) {
    return error;
  }
};
