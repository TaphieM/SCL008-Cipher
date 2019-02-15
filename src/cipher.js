window.cipher = {
   encode: (offset,text) => {
     /* Acá va tu código */
 
     let encodedWord="";
     let ascii2Alphabet=0
     
     for (let i=0; i<text.length; i++){
     
          let textInAscii= text.charCodeAt(i)  //Convirtiendo text a código ASCII y pasandolo a número 
 
          if(textInAscii===32){
             ascii2Alphabet = 32;
 
            }else if (textInAscii >= 33 && textInAscii <=47){  //Rango caracteres especiales
          
               ascii2Alphabet = (textInAscii-33+offset)%15+33
            
            }else if (textInAscii >= 48 && textInAscii <=57){
              
               ascii2Alphabet = (textInAscii-48+offset)%10+48    //Rango números

            }else if (textInAscii >= 58 && textInAscii <=64){  
              
               ascii2Alphabet = (textInAscii-58+offset)%7+58    //caracteres especiales

            }else if (textInAscii >=65 && textInAscii<=90 ){ 
               
               ascii2Alphabet= (textInAscii-65+offset)%26+65    //letras mayusculas
          
            }else if (textInAscii >=91 && textInAscii<=96 ){ 

               ascii2Alphabet= (textInAscii-91+offset)%6+91 

            }else if (textInAscii >=97 && textInAscii<=122 ){  //letras minusculas 
              
             ascii2Alphabet =(textInAscii-97+offset)%26+97

            }else if (textInAscii >=123 && textInAscii<=126){

             ascii2Alphabet =(textInAscii-123+offset)%3+123

            }else if (textInAscii===209 || textInAscii===241){
              
              ascii2Alphabet = 241; 
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
         
              
              let textInAscii= text.charCodeAt(i)  //Convirtiendo text en código ASCII y pasandolo a número
              
              if(textInAscii===32){
                 ascii2Alphabet=32;
 
               }else if (textInAscii >= 33 && textInAscii <=47){  //Rango caracteres especiales
          
                  ascii2Alphabet = (textInAscii-47-offset)%15+47
               
               }else if (textInAscii >= 48 && textInAscii <=57){
                 
                  ascii2Alphabet = (textInAscii-57-offset)%10+57    //Rango números
   
               }else if (textInAscii >= 58 && textInAscii <=64){  
                 
                  ascii2Alphabet = (textInAscii-64-offset)%7+64    //caracteres especiales
   
               }else if (textInAscii >=65 && textInAscii<=90 ){ 
                  
                  ascii2Alphabet= (textInAscii-90-offset)%26+90    //letras mayusculas
             
               }else if (textInAscii >=91 && textInAscii<=96 ){ 
   
                  ascii2Alphabet= (textInAscii-96-offset)%6+96 
   
               }else if (textInAscii >=97 && textInAscii<=122 ){  //letras minusculas 
                 
                ascii2Alphabet =(textInAscii-122-offset)%26+122
   
               }else if (textInAscii >=123 && textInAscii<=126){
   
                ascii2Alphabet =(textInAscii-126-offset)%3+126
   
               }else if (textInAscii===209 || textInAscii===241){
                 
                 ascii2Alphabet = 241; 
               }  
             
             decodedWord += String.fromCharCode(ascii2Alphabet);   //Concateno todas las letras de text en alfa conocido y convierto en ASCII
         
         }
         return decodedWord;
        
         }
 };

 