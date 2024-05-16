import React, { Component } from "react";
import { connect } from "react-redux";
import "./menus.css";
import Carousel from "react-bootstrap/Carousel";
import Video from "../assets/489_girl_drink_coffee.mp4";
import Image from "../assets/vecteezy_barista-pouring-milk-into-a-glass-of-iced-coffee_2671770.jpg";
import newImage from "../assets/vecteezy_a-cup-of-art-latte-or-cappuccino-coffee-with-retro-filter-effect_1898592.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import newImages from "./static/images/home-3-img-2.jpeg";
import homeImages from "./static/images/home3-img-3.jpeg";
import coffeePic1 from "../assets/home-3-icon-img-1.png";

class Menus extends Component {
  state = {
    shadow: 1,
  };

  onItemSelect = (coffee) => {
    // if(this.props.menus.length === 0){
    //   this.props.dispatch(addNewItems(coffee))
    // }else{
    //   this.props.dispatch(addItems(coffee))
    // }
    console.log(coffee);
  };

  onMouseOver = () => this.setState({ shadow: 3 });

  onMouseOut = () => this.setState({ shadow: 1 });

  render() {
    const classes = makeStyles({
      root: {
        maxWidth: 345,
        border: "none",
        boxShadow: "none",
      },
      media: {
        height: "300px",
        border: "none",
        boxShadow: "none",
      },
    });
    return (
      <div style={{ backgroundColor: "black" }}>
        <Carousel fade style={{ zIndex: 0 }}>
          {/* <Carousel.Item >
          <div className="carouselImage">
          <video id="glass" width="1920" height="1080" loop autoPlay src={Video} type="video/mp4" />
          <h1 className="mainTitle" style={{fontFamily: 'Lato, sans-serif'}}>The Stylish <br />coffee</h1>
          <h2 className="subTitle" style={{fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
          </div>
        </Carousel.Item> */}
          <Carousel.Item>
            <div className="carouselImage">
              <img src={newImage} width="100%" alt="coffee" />
              <p
                className="secondMainTitle"
                style={{ fontFamily: "Lato , sans-serif" }}
              >
                WE LOVE <br />
                WHAT WE DO
              </p>
              <h2
                className="secondSubTitle"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                A cup of coffee lasts only a moment, but it is <br /> that
                moment that makes your day better.
              </h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carouselImage">
              <img src={Image} width="100%" alt="coffee" />
              <h1
                className="thirdMainTitle"
                style={{
                  fontFamily: "Lato , sans-serif",
                  marginBottom: "20px",
                }}
              >
                COFFEE IS <br />
                OUR LANGUAGE
              </h1>
              <h2
                className="thirdSubTitle"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                A cup of coffee lasts only a moment, but it is <br /> that
                moment that makes your day better.
              </h2>
            </div>
          </Carousel.Item>
        </Carousel>

        <div
          style={{ backgroundColor: "black", margin: "80px 10px 80px 10px" }}
        >
          <p
            style={{
              color: "#c7a17a",
              fontSize: "18px",
              fontFamily: "Merriweather, serif",
              textAlign: "center",
            }}
          >
            What Happens Here
          </p>
          <h1
            style={{
              color: "white",
              fontFamily: "Oswald, sans-serif",
              fontWeight: "700",
              lineHeight: "1.14286em",
              marginBottom: "19px",
              textAlign: "center",
            }}
          >
            COFFEE BUILD YOUR BASE.
          </h1>
          <div className="lineCard">
            <div
              style={{
                width: "120px",
                borderBottomWidth: "3px",
                borderBottom: "3px solid #c7a17a",
                verticalAlign: "middle",
                position: "relative",
                display: "inline-block",
                margin: "5px 0",
                lineHeight: "1em",
              }}
            ></div>
          </div>

          <div className="container mt-5" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-4">
                <div className="cards">
                  <Card
                    className={classes.root}
                    style={{
                      border: "none",
                      boxShadow: "none",
                      borderRadius: "0",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        style={{ height: "300px" }}
                        image={newImages}
                        title="Coffee"
                      />
                      <CardContent
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          padding: "30px 0",
                          fontFamily: "Oswald,sans-serif",
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h3"
                          style={{ fontFamily: "Oswald,sans-serif" }}
                        >
                          PLACES TO GET LOST
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          style={{
                            backgroundColor: "black",
                            color: "grey",
                            lineHeight: "26px",
                          }}
                        >
                          Alienum phaedrum to rquatos nec eu, vis detraxit
                          periculis ex, nihil expetendis in mei. Mei an pericula
                          euripidis, hinc partem ei est. Eos ei nisl graecis,
                          vix aperiri consequat an. Eius lorem tincidunt vix
                          atle.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </div>
              <div className="col-lg-4">
                <Card
                  className={classes.root}
                  style={{
                    border: "none",
                    boxShadow: "none",
                    borderRadius: "0",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      style={{ height: "300px" }}
                      image={homeImages}
                      title="Coffee"
                    />
                    <CardContent
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "30px 0",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        style={{ fontFamily: "Oswald,sans-serif" }}
                      >
                        BEST COFFEE FLAVORS
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{
                          backgroundColor: "black",
                          color: "grey",
                          lineHeight: "26px",
                        }}
                      >
                        Alienum phaedrum to rquatos nec eu, vis detraxit
                        periculis ex, nihil expetendis in mei. Mei an pericula
                        euripidis, hinc partem ei est. Eos ei nisl graecis, vix
                        aperiri consequat an. Eius lorem tincidunt vix atle.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div
                className="col-lg-4"
                style={{
                  border: "2px solid white",
                  fontFamily: "Oswald,sans-serif",
                  padding: "35px",
                  backgroundImage: `url("https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-img-1.jpg")`,
                }}
              >
                <h3
                  style={{
                    color: "white",
                    marginBottom: "50px",
                    fontWeight: "700",
                  }}
                >
                  Opening Hours
                </h3>
                <div>
                  <span
                    style={{
                      color: "white",
                      fontSize: "22px",
                      display: "table-cell",
                      paddingRight: "6px",
                      textTransform: "uppercase",
                      width: "1px",
                      fontWeight: "100",
                      fontFamily: "Oswald,sans-serif",
                    }}
                  >
                    Monday
                  </span>
                  <span
                    style={{
                      width: "70%",
                      height: "3px",
                      display: "table-cell",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        borderBottom: "1px solid rgba(168,164,161,.25)",
                        display: "block",
                        width: "98%",
                      }}
                    ></span>
                  </span>
                  <span
                    style={{
                      color: "#c7a17a",
                      fontSize: "22px",
                      display: "table-cell",
                      paddingRight: "6px",
                      textTransform: "uppercase",
                      width: "1px",
                      fontWeight: "100",
                      fontFamily: "Oswald,sans-serif",
                    }}
                  >
                    Closed
                  </span>
                </div>
                <div className="pt-3">
                  <span
                    style={{
                      color: "white",
                      fontSize: "22px",
                      display: "table-cell",
                      paddingRight: "6px",
                      textTransform: "uppercase",
                      width: "1px",
                      fontWeight: "100",
                      fontFamily: "Oswald,sans-serif",
                    }}
                  >
                    Tuesday
                  </span>
                  <span
                    style={{
                      width: "70%",
                      height: "3px",
                      display: "table-cell",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        borderBottom: "1px solid rgba(168,164,161,.25)",
                        display: "block",
                        width: "98%",
                      }}
                    ></span>
                  </span>
                  <span
                    style={{
                      color: "#acacac",
                      display: "table-cell",
                      width: "1px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span
                      style={{
                        color: "#acacac",
                        fontSize: "22px",
                        paddingRight: "6px",
                        textTransform: "uppercase",
                        width: "1px",
                        fontWeight: "100",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      9:00
                    </span>
                    <span>-</span>
                    <span
                      style={{
                        color: "#acacac",
                        fontSize: "22px",
                        paddingLeft: "6px",
                        textTransform: "uppercase",
                        width: "1px",
                        fontWeight: "100",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      22:00
                    </span>
                  </span>
                </div>
                <div className="pt-3">
                  <span
                    style={{
                      color: "white",
                      fontSize: "22px",
                      display: "table-cell",
                      paddingRight: "6px",
                      textTransform: "uppercase",
                      width: "1px",
                      fontWeight: "100",
                      fontFamily: "Oswald,sans-serif",
                    }}
                  >
                    Wednesday
                  </span>
                  <span
                    style={{
                      width: "70%",
                      height: "3px",
                      display: "table-cell",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        borderBottom: "1px solid rgba(168,164,161,.25)",
                        display: "block",
                        width: "98%",
                      }}
                    ></span>
                  </span>
                  <span
                    style={{
                      color: "#acacac",
                      display: "table-cell",
                      width: "1px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span
                      style={{
                        color: "#acacac",
                        fontSize: "22px",
                        paddingRight: "6px",
                        textTransform: "uppercase",
                        width: "1px",
                        fontWeight: "100",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      9:00
                    </span>
                    <span>-</span>
                    <span
                      style={{
                        color: "#acacac",
                        fontSize: "22px",
                        paddingLeft: "6px",
                        textTransform: "uppercase",
                        width: "1px",
                        fontWeight: "100",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      22:00
                    </span>
                  </span>
                </div>
                <div className="pt-3">
                  <span
                    style={{
                      color: "white",
                      fontSize: "22px",
                      display: "table-cell",
                      paddingRight: "6px",
                      textTransform: "uppercase",
                      width: "1px",
                      fontWeight: "100",
                      fontFamily: "Oswald,sans-serif",
                    }}
                  >
                    Thursday
                  </span>
                  <span
                    style={{
                      width: "70%",
                      height: "3px",
                      display: "table-cell",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        borderBottom: "1px solid rgba(168,164,161,.25)",
                        display: "block",
                        width: "98%",
                      }}
                    ></span>
                  </span>
                  <span
                    style={{
                      color: "#acacac",
                      display: "table-cell",
                      width: "1px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span
                      style={{
                        color: "#acacac",
                        fontSize: "22px",
                        paddingRight: "6px",
                        textTransform: "uppercase",
                        width: "1px",
                        fontWeight: "100",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      9:00
                    </span>
                    <span>-</span>
                    <span
                      style={{
                        color: "#acacac",
                        fontSize: "22px",
                        paddingLeft: "6px",
                        textTransform: "uppercase",
                        width: "1px",
                        fontWeight: "100",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      20:00
                    </span>
                  </span>
                </div>
                <div className="pt-3">
                  <span
                    style={{
                      color: "white",
                      fontSize: "22px",
                      display: "table-cell",
                      paddingRight: "6px",
                      textTransform: "uppercase",
                      width: "1px",
                      fontWeight: "100",
                      fontFamily: "Oswald,sans-serif",
                    }}
                  >
                    Friday
                  </span>
                  <span
                    style={{
                      width: "70%",
                      height: "3px",
                      display: "table-cell",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        borderBottom: "1px solid rgba(168,164,161,.25)",
                        display: "block",
                        width: "98%",
                      }}
                    ></span>
                  </span>
                  <span
                    style={{
                      color: "#acacac",
                      display: "table-cell",
                      width: "1px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span
                      style={{
                        color: "#acacac",
                        fontSize: "22px",
                        paddingRight: "6px",
                        textTransform: "uppercase",
                        width: "1px",
                        fontWeight: "100",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      9:00
                    </span>
                    <span>-</span>
                    <span
                      style={{
                        color: "#acacac",
                        fontSize: "22px",
                        paddingLeft: "6px",
                        textTransform: "uppercase",
                        width: "1px",
                        fontWeight: "100",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      18:00
                    </span>
                  </span>
                </div>
                <div className="pt-3">
                  <span
                    style={{
                      color: "white",
                      fontSize: "22px",
                      display: "table-cell",
                      paddingRight: "6px",
                      textTransform: "uppercase",
                      width: "1px",
                      fontWeight: "100",
                      fontFamily: "Oswald,sans-serif",
                    }}
                  >
                    Saturday
                  </span>
                  <span
                    style={{
                      width: "70%",
                      height: "3px",
                      display: "table-cell",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        borderBottom: "1px solid rgba(168,164,161,.25)",
                        display: "block",
                        width: "98%",
                      }}
                    ></span>
                  </span>
                  <span
                    style={{
                      color: "#acacac",
                      display: "table-cell",
                      width: "1px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span
                      style={{
                        color: "#acacac",
                        fontSize: "22px",
                        paddingRight: "6px",
                        textTransform: "uppercase",
                        width: "1px",
                        fontWeight: "100",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      12:00
                    </span>
                    <span>-</span>
                    <span
                      style={{
                        color: "#acacac",
                        fontSize: "22px",
                        paddingLeft: "6px",
                        textTransform: "uppercase",
                        width: "1px",
                        fontWeight: "100",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      01:00
                    </span>
                  </span>
                </div>
                <div className="pt-3">
                  <span
                    style={{
                      color: "white",
                      fontSize: "22px",
                      display: "table-cell",
                      paddingRight: "6px",
                      textTransform: "uppercase",
                      width: "1px",
                      fontWeight: "100",
                      fontFamily: "Oswald,sans-serif",
                    }}
                  >
                    Sunday
                  </span>
                  <span
                    style={{
                      width: "70%",
                      height: "3px",
                      display: "table-cell",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        borderBottom: "1px solid rgba(168,164,161,.25)",
                        display: "block",
                        width: "98%",
                      }}
                    ></span>
                  </span>
                  <span
                    style={{
                      color: "#acacac",
                      display: "table-cell",
                      width: "1px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span
                      style={{
                        color: "#acacac",
                        fontSize: "22px",
                        paddingRight: "6px",
                        textTransform: "uppercase",
                        width: "1px",
                        fontWeight: "100",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      12:00
                    </span>
                    <span>-</span>
                    <span
                      style={{
                        color: "#acacac",
                        fontSize: "22px",
                        paddingLeft: "6px",
                        textTransform: "uppercase",
                        width: "1px",
                        fontWeight: "100",
                        fontFamily: "Oswald,sans-serif",
                      }}
                    >
                      01:00
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="imgSections">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6"
                style={{ color: "white", textAlign: "center", margin: "auto" }}
              >
                <div
                  style={{
                    width: "80%",
                    margin: "auto",
                    textAlign: "left",
                    padding: "50px",
                  }}
                >
                  <h1
                    style={{
                      color: "white",
                      fontFamily: "Oswald, sans-serif",
                      fontWeight: "700",
                      lineHeight: "1.14286em",
                      marginBottom: "2px",
                      textAlign: "left",
                    }}
                  >
                    Coffee Shop
                  </h1>
                  <div className="lineCards mb-4">
                    <div
                      style={{
                        width: "120px",
                        borderBottomWidth: "3px",
                        borderBottom: "3px solid #c7a17a",
                        verticalAlign: "middle",
                        position: "relative",
                        display: "inline-block",
                        margin: "5px 0",
                        lineHeight: "1em",
                      }}
                    ></div>
                  </div>
                  <p>
                    {" "}
                    Alienum phaedrum to rquatos nec eu, vis detraxit periculis
                    ex, nihil expetendis in mei. Mei an pericula euripidis, hinc
                    partem ei est. Eos ei nisl graecis, vix aperiri consequat
                    an. Eius lorem tincidunt vix atle.
                  </p>
                  <button
                    className="btn p-2"
                    style={{ backgroundColor: "#c7a17a", color: "white" }}
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  className="m-5"
                  width="80%"
                  src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-blog-f-img-2.jpg"
                  alt="coffee"
                />
              </div>
            </div>
          </div>
        </section>
        <div style={{ backgroundColor: "black", margin: "80px" }}>
          <p
            style={{
              color: "#c7a17a",
              fontSize: "18px",
              fontFamily: "Merriweather, serif",
              textAlign: "center",
            }}
          >
            Choose one of our flavours
          </p>
          <h1
            style={{
              color: "white",
              fontFamily: "Oswald, sans-serif",
              fontWeight: "700",
              lineHeight: "1.14286em",
              marginBottom: "19px",
              textAlign: "center",
            }}
          >
            COFFEE BUILD YOUR BASE.
          </h1>
          <div className="lineCard">
            <div
              style={{
                width: "120px",
                borderBottomWidth: "3px",
                borderBottom: "3px solid #c7a17a",
                verticalAlign: "middle",
                position: "relative",
                display: "inline-block",
                margin: "5px 0",
                lineHeight: "1em",
              }}
            ></div>
          </div>
          <div>
            <div className="container" style={{ textAlign: "center" }}>
              <div className="row">
                <div className="col-lg-3">
                  <div className="cards">
                    <img src={coffeePic1} alt="coffee" />
                    <Card
                      className={classes.root}
                      style={{
                        border: "none",
                        boxShadow: "none",
                        borderRadius: "0",
                      }}
                    >
                      <CardActionArea>
                        <CardContent
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "30px 0",
                            fontFamily: "Oswald,sans-serif",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h3"
                            style={{ fontFamily: "Oswald,sans-serif" }}
                          >
                            ESPRESSO
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{
                              backgroundColor: "black",
                              color: "grey",
                              lineHeight: "26px",
                            }}
                          >
                            Alienum phaedrum to rquatos nec eu, vis detraxit
                            periculis ex, nihil expetendis in mei. Mei an
                            pericula euripidis, hinc partem ei est. Eos ei nisl
                            graecis, vix aperiri consequat an. Eius lorem
                            tincidunt vix atle.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="cards">
                    <img
                      src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-icon-image-2.png"
                      alt="coffee"
                    />
                    <Card
                      className={classes.root}
                      style={{
                        border: "none",
                        boxShadow: "none",
                        borderRadius: "0",
                      }}
                    >
                      <CardActionArea>
                        <CardContent
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "30px 0",
                            fontFamily: "Oswald,sans-serif",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h3"
                            style={{ fontFamily: "Oswald,sans-serif" }}
                          >
                            MACCHIATO
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{
                              backgroundColor: "black",
                              color: "grey",
                              lineHeight: "26px",
                            }}
                          >
                            Alienum phaedrum to rquatos nec eu, vis detraxit
                            periculis ex, nihil expetendis in mei. Mei an
                            pericula euripidis, hinc partem ei est. Eos ei nisl
                            graecis, vix aperiri consequat an. Eius lorem
                            tincidunt vix atle.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="cards">
                    <img
                      src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-icon-image-3.png"
                      height="50%"
                      alt="coffee"
                    />
                    <Card
                      className={classes.root}
                      style={{
                        border: "none",
                        boxShadow: "none",
                        borderRadius: "0",
                      }}
                    >
                      <CardActionArea>
                        <CardContent
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "30px 0",
                            fontFamily: "Oswald,sans-serif",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h3"
                            style={{ fontFamily: "Oswald,sans-serif" }}
                          >
                            RISTRETTO
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{
                              backgroundColor: "black",
                              color: "grey",
                              lineHeight: "26px",
                            }}
                          >
                            Alienum phaedrum to rquatos nec eu, vis detraxit
                            periculis ex, nihil expetendis in mei. Mei an
                            pericula euripidis, hinc partem ei est. Eos ei nisl
                            graecis, vix aperiri consequat an. Eius lorem
                            tincidunt vix atle.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="cards">
                    <img
                      src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-icon-image-4.png"
                      alt="coffee"
                    />
                    <Card
                      className={classes.root}
                      style={{
                        border: "none",
                        boxShadow: "none",
                        borderRadius: "0",
                      }}
                    >
                      <CardActionArea>
                        <CardContent
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "30px 0",
                            fontFamily: "Oswald,sans-serif",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h3"
                            style={{ fontFamily: "Oswald,sans-serif" }}
                          >
                            CAPUCCINO
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{
                              backgroundColor: "black",
                              color: "grey",
                              lineHeight: "26px",
                            }}
                          >
                            Alienum phaedrum to rquatos nec eu, vis detraxit
                            periculis ex, nihil expetendis in mei. Mei an
                            pericula euripidis, hinc partem ei est. Eos ei nisl
                            graecis, vix aperiri consequat an. Eius lorem
                            tincidunt vix atle.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <div className="container" style={{ textAlign: "center" }}>
              <div className="row">
                <div className="col-lg-3">
                  <div className="cards">
                    <img src={coffeePic1} alt="coffee" />
                    <Card
                      className={classes.root}
                      style={{
                        border: "none",
                        boxShadow: "none",
                        borderRadius: "0",
                      }}
                    >
                      <CardActionArea>
                        <CardContent
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "30px 0",
                            fontFamily: "Oswald,sans-serif",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h3"
                            style={{ fontFamily: "Oswald,sans-serif" }}
                          >
                            ESPRESSO
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{
                              backgroundColor: "black",
                              color: "grey",
                              lineHeight: "26px",
                            }}
                          >
                            Alienum phaedrum to rquatos nec eu, vis detraxit
                            periculis ex, nihil expetendis in mei. Mei an
                            pericula euripidis, hinc partem ei est. Eos ei nisl
                            graecis, vix aperiri consequat an. Eius lorem
                            tincidunt vix atle.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="cards">
                    <img
                      src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-icon-image-2.png"
                      alt="coffee"
                    />
                    <Card
                      className={classes.root}
                      style={{
                        border: "none",
                        boxShadow: "none",
                        borderRadius: "0",
                      }}
                    >
                      <CardActionArea>
                        <CardContent
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "30px 0",
                            fontFamily: "Oswald,sans-serif",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h3"
                            style={{ fontFamily: "Oswald,sans-serif" }}
                          >
                            MACCHIATO
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{
                              backgroundColor: "black",
                              color: "grey",
                              lineHeight: "26px",
                            }}
                          >
                            Alienum phaedrum to rquatos nec eu, vis detraxit
                            periculis ex, nihil expetendis in mei. Mei an
                            pericula euripidis, hinc partem ei est. Eos ei nisl
                            graecis, vix aperiri consequat an. Eius lorem
                            tincidunt vix atle.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="cards">
                    <img
                      src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-icon-image-3.png"
                      height="50%"
                      alt="coffee"
                    />
                    <Card
                      className={classes.root}
                      style={{
                        border: "none",
                        boxShadow: "none",
                        borderRadius: "0",
                      }}
                    >
                      <CardActionArea>
                        <CardContent
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "30px 0",
                            fontFamily: "Oswald,sans-serif",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h3"
                            style={{ fontFamily: "Oswald,sans-serif" }}
                          >
                            RISTRETTO
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{
                              backgroundColor: "black",
                              color: "grey",
                              lineHeight: "26px",
                            }}
                          >
                            Alienum phaedrum to rquatos nec eu, vis detraxit
                            periculis ex, nihil expetendis in mei. Mei an
                            pericula euripidis, hinc partem ei est. Eos ei nisl
                            graecis, vix aperiri consequat an. Eius lorem
                            tincidunt vix atle.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="cards">
                    <img
                      src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-icon-image-4.png"
                      alt="coffee"
                    />
                    <Card
                      className={classes.root}
                      style={{
                        border: "none",
                        boxShadow: "none",
                        borderRadius: "0",
                      }}
                    >
                      <CardActionArea>
                        <CardContent
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "30px 0",
                            fontFamily: "Oswald,sans-serif",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h3"
                            style={{ fontFamily: "Oswald,sans-serif" }}
                          >
                            CAPUCCINO
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{
                              backgroundColor: "black",
                              color: "grey",
                              lineHeight: "26px",
                            }}
                          >
                            Alienum phaedrum to rquatos nec eu, vis detraxit
                            periculis ex, nihil expetendis in mei. Mei an
                            pericula euripidis, hinc partem ei est. Eos ei nisl
                            graecis, vix aperiri consequat an. Eius lorem
                            tincidunt vix atle.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menus: state.users.list,
});

export default connect(mapStateToProps)(Menus);
