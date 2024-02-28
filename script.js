//CallBack hell

// function task1(callback){
//     setTimeout(() => {
//         console.log("task 1 is complete");
//         callback();
//     }, 2000);
    
// }

// function task2(callback){
//     setTimeout(() => {
//         console.log("task 2 is complete");
//         callback();
//     }, 3000);
    
// }

// function task3(callback){
//     setTimeout(() => {
//         console.log("task 3 is complete");
//         callback();
//     }, 3000);
    
// }

// function task4(callback){
//     setTimeout(() => {
//         console.log("task 4 is complete");
//         callback();
//     }, 1500);
   
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("All tasks are complete");
//             })
//         })
//     })
// });

//use promise

function task1(){
   
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("task 1 is complete");
        }, 2000);
    })
}

function task2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("task 2 is complete");
        }, 3000);
    })  
}

function task3(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("task 3 is complete");    
        }, 3000);
        
    })

}

function task4(){ 
   return new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("task 4 is complete");
    }, 1500);
   });
}

task1().then(value=> {console.log(value) ;return task2()})

.then(value=> {console.log(value);return task3()})

.then(value=>{console.log(value);return task4()})
.then(value=>{console.log(value);console.log("All tasks are complete")});


