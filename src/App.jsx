import "./App.css";
import AssessmentCard from "./components/AssessmentCard.jsx";

function App() {
  const details = [
    { name: "Duration", val: "00" },
    { name: "Questions", val: "00" },
  ];

  const enroll = {
    val: 324,
    lastEnroll: [{ name: "LP" }, { name: "LP" }, { name: "ST" }],
  };
  return (
    <>
      <div className="App">
        <AssessmentCard
          name="Math Assessment"
          type="Job"
          date="20 Apr 23"
          details={details}
          enroll={enroll}
        />
      </div>
    </>
  );
}

export default App;
