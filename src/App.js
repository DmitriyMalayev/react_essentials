import "./App.css";

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food</p>
      <ul style={{ textAlign: "center" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = ["Pasta", "Salmon", "Steak", "Salad"];
const dishObjects = dishes.map((dish, index) => ({ id: index, title: dish }));
console.log(dishObjects);

function App() {
  return (
    <div className="App">
      <Header name="Dmitriy Malayev" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
