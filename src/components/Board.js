import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.scss";
import { getPhotos } from "../features/products/productSlice";

function Board() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  console.log(photos);

  return (
    <div className="board">
     <p>prueba</p>
      <div className="product">
     
        {photos.map((photo) =>  (
          <img
            key={photo.id}
            alt={photo.autor}
            src={photo.download_url}
            widht="400"
            height="400"
          />
        ))}
      </div>
      <button>SHOP</button>
    </div>
  );
  // const products = useSelector((state) => state.product);
  // return (
  //   <div className="board">
  //   <div className="product">
  //     {products.map((product) => (
  //       <div key={product.id}>
  //         <div className="text">
  //           <h3>{product.title}</h3>
  //           <p>⎻⎻⎻⎻⎻⎻⎻⎻⎻</p>
  //           <p>{product.description}</p>
  //           <p> &gt; VER MAS</p>
  //         </div>
  //         <img alt="" />
  //         {product.image}
  //       </div>
  //       ))}
  //   </div>
  //   </div>
  // );
}

export default Board;
