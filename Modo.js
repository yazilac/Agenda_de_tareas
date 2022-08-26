
const btnSwitch = document.querySelector("#switch");
const Modo= document.querySelector(".mainCard");

export const modo =() => {
    let cambio = document.body.classList.toggle('dark');
    cambio = Modo.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    localStorage.setItem('Modo',cambio);
}
const valor = localStorage.getItem('Modo');
if(valor == "true"){
    document.body.classList.add('dark');
    Modo.classList.add('dark');
    btnSwitch.classList.remove('active');
}else if(valor == "false"){
    document.body.classList.remove('dark');
    Modo.classList.remove('dark');
    btnSwitch.classList.add('active');
}