
import './App.css'
import { BarChart } from './components/Bar.tsx'
import {LineGraph} from "./components/Line.tsx"
import { PieChart } from './components/Pie.tsx'


function App() {

  return (
    <div className = "App">
      {" "}
      <LineGraph />{" "}
      <BarChart />
      <PieChart/>
    </div>
  )
}

export default App
