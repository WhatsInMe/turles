import React from "react";

import * as request from "../utility/request";

export default function Query({ children, fridge, type }) {
  const [data, setData] = React.useState();

  const method = `get${type.charAt(0).toUpperCase() + type.slice(1)}`;

  React.useEffect(() => {
    async function load() {
      const res = await request[method](fridge);
      setData(res?.data);
    }
    load();
  }, [fridge, method]);

  const childrenWithProps = React.Children.map(
    //
    children,
    (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { data });
      }
      return child;
    }
  );

  return (
    <div>
      {/* // */}
      {!data ? "loading" : childrenWithProps}
    </div>
  );
}
