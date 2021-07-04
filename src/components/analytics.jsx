import React, { Component } from 'react';
import './test.css';

class analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
            <h3 className=" fw-normal shadow-sm p-4 m-0 bg-body rounded" style={{ width: "99%" }}>Analytics</h3>
            <section id="filler">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-md-10 mx-auto">
                    <h1 class="wedding"><strong>Cinematic Portraits</strong></h1>
                    <h2 class="qoutes">Save all your moments in freeze</h2>
                    <section id="carousel" class="p-3">
                        <div class="container">
                        <div class="row ">
                            <div class="col-md-12 col-lg-12 col-sm-12 img-fluid">
                            <div id="example" class="carousel slide" data-ride='carousel'>
                                <ul class="carousel-indicators">
                                <li data-target="#example" data-slide-to='0' class="active"></li>
                                <li data-target="#example" data-slide-to='1'></li>
                                <li data-target="#example" data-slide-to='2'></li>
                                <li data-target="#example" data-slide-to='3'></li>
                                </ul>
                                <div class="carousel-inner">
                                <div class="carousel-item height-40 d-block active">
                                </div>
                                <div class="carousel-item height-70 ">
                                </div>
                                <div class="carousel-item height-80 ">
                                </div>
                                <div class="carousel-item height-45 ">
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <br></br>
                    </div>
                </div>
                </div>
            </section>
            </div>
        );
    }
}

export default analytics;