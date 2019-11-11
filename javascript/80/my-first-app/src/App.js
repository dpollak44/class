import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeC, { WelcomeF } from './Welcome';
import Clock from './Clock';
import Student from './Student';
import ClickCounter from './ClickCounter';

class App extends Component {
  state = {
    students: [
      {
        id: 1,
        name: 'John Doe',
        address: {
          street: '123 Main Street',
          city: 'Anytown',
          state: 'NJ',
          zip: '08777'
        },
        grades: [90, 87, 93]
      },
      {
        id: 2,
        name: 'Jane Doe',
        address: {
          street: '123 Any Street',
          city: 'SomeTown',
          state: 'NY',
          zip: '11777'
        },
        grades: [86, 83, 77]
      }
    ]
  }

  getStudents() {
    return this.state.students.map(student => <Student key={student.id} student={student} />);
  }

  //function App() {
  render() {
    //const students = this.state.students.map(student => <Student key={student.id} student={student} />);
    const students = this.getStudents();

    return (
      <div className="App">
        <ClickCounter />
        <Clock />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <WelcomeF name="Donald" />
          <WelcomeF name="Jared" />
          <WelcomeC name="Ivanka" />
          <WelcomeC name="Mike" />
          {/*<Student name="John Doe" address="123 Main Street" />
        <Student name="Jane Doe" address="123 Any Street" />*/}
          {/*<Student student={this.state.students[0]} />
          <Student student={this.state.students[1]} />*/}

          {/*{this.state.students.map(student => <Student key={student.id} student={student} />)}*/}
          {students}
        </header>
      </div>
    );
  }
}

export default App;
