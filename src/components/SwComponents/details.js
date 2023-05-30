import React, { useContext } from "react";
import ItemDetails from "../ItemDetails";
import Record from "../Record";
import { SwapiContext } from "../App/App";

const PersonDetails = (props) => {
  const swapi = useContext(SwapiContext);
  return (
    <ItemDetails
      requestName={"getPerson"}
      itemId={props.itemId}
      getImage={swapi.getImagePerson}
    >
      <Record label={"Name"} field={"name"} />
      <Record label={"Gender"} field={"gender"} />
      <Record label={"Eye color"} field={"eyeColor"} />
      <Record label={"Height"} field={"height"} />
      <Record label={"Birth year"} field={"birthYear"} />
    </ItemDetails>
  );
};

export { PersonDetails };
