
/* Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

*/

let nameOfHero = "Kratos";
let experience = 10052;
let levelOfHero = "";




if (experience <= 1000){
    levelOfHero = "Ferro";
    }else if(experience >= 1001 && experience<= 2000){
    levelOfHero = "Bronze";
    }else if(experience >= 2001 && experience<= 5000){
    levelOfHero = "Prata";
    }else if(experience >= 5001 && experience<= 7000){
    levelOfHero = "Ouro";
    }else if(experience >= 7001 && experience<= 8000){
    levelOfHero = "Platina";
    }else if(experience >= 8001 && experience<= 9000){
    levelOfHero = "Ascendente";
    }else if(experience >= 8001 && experience<= 9000){
    levelOfHero = "Ascendente";
    }else if(experience >= 9001 && experience<= 10000){
    levelOfHero = "Imortal";
    }
    else if(experience > 10001){
    levelOfHero = "Radiante";
}

console.log(`O Herói de nome é ${nameOfHero} e o mesmo esta no nivel de ${levelOfHero}.`)
