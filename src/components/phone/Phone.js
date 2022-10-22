import React from "react";
import { useLoaderData } from "react-router-dom";

const Phone = () => {
  let phone = useLoaderData();
  console.log(phone.name);
  return (
    <div>
      <h1>Name: {phone.name}</h1>
    </div>
  );
};

export default Phone;
