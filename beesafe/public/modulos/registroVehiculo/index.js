function enviar() {
    let datos = ['nombre', 'placaVehi', 'modelo','anno', 'marca_vehiculo'];
    let valores = {};
    let aprobado = false;
    for (let dato of datos){
        valores[dato] = document.getElementById(dato).value;
    }
    for (let i in valores){
        if (valores[i] == "" ){
            alert("Debe completar todos los campos de manera correcta");
            aprobado = false;
            break
        }
        else{
            (console.log("enviado"))
            aprobado = true
        }
    }
    if (aprobado){
        const formData = new FormData();
        formData.append('nombre', document.getElementById('nombre').value);
        formData.append('placaVehi', document.getElementById('placaVehi').value);
        formData.append('modelo', document.getElementById('modelo').value);
        formData.append('anno', document.getElementById('anno').value);
        formData.append('marca_vehiculo', document.getElementById('marca_vehiculo').value);
       
        fetch("http://localhost:5252/registroVehiculo/insertar", {     
            method:"POST",
            body: formData,       
            body: JSON.stringify(valores),
            headers: {
                'Content-Type': 'application/json'
            }
        })     .then(function(data){
            return data.json()
        })
        .then(function(res){
            console.log(res)
        })
        .catch(function(err){
            console.log(err)
        })

}
}
