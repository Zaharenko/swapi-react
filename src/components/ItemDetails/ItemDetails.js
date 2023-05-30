import React, { useEffect } from "react";
import PropTypes from "prop-types";

import IndicatorsRender from "../IndicatorsRender/IndicatorsRender";

import useAsyncSwapi from "../../hooks/useAsyncSwapi";

import style from "./ItemDetails.module.css";

const ItemDetails = (props) => {
  const { requestName, itemId, getImage } = props;
  const [item, loading, error, download] = useAsyncSwapi(
    requestName,
    false,
    itemId
  );

  useEffect(() => {
    download();
  }, [itemId]);

  return (
    <div className={style.itemDetails}>
      <IndicatorsRender loading={loading} error={error} />
      {!loading && !error && (
        <>
          <img src={getImage(itemId)} alt={"details info"} />
          <ul className={style.info}>
            <h2 className={style.title}>{item.name}</h2>{" "}
            {React.Children.map(props.children, (child) => {
              let childWithNewProps = React.cloneElement(child, { item });
              return childWithNewProps;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

ItemDetails.propTypes = {
  requestName: PropTypes.string,
  itemId: PropTypes.any,
  getImage: PropTypes.func,
};
export default ItemDetails;
