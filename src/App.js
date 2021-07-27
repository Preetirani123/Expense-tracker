import { Header } from './Components/Header';
import { Remaining } from './Components/Remaining';
import { ExpenseRecord } from './Components/ExpenseRecord';
import { ExpenseList } from './Components/ExpenseList';
import { AddList } from './Components/AddList';
import './App.css';

function App() {
  return (
    <div >
      <Header />
      <div className="main-container"> 
      <Remaining />
      <ExpenseRecord />
      <ExpenseList />
      <AddList />
      </div>
      
    </div>
  );
}

export default App;
