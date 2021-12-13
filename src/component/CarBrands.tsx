import { Component } from "react";
import CarBrandService from "../service/CarBrandService";
import ICarBrand from '../model/ICarBrand'

type Props = {};

type State = {
  carBrands: Array<ICarBrand>,
};


export default class CarBrands extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.findAll = this.findAll.bind(this);
        this.refreshList = this.refreshList.bind(this);

        this.state = {
            carBrands: []
        };
    }

    componentDidMount() {
        this.findAll();
      }

    findAll() {
        CarBrandService.findAll()
          .then((response: any) => {
            this.setState({
              carBrands: response.data
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
        const { carBrands } = this.state;

        return(
            <ul>
                {carBrands &&
                    carBrands.map((carBrand: ICarBrand) => (
                            <li>{carBrand.id} {carBrand.name}</li>
                        )
                    )
                }           
            </ul>
        )
    }

}