class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

function cadastrarFuncionario() {
    try {
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const cargo = document.getElementById('cargo').value;
        const departamento = document.getElementById('departamento').value;
        const linguagem = document.getElementById('linguagem').value;

        if (!nome || !idade || !cargo) {
            throw new Error("Por favor, preencha todos os campos obrigatórios.");
        }

        let funcionario;

        if (cargo === "Gerente") {
            if (!departamento) {
                throw new Error("Por favor, preencha o campo 'Departamento' para Gerentes.");
            }
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else if (cargo === "Desenvolvedor") {
            if (!linguagem) {
                throw new Error("Por favor, preencha o campo 'Linguagem de Programação' para Desenvolvedores.");
            }
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        }

        exibirResultado(funcionario);

    } catch (e) {
        exibirErro(e.message);
    }
}

function exibirResultado(funcionario) {
    const resultadoDiv = document.getElementById('resultado');
    let resultadoHtml = funcionario.seApresentar() + "<br>" + funcionario.trabalhar() + "<br>";

    if (funcionario instanceof Gerente) {
        resultadoHtml += funcionario.gerenciar();
    } else if (funcionario instanceof Desenvolvedor) {
        resultadoHtml += funcionario.programar();
    }

    resultadoDiv.innerHTML = resultadoHtml;
    document.getElementById('error').innerHTML = ""; // Limpa mensagens de erro
}

function exibirErro(msg) {
    const errorDiv = document.getElementById('error');
    errorDiv.innerHTML = msg;
}
