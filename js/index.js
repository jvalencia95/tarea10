
class Alumno {
  constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
    this.codigo = codigo
    this.nombre = nombre
    this.nota1 = nota1
    this.nota2 = nota2
    this.nota3 = nota3
    this.nota4 = nota4
  }

  promedio() {
    return (this.nota1 * 0.15) + (this.nota2 * 0.20) + (this.nota3 * 0.25) + (this.nota4 * 0.40)
  }

  condicion() {
    let estado

    if (this.promedio() >= 12) {
      estado = "Aprobado"
    } else {
      estado = "Desaprobado"
    }
    alert(`Usted está ${estado}`)
  }

  obsequio() {
    if (this.promedio() > 17) {
      alert("Se le obsequia una mochila")
    } else {
      alert("No recibe ningún obsequio")
    }
  }
}


const alumno1 = new Alumno(132, "Pepe", 12, 16, 19, 12)
alumno1.promedio()
alumno1.condicion()
alumno1.obsequio()

console.log(alumno1)

