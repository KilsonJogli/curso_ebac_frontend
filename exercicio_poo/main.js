function Pokemon(name, type, stamina, strength) {
    this.name = name;
    this.type = type;
    this.stamina = stamina;
    this.strength = strength;
    this.pokemonPoints = this.stamina * strength    // diferentes ~~    this.attackDamage = strength * 2 ~          Se relaciona com um parametro, variavel  
    this.skill = function() {                      //                   this.attackDamage = this.strength * 2; ~    Se relaciona com uma propriedade existente
        console.log("Ataque pokemon")
    }
}

function Pikachu(nome, stamina, strength) {                    
    Pokemon.call(this, nome, "Elétrico", stamina, strength);     //"Elétrico" foi passado como resposta direta, pois raichu tbm será eletrico. porem 1 arg a menos para raichu.
    this.skill = function() {                                 
        console.log("Choque do trovão");
    }
    
    let _attackDamage = this.pokemonPoints * 2;                  //

    this.getDamage = function() {
        return _attackDamage;
    }

    this.setDamage = function(value) {                      // uma função futura;
        if(typeof value === 'number') {
            _attackDamage = value
        }
    }

    // const look = typeof _evolucao === "undefined";
    // if(look) {
    //     console.log("É mona!")
    // } else {
    //     console.log("Não é mona!")
    // }


    this.increase = function() {
        const increaseAttack = this.getDamage() * 1.5
        if("evolucao" in this) {          // aqui posso adicionar this.evolucao = 0(na classe), e fazer verificação de propriedade.
            console.log("Puff")
            this.setDamage(increaseAttack)
        }
        // if(typeof _evolucao  in this) {      // aqui estava tentando fazer verificação de uma variavel, mas ainda nao consegui
        //     console.log(typeof _evolucao)
        //     this.setDamage(increaseAttack)
        // }
    }
}

function Raichu(stamina, strength) {
    this.evolucao = 1;
    Pikachu.call(this, "Raichu", stamina, strength);
}

function Sylveon(stamina, strength) {
    Pokemon.call(this, "Sylveon", "Fada", stamina, strength);
    this.skill = function() {
        console.log("Explosão da lua")
    }
}



const pikachuDoKilson = new Pikachu("Pikachu", 100, 200);
const raichuDoKilson = new Raichu(100, 200);
const sylveonDoKilson = new Sylveon(300, 400)

raichuDoKilson.increase()
console.log(sylveonDoKilson.skill());



// E args novo com valores da antigo, fica onde ?