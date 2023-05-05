function criarLinha(){
    // Cria um objeto que representa um h2
   const h2 = window.document.createElement("h2");
   // Chamando a função criada
   // Le via prompt os dados do cadastro
   const cadastro = lerCadastro();
   // Adiciona ao h2 os dados de cadastro 
   h2.textContent = `[Nome: ${cadastro.nome}, Idade: ${cadastro.idade}, Matriculado(a)?: ${cadastro.matricula}]`;
   // Pesquisa pelo 1º button do HTML
   const btn = window.document.querySelector("button");
   // Insere o H2 logo depois do button
   btn.after(h2);
}

function lerCadastro(){
   const nomePrompt = prompt("Digite o seu nome: ");
   const idadePrompt = prompt("Digite a sua idade: ");
   const matriculaPrompt = prompt("Está matriculado(a)?: ");
   // Retornando em formato de objeto 
   return{
    nome: nomePrompt,
    idade: idadePrompt,
    matricula: matriculaPrompt,
   }
}


// Função com objeto 
// function imprimeCadObj(cadastro){
//     console.log(` Nome: ${cadastro.nome}\n Idade: ${cadastro.idade}\n Matriculado: ${cadastro.matriculado}`); 
// }

// let cad = {
//     nome: "IF",
//     idade: 15,
//     matriculado: true
// };

// imprimeCadObj(cad);

// Criando a função
// function imprimeNome(nome){
//     console.log(`Nome recebido: ${nome}`);
// }

// function imprimeCadastro(nome, idade, matriculado){
//     console.log(` Nome: ${nome}\n Idade: ${idade}\n Matriculado: ${matriculado}`);
// }

// function imprimeFilme(nomeFilme, duração, legal){
//     console.log(` Filme: ${nomeFilme}\n Duração: ${duração}\n Legal: ${legal}\n`);
// }

// imprimeFilme("Filme", "1h30min", true);
// Parâmetros passados para a função
// imprimeCadastro("Nome", 15, true);
// imprimeNome("Nome 2");
// imprimeNome("Nome 3");


// const dataAgora = new Date();
// // mostrando a data antiga
// console.log(dataAgora);
// // altera o objeto da data
// dataAgora.setDate(20);
// // mostrando a data nova
// console.log(dataAgora);


// Variável const (não se altera)
// Vai dar erro pois const não se altera
// const dataAgora = new Date();
// dataAgora = new Date();
// console.log(dataAgora);
// A função data precisa do new
// let dataAgora = new Date();
// console.log(dataAgora);

// O mês começa em 00 (janeiro)
// let dataDefinida = new Date(2023, 00, 20);
// console.log(dataDefinida);

// let nome = "IFSP";
// console.log(`Instituição: ${nome}`);
// Como a string é muito utilizada não é necessário usar o new
// let nome = new String("IFSP");
// console.log(`Instituição: ${nome}`);
// // Exibindo o tamanho de uma variável
// let tamanho = nome.length;
// console.log(`Tamanho: ${tamanho}`);
// // String template (exibe o tamanho direto)
// console.log(`Tamanho: ${nome.length}`);
// // Exibindo a terceira letra posições:(0,1,2,3...)
// let letra3 = nome[2];
// console.log(`Terceira letra: ${letra3}`);
// // Exibindo em uma linha
// console.log(`Terceira letra: ${nome[2]}`);
// // Verificando se um pedaço de um texto está dentro de outro
// let contemSigla = nome.includes("IF");
// console.log(`Contém IF?: ${contemSigla}`)
// // Exibindo em uma linha 
// console.log(`Contém IF?: ${nome.includes("IF")}`)



// // Apenas let (variável) pode ser alterada
// let nome = "IFSP";
// // A craze é utilizada para passar dados por parâmetros
// console.log(`Instituição: ${nome}`);
// // Alterando o valor sai o novo no console
// nome = "Fatec"
// console.log(`Instituição: ${nome}`);

// let numero = 10; 
// let string = "Minha string";
// let meuNull = null;
// let nada;

// console.log(typeof numero);
// console.log(typeof string);
// console.log(typeof meuNull);
// console.log(typeof nada);
// alert("Hello world!"); 