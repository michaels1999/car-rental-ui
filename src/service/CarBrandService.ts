import http from "../http-common";
import ICarBrand from '../model/ICarBrand'

class CarBrandService {
    findAll() {
        return http.get<Array<ICarBrand>>('/car-brands')
    }
}

export default new CarBrandService();