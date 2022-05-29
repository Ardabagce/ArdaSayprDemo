import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className="container">
        {users.map((user) => (
          <div className="ec-card" style={{ padding: 10, margin: '20px 0' }}>
            <div className="row">
              <div className="col-auto">
                <img
                  src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                  alt="Profile Pic"
                  style={{ width: 200, height: 200 }}
                />
              </div>
              <div className="col">
                <h2>{user.name}</h2>
                <p>
                  <strong>Email: </strong>
                  {user.email}
                </p>
                <p>
                  <strong>Phone: </strong>
                  {user.phone}
                </p>
                <p>
                  <strong>Address: </strong>
                  {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                </p>
                <p>
                  <strong>Website: </strong>
                  {user.website}
                </p>
                <p>
                  <strong>Company: </strong>
                  {user.company.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
