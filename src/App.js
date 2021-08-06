
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello React Testing Library</h1>
    </div>
  );
}

export default App;

/*
import React, { useState, useEffect } from "react";
import "./App.css";

https://api.github.com/users/dmitriymalayev

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (!data) return null;
  

  if (data) {
    return (
      <div>
        <h1> {data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    );
  }
  return <div> No User Available</div>;
}

export default App;

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

   return (
     <>
       <input type="checkbox" value={checked} onChange={toggle} />
       <p>{checked ? "checked" : "not checked"}</p>
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


export default App;


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
