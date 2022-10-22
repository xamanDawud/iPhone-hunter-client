import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
  let phones = useLoaderData();
  return (
    <div>
      {phones.map((phone) => (
        <li>
          <Link to={`/${phone.id}`}>{phone.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Phones;
