import React, { useEffect, useState } from "react";
import 'bootswatch/dist/cosmo/bootstrap.css';
import { FaUserPlus } from 'react-icons/fa'; 

import FuncionarioService from "../../Service/funcionarioService";
import DependenteService from "../../Service/depententeService";

import { mensagemErro } from "../../Configuration/mensagem";
import { mensagemSucesso } from "../../Configuration/mensagem";

function validar(dependente){
    let ret = true;
    if(!dependente.nome)
    {
        ret = false;
        mensagemErro("Preencha o campo nome!");
    }
    if(!dependente.dataNascimento){
        ret = false;
        mensagemErro("Preencha o campo data de nascimento!");
    }
    //validar demais campos de dependente
    return ret;
}


function CadDependente() {

    const dependenteService = new DependenteService();
    const funcionarioService = new FuncionarioService();
    
    //listar
    const[listarFuncionario, setListFuncionario] = useState([])

    const [dependente, setDependente] = useState({
       id: 0,
       nome: '',
       dataNascimento: '',
       parentesco: '', 
       funcionario: {
                id: 0
       }
    });

    useEffect(()=>{

        funcionarioService.listar().then((resposta)=>{
          
            setListFuncionario(resposta.data)
        }).catch((error)=>{console.log(error.response.data)});
    }, [])
   
    const salvar=()=>{
        const ret = validar(dependente)
        if(ret){

        }
    }

    return (
        <div className="container mt-5">
            <h1><FaUserPlus /> Cadastro de Dependente</h1> 
            <hr/>
            <form>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nome" 
                        value={dependente.nome} 
                        onChange={e => setDependente({...dependente, nome: e.target.value})} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="dataNascimento" 
                        value={dependente.dataNascimento} 
                        onChange={e => setDependente({...dependente, dataNascimento: e.target.value})} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="parentesco" className="form-label">Parentesco</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="parentesco" 
                        value={dependente.parentesco} 
                        onChange={e => setDependente({...dependente, parentesco: e.target.value})} 
                    />
                </div>
         
                <div className="mb-3">
                    <label htmlFor="funcionario" className="form-label">Funcionário</label>
                    <select 
                        className="form-control" 
                        id="funcionario"
                        value={dependente.funcionario.id}
                        onChange={e => setDependente({
                            ...dependente,
                            funcionario: { ...dependente.funcionario, id: e.target.value }
                        })}
                    >
                        <option value="">Selecione uma opção...</option>
                        {
                            listarFuncionario.map(item => {
                                return (
                                    <option value={item.id} key={item.id}>
                                        {item.nomeCompleto}
                                    </option>
                                    
                                )
                            
                        })}
                    </select>
                </div>
                <button type="button"  onClick={salvar} className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadDependente;
