import React from "react";
import img from "../img/home-img-right.png";
import img2 from "../img/home-img.png";
import pizza from "../img/pizza.png";
import cooking1 from "../img/cooking1.jpg";
import cooking2 from "../img/cooking2.jpg";
import cooking3 from "../img/cooking3.jpg";
import cooking4 from "../img/cooking4.jpg";
import cooking5 from "../img/cooking5.jpg";
import cooking6 from "../img/cooking6.jpg";

const Main = () => {
  const desertApi = [
    {
      id: 1,
      cardTitle: "All deserts",
      cardPercent: "20% OFF",
      bottomTitle: "Deserty",
      image: img2,
      color: "#4E60FF",
      bgColor: "#F3F4FF",
    },
    {
      id: 2,
      cardTitle: "Big Burgers",
      cardPercent: "50% OFF",
      bottomTitle: "Fooddies",
      image: img,
      color: "#FD6D22",
      bgColor: "#FFF3ED",
    },
  ];
  const desertItemApi = [
    { id: 1, image: pizza, itemTitle: "Pizza" },
    { id: 2, image: img, itemTitle: "Burger" },
    { id: 3, image: img2, itemTitle: "BBQ" },
    { id: 4, image: pizza, itemTitle: "Sushi" },
    { id: 5, image: img, itemTitle: "Vegan" },
    { id: 6, image: img2, itemTitle: "Desserts" }
  ];

  const mainCardApi = [
    { id: 1, image: cooking1, cardTitle: "Royal Sushi House" , cardTime: "30-40 min" , cardCoint: "$32 min sum" , btnIcon: pizza, cardBtn: "Sushi" },
    { id: 2, image: cooking2, cardTitle: "Burgers & Pizza" , cardTime: "40-60 min" , cardCoint: "$24 min sum" , btnIcon: img2, cardBtn: "Burger" },
    { id: 3, image: cooking3, cardTitle: "Ninja sushi" , cardTime: "20-40 min" , cardCoint: "$32 min sum" , btnIcon: img, cardBtn: "Pizza" },
    { id: 4, image: cooking4, cardTitle: "Sushi & Burger" , cardTime: "40-50 min" , cardCoint: "$32 min sum" , btnIcon: img2, cardBtn: "Vegan" },
    { id: 5, image: cooking5, cardTitle: "Vegan & Pizza" , cardTime: "30-40 min" , cardCoint: "$32 min sum" , btnIcon: pizza, cardBtn: "Sushi" },
    { id: 6, image: cooking6, cardTitle: "Desserts Cooking" , cardTime: "50-60 min" , cardCoint: "$32 min sum" , btnIcon: img, cardBtn: "Desert" }
  ]

  return (
    <div className="main">
      <div className="container">
        <div className="main-top">
          <div className="deserts-top">
            {desertApi.map((item) => (
              <div
                style={{ backgroundColor: `${item.bgColor}` }}
                className="deserts-left"
              >
                <div className="card-left">
                  <img width={"100%"} height={"100%"} src={item.image} alt="" />
                </div>
                <div className="card-right">
                  <p className="card-title">{item.cardTitle}</p>
                  <h2
                    style={{ color: `${item.color}` }}
                    className="card-percent"
                  >
                    {item.cardPercent}
                  </h2>
                  <span className="bottom-title">{item.bottomTitle}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="deserts-bottom">
            {desertItemApi.map((item) => (
              <div className="item">
                <div className="item-icon">
                  <img src={item.image} width={"100%"} alt="" />
                </div>
                <div className="item-title">{item.itemTitle}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="main-container">
          <div className="main-title">Nearby restaurants</div>
          <div className="main-content">
            {mainCardApi.map((item)=> (
                <div className="card main-card">
                <div className="img-top">
                  <img src={item.image} className="card-img-top" alt="..." />
                </div>
                  <div className="card-body">
                        <h5 className="card-title">
                          <span>{item.cardTitle}</span>
                          <i class="bi bi-cart-plus"></i>
                        </h5>
                        <p className="card-text">
                          <i className="bi bi-clock"></i>
                          <span className="info">{item.cardTime}</span>
                          <span className="info">
                            <li>{item.cardCoint}</li>
                          </span>
                        </p>
  
                        <div className="btns">
                            <span className="ico">
                                <img src={item.btnIcon} alt="" />
                            </span>
                            <span className="btn-title">{item.cardBtn}</span>
                        </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
