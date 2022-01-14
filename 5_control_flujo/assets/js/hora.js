/*
    Oscar Sosa G.
    12/01/2022
    Programa que entrega saludo dependiendo
    la hora ingresada al prompt
*/
let hora = document.getElementById("hour");

function hora1() 
{
    let opcion = parseInt(prompt("Introduzca la hora actual:", "0"));
    if (opcion == null || opcion >=24 || opcion<0) {
        hora.textContent = "Has cancelado o has introducido una hora erronea";
    } 
    else {
        if(opcion >=0 && opcion<6 )
        {
            hora.textContent = 'Dejen dormir';
        }
        else{
            if(opcion>=6 && opcion<12 )
            {
                hora.textContent = 'Buenos dias';
            }
            else{
                if(opcion>=12 && opcion<19 )
                {
                    hora.textContent = 'Buenas tardes';
                }
                else{
                    if(opcion>=19 && opcion<24 )
                    {
                        hora.textContent = 'Buenas noches';
                    }
                }
            }
        }
    }
}
