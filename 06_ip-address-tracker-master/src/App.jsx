import "./App.css";
import Map from "./Map.jsx";

function App() {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_ikzkrP7HJ68pMC91UvGD9ufSDDEAB&ipAddress=192.168.0.2"
      );
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (err) {}
  };
  fetchData();
  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  );
}

export default App;
