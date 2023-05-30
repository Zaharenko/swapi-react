import {  useContext, useState } from "react";
import { SwapiContext } from "../components/App/App";

export default function useAsyncSwapi(swapiMethod, array = false, id) {
  const swapi = useContext(SwapiContext);
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function download() {
    setLoading(true);
    let newId = id || Math.floor(2 + Math.random() * (18 + 1 - 2));
    try {
      let result;
      if (array) {
        result = await swapi[swapiMethod]();
      } else {
        result = await swapi[swapiMethod](newId);
      }
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return [data, loading, error, download];
}
