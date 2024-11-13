// let instrument=['cup' ,'plate', 'spoon','knife','fork']
// let i=0

// while(i < instrument.length) {
//     console.log(instrument[i]);
//     i++

// }


// let terevez = ['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']

// let i = 0
// while (i < terevez.length) {
//     if (terevez[i][0] == "s")
//         console.log(terevez[i]);
//     i++
// }





// let cem=0
// let eded=1
// while(eded<=100) {
//     cem+=eded   /* cem=cem+eded*/
//     eded++   
// }
// console.log(cem);








// let levazimat = ['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']
// let i = 0
// while (i < levazimat.length) {
//     if (levazimat[i].length == 5) {
//         console.log(levazimat[i].slice(-1));   
//     }
//     else {


//         i++;
//         continue;
//     }
//     i++

// }





// let eded=100000
// while(eded>=1){
//     if( eded%9999==0 ){
//         console.log(eded);
//         break;
//     }
//     eded--

// }




// let setir='Men her gun Javascript oyrenirem'
// let newSetir=setir.replace(/[a,i,o,u,e]/g,'')
// console.log(newSetir);




// let instrument=['cup' ,'plate', 'spoon','knife','fork']
// for(let index of instrument){
//     console.log(index);

// }





// // let terevez = ['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']
// // for (i = 0; i < terevez.length; i++) {
// //     if (terevez[i][0] == "s")
// //         console.log(terevez[i]);

// // }




// let cem=0
// for(eded=1;eded<=100;eded++){
//     cem+=eded;

// }
// console.log(cem);





// let levazimat = ['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']
// for( i=0;i<levazimat.length;i++ ){
//     if(levazimat[i].length==5){
//         console.log(levazimat[i].slice(-1));

//     }
//     else{
//         i++;
//         continue;
//     }

// }






// for(eded=100000;eded>1;eded--){
//     if(eded%9999==0){
//         console.log(eded);

//         break;

//     }
// }



// let setir='Men her gun Javascript oyrenirem'
// let newSetir=setir.replace(/[a,i,o,u,e]/g,'')
// console.log(newSetir);


/*yeni calismalar--------------------------------------------------------------------------------------------------------------*/

/*1 ci suall------------------------------------------------------------------------------------------------------------------*/



// function test(firstname) {
//     return `salam hormetli ${firstname} `
// }
// console.log(test('Leyla'));



/*2 ci suall------------------------------------------------------------------------------------------------------------------*/

// function number(eded){
//     if(eded%2==0){
//         return `${eded} cut ededdir`


//     }
//     else{
//         return `${eded} tek ededdir`
//     }

// }
// console.log(number(3469));




/*4 cu suall------------------------------------------------------------------------------------------------------------------*/


// function kub(eded){

//     return eded**3
// }
// console.log(kub(3));

/*4 cu suall arrowla------------------------------------------------------------------------------------------------------------------*/

// const kub= (eded) =>eded**3 ;
// console.log(kub(9));



/*5 ci suall a varianti-----------------------------------------------------------------------------------------------------------------*/
// function temperatur(faranheyt) {
//        return selsi=(faranheyt-32)/1.8
// }
// console.log(temperatur(23)); 


/*5 ci suall b varianti-----------------------------------------------------------------------------------------------------------------*/

// function temperatur(faranheyt) {
//     return selsi= 100-(faranheyt-32)/1.8
// }
// console.log(temperatur(32)); 

/*5 ci suall birlikde vee alinmadiiiii   :(  :(  :(   :(  :(  :(  :(  :(  :(   :(  :(  :(   :(  :(  :(   :(  :(  :(   :(  :(  :(   :(  :(  :(*/
// function temp(qaynama_temperaturu) {
//     function temperatur(faranheyt){
//         return selsi=(faranheyt-32)/1.8
//     }
//     return temperatur(qaynama_temperaturu)
// }
// console.log(temp(4));
// console.log(temperatur(7));



/*6 ci suallll  vee alinmadiiiii   :(  :(  :(   :(  :(  :(  :(  :(  :(   :(  :(  :(   :(  :(  :(   :(  :(  :(   :(  :(  :(   :(  :(  :(*/
// function ters (eded){
//     const terssetir=eded.toString().reverse();
//     return terssetir
// }
// console.log(ters(7476758));

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~OPERATORS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*###############################################################################################################################################*/


/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^1 ci sual^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
// setTimeout(()=>{
//     console.log("bes saniye bitti");

// },5000)

/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^2 ci sual^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

let num = 100

setInterval(() => {
    num--;

    if (num ==0) {                                   //alinmadii :(   :(  :(  :(  :(  :(  :(   :(  :(  :(   :(  :(  :(   :(  :(  
        console.log("geri sayim bitti");
                                                    
    }

}, 1000)

/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^3 cu  sual^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/


// let num =65.4345
// console.log(Math.round(num));

/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^4 cu  sual^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

// const a=Math.ceil(Math.random()*(10))
// console.log(a);

/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^5 ci sual^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/


// const date =new Date()
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());

/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6 ci sual^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

// const date = new Date()
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());


/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^7 ci sual^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
const date =new Date('2025,11,12')
console.log(date.getDay())