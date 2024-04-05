import Title from "./components/Title";
import MainBox from "./components/MainBox";
import ButtonControl from "./components/ButtonControl";
import { person } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [personData, setPersonData] = useState(person);
  const onDelete = () => {
    setPersonData([]);
  };

  const onShowData = () => {
    setPersonData(person);
  };

  useEffect(()=>{
    onDelete()
  },[])

  return (
    <div className="w-[80%] mx-auto pt-[200px]">
      <Title person={personData} />
      <MainBox person={personData} />
      <ButtonControl deleteData={onDelete} viwData={onShowData} />
    </div>
  );
}

export default App;
