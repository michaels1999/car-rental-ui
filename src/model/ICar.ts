import { Color } from "./Color";
import ICarMake from "./ICarMake";

export default interface ICar {
    id?: string | null,
    carMake : ICarMake,
    color : Color,
    regularPrice : number,
    youngPrice : number,
    elderPrice : number,
    inexperiencedPrice : number
  }