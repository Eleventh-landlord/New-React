import StateCard from "./StateCard.jsx";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> Nigerian States and Capitals</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <StateCard
          state="Lagos"
          capital="Ikeja"
          region="West"
          population="14 million"
        >
          Third Mainland Bridge
        </StateCard>

        <StateCard
          state="Kano"
          capital="Kano"
          region="North"
          population="13 million"
        >
          Kano City Walls
        </StateCard>

        <StateCard
          state="Enugu"
          capital="Enugu"
          region="East"
          population="4 million"
        >
          Awhum Waterfall
        </StateCard>

        <StateCard
          state="Rivers"
          capital="Port Harcourt"
          region="South"
          population="7 million"
        >
          Port Harcourt Pleasure Park
        </StateCard>
      </div>
    </div>
  );
}

export default App;
