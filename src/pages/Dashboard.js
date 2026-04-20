import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, {user}</h2>

      <button onClick={() => navigate("/chat")}>
        Start Learning
      </button>

      <br /><br />

      <button onClick={() => {
        localStorage.removeItem("user");
        navigate("/");
      }}>
        Logout
      </button>
    </div>
  );
}