import http from "../http-common";
import ICar from '../model/ICar'

class CarService {
    findAll() {
        return http.get<Array<ICar>>('/cars')
    }

}

export default new CarService();