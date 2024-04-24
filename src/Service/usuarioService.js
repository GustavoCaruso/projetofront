
import ApiService from "./apiService";


class UsuarioService extends ApiService {
  constructor() {
    super('/usuario');
  }

  validarUsuario(matricula, senha) {
    return this.get(`/autenticar/${matricula}/${senha}`);
  }
}

export default UsuarioService;