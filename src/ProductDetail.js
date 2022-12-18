import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetail() {
  const navigate = useNavigate();
  const param = useParams();
  console.log(param.id);
  const apiUrl = "https://6315acaa5b85ba9b11e4aa90.mockapi.io/Products";

  const [P, setData] = useState({});

  useEffect(() => {
    fetch(apiUrl + "/" + param.id, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <div class="card" style={{ width: "18rem;" }}>
        <img
          src={P.ProductImage}
          class="card-img-top"
          alt="..."
          style={{ width: "250px" }}
        />
        <div class="card-body">
          <h5 class="card-title">{P.ProductName}</h5>
          <p class="card-text">{P.ProductDiscription}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{P.ProductPrice}</li>
          <li class="list-group-item">{P.ProductCatogary}</li>
        </ul>

        <div class="card-body">
          <button
            onClick={() => {
              fetch(apiUrl + "/" + param.id, { method: "DELETE" }).then(
                (res) => {
                  navigate("/GetAllProduct");
                }
              );
            }}
            style={{ margin: "12px", width: "50px" }}
          >
            Delete
          </button>

          <button
            onClick={() => {
              navigate("/EditProduct/" + param.id);
            }}
            style={{ margin: "12px", width: "50px" }}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
