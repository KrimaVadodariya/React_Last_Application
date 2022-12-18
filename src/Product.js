const { useEffect, useState } = require("react");
// const { Link } = require("react-router-dom");

function Product() {
  return (
    <>
      {/* <img
        style={{ width: "100%" }}
        src={
          "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600"
        }
      /> */}
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/* <!-- Wrapper for slides --> */}
        <div class="carousel-inner">
          <div class="item active">
            <img
              style={{ width: "100%", height: "100vh" }}
              src={
                "https://images.all-free-download.com/images/graphicthumb/welcome_562442.jpg"
              }
              alt="Los Angeles"
            />
          </div>

          <div class="item">
            <img
              style={{ width: "100%", height: "100vh" }}
              src={
                "https://www.imminet.com/wp-content/uploads/2020/04/HERO-Contact-US-1440x900-1.jpg"
              }
              alt="Chicago"
            />
          </div>

          <div class="item">
            <img
              style={{ width: "100%", height: "100vh" }}
              src={"https://jooinn.com/images/business-4.jpg"}
              alt="New York"
            />
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Product;
