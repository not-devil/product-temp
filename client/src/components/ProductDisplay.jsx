import React from "react";
import TableView from "./TableView";

function ProductDisplay() {
  
  
  return (
    <>
      <section className="product_display text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-lg text-indigo-500 tracking-widest font-medium mb-1">
              List of Products
            </h2>
            <div className="product_list_product p-4">
              <TableView />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDisplay;
