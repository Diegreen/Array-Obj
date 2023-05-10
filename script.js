const pessoa = {
    nome: 'Erico',
    nascimento: 2000,
    cpf: '594.924.524-01',
    cidade: 'Barra',
    estado: 'Rio de Janeiro',
    logradouro: 'Rua Antonio Carlos Oliveira'
}

const escola = {
    nome: 'Castelo Branco',
    cnpj: '123124125213/0001',
    atuacao: 'Ensino',
    cidade: 'BelfordRoxo',
    estado: 'Rio de Janeiro',
    logradouro: 'Rua Manoel Carvalho Pinto',
    curso: 'Ensino-Superior'
}

const curso = {
    nome: 'Kenzie',
    duracao: 7,
    turma: 502,
    modulos: 5,
}

const endereço = {
    cidade: 'Rima',
    estado: 'Rondonia',
    logradouro: 'Rua Gonçalves Alves Terceiro',
    cep: '2356-000'
}

const carro = {
    placa: "ABC123",
    classes: ["sedan"],
    luxo: true,
    potencia: 200,
    estacionado: true
}

function obterPlaca(carro) {
    return carro.placa
}

console.log(obterPlaca(carro))

function verificarClasses(carro) {
    return carro.classes[0]
}

console.log(verificarClasses(carro))

function potenciaReal(carro) {
    const carpotencia = carro.potencia * carro.potencia
    return carpotencia
}

console.log(potenciaReal(carro))

function adicionarNovaClasse(carro, classe) {
    const classes_permitidas = ["sedan", "hatchback", "suv", "crossover", "cupê"]
    if (carro.classes.length >= 3) {
        return 'Este carro não pode ter mais classes'
    } else if (!classes_permitidas.includes(classe)) {
        return `a Classe ${classe} não é permitida`
    } else if (carro.classes.includes(classe)) {
        return 'O carro ja possui classe'
    } else {
        carro.classes.push(classe)
        return `Classe ${classe} foi adicionada`
    }
}

console.log(adicionarNovaClasse(carro, "suv"))
console.log(carro)

function naoMaisLuxo (carro) {
    if(carro.estacionado == false) {
        return `O carro ${carro.placa} não está estacionado`
    } else if (carro.luxo == false) {
        return `P carrp ${carro.placa} não possui a classe luxo`
    } else {
        return `O carro ${carro.placa} não é mais considerado um carro de luxo`
    }
}

console.log(naoMaisLuxo(carro))