// beginning of th first Exercice 1
// |||||||||||||||||||||||||||||||
// ˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇ
// Écrivez une fonction nommée calculateSum qui prend en entrée un 
// tableau de nombres et qui retourne une promesse. Cette promesse 
// devrait résoudre avec la somme de tous les nombres du tableau. 
// Si le tableau est vide,
//  la promesse doit être rejetée avec un message d'erreur approprié.


// *******************Display with promises******************

const tabNum = [12,2,4,56,67,9];

function calculateSum(tabNUM) {

    return new Promise((resolve, reject)=>{
        if(tabNUM.length === 0){
            reject("le tableau est vide!! veuillez au moins fournir un nombre");
        }
        else{
            let som=0;
            for(let i =0;i < tabNUM.length;i++){ 
               som+=tabNUM[i];
           
        }
        resolve("la somme est:"+som);
        
    }
      
    })    
}

calculateSum(tabNum).then(value=>{console.log(value);console.log(" First-Exercice Display with promises");})

.catch ((error)=> { console.error("Error :",error.message);});

// *******************Display with async******************


async function calculateSumAsync(tabNum) {

    if(tabNum.length === 0){
        throw new Error("le tableau est vide !! veuillez fournir au moins une valeur dans le tableau");
    }
 
        let sum =0;

        for(let i=0;i<tabNum.length;i++){
            sum+=tabNum[i];
        }

    return"la somme avec async est :" +sum;
}
async function main(){
    try {
        const result = await calculateSumAsync(tabNum);
        console.log(result);
        console.log(" First-Exercice Display with asynchronous  functions ");
        
    } catch (error) {
        console.error("Error :",error.message);
    }

}
main();

// The End - the first Exercice 1
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// |||||||||||||||||||||||||||||||


// Exercice2 : Vérification de la disponibilité d'un produit en stock

// Imaginez que vous travaillez sur un site de commerce électronique 
// et vous devez écrire une fonction nommée checkStockAvailability qui
//  prend en entrée le nom d'un produit et retourne une promesse
//   Cette promesse devrait résoudre avec un message indiquant que le produit est en stock si le produit est disponible,
//  sinon elle doit être rejetée avec un message indiquant que le produit est en rupture de stock.

// *******************Display with promises******************

const products = {
    "ordinateur portable": true,
    "smartphone": false,
    "écouteurs sans fil": true,
    "clavier mécanique": true
};

function checkStockAvailability(product) {

    return new Promise((resolve,reject)=>{

        if(products.hasOwnProperty(product) && products[product]){
            resolve(" "+product+": le produit est en stock");
        }
        else{
            reject("le "+product+": est en rupture de stock");
        }
    })
    
}

const prod = "ordinateur portable";

checkStockAvailability(prod).then(value =>{console.log(value);console.log(" Second-Exercice Display with promises");})
.catch(error=>{console.log("erreur"+error)});

// *******************Display with async******************




async function checkStockAvailabilityAsync(product){

    if(products.hasOwnProperty(product) && products[product]){
        console.log("Async "+product+": le produit est en stock");
    }
    else{
        throw new Error("Async "+product+": est en rupture de stock");
    }
}

const product = "smartphone";

async function main1(product){
    try {
        const result = await checkStockAvailabilityAsync(product);
        console.log(result);
        console.log("Second-Exercice Display with asynchronous functions");
    } catch (error) {
        console.error("error ",error.message);
    }
}


main1(product);




// Exercice : Vérification de l'âge minimal pour accéder à un contenu

// // Imaginez que vous développez une application qui propose du contenu destiné 
// aux personnes de plus de 18 ans. Vous devez écrire une fonction nommée checkAge 
// qui prend en entrée l'âge d'un utilisateur et retourne une promesse. Cette promesse doit résoudre 
// si l'utilisateur a 18 ans ou plus, et rejeter si l'utilisateur a moins de 18 ans.

const age = 12;

function checkAge(age) {

    return new Promise((resolve,reject)=>{
        if(age>=18){
            resolve("Accès autorisé. Vous avez plus de 18 ans.");
        }else{
            reject("Accès refusé. Vous devez avoir au moins 18 ans pour accéder à ce contenu.");
        }
    })
    
}
checkAge(age).then(value=>{console.log(value)})
.catch(error =>{console.log("error"+error)})
.finally(()=>{
    console.log("Third-Exercice with promises");
});



const age1 =23;
async function ckeckAgeAsyn(age1){

    return age1 >= 18 ? " Async Accès autorisé. Vous avez plus de 18 ans." : (() => {throw new Error(" Async Accès refusé. Vous devez avoir au moins 18 ans pour accéder à ce contenu.")});

}

async function main3(age1){
    try {
        
        const result = await ckeckAgeAsyn(age1);
        console.log(result);
        console.log("Third-Exercice with asynchronous functions");
    } catch (error) { console.error("error"+error.message);
        
    }
}
main3(age1);
