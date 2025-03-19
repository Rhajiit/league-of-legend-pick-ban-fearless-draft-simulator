import { Link } from "react-router";

function App() {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <p className="">league Of Legend - Pick and Ban</p>
      <Link to="/local">밴픽 클라이언트 환경으로 구동하기</Link>
    </div>
  );
}

export default App;
