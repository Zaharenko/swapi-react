import React, { useState } from "react";

import Row from "../../components/Row";

import { PeopleList, PersonDetails } from "../../components/SwComponents";

const People = () => {
  const [personId, setPersonId] = useState(1);
  const onPersonSelect = (id) => {
    setPersonId(id);
  };

  const list = <PeopleList onPersonSelect={onPersonSelect} itemId={personId} />;
  const details = (
    <PersonDetails onPersonSelect={onPersonSelect} itemId={personId} />
  );

  return <Row leftItem={list} rightItem={details} />;
};

export default People;
