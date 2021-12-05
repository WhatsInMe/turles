import axios from "axios";

import { getAccessToken } from "../utility/token";

const getHeader = () => ({
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
});

export async function authRequest(method, uri, body) {
  const hasBody = !(method === "get" || method === "delete");
  try {
    const res = await axios[method](
      uri,
      hasBody ? body : getHeader(),
      hasBody ? getHeader() : null
    );
    return res;
  } catch (e) {
    return null;
  }
}

export async function getFridges() {
  return await authRequest("get", "/auth/fridge");
}

export async function addFridge(name) {
  return await authRequest("post", "/auth/fridge", { name });
}

export async function getFridge(name) {
  return await authRequest("get", `/auth/fridge/${name}`);
}

export async function addItem(fridge, item) {
  return await authRequest("post", `/auth/fridge/${fridge}`, item);
}
