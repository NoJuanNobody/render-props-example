import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List.js';
import {ListGroup, ListGroupItem, Grid, Row, Col, FormControl} from 'react-bootstrap'
class App extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({searchText:e.target.value});
  }
  state={searchText:""}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Grid>
          <Row>
            <Col xs={8} md={4} lg={4}>

            <List
          url="http://www.filltext.com/?rows=30&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
          searchText={this.state.searchText}
          render={({list, isLoading}) =>(
          <div>
            <h2>Names</h2>
            <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
            {isLoading && <h2>Loading...</h2>}
            <ListGroup>
              {list.length > 0 && list.map(person => (
                <ListGroupItem 
                key={person.fname} 
                header={person.fname+" "+person.lname}>
                {person.tel} <br/>
                {person.address} <br/>
                {person.city} <br/>
                {person.state} <br/>
                {person.zip} <br/>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>)} />
            </Col>
          </Row>
        </Grid>
        
      </div>
    );
  }
}

export default App;
