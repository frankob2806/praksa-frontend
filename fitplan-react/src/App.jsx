import Header from "./components/Header.jsx";
import ExerciseCard from "./components/ExerciseCard";
import { exercises } from "./data/exercises";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const filteredExercises = exercises.filter(function (exercise) {

  return exercise.name
    .toLowerCase()
    .includes(search.toLowerCase());

});

  return (
    <>
      <Header />

      <div className="container">

        <h1>FitPlan React</h1>
        
        <input
        type="text"
        placeholder="Pretraži vježbe"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        />

        {filteredExercises.map(function (exercise) {

          return (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;