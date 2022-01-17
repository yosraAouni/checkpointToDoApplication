
import './App.css';
import AddTask from './components/AddTask';
import ListOfTasks from './components/ListOfTasks';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <div>
        <ListOfTasks/>
      </div>
    </div>
  );
}

export default App;
