import React from "react";

const images = [
  "/personal/1.JPG",
  "/personal/2.JPG",
  "/personal/3.JPG",
  "/personal/4.JPG",
  "/personal/5.jpg",
  "/personal/6.jpg",
  "/personal/7.jpg",
  "/personal/8.jpg",
  "/personal/9.JPG",
  "/personal/10.jpg",
  "/personal/11.jpg",
  "/personal/12.jpg",
  "/personal/13.jpg",
  "/personal/14.JPG",
  "/personal/15.jpg",
  "/personal/16.jpg",
  "/personal/17.jpg",
  "/personal/18.jpg",
];

function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Personal Work ${index + 1}`}
          className="w-full aspect-3/2 object-cover shadow"
        />
      ))}
    </div>
  );
}

export default Gallery;
