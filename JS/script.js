

/*document.querySelector(".input-in").addEventListener("keyup", function(){
    this.value = this.value.replace(/[^\d]/g, "");
}); //не дает возможность ничего записать, кроме цифр*/

/*function ras() {
        let a = inputIn.value; // сторона куба
        var Sgran = a * a; // площадь грани
        if(Sgran==0)
        {alert("Заполните поле");}
        else {
        document.getElementById("Sgran").innerHTML = Sgran;

        var Spoverh = Sgran * 6; // площадь полной поверхности
        document.getElementById("Spoverh").innerHTML = Spoverh;

        var Ob = a * a * a; // объем
        document.getElementById("Ob").innerHTML = Ob; 
    }   
}*/
document.querySelector('.button1').addEventListener('click', ()=>{
    let double a = document.querySelector('.input-in').value;
    if(a == ""){
        {alert("Заполните поле!");}
    }
    else if(a < 0 ){
        {alert("Длина ребра меньше 0!");}
    }
    else{
        var Sgran = a * a;
        document.getElementById("Sgran").innerHTML = Sgran;

        var Spoverh = Sgran * 6;
        document.getElementById("Spoverh").innerHTML = Spoverh;

        var Ob = a * a * a;
        document.getElementById("Ob").innerHTML = Ob; 
    }
});

document.querySelector('.button2').addEventListener('click', (event) => {
    document.querySelector('.input-in').value ="";
    document.getElementById("Sgran").innerHTML = "";
    document.getElementById("Spoverh").innerHTML = "";
    document.getElementById("Ob").innerHTML = "";
}); 
