import { Component } from "react";
import CarMakeService from "../service/CarMakeService";
import ICarMake from '../model/ICarMake'

type Props = {};

type State = {
  carMakes: Array<ICarMake>,
};


export default class CarMakes extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.findAll = this.findAll.bind(this);
    this.refreshList = this.refreshList.bind(this);

    this.state = {
      carMakes: []
    };
  }

  componentDidMount() {
    this.findAll();
  }

  findAll() {
    CarMakeService.findAll()
      .then((response: any) => {
        this.setState({
          carMakes: response.data
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
    const { carMakes } = this.state;

    return (
      <ul>
        {carMakes &&
          carMakes.map((carMake: ICarMake) => (
            <li>
              <table>
                <tr>
                  <td>id</td>
                  <td>{carMake.id}</td>
                </tr>
                <tr>
                  <td>car brand</td>
                  <td>{carMake.carBrand.id} {carMake.carBrand.name}</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>{carMake.name}</td>
                </tr>
                <tr>
                  <td>year</td>
                  <td>{carMake.year}</td>
                </tr>
                <tr>
                  <td>engine volume</td>
                  <td>{carMake.engineVolume}</td>
                </tr>
                <tr>
                  <td>body type</td>
                  <td>{carMake.bodyType}</td>
                </tr>
                <tr>
                  <td>combustion type</td>
                  <td>{carMake.combustionType}</td>
                </tr>
              </table>
            </li>
          )
          )
        }
      </ul>
    )
  }

}