import React from "react";

import Comp1 from "./comp1";
import Query from "./query";
import { getAccessToken } from "../utility/token";
import { isLoggedIn } from "../utility/login";
import { request } from "../utility/request";

export default function Home() {
  const [fridgeName, setFridgeName] = React.useState();

  return (
    <div>
      <Query type="account">
        <Comp1 />
      </Query>
      <button
        onClick={async () => {
          // const test = await request({ type: "account" });

          // const test = await request({ type: "fridge" });

          const test = await request({
            type: "fridge",
            id: "bedroom",
          });

          // const test = await request({
          //   type: "addFridge",
          //   body: {
          //     name: "bedroom"
          //   }
          // });

          // const test = await request({
          //   type: "addItem",
          //   id: "bedroom",
          //   body: {
          //     name: "soda",
          //     price: 100,
          //     quantity: 1,
          //   },
          // });

          console.log(test?.data);
        }}
      >
        test
      </button>

      <div>
        <h3>add fridge</h3>
        <input
          //
          placeholder="name"
          onChange={(e) => {
            setFridgeName(e.target.value);
          }}
        />
        <button
          //
          onClick={async () => {}}
        >
          add
        </button>
      </div>
    </div>
  );
}
