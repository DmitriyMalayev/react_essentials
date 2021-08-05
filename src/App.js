import React, { useReducer } from "react";
import "./App.css";

function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false); //function, initial state
  // const [checked, setChecked] = useState(false);

  // function toggle() {
  //   setChecked((checked) => !checked);

  // }

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

/*
 function App() {
   const [emotion, setEmotion] = useState("happy");
   const [secondary, setSecondary] = useState("tired");

   useEffect(() => {
     console.log(`It's ${emotion} around here`);
   }, [emotion]);

   useEffect(() => {
     console.log(`It's ${secondary} around here`);
   }, [secondary]);

   return (
     <>
       <h1>
         Current emotion is {emotion} and {secondary}
       </h1>
       <button onClick={() => setEmotion("happy")}>Make Happy</button>
       <button onClick={() => setEmotion("crabby")}>Make Crabby</button>
       <button onClick={() => setEmotion("frustrated")}>Frustrated</button>
       <button onClick={() => setEmotion("enthusiastic")}>Enthusiastic</button>
     </>
   );
 }

 function SecretComponent() {
   return <h1>Secret Information</h1>;
 }

 function RegularComponent() {
   return <h1>Public Information</h1>;
 }

 function App(props) {
   return(
   <>
     {props.authorized ? <SecretComponent /> : <RegularComponent />}
   </>)
 }

 function App(props) {
   if (props.authorized) {
     return <SecretComponent />;
   } else {
     return <RegularComponent />;
   }
 }
*/

export default App;

/*
function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  console.log(props);
  return (
    <section>
      <p>We serve the most {props.adjective} food</p>
      <img src={restaurant} alt="restaurant" />
      <ul style={{ textAlign: "left" }}>
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
*/
