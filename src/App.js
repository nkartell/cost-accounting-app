import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";


const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2023, 2, 12),
    description: "Freeze",
    amount: 999.9,
  },
  {
    id: "c2",
    date: new Date(2020, 12, 10),
    description: "MacBook",
    amount: 2500,
  },
  {
    id: "c3",
    date: new Date(2019, 2, 12),
    description: "Iphone",
    amount: 800,
  },
  {
    id: "c4",
    date: new Date(2019, 15, 12),
    description: "Pants",
    amount: 70,
  },  
  {
    id: "c5",
    date: new Date(2023, 5, 12),
    description: "Coat",
    amount: 170,
  },
  {
    id: "c6",
    date: new Date(2020, 1, 10),
    description: "Sneakers",
    amount: 200,
  },
];



function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS);
  
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      console.log(prevCosts)
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
