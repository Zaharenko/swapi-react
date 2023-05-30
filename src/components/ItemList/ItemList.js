import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import IndicatorsRender from "../IndicatorsRender";

import useAsyncSwapi from "../../hooks/useAsyncSwapi";

import style from "./ItemList.module.css";

function ItemList(props) {
  const { onItemSelect, requestName } = props;
  const [itemList, loading, error, download] = useAsyncSwapi(requestName, true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    download();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItemList = Array.isArray(itemList)
    ? itemList.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    : [];

  return (
    <div >
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter by name" />
      <ul className={style.itemList}>
        <IndicatorsRender loading={loading} error={error} />
        {!loading &&
          !error &&
          filteredItemList.map((item) => {
            const { id } = item;
            const label = props.children(item);
            return (
              <li key={id} onClick={() => onItemSelect(id)}>
                {label}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

ItemList.propTypes = {
  onItemSelect: PropTypes.func,
  requestName: PropTypes.string,
};

export default ItemList;
