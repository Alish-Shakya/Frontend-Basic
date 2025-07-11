import React from "react";
import { useSearchParams } from "react-router";

const QueryParams = () => {
  let [query] = useSearchParams();
  console.log(query.get("name"));
  return <div>QueryParams</div>;
};

export default QueryParams;
