import { BodyType } from "./BodyType";
import { CombustionType } from "./CombustionType";
import ICarBrand from "./ICarBrand";

export default interface ICarMake {
  id?: string | null,
  carBrand: ICarBrand
  name: string,
  year: number,
  engineVolume: number,
  bodyType: BodyType
  combustionType: CombustionType
}