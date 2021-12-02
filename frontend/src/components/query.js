import axios from "axios";
import React from "react";

import { getAccessToken } from "../utility/token";
import { isLoggedIn } from "../utility/login";
import { useNavigate } from "react-router-dom";
import request from "../utility/request";

export default function Query({ body, children, id, type }) {
  const [data, setData] = React.useState();

  const navigate = useNavigate();

  React.useEffect(() => {
    async function load() {
      const test = await request({ body, id, type });
      if(!test){
        console.log("no")
        return;
      }
      console.log(test)
    }
    load();
  }, [body, id, type]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { data });
    }
    return child;
  });

  return (
    <div>
      {/* // */}
      {!data ? "loading" : childrenWithProps}
    </div>
  );
}
