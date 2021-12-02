import axios from "axios";

import { getAccessToken } from "../utility/token";
import { isLoggedIn } from "../utility/login";

const requestType = {
  account: ["get", "/auth/account"],
  fridge: ["get", "/auth/fridge"],
  item: ["get", "/auth/item"],
  addFridge: ["post", "/auth/fridge"],
  addItem: ["post", "/auth/item"],
};

function getHeader() {
  return {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  };
}

export default async function request({ body, id, type }) {
  const [method, uri] = requestType[type];
  if (await isLoggedIn()) {
    // try {
    const res = await axios[method](
      //
      `${uri}${id ? "/" + id : ""}`,
      method === "get" ? getHeader() : body,
      method === "get" ? null : getHeader()
    );
    console.log("1")
    console.log(res.status);
    console.log("2")
    return res;
    //     } catch (e) {
    //       console.log(e);
    //       return null;
    //     }
  }
  //   return null;
}
