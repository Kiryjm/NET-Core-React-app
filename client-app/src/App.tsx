import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {

  // React hooks for fetching data from API: useState and useEffect
  // useState allows to store state inside component
  // activities stores a component state
  // function setActivities used for setting state
  const [activities, setActivities] = useState([]);
  
  // useEffect allows to use side effect when component initializes
  // adding array of dependencies will ensure useEffect will not execute endlessly
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>

       <List>
         {activities.map((activity: any) => (
           <List.Item key = {activity.id}>
             {activity.title}
           </List.Item>
         ))}
       </List>
    </div>
  );
}

export default App;
