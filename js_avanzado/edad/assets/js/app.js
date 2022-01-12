let year_now=2022;
let year_born;
let actual_age = document.getElementById("year");
function edad() 
{
    let opcion = prompt("Introduzca su año de nacimiento:", "2022");
    if (opcion == null || opcion == "") {
        actual_age.textContent = "Has cancelado o no has introducido el año";
    } 
    else {
        year_born = opcion;
        actual_age.textContent = 'Tu edad actual es '+ (year_now - parseInt(year_born)) + ' años';;
    }
}
