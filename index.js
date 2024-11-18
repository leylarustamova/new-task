

/*###############################################################################################################################################*/


/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^1 ci sual^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
// setTimeout(()=>{
//     console.log("bes saniye bitti");

// },5000)

/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^2 ci sual^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

// let num = 100

// setInterval(() => {
//     num--;

//     if (num ==0) {                                   //alinmadii :(   :(  :(  :(  :(  :(  :(   :(  :(  :(   :(  :(  :(   :(  :(  
//         console.log("geri sayim bitti");
                                                    
//     }

// }, 1000)

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


/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^7 ci sual^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
// const date =new Date('2025,11,12')
// console.log(date.getDay())


/*#######################################################ARRAY #################################################*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++1 ci sual++++++++++++++++++++++++++++++++++++++++++++++++++++*/


// let levazimat = ['kitab', 'defter', 'qelem', 'pozan']
// let newarray=levazimat.splice(2,1,'jurnal','karandas')
// console.log(newarray);

// 2 ci cehddd 1 ci alinmadi----------------------------------------------------------------------------------

// let levazimat = ['kitab', 'defter', 'qelem', 'pozan']
// let element =levazimat.indexOf('qelem');
// levazimat.splice(element,1,'jurnal','karandas')
// console.log(levazimat);






/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++2 ci sual++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// let eded =[2,5,32,12,6]

// for (let i=0;i<eded.length;i++) {
    
//     if (eded[i]%2==0) {
//         console.log("eded cut ededdir");
        
        
//     }
//     else{
       
//         console.log("eded tek ededdir")
//     }
    
// }

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++3 cu sual++++++++++++++++++++++++++++++++++++++++++++++++++++*/


const array =[-23,5,34,3,-3,0]
function musbet(eded) {
    return eded > 0;
}


function vur2(eded) {
    return eded * 2;
}



const result=array.filter(musbet)
console.log(result);


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++4 cu sual++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// let command ="cancel"

// switch (command) {
//     case 'save':
//         console.log("yadda saxlandi")

        
//         break;

//     case 'cancel':
//         console.log("cixildi")
//         break;

//     case 'update':
//         console.log("deyisiklikler yadda saxlandi")
//         break;
//     default:
//         console.log("daxil etdiyiniz command yoxdur")
//         break;
// }
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++5 ci sual++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// let array=[4,6,2,5,7]
// let newarray=array.map(i => i%2==0 ?'cut':'tek')
// console.log(newarray);


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++6 ci sual++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// let setir="abcfdeg"
// let array=setir.split('')
// console.log(array)


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++7 ci sual++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// let object_1={
//     cloud:'bulud',book:'kitab',juice:'meyve siresi'
// }

// let object_2={ 
//     phone:'telefon',window:'pencere'
// }

// let birlesmis= Object.assign(object_1,object_2);
// console.log(birlesmis)

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++8 ci sual++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// let meyve= [ 'alma','armud','heyva','ananas','erik']
// let array = meyve.split('').includes('a')
// console.log(array)
// alinmadi   :(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(