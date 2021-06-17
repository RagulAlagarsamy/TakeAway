import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class card extends Component {

    constructor(props){
        super(props);
    }
    render() {
        const {cards,heading} = this.props;
        return (
            <div className="container mt-5" style={{ textAlign: "left"}}>
            <h3 style={{ textAlign: "left", marginTop: "30px"}}>{heading}</h3>
            <div className="row">
            {cards.map(pic =>{
                return(
                    <div className="col-lg-3" key={pic.id}>
                    <div className="card-group" style={{borderRadius: "15",border:"20"}}>
                    <Link  onClick ={() => this.props.selectItem(pic)} style={{ textDecoration: "none" , outline: "none"}}>
                    <div className="card" >
                    <img className="card-img-top" src={pic.src} alt="Card image cap"/>
                    <div className="card-body bg-dark">
                    <h5 className="card-title text-white">{pic.title}</h5>
                    </div>
                    </div>
                    </Link>
                </div>
              </div>
                )
            })}
              </div>
              </div>
        );
    }
}

export default card;