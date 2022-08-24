

export const uniqueDates = (tasks) =>{
    const unique = []; // almacedando las fechas

    tasks.forEach((task)=> {
        if(!unique.includes(task.dateFormat)){
            unique.push(task.dateFormat); // validando si existe fechas iguales
        };
    })
    return unique; //retorna el arrglo
}
//funcion para ordedar fechas
export const orderDates = (dates) =>{
    return dates.sort((a,b)=>{
        const firstDate = moment(a,"DD/MMM/YYYY");
        const secondDate = moment(b,"DD/MMM/YYYY");
        return firstDate - secondDate;
    });
}