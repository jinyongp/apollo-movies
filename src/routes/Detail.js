import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_MOVIE } from "../queries/movie";

const Detail = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  return (
    <div className="detail">{loading ? <h1>Loading</h1> : <h1>{id}</h1>}</div>
  );
};

export default Detail;
