class Atleta{
    constructor(nome,idade,peso,altura,notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }
    calculaCategoria(){
        if(this.idade > 30){
            return "Sem categoria"
        }else if(this.idade >= 16 && this.idade <= 30){
            return "Adulto"
        }else if(this.idade >= 14 && this.idade <= 15){
            return "Intermediario"
        }else if(this.idade > 11 && this.idade <= 13){
            return "Juvenil"
        }else{
            return "Infantil"
        }
    }
    calculaIMC(){
        return this.peso/(this.altura*this.altura)
    }
    calculaMediaValida(){
        let soma = 0
        let obterMediaValida = this.notas.sort(function(a,b){return (b - a)}).slice(1,4).map(function(nota){
            soma = soma + nota
            return soma
        })
        return soma/obterMediaValida.length
    }
    obtemNomeAtleta(){
        return console.log(`Nome: ${this.nome}`)
    }
    obtemIdadeAtleta(){
        return console.log(`Idade: ${this.idade}`)
    }
    obtemPesoAtleta(){
        return console.log(`Peso: ${this.peso}`)
    }
    obtemAlturaAtleta(){
        return console.log(`Altura: ${this.altura}`)
    }
    obtemNotasAtleta(){
        return console.log(`Notas: [${this.notas}]`)
    }
    obtemCategoria(){
        return console.log(`Categoria: ${this.calculaCategoria()}`)
    }
    obtemIMC(){
        return console.log(`IMC: ${this.calculaIMC()}`)
    }
    obtemMediaValida(){
        return console.log(`Media Valida: ${this.calculaMediaValida()}`)
    }
}

//CRIANDO UM OBJETO COM A CLASSE ATLETA PARA TESTAR AS SAÍDAS
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

//TESTANDO AS SAÍDAS
atleta.obtemNomeAtleta();
atleta.obtemIdadeAtleta();
atleta.obtemPesoAtleta();
atleta.obtemAlturaAtleta();
atleta.obtemNotasAtleta();
atleta.obtemCategoria();
atleta.obtemIMC();
atleta.obtemMediaValida();