import React from "react";
import { useParams, useSearchParams } from "react-router";

const Dynamic = () => {
  const params = useParams();
  console.log(params.id);

  let [query] = useSearchParams();
  let name = query.get("name");
  console.log(name);
  return (
    <>
      <div> Dynamic Route</div>
      <p>
        This is my dymanic route value {params.id}. and this is my query
        paramater value {name}
      </p>
    </>
  );
};

export default Dynamic;
