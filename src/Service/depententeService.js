import ApiService from "./apiService";

class dependenteService extends ApiService {
    constructor() {
        super('/dependente');
    }

}

export default dependenteService;