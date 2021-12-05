import React from "react";

import Comp1 from "./comp1";
import Query from "./query";
import * as request from "../utility/request";

export default function Home() {
  const [fridgeName, setFridgeName] = React.useState();

  return (
    <div>
      <Query type="fridge" fridge="kitchen">
        <Comp1 />
      </Query>

      <button
        onClick={async () => {
          // const test = await request.getFridges();

          // const test = await request.getFridge("kitchen");

          // const test = await request.addFridge("bedroom");

          const test = await request.addItem(
            //
            "bedroom",
            {
              name: "soda",
              price: 100,
              quantity: 1,
            }
          );

          console.log(test?.data);
        }}
      >
        test
      </button>
    </div>
  );
}
