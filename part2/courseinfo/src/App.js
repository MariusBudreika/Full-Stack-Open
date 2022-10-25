import Course from "./components/Course";
import { courses } from "./data/courses";

const App = () => {
  return <Course courses={courses} />;
};

export default App;
