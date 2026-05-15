function ExerciseCard({ exercise }) {

  return (
    <div className="card">

      <div className="card-body">

        <h3>{exercise.name}</h3>

        <p>{exercise.muscle}</p>

        <p>{exercise.difficulty}</p>

      </div>

    </div>
  );
}

export default ExerciseCard;