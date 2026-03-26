import "./App.css";
import Cards from "./components/Card";

function App() {
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/960px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      title: "Monalisa",
      description:
        "The Mona Lisa[a] is a half-length portrait painting by the Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.The painting's novel qualities include the subject's enigmatic expression, monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.",
      value: "Read More",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/The_Baptism_of_Christ_%28Verrocchio_and_Leonardo%29.jpg/960px-The_Baptism_of_Christ_%28Verrocchio_and_Leonardo%29.jpg",
      title: "The Baptism of Christ",
      description:
        "The Baptism of Christ is an oil-on-panel painting finished around 1475 in the studio of the Italian Renaissance painter Andrea del Verrocchio and generally ascribed to him and his pupil Leonardo da Vinci. Some art historians discern the hands of other members of Verrocchio's workshop in the painting as well.",
      value: "More Read",
    },
     {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/960px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      title: "Monalisa",
      description:
        "The Mona Lisa[a] is a half-length portrait painting by the Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.The painting's novel qualities include the subject's enigmatic expression, monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.",
      value: "Read More",
    },
  ];

  return (
    <>
      <div className="center">
        {data.map((data, index) => {
          return <Cards key={index} data={data} />;
        })}
      </div>
    </>
  );
}

export default App;
