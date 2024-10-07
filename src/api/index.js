const port = "http://localhost:5000/api";
import axios from "axios";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${port}/user/login`, {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const register = async (
  username,
  email,
  password,
  role,
  companyName
) => {
  try {
    const response = await axios.post(`${port}/user/register`, {
      username,
      email,
      password,
      role,
      companyName,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
