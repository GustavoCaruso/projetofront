import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { mensagemSucesso, mensagemErro } from '../../Configuration/mensagem';
import UsuarioService from '../../Service/usuarioService';
import './login.css'; 

function Login() {
  const nav = useNavigate();
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const service = new UsuarioService();

  const logar = () => {
    if (!matricula || !senha) {
      mensagemErro("Preencha os campos!");
    } else {
      service.validarUsuario(matricula, senha).then((response) => {
          if (response && response.data) {
            const usu = JSON.stringify(response.data);
            localStorage.setItem("usuario", usu);
            mensagemSucesso("Autenticação efetuada com sucesso!");
            nav("/home");
          } 
          else{
            throw new Error("Invalid response from server");
          }
        })
        .catch((error) => {
          mensagemErro(error.response ? error.response.data : "Erro desconhecido");
          console.error(error.response ? error.response.data : error.message);
        });
    }
  };

  return (
    <div className="container-fluid">
      <div id='login' className="row justify-content-center align-items-center vh-100">
        <div className='col-md-4'>
          <div id='login-box' className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Autenticação</h3>
              <form id='login-form'>
                <div className="mb-3">
                  <label htmlFor="matricula" className="form-label">Matrícula:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="matricula"
                    placeholder="Digite sua matrícula"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="senha" className="form-label">Senha:</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="senha"
                      placeholder="Digite sua senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Ocultar" : "Mostrar"}
                    </button>
                  </div>
                </div>
                <button onClick={logar} type="button" className="btn btn-primary btn-block">Entrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
