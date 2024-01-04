const persona = {
    name: 'Angie',
    apellido: 'Cohen',
    getFullName(){
        return this.name +' '+ this.apellido
    }
}




console.log(persona.getFullName());