import axios from "axios";
import React, { useState } from "react";

function ProducthtmlForms() {
  const [values, setvalues] = useState({
    productname: "",
    productdec: "",
    productprice: "",
    productcategory: "",
  });
  const [photos, setImages] = useState([
    {
      secure_url: ""
    }
  ]);

  const fileSelectedHandler = (e) => {
    setImages(e.target.files);
    console.log(photos);
  };

  const handleLogin = async () => {
    let url = "http://localhost:4000/api/products";
    const formdata = new FormData();

    formdata.append("productname", values.productname);
    formdata.append("productdec", values.productdec);
    formdata.append("productprice", values.productprice);
    formdata.append("productcategory", values.productcategory);
    formdata.append("photos", photos);

    try {
      let responce = await axios.post(url, formdata);
      if (responce.status === 200) {
        console.log("data add");
        console.log(photos);
      }
    } catch(e) {
      console.log(e)
    }
  };

  return (
    <>
      <section className="product_htmlForm">
        <div className="container px-5 py-24 mx-auto flex">
          <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Add New Product
            </h2>
            <div className="flex flex-wrap -m-2">

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.productname}
                    onChange={(event) => {
                      setvalues((prev) => ({
                        ...prev,
                        productname: event.target.value,
                      }));
                    }}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="pdesc"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Product Description
                  </label>
                  <input
                    type="text"
                    id="pdesc"
                    name="pdesc"
                    value={values.productdec}
                    onChange={(event) => {
                      setvalues((prev) => ({
                        ...prev,
                        productdec: event.target.value,
                      }));
                    }}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="pprice"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Product Price
                  </label>
                  <input
                    type="number"
                    id="pprice"
                    name="pprice"
                    value={values.productprice}
                    onChange={(event) => {
                      setvalues((prev) => ({
                        ...prev,
                        productprice: event.target.value,
                      }));
                    }}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="pcategory"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Product Category
                  </label>
                  <input
                    type="text"
                    id="pcategory"
                    name="pcategory"
                    value={values.productcategory}
                    onChange={(event) => {
                      setvalues((prev) => ({
                        ...prev,
                        productcategory: event.target.value,
                      }));
                    }}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="photos"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Upload Image
                  </label>
                  <input
                    type="file"
                    multiple
                    onChange={fileSelectedHandler}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                  />
                </div>
              </div>
            </div>

            <button
              className="text-white bg-indigo-500 w-1/4 border-0 mt-5 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handleLogin}
            >
              Button
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProducthtmlForms;
