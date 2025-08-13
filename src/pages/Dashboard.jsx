import { useContext } from "react";
import { GlobalStore } from "../component/GlobalStore";

function Dashboard() {
  const { User } = useContext(GlobalStore);
  const LoginUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="text-black font-bold">{`welcome ${LoginUser?.name}`}</div>
  );
}

export default Dashboard;
