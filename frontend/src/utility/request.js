import axios from "axios";

import { getAccessToken } from "../utility/token";

const requestType = {
  account: ["get", "/auth/account"],
  fridge: ["get", "/auth/fridge"],
  item: ["get", "/auth/item"],
  addFridge: ["post", "/auth/fridge"],
  addItem: ["post", "/auth/fridge"],
};

const getHeader = () => ({
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
});

export async function request({ body, id, type }) {
  const [method, uri] = requestType[type];
  try {
    const res = await axios[method](
      //
      `${uri}${id ? "/" + id : ""}`,
      method === "get" ? getHeader() : body,
      method === "get" ? null : getHeader()
    );
    return res;
  } catch (e) {
    return null;
  }
}

export async function addFridge({ body, id }) {
  return request({ body, id, type: "addFridge" });
}

export async function addItem({ body, id }) {
  return request({ body, id, type: "addItem" });
}
