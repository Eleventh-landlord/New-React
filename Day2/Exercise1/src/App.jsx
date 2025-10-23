import GreetingCard from "./GreetingCard.jsx";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1> Greeting Cards</h1>
      <GreetingCard name="Tife" message="Have a great day!" color="lightgreen" />
      <GreetingCard name="Adeleke" message="Keep shining bright!" color="lightblue" />
      <GreetingCard name="Kehinde" message="You're doing amazing!" color="lightpink" />
     
      <GreetingCard name="Meech" message="Stay awesome!" />
    </div>
  );
}

export default App;
