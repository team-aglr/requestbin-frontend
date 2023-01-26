import { useParams } from "react-router-dom";

function Bin() {
  const { uuid } = useParams();
  <div className="max-w-2xl bg-white">test</div>;
  return <div>{uuid}</div>;
}

export default Bin;
