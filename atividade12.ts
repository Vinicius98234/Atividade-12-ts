/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/
let cat = {
    name: "Garfield",
    age: 3,
    color: "Laranja",
    bestFriends: ["Dafne", "Theo"],
    sound: "Meow Meow"
}

console.log(cat.name)
console.log(cat.age)
console.log(cat.color)
console.log(cat.bestFriends)
console.log(cat.sound)
/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/
console.log(`Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu ${cat.name}, "age", que recebeu "${cat.age}", "color", que recebeu ${cat.color}, "bestFriends", que recebeu um array com os itens ${cat.bestFriends[0]} e ${cat.bestFriends[1]}, e "sound", que recebeu uma função que retorna ${cat.sound}.`)

/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/
console.log(cat.age + 2)
/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/
function adicionarAmigo(Amigo:any) {
  cat.bestFriends.push("Tom");
  console.log(cat.bestFriends)
}
adicionarAmigo(cat.bestFriends)
/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/
function adicionarCor(cor:any) {
  cat.color = "Amarelo"
  console.log(cat['color'])
}
adicionarCor(cat['color'])
/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/
function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}
console.log(isObject(cat))

/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/
let dog = {
  name: "Theo",
  age: 4,
  color: "Preto",
  bestFriends: ["Garfield", "Bola"],
  sound: "Au Au"
}
function mensagem(){
  let junto = cat.age + dog.age
  console.log(`A soma das idades de ${cat.name} e ${dog.name} é ${junto}.`)
}
mensagem()
/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/
const isAnSUV = (car: string): boolean => {
    const suvModels: string[] = ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai iX35'];
    return suvModels.includes(car);
}

console.log(isAnSUV('Honda Civic')); 
console.log(isAnSUV('Ford EcoSport')); 


/*
  09
 
  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/
function getTypeDescription(type: string): string | undefined {
    const typeDescriptions: { [key: string]: string } = {
        null: 'Seta, explicitamente, uma variável sem valor.',
        undefined: 'Representa um valor não-setado.',
        object: 'Arrays, Datas, Objetos literais, Funções, etc.'
    };

    return typeDescriptions[type];
}

console.log(getTypeDescription('null')); 
console.log(getTypeDescription('undefined')); 
console.log(getTypeDescription('object')); 

/*

10

- Declare uma constante que recebe o seu nome;
- Ela deve ter um escopo global.
*/
const myname = "Vinicius Gabriel"

/*
  11

  - Funções também são blocos de código;
  - Crie uma função que ao ser invocada, exibe sua idade no console;
  - Dentro da função, declare uma let que armazena a sua idade;
  - Exiba sua idade no console, através da invocação da função;
  - Do lado de fora da função exiba no console o valor da let que foi declarada  
    dentro da função;
  - Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not  
    defined" será exibido no console;
  - Você sabe por que isso aconteceu?
*/
function exibirIdade(): number {
    let minhaIdade: number = 16;
    console.log("Minha idade é:", minhaIdade);
    return minhaIdade;
}

const idadeForaDaFuncao: number = exibirIdade();
console.log("Idade fora da função:", idadeForaDaFuncao);


/*
  12

  - Crie um objeto "car" com as seguintes propriedades e métodos:
    - name, que recebe o nome do carro;
    - brand, que recebe a marca do carro;
    - colors, que recebe 3 cores para o carro;
    - isRunning, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
    - getColorsMessage, que é um método que retorna a mensagem  
      "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/
const car = {
    name: "",
    brand: "",
    colors: [] as string[],
    isRunning: false,
    run() {
        this.isRunning = true;
        return `O ${this.name} está em movimento`;
    },
    stop() {
        this.isRunning = false;
        return `O ${this.name} está parado`;
    },
    getColorsMessage() {
        const colorsList = this.colors.join(', ');
        return `O ${this.name} está disponível nas cores ${colorsList}`;
    }
};


car.name = "Civic";
car.brand = "Honda";
car.colors = ["Preto", "Branco", "Prata"];

console.log(car.run()); 
console.log(car.stop()); 
console.log(car.getColorsMessage()); 

/*
  13

  - Faça o carro andar e exiba no console se ele realmente está em movimento.
*/

console.log(car.run()); 

console.log(`O carro está em movimento? ${car.isRunning ? 'Sim' : 'Não'}`); 

/*
  14

  - Faça o carro parar e exiba no console se ele realmente está parado.
*/
console.log(car.stop())
console.log(`O carro está parado? ${!car.isRunning ? 'Sim' : 'Não'}`);
/*
  15

  - Exiba, no console, a mensagem com as cores do carro.
*/
console.log(car.getColorsMessage());
/*
  16

  - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/
console.log(`O carro é um ${car['brand']} ${car['name']}`);
/*
  17
  - Aqui vamos simular um sistema de cadastro de um médico que deseja guardar informações sobre os seus pacientes em um hospital
  - Aqui faça uma simulação de um banco de dados com informações sobre pacientes de um hospital (20 pacientes)
  - Cada paciente deve ser um objeto declarado, e armazenado em um banco de dados com array
  - Cada paciente deve possuir os seguintes atributos: nome, idade, cpf, sintoma, classificação de risco (de 0-5), situação de risco
  - Você deve verificar qual a classificação de cada paciente e atribuir a situação do paciente como 'Risco leve' caso ele tenha classificação 1 ou 2, 
        'Risco Moderado' caso ele tenha risco de 3 ou 4, e 'Grave risco' caso ele tenha risco de valor igual a 5.
  - Depois imprima um relatório completo sobre os pacientes.
*/
interface Paciente {
    nome: string;
    idade: number;
    cpf: string;
    sintoma: string;
    classificacaoRisco: number;
    situacaoRisco: string;
}

