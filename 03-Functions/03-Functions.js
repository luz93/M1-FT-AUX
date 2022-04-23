function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
 // time 08:05:34AM
    
   // let tiMe = time.split(':')   hora = tiMe[0]  min = tiMe[1]
  
//    if ( 10 > time.length ) return false;   
   
//        //let hora = time[0] + time[1] // '0'+'8' = '08'
//        //let hora = time.slice(0, 2);  0 8 : 05:34AM
//                                //      0 1 2
//        let min = time.slice(3,5);
//        let seg = time.slice(6,8);
//        let amPM = time[8] + time[9];
//        //console.log(min);
//        if ( hora > 12 || min > 59 || seg > 59 ) return false;
//        if ( amPM === 'AM' ) {
//             // 12:12:31AM"-----"00:12:31"
//            if ( hora === '12') {
//                hora = '00';
//            }
//        } else {
//            //"03:15:00PM"-----"15:15:00"    +12
//            if ( hora < 12) {
//                 hora = parseInt(hora) + 12;
//            }       
//        }
//        console.log(hora);
//        return hora +':'+ min +':' + seg;
       
//---------------------------------------------
let hora = Number(time.slice(0,2))
return (hora>12 || Number(time.slice(3,5))>=60 || Number(time.slice(6,8))>=60 || time === "" || time.length!==10) ? false 
   : (time.slice(8,10) === 'AM' && hora===12) ? ('0'+(hora-12)+':'+time.slice(3,5)+':'+time.slice(6,8))
   : (time.slice(8,10) === 'AM' && hora<12 && hora>=0) ? (time.slice(0,2)+':'+time.slice(3,5)+':'+time.slice(6,8))
   : (time.slice(8,10) === 'PM' && hora===12) ? (time.slice(0,2)+':'+time.slice(3,5)+':'+time.slice(6,8))
   : (time.slice(8,10) === 'PM' && hora<12 && hora>=0) ? (hora+12+':'+time.slice(3,5)+':'+time.slice(6,8))
   : false;
}

module.exports = {
    timeConversion
}