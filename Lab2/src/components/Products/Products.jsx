import { Component } from "react";
import { ProductItem } from "../Product-Item/ProductItem";
export class Products extends Component {
  products = [
    {
      id: 1,
      title: "Product1",
      price: "100$",
      img: "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Product1",
      price: "400$",
      img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Product1",
      price: "300$",
      img: "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Product1",
      price: "200$",
      img: "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  render() {
    return this.products.map((item) => {
      return <ProductItem key={item.id} product={item} />;
    });
  }
}