function atribuirSituacaoRisco(classificacaoRisco: number): string {
    if (classificacaoRisco >= 1 && classificacaoRisco <= 2) {
        return 'Risco leve';
    } else if (classificacaoRisco >= 3 && classificacaoRisco <= 4) {
        return 'Risco moderado';
    } else if (classificacaoRisco === 5) {
        return 'Grave risco';
    } else {
        return 'Situação não definida';
    }
}

const bancoDeDadosPacientes: Paciente[] = [
    { nome: "Paciente 1", idade: 25, cpf: "111.111.111-11", sintoma: "Febre", classificacaoRisco: 2, situacaoRisco: '' },
    { nome: "Paciente 2", idade: 65, cpf: "222.222.222-22", sintoma: "Tosse", classificacaoRisco: 4, situacaoRisco: '' },
    { nome: "Paciente 3", idade: 62, cpf: "333.333.333-33", sintoma: "Dor de cabeça", classificacaoRisco: 1, situacaoRisco: '' },
    { nome: "Paciente 4", idade: 28, cpf: "444.444.444-44", sintoma: "Dor nas articulações", classificacaoRisco: 3, situacaoRisco: '' },
    { nome: "Paciente 5", idade: 21, cpf: "555.555.555-55", sintoma: "Dor de garganta", classificacaoRisco: 5, situacaoRisco: '' },
    { nome: "Paciente 6", idade: 34, cpf: "666.666.666-66", sintoma: "Febre", classificacaoRisco: 2, situacaoRisco: '' },
    { nome: "Paciente 7", idade: 51, cpf: "777.777.777-77", sintoma: "Tosse", classificacaoRisco: 4, situacaoRisco: '' },
    { nome: "Paciente 8", idade: 19, cpf: "888.888.888-88", sintoma: "Dor de cabeça", classificacaoRisco: 1, situacaoRisco: '' },
    { nome: "Paciente 9", idade: 22, cpf: "999.999.999-99", sintoma: "Dor nas articulações", classificacaoRisco: 3, situacaoRisco: '' },
    { nome: "Paciente 10", idade: 60, cpf: "000.000.000-00", sintoma: "Dor de garganta", classificacaoRisco: 5, situacaoRisco: '' },
    { nome: "Paciente 11", idade: 38, cpf: "123.456.789-01", sintoma: "Febre", classificacaoRisco: 2, situacaoRisco: '' },
    { nome: "Paciente 12", idade: 48, cpf: "987.654.321-09", sintoma: "Tosse", classificacaoRisco: 4, situacaoRisco: '' },
    { nome: "Paciente 13", idade: 52, cpf: "111.222.333-44", sintoma: "Dor de cabeça", classificacaoRisco: 1, situacaoRisco: '' },
    { nome: "Paciente 14", idade: 26, cpf: "555.666.777-88", sintoma: "Dor nas articulações", classificacaoRisco: 3, situacaoRisco: '' },
    { nome: "Paciente 15", idade: 70, cpf: "999.888.777-66", sintoma: "Dor de garganta", classificacaoRisco: 5, situacaoRisco: '' },
    { nome: "Paciente 16", idade: 42, cpf: "444.333.222-11", sintoma: "Febre", classificacaoRisco: 2, situacaoRisco: '' },
    { nome: "Paciente 17", idade: 30, cpf: "987.654.321-09", sintoma: "Tosse", classificacaoRisco: 4, situacaoRisco: '' },
    { nome: "Paciente 18", idade: 58, cpf: "111.222.333-44", sintoma: "Dor de cabeça", classificacaoRisco: 1, situacaoRisco: '' },
    { nome: "Paciente 19", idade: 25, cpf: "555.666.777-88", sintoma: "Dor nas articulações", classificacaoRisco: 3, situacaoRisco: '' },
    { nome: "Paciente 20", idade: 68, cpf: "999.888.777-66", sintoma: "Dor de garganta", classificacaoRisco: 5, situacaoRisco: '' }
];

bancoDeDadosPacientes.forEach(paciente => {
    paciente.situacaoRisco = atribuirSituacaoRisco(paciente.classificacaoRisco);
});

console.log("Relatório completo sobre os pacientes:");
bancoDeDadosPacientes.forEach(paciente => {
    console.log(`Nome: ${paciente.nome}, Idade: ${paciente.idade}, CPF: ${paciente.cpf}, Sintoma: ${paciente.sintoma}, Classificação de risco: ${paciente.classificacaoRisco}, Situação de risco: ${paciente.situacaoRisco}`);
});

