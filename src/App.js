import React  from "react";
import { connect } from 'react-redux'

const Name = (name) => (
    <div>{name}</div>
);

const Date = (date) => (
    <div>{date}</div>
);

const Number = (number) => (
    <div>{number}</div>
);

const App = (({name, number, date}) => {
    return 
    (
        <div>
            <Name name = {name}/>
            <Date date = {date}/>
            <Number number = {number} />
        </div>
    )
});

const mapStateToProps = (state) => ({
    name: state.name,
    date: state.date,
    number: state.number
  })

export default connect(mapStateToProps)(App);