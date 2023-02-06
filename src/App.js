import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";

const App = () => {
  const [robotsList, setRobotsList] = useState([]);
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setRobotsList(data);
        setRobots(data);
      });
  }, []);

  //ALTERNATIVE WAY
  // useEffect(() => {
  //   setRobots(robotsList);
  // }, [robotsList]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    setRobots(
      robotsList.filter(
        ({ name, email }) =>
          name.toUpperCase().includes(searchField.toUpperCase()) ||
          email.toUpperCase().includes(searchField.toUpperCase())
      )
    );
  }, [searchField, robotsList]);

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox value={searchField} txtChange={onSearchChange} />
      <Scroll>
        <CardList robotsData={robots} />
      </Scroll>
    </div>
  );
};

export default App;
