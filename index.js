const redux = require('redux')
const prompts = require('prompts')

//essa função é uma criadora de ação
const realizarVestibular = (nome, cpf) => {
    const entre6e10 = Math.random() <= 0.7
    const nota = entre6e10 ? 6 + Math.random() * 4 : Math.random() * 5
    //esse JSON que ela devolve é uma ação
    return{
        type: "REALIZAR_VESTIBULAR",
        payload: {
            nome, cpf, nota
        }
    }
}

//essa função também é uma criadora de ação
const realizarMatricula = (cpf, status) => {
    //esse JSON que ela devolve é uma ação
    return {
        type: "REALIZAR_MATRICULA",
        payload:{
            cpf, status
        }
    }
}

//essa função é um reducer
const historicoVestibularReducer = (historicoVestibularAtual = [], acao) =>{
    if (acao.type === "REALIZAR_VESTIBULAR"){
        return [...historicoVestibularAtual, acao.payload]
    }
    return historicoVestibularAtual
}

//essa função é um reducer
const historicoMatriculasReducer = (historicoMatriculasAtual = [], acao) =>{
    if (acao.type === "REALIZAR_MATRICULA"){
        return [...historicoMatriculasAtual, acao.payload]
    }
    return historicoMatriculasAtual
}

/*
    {
        historicoVestibular: [],
        historicoMatriculas: []
    }
*/

const todosOsReducers = redux.combineReducers({
    historicoVestibular: historicoVestibularReducer,
    historicoMatriculas: historicoMatriculasReducer
})

const store = redux.createStore(todosOsReducers)

const inicio = async () => {
    const menu = "1-Realizar vestibular\n2-Realizar matricula\n3-Visualizar meu status\n4-Visualizar a lista de aprovados\n0-Sair"
    let resposta
    do{
        resposta = await prompts({ // {opcao: 2}
            type: 'number',
            name: 'opcao',
            message: menu
        })

    }while (resposta.opcao !== 0);
}
