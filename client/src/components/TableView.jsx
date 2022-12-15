import React, { useState, useEffect } from "react";
import axios from "axios";

function TableView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // make GET request to the backend to retrieve products
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => {
        const responces = res.data;
        setProducts(responces.allPoductDisplay);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="text-xs font-bold text-left text-gray-500 uppercase mx-2 px-2 py-3"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-bold text-left text-gray-500 uppercase mx-2 px-2 py-3"
                    >
                      product name
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-bold text-left text-gray-500 uppercase mx-2 px-2 py-3"
                    >
                      Product Description
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-bold text-left text-gray-500 uppercase mx-2 px-2 py-3"
                    >
                      Product Price
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-bold text-left text-gray-500 uppercase mx-2 px-2 py-3"
                    >
                      Product Category
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-bold text-left text-gray-500 uppercase mx-2 px-2 py-3"
                    >
                      Show Images
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-bold text-right text-gray-500 uppercase mx-2 px-2 py-3"
                    >
                      Edit
                    </th>

                    <th
                      scope="col"
                      className="text-xs font-bold text-right text-gray-500 uppercase mx-2 px-2 py-3"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                {products.map((data, index) => {
                  return (
                    <>
                      {" "}
                      <tbody className="divide-y divide-gray-200">
                        <tr className="py-3 px-2">
                          <td className="text-sm text-left mx-2 px-2 py-3">
                            {index + 1}
                          </td>
                          <td className="text-sm text-left  mx-2 px-2 py-3">
                            {data.productname}
                          </td>
                          <td className="text-sm text-left  mx-2 px-2 py-3">
                            {data.productdec}
                          </td>
                          <td className="text-sm text-left  mx-2 px-2 py-3">
                            {data.productprice}
                          </td>
                          <td className="text-sm text-left  mx-2 px-2 py-3">
                            {data.productcategory}
                          </td>
                          <td className="text-sm text-right  mx-2 px-2 py-3">
                            <img
                              src={data.photos[1].secure_url}
                              alt="p-image"
                              width={50}
                              height={50}
                            />
                          </td>
                          <td className="text-sm text-right mx-2 px-2 py-3">
                            Edit
                          </td>
                          <td className="text-sm text-right  mx-2 px-2 py-3">
                            Delete
                          </td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>

      {/*     
      <table class="table-auto">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table> */}
    </>
  );
}

export default TableView;
