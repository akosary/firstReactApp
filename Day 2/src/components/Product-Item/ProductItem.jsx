import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "./ProductItem.css";
// console.log(this.props);
export class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="customCard my-5 ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
