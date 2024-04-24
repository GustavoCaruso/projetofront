import ApiService from "./apiService";


class funcionarioService extends ApiService {
  constructor() {
    super('/funcionario');
  }
  
  listar() {
    return this.get('');
}
}

  export default funcionarioService;