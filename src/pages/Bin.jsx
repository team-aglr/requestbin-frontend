import { useParams } from "react-router-dom";

function Bin() {
  const { uuid } = useParams();
  return <div>{uuid}</div>;
}

export default Bin;
