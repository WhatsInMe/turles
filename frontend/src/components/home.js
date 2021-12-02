import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";

import Comp1 from "./comp1";
import Query from "./query";
import { getAccessToken } from "../utility/token";
import { isLoggedIn } from "../utility/login";
import request from "../utility/request";

export default function Home() {
  const [fridgeName, setFridgeName] = React.useState();

  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={async () => {
          // const test = await request({
          //   type: "account",
          // });
          // console.log(test);

          const test = await request({
            type: "addFridge",
            body: {
              name: "test1",
            },
          });
          if (!test) {
            navigate("/login");
          }
          console.log(test);
        }}
      >
        test
      </button>
      <div>
        {/* <Query type="account">
          <Comp1 />
        </Query> */}
      </div>

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
          onClick={async () => {
            if (await isLoggedIn()) {
              axios
                .post(
                  //
                  "/auth/fridge",
                  {
                    name: fridgeName,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${getAccessToken()}`,
                    },
                  }
                )
                .then((res) => {
                  console.log(res.data);
                });
              return;
            }
            navigate("/login");
          }}
        >
          add
        </button>
      </div>
    </div>
  );
}
