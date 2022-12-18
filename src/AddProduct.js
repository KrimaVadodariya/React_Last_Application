import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function AddProduct() {
  const navigate = useNavigate();
  const apiUrl = "https://6315acaa5b85ba9b11e4aa90.mockapi.io/Products";

  const [data, setData] = useState({ ProductName: "" });
  return (
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
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              onClick={() => {
                fetch(apiUrl, {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json"
                  }
                }).then((res) => {
                  navigate("/GetAllProduct");
                });
              }}
            >
              Add product
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default AddProduct;

{
  /* <input
              name="Add product"
              id="contact-submit"
              data-submit="...Sending"
              type="button"
              value="Add Product"
              onClick={() => {
                fetch(apiUrl, {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json"
                  }
                }).then((res) => {
                  navigate("/Product");
                });
              }}
            /> */
}
