window.cipher = {
  encode: (offset,text) => {
    /* Acá va tu código */

    let encodedWord="";
    let ascii2Alphabet=0
    
    for (let i=0; i<text.length; i++){
    
         let textInAscii= parseInt(text.charCodeAt(i))  //Convirtiendo text a código ASCII y pasandolo a número 

         if(textInAscii===32){
            ascii2Alphabet = 32;

         }else if (textInAscii >=97 && textInAscii<=122 ){
             
            ascii2Alphabet =(textInAscii-97+parseInt(offset))%26+97
         
         }else if (textInAscii >=65 && textInAscii<=90 ){
             
             ascii2Alphabet= (textInAscii-65+parseInt(offset))%26+65   //Convirtiendo el código ASCII de text a el alfabeto conocido  y aplicando el offset
         }
         
         encodedWord += String.fromCharCode(ascii2Alphabet);   //Concateno todas las letras de text y lo regreso a código ASCII
    
    }
    return encodedWord;
    },


  decode: (offset,text) => {
    /* Acá va tu código */

    let decodedWord="";  
        let ascii2Alphabet=0                  
        
        for (let i=0; i<text.length; i++){
        
             
             let textInAscii= parseInt(text.charCodeAt(i))  //Convirtiendo text en código ASCII y pasandolo a número
             
             if(textInAscii===32){
                ascii2Alphabet=32;

             }else if (textInAscii >=97 && textInAscii<=122){
             
              ascii2Alphabet = (textInAscii-122-offset)%26+122  //Convirtiendo el código ASCII de text en el alfabeto conocido
             
            }else if (textInAscii >=65 && textInAscii<=90 ){

               ascii2Alphabet= (textInAscii-90-offset)%26+90
            }  
            
            decodedWord += String.fromCharCode(ascii2Alphabet);   //Concateno todas las letras de text en alfa conocido y convierto en ASCII
        
        }
        return decodedWord;
       
        }
};
