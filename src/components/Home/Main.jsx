import React from "react";
import img from "../img/home-img-right.png";
import img2 from "../img/home-img.png";
import pizza from "../img/pizza.png";

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
    { id: 6, image: img2, itemTitle: "Desserts" },
  ];

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
                  <img src={item.image} alt="" />
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
        <div className="main-container border">
          <div className="main-title">Nearby restaurants</div>
          <div className="main-content">
            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
