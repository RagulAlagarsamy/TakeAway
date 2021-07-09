import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './search.css';


class SelectSearch extends React.Component {

  render() {
        const listItems = this.props.items.map((coffee) =>
        <Link to="/selected" key={coffee.id} ><li className="lists"><button className="btn" style={{ border: "none"}}  onClick={() => this.props.handleClick(coffee)}>
        <div className="container" style={{ textAlign: "left"}}>
        <div className="row">
        <div className= "col-lg-3 pull-right" style={{alignItems: "center"}}>
        <img src={coffee.src} width="70px"></img>
        </div>
        <div className="col" style={{marginLeft: "20px", marginTop:"25px"}}>
        {coffee.title}
        </div>
          </div>
        </div>
        </button></li></Link>
        );
        
    return (
        <div className="shadows-lg mb-5 rounded" style={{ background: "white", minWidth:"27%", zIndex:1, marginTop: "2px" ,position: "absolute", borderRadius:"3px", textAlign: "left" ,maxHeight:"200px", overflow:"auto"}}>
        {(listItems.length > 0) ? 
        <ul style={{ listStyleType: "none", padding: "0" }}>
        {listItems}
        </ul>
        : <p style={{ padding: "10px 15px" }}>No Matches Found</p> }

      </div>
    );
  }
}



export default withRouter(SelectSearch)

