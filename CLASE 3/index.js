
let numero=parseInt(prompt("ingresate un numerete"))

for(i=0;i=10;i++){
    numero=numero*2;
    
    if(numero>15){
        alert("quedo ya muy grande tu numero "+numero)
    
    break
    }
    alert("vamos bien a seguir multiplicando tu numero que ahora es: "+numero)
}


if(prompt("queres cambiar el numero (si/no)")=="si"){
    alert("lo hubieras pensado antes apreta f5")

}else{
    alert("igual ya terminó de todos modos")
}