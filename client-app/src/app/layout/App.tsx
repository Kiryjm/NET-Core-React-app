import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';

function App() {

  // React hooks for fetching data from API: useState and useEffect
  // useState allows to store state inside component
  // activities stores a component state
  // function setActivities used for setting state
  const [activities, setActivities] = useState<Activity[]>([]);
  
  // useEffect allows to use side effect when component initializes
  // adding array of dependencies will ensure useEffect will not execute endlessly
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, [])

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <List>
          {activities.map(activity => (
            <List.Item key = {activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
      </Container>
    </>
  );
}

export default App;
