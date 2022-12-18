import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function GetAllProduct() {
  const navigate = useNavigate();
  const apiUrl = "https://6315acaa5b85ba9b11e4aa90.mockapi.io/Products";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const formatedData = data.map((P) => {
    return (
      <div className="container card col-md-3">
        <div class="card">
          <h5 class="card-title">{P.ProductName}</h5>
          <p class="card-text">
            <img src={P.ProductImage} style={{ width: "250px" }} alt="fft" />
          </p>
          <Link to={"../GetAllProduct/" + P.id} class="btn btn-primary">
            {" "}
            Read More
          </Link>
        </div>
      </div>
    );
  });

  return <div className="row">{formatedData}</div>;
}

export default GetAllProduct;
