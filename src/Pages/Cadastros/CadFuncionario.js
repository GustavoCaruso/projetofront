import { useEffect } from "react";

import { mensagemErro, mensagemSucesso } from "../../Configuration/mensagem";

function validar(funcionario){
    let ret = true;
    if(!funcionario.nomeCompleto)
    {
        ret = false;
        mensagemErro("Preencha o campo nome completo!");
    }
    if(!funcionario.dataNascimento){
        ret = false;
        mensagemErro("Preencha o campo data de nascimento!");
    }
    if(!funcionario.cpf){
        ret = false;
        mensagemErro("Preencha o campo cpf!");
    }
    if(!funcionario.rg){
        ret = false;
        mensagemErro("Preencha o campo rg!");
    }
    if(!funcionario.sexo){
        ret = false;
        mensagemErro("Preencha o campo sexo!");
    }
    if(!funcionario.estadoCivil){
        ret = false;
        mensagemErro("Preencha o campo estado civil!");
    }
    if(!funcionario.email){
        ret = false;
        mensagemErro("Preencha o campo email!");
    }
    if(!funcionario.telefone){
        ret = false;
        mensagemErro("Preencha o campo telefone!");
    }
    return ret;

}

function CadFuncionario() {
    const funcionarioService = new funcionarioService();
    const [funcionario, setFuncionario] = useState({
        nomeCompleto: "",
        dataNascimento: "",
        cpf: "",
        rg: "",
        sexo: "",
        estadoCivil: "",
        email: "",
        telefone: ""
    });
    const [listarFuncionario, setListarFuncionario] = useState([]);
}