import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Row, Col } from 'antd';
import Person from './components/Person';


class App extends Component {

  state = {
    users: []
  };

  componentDidMount() {
    setTimeout(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })}, 2000);
    }
      deleteUser = (id) => {
        this.setState((prevState) => ({
          users: prevState.users.filter((entry) => entry.id !== id),
        }));
      };
    
      updateUser = (id, data) => {
        this.setState((prevState) => ({
          users: prevState.users.map((entry) => {
            if (entry.id === id) return { ...entry, ...data };
            return entry;
          }),
        }));
      };
      debugger;
  render() {
    const { users } = this.state;

    if (users.length === 0) {
      return (
        <div>
          <div className="spinner">
          </div>
        </div>
      );
    }

    return (
      
      <Row>
       {users.map((user) => (
        <Col xs={24} sm={24} md={8} lg={8} xl={6} key={user.username}>
          <Person user={user} deleteUser={this.deleteUser} updateUser={this.updateUser} />
        </Col>
      ))} 
    </Row>
    );
  }
}

export default App;
