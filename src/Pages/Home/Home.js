import React from "react";
import "./Home.css";
import imgHomeShop from "./shopimg.jpg";

export default function Home() {
  return (
    <div className="global-container">
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, minus
        rem sit eveniet et enim quod, necessitatibus nulla sunt ipsam nesciunt
        error non, ad excepturi laboriosam. Consectetur quis libero delectus.
      </p>
      <img src={imgHomeShop} alt="accueil shop" />
    </div>
  );
}
