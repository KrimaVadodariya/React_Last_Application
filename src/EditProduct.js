import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const param = useParams();
  const navigate = useNavigate();
  const apiUrl = "https://6315acaa5b85ba9b11e4aa90.mockapi.io/Products";

  useEffect(() => {
    fetch(apiUrl + "/" + param.id, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  <br />;

  const [data, setData] = useState({});
  return (
    <>
      <>
        <div class="container">
          <form id="contact" action="" method="post">
            <fieldset>
              <input
                placeholder="Product Name"
                type="text"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Product Price"
                type="email"
                tabindex="2"
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Product Category"
                type="tel"
                tabindex="3"
                required
              />
            </fieldset>

            <fieldset>
              <textarea
                placeholder="Product Discription here...."
                tabindex="5"
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <input
                type="button"
                value="Edit Product"
                onClick={() => {
                  fetch(apiUrl + "/" + param.id, {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  }).then((res) => {
                    //console.log(res);
                    navigate("/GetAllProduct");
                  });
                }}
              />
            </fieldset>
          </form>
        </div>
      </>
    </>
  );
}

export default EditProduct;
