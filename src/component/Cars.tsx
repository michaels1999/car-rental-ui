import { Component } from "react";
import CarService from "../service/CarService";
import ICar from '../model/ICar'
import { Card, Col, Container, Row } from "react-bootstrap";

type Props = {};

type State = {
  cars: Array<ICar>,
};


export default class Cars extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.findAll = this.findAll.bind(this);
    this.refreshList = this.refreshList.bind(this);

    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    this.findAll();
  }

  findAll() {
    CarService.findAll()
      .then((response: any) => {
        this.setState({
          cars: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.findAll();
  }

  render() {
    const { cars } = this.state;

    return (

      <Container className="mt-3">
        <Row className="g-2 row-cols-auto justify-content-md-center">
          {cars &&
            cars.map((car: ICar) => (
              <Col xs={12} md={4}>
                <Card className="p-2 m-2 h-100">
                  <img src="..." alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{car.carMake.carBrand.name} {car.carMake.name}</h5>
                    <p className="card-text">
                      Color: {car.color} <br />
                      Regular price: {car.regularPrice} <br />
                    </p>
                    <a href="#" className="btn btn-primary">Reserve</a>
                  </div>
                </Card>
              </Col>
            )
            )
          }
        </Row>
      </Container>
    )
  }

}