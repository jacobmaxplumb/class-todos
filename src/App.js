import { ClassTodos } from "./class-components/ClassTodos";
import { FunctionalTodos } from "./functional-components/FunctionalTodos";

function App() {
  return (
    <div style={{margin: '30px'}}>
      <h3>Functional</h3>
      <FunctionalTodos />
      <br />
      <h3>Class</h3>
      <ClassTodos />
    </div>
  );
}

export default App;
