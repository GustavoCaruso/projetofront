import ApiService from "./apiService";

class cargoService extends ApiService {
    constructor() {
        super('/cargo');
    }

    listar() {
        return this.get('');
    }
}

export default cargoService;