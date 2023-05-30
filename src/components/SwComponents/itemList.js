import React from "react";

import ItemList from "../ItemList";

const PeopleList = (props) => {
  return (
    <ItemList onItemSelect={props.onPersonSelect} requestName={"getAllPeople"}>
      {(element) => `${element.name}`}
    </ItemList>
  );
};

export { PeopleList };
