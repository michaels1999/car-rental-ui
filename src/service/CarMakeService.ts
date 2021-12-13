import http from "../http-common";
import ICarMake from '../model/ICarMake'

class CarMakeService {
    findAll() {
        return http.get<Array<ICarMake>>('/car-makes')
    }

}

export default new CarMakeService();