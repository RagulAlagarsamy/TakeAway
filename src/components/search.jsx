import React from 'react';
import {coffeeCardPics, icecreamCardPics} from './details/details';
import { connect } from "react-redux";
import { searchSelectedList } from "../store/details";
import { withRouter, Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class SelectSearch extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
        const listItems = this.props.items.map((coffee) =>
        <Link to="/selected"><li key={coffee.id}><a className="btn" onClick={() => this.props.handleClick(coffee)}>{coffee.title}</a></li></Link>
        );
        
    return (
        <div style={{ background: "white", minWidth:"25%", zIndex:0, marginTop: "2px" ,position: "absolute", borderRadius:"3px", textAlign: "left", padding:"10px" ,maxHeight:"200px", overflow:"auto"}}>
        {(listItems.length > 0) ? 
        <ul style={{ listStyleType: "none", padding: "0" }}>
        {listItems}
        </ul>
        : <p>No Matches Found</p> }

      </div>
    );
  }
}



export default withRouter(SelectSearch)

