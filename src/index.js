/* Acá va tu código */

const buttonEncode = document.getElementById("buttonEncode");
buttonEncode.addEventListener( "click", () =>{

    const offset =document.getElementById("offset");
    const letters =document.getElementById("letters");

    let valueOffset= offset.value;
    let valueLetters= letters.value;

    let valueParse=parseInt(valueOffset);

    if(valueParse<1){

     document.getElementById("errorOffset").innerHTML="Por favor ingresa números positivos"; 

    }else{

    document.getElementById("result").innerHTML = cipher.encode(valueParse,valueLetters);
    }


  })


const buttonDecode =document.getElementById("buttonDecode");
buttonDecode.addEventListener("click", () => {
    
  const offset =document.getElementById("offset");
  const letters =document.getElementById("letters");

  let valueOffset= offset.value;
  let valueLetters= letters.value;

  let valueParse=parseInt(valueOffset);


  if(valueParse<1){

    document.getElementById("errorOffset").innerHTML="Por favor ingresa números positivos"; 

   }else{


  document.getElementById("result").innerHTML = cipher.decode(valueParse,valueLetters);
   }

})

const buttonClean =document.getElementById("buttonClean");
buttonClean.addEventListener("click", () => {
    
  document.getElementById("result").innerHTML = "";
  document.getElementById("offset").value = "";
  document.getElementById("letters").value = "";
  document.getElementById("errorOffset").innerHTML = "";

});