
      <Carousel >

      <div className="imgContainers">
      <video id="glass" width="1920" height="1080" loop autoPlay src={Video} type="video/mp4" style={{ bottom: "100px", position: "relative"}} />
      <div id="textContent" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "850px" ,position:"relative", color: "black"}}>
      <h1 style={{ fontSize: "80px", fontFamily: 'Lato, sans-serif', marginBottom: "40px", marginLeft: "40px" }}>The Stylish <br />coffee</h1>
      <h2 style={{ fontSize: "18px", fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
      </div>
      </div> 
  
      <div className="imgContainers">
      <img src={newImage} width="100%" />
      {/* <video id="glass" width="1920" height="1080" className="videoTag"  loop autoPlay src={Videos} type="video/mp4" style={{ bottom: "100px", position: "relative"}} /> */}
      <div id="newContents" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "910px" , left: "120px" ,position:"relative", color: "white"}}>
      <h1 style={{ fontSize: "80px", fontFamily: 'Lato , sans-serif', marginBottom: "40px", marginLeft: "40px" }}>WE LOVE <br />WHAT WE DO</h1>
      <h2 style={{ fontSize: "18px", fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
      </div> 
      </div>

      <div className="imgContainers">
      <img src={Image} width="100%" />
      <div id="textContents" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "650px" , left: "750px" ,position:"relative", color: "white"}}>
      <h1 style={{ fontSize: "70px", fontFamily: 'Lato , sans-serif', marginBottom: "20px", marginLeft: "20px" }}>COFFEE IS <br />OUR LANGUAGE</h1>
      <h2 style={{ fontSize: "18px", fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
      </div> 
      </div>
      </Carousel>





<Carousel showThumbs={false} showIndicators={false} infiniteLoop={true}>

<div className="carouselImage">
<video id="glass" width="1920" height="1080" loop autoPlay src={Video} type="video/mp4" style={{ bottom: "100px", position: "relative"}} />
{/* <div id="textContent" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "700px" ,position:"relative", color: "black"}}>
<h1 style={{ fontSize: "80px", fontFamily: 'Lato, sans-serif', marginBottom: "40px", marginLeft: "40px" }}>The Stylish <br />coffee</h1>
<h2 style={{ fontSize: "18px", fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
</div> */}
</div>


<div className="carouselImage">
<img src={newImage} width="100%" />
{/* <video id="glass" width="1920" height="1080" className="videoTag"  loop autoPlay src={Videos} type="video/mp4" style={{ bottom: "100px", position: "relative"}} /> */}
{/* <div id="newContents" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "140px" , left: "0px" ,position:"absolute", color: "white"}}>
<p style={{ fontSize: "70px", fontFamily: 'Lato , sans-serif', marginBottom: "40px", marginLeft: "40px" }}>WE LOVE <br />WHAT WE DO</p>
<h2 style={{ fontSize: "18px", fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
</div>  */}
</div>


<div className="carouselImage">
<img src={Image} width="100%" />
{/* <div id="textContents" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "650px" , left: "750px" ,position:"relative", color: "white"}}>
P

</div>  */}
</div>

</Carousel>



<Carousel showThumbs={false} showIndicators={false} infiniteLoop={true} showArrows={false} showStatus={false}>
<div className="carouselImage">
<video id="glass" width="1920" height="1080" loop autoPlay src={Video} type="video/mp4" />
</div>
<div className="carouselImage">
  <img src={newImage} width="100%" />
</div>
<div className="carouselImage">
<img src={Image} width="100%" />
</div>

</Carousel>