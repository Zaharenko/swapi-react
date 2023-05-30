import ErrorIndicator from "../ErrorIndicator";
import Spinner from "../Spinner";

const IndicatorsRender = ({ loading, error }) => {
  return (
    <>
      {loading && <Spinner />}
      {error && <ErrorIndicator error={error}/>}
    </>
  );
};

export default IndicatorsRender;
