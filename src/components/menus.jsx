import React, { Component } from 'react';
import { addItems,addNewItems } from "../store/user";
import { connect } from "react-redux";
// import Card from './card';
import {coffeeCardPics, icecreamCardPics} from './details/details';
import './menus.css';
import Carousel from 'react-bootstrap/Carousel' 
import Video from '../assets/489_girl_drink_coffee.mp4';
// import Videos from '../assets/1DJI_0619.mov';
import Image from '../assets/vecteezy_barista-pouring-milk-into-a-glass-of-iced-coffee_2671770.jpg'
// import newImage from '../assets/vecteezy_a-cup-of-art-latte-or-cappuccino-coffee-with-retro-filter-effect_1898592.jpg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import newImages from './static/images/home-3-img-2.jpeg';
import homeImages from './static/images/home3-img-3.jpeg';
import slideImage from './static/images/home-3-img-1.jpeg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class Menus extends Component {
  

  onItemSelect = (coffee) =>{
    // if(this.props.menus.length === 0){
    //   this.props.dispatch(addNewItems(coffee))
    // }else{
    //   this.props.dispatch(addItems(coffee))
    // }
    console.log(coffee);
  }

 render() {
  const classes = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: '300px',
    },
  });
  return(
    <div style={{ backgroundColor: "black"}}>
      <div className="carousel">

    <Carousel fade interval={5000} style={{ zIndex: 0 }} >
      <Carousel.Item pause="hover">
      <div className="imgContainers">
      <video id="glass" className="videoTag" loop autoPlay src={Video} type="video/mp4" style={{ bottom: "100px", position: "relative"}} />
      <div id="textContent" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "850px" ,position:"relative", color: "black"}}>
      <h1 style={{ fontSize: "80px", fontFamily: 'Lato, sans-serif', marginBottom: "40px", marginLeft: "40px" }}>The Stylish <br />coffee</h1>
      <h2 style={{ fontSize: "18px", fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
      </div>
      </div> 
      </Carousel.Item>
      <Carousel.Item>
      <div className="imgContainers">
      {/* <img src={newImage} width="100%" /> */}
       {/* <video id="glass" width="1920" height="1080" className="videoTag"  loop autoPlay src={Videos} type="video/mp4" style={{ bottom: "100px", position: "relative"}} /> */}
      <div id="newContents" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "1150px" , left: "150px" ,position:"relative", color: "white"}}>
      <h1 style={{ fontSize: "80px", fontFamily: 'Lato , sans-serif', marginBottom: "40px", marginLeft: "40px" }}>WE LOVE <br />WHAT WE DO</h1>
      <h2 style={{ fontSize: "18px", fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
      </div> 
    </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="imgContainers">
       <img src={Image} width="100%" />
      <div id="textContents" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "650px" , left: "750px" ,position:"relative", color: "white"}}>
      <h1 style={{ fontSize: "70px", fontFamily: 'Lato , sans-serif', marginBottom: "20px", marginLeft: "20px" }}>COFFEE IS <br />OUR LANGUAGE</h1>
      <h2 style={{ fontSize: "18px", fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
      </div> 
    </div>
      </Carousel.Item>
    </Carousel>
      </div>


   <div style={{ backgroundColor: "black", margin: "100px"}}>
    <p style={{ color: "#c7a17a", fontSize: '18px', fontFamily: 'Merriweather, serif', textAlign: "center"}}>What Happens Here</p>
    <h1 style={{ color: "white", fontFamily: 'Oswald, sans-serif', fontWeight: "700", lineHeight: "1.14286em", marginBottom: "19px", textAlign: "center" }}>COFFEE BUILD YOUR BASE.</h1>
    <div style={{ width: "120px", borderBottomWidth: "3px", borderBottom: "3px solid #c7a17a", verticalAlign:"middle", position: "relative", display:"inline-block", margin:"5px 0", lineHeight: "1em", left: "590px"}}></div>

    <div className="container mt-5" style={{ textAlign: "left" }}>
      <div className="row">
        <div className="col-lg-4">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                style={{ height: '300px' }}
                image={newImages}
                title="Coffee"
              />
              <CardContent style={{ backgroundColor: "black", color:"white", padding: "30px 0", fontFamily: "Oswald,sans-serif" }}>
                <Typography gutterBottom variant="h5" component="h3" style={{fontFamily: "Oswald,sans-serif"}}>
                  PLACES TO GET LOST
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{ backgroundColor: "black", color:"grey", lineHeight: "26px" }}>
                Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                style={{ height: '300px' }}
                image={homeImages}
                title="Coffee"
              />
              <CardContent style={{ backgroundColor: "black", color:"white", padding: "30px 0", fontFamily: "Oswald,sans-serif" }}>
                <Typography gutterBottom variant="h5" component="h3" style={{fontFamily: "Oswald,sans-serif"}}>
                BEST COFFEE FLAVORS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{ backgroundColor: "black", color:"grey", lineHeight: "26px" }}>
                Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="col-lg-4" style={{ border: "2px solid white" , fontFamily: "Oswald,sans-serif",padding: "35px", backgroundImage: `url("https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-img-1.jpg")` }}>
          <h3 style={{ color: "white", marginBottom: "50px", fontWeight: "700" }}>Opening Hours</h3>
          <div>
            <span style={{ color: "white", fontSize: "22px", display: "table-cell",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>Monday</span>
            <span style={{ width: "70%", height: "3px", display: "table-cell", position: "relative", zIndex: 1 }} ><span style={{ borderBottom:"1px solid rgba(168,164,161,.25)", display: "block", width: "98%" }}></span></span>
            <span style={{ color: "#c7a17a", fontSize: "22px", display: "table-cell",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>Closed</span>
          </div>
          <div className="pt-3">
            <span style={{ color: "white", fontSize: "22px", display: "table-cell",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>Tuesday</span>
            <span style={{ width: "70%", height: "3px", display: "table-cell", position: "relative", zIndex: 1 }} ><span style={{ borderBottom:"1px solid rgba(168,164,161,.25)", display: "block", width: "98%" }}></span></span>
            <span style={{ color: "#acacac", display: "table-cell", width: "1px", whiteSpace: "nowrap"}}>
            <span style={{ color: "#acacac", fontSize: "22px",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>9:00</span>
            <span>-</span>
            <span style={{ color: "#acacac", fontSize: "22px",paddingLeft: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>22:00</span>
            </span>
          </div>
          <div className="pt-3">
            <span style={{ color: "white", fontSize: "22px", display: "table-cell",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>Wednesday</span>
            <span style={{ width: "70%", height: "3px", display: "table-cell", position: "relative", zIndex: 1 }} ><span style={{ borderBottom:"1px solid rgba(168,164,161,.25)", display: "block", width: "98%" }}></span></span>
            <span style={{ color: "#acacac", display: "table-cell", width: "1px", whiteSpace: "nowrap"}}>
            <span style={{ color: "#acacac", fontSize: "22px",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>9:00</span>
            <span>-</span>
            <span style={{ color: "#acacac", fontSize: "22px",paddingLeft: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>22:00</span>
            </span>
          </div>
          <div className="pt-3">
            <span style={{ color: "white", fontSize: "22px", display: "table-cell",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>Thursday</span>
            <span style={{ width: "70%", height: "3px", display: "table-cell", position: "relative", zIndex: 1 }} ><span style={{ borderBottom:"1px solid rgba(168,164,161,.25)", display: "block", width: "98%" }}></span></span>
            <span style={{ color: "#acacac", display: "table-cell", width: "1px", whiteSpace: "nowrap"}}>
            <span style={{ color: "#acacac", fontSize: "22px",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>9:00</span>
            <span>-</span>
            <span style={{ color: "#acacac", fontSize: "22px",paddingLeft: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>20:00</span>
            </span>
          </div>
          <div className="pt-3">
            <span style={{ color: "white", fontSize: "22px", display: "table-cell",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>Friday</span>
            <span style={{ width: "70%", height: "3px", display: "table-cell", position: "relative", zIndex: 1 }} ><span style={{ borderBottom:"1px solid rgba(168,164,161,.25)", display: "block", width: "98%" }}></span></span>
            <span style={{ color: "#acacac", display: "table-cell", width: "1px", whiteSpace: "nowrap"}}>
            <span style={{ color: "#acacac", fontSize: "22px",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>9:00</span>
            <span>-</span>
            <span style={{ color: "#acacac", fontSize: "22px",paddingLeft: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>18:00</span>
            </span>
          </div>
          <div className="pt-3">
            <span style={{ color: "white", fontSize: "22px", display: "table-cell",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>Saturday</span>
            <span style={{ width: "70%", height: "3px", display: "table-cell", position: "relative", zIndex: 1 }} ><span style={{ borderBottom:"1px solid rgba(168,164,161,.25)", display: "block", width: "98%" }}></span></span>
            <span style={{ color: "#acacac", display: "table-cell", width: "1px", whiteSpace: "nowrap"}}>
            <span style={{ color: "#acacac", fontSize: "22px",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>12:00</span>
            <span>-</span>
            <span style={{ color: "#acacac", fontSize: "22px",paddingLeft: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>01:00</span>
            </span>
          </div>
          <div className="pt-3">
            <span style={{ color: "white", fontSize: "22px", display: "table-cell",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>Sunday</span>
            <span style={{ width: "70%", height: "3px", display: "table-cell", position: "relative", zIndex: 1 }} ><span style={{ borderBottom:"1px solid rgba(168,164,161,.25)", display: "block", width: "98%" }}></span></span>
            <span style={{ color: "#acacac", display: "table-cell", width: "1px", whiteSpace: "nowrap"}}>
            <span style={{ color: "#acacac", fontSize: "22px",paddingRight: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>12:00</span>
            <span>-</span>
            <span style={{ color: "#acacac", fontSize: "22px",paddingLeft: "6px", textTransform: "uppercase", width: "1px", fontWeight: "100", fontFamily: "Oswald,sans-serif"  }}>01:00</span>
            </span>
          </div>
        </div>
      </div>
    </div>  

    </div> 

    
    </div>
    )
   }
 }

const mapStateToProps = state => ({  
    menus: state.list
})


export default connect(mapStateToProps)(Menus)
