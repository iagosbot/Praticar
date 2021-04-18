function humanStatus(name, age, sicklvl) {
    if (age <= 20){
        sicklvl = sicklvl - (sicklvl * 30 / 100)
    }
    if (age > 20 && age <= 30){
        sicklvl = sicklvl - (sicklvl * 20 / 100) 
        }
    if (age > 30 && age <= 40){
        sicklvl = sicklvl - (sicklvl * 10 / 100)
    }
    if (age > 40) {
        sicklvl = sicklvl
    }
    if (sicklvl > 0.200 && sicklvl <= 20 ) {
        return `${name}, de ${age} anos , possui a Doença Vampirica de nivél BAIXO, com ${sicklvl.toFixed(2).replace(".",",")}vk's em seu sangue.`
    }
    else if (sicklvl > 20 && 40 >= sicklvl) {
        return `${name}, de ${age} anos , possui a Doença Vampirica de nivel ELEVADO, com ${sicklvl.toFixed(2).replace(".",",")}vk's em seu sangue.`
    } 
    else if (sicklvl > 40) {
        return `${name}, de ${age} anos , possui a Doença Vampirica de nivel GRAVE, com ${sicklvl.toFixed(2).replace(".",",")}vk's em seu sangue.`
    } else {
        return `${name}, de ${age} anos , NÃO possui a Doença Vampirica`
    }
}

const human1 = humanStatus('Mael', 18, 20.5)
const human2 = humanStatus('Jammey', 20, 38.3)
const human3 = humanStatus('Carlos', 27, 50.6)
const human4 = humanStatus('Martha', 34, 62.1)
const human5 = humanStatus('Nora', 56, 0.133)
const human6 = humanStatus('Duayne K', 60, 0.210)
console.log(human1)
console.log(human2)
console.log(human3)
console.log(human4)
console.log(human5)
console.log(human6)
