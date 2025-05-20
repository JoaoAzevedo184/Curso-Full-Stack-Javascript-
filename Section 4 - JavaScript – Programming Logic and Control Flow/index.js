// Exemplos de uso do console.log()

// 1. Uso básico - string simples
console.log('Olá mundo');

// 2. Múltiplos argumentos (como no seu exemplo)
console.log('Meu nome é "Otávio". Estou aprendendo JavaScript às', 20, 'da noite.');

// 3. Usando template strings
const hora = 20;
console.log(`Estou estudando às ${hora} horas`);

// 4. Exibindo objetos
const pessoa = { nome: 'Otávio', idade: 25 };
console.log(pessoa);

// 5. Debug com variáveis
const x = 10;
const y = 20;
console.log({ x, y });

// 6. Estilizando o console (funciona apenas no navegador)
console.log('%c Texto Estilizado', 'color: blue; font-size: 20px');

// 7. Diferentes níveis de log
console.info('Mensagem informativa');
console.warn('Mensagem de aviso');
console.error('Mensagem de erro');

// 8. Exibindo dados em tabela
const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 9 }
];
console.table(alunos);

// 9. Agrupando logs
console.group('Grupo de logs');
console.log('Log 1');
console.log('Log 2');
console.groupEnd();

// 10. Medindo tempo de execução
console.time('timer');
// ... código a ser medido
console.timeEnd('timer');
