import React, { Component } from 'react';
import './test.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import RichText from './richText';

class analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
 
    render() {
        const classes = makeStyles({
            root: {
              maxWidth: 345,
              border: "none",
              boxShadow: "none",
              padding: "20px"
            },
            media: {
              height: '300px',
              border: "none",
              boxShadow: "none",
              padding: "20px"
            },
          });
        return (
            <div>
                 <h3 className=" fw-normal shadow-sm p-4 m-0 bg-body rounded" style={{ width: "99%" }}>Analytics</h3>
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-4">
                          {/* <Card className={classes.root} style={{ border: "none", boxShadow: "none", borderRadius: "0" }}>
                            <CardActionArea>
                            <CardContent style={{ backgroundColor: "black", color:"white", fontFamily: "Oswald,sans-serif" }}>
                                <Typography gutterBottom variant="h5" component="h3" style={{fontFamily: "Oswald,sans-serif"}}>
                                Visits Today
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ backgroundColor: "black", color:"grey", lineHeight: "26px" }}>
                                4332
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card> */}
                        <RichText style={{ width: "100px" }}/>
                          </div>
                          <div className="col-lg-4"></div>
                          <div className="col-lg-4"></div>
                      </div>
                  </div>






            </div>
        );
    }
}

export default analytics;