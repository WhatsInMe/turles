import React from "react";

import { request } from "../utility/request";

export default function Query({ body, children, id, type }) {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    async function load() {
      const res = await request({ body, id, type });
      if (res) {
        setData(res.data);
      }
    }
    load();
  }, [body, id, type]);

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
