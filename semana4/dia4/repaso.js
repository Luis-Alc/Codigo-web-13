//** Filter es un bucle hermano de map, filter al igual que map retorna un array */


const mascotas = [
    {
        nombre: "Pug",
        edad: 15,
    },
    {
        nombre: "Gatito",
        edad: 2
    }
]

const mascotasEdadPar= mascotas.filter(mascotas => mascotas.edad % 2 === 0);
console.log("Mascotas con edad Par", mascotasEdadPar);

const cursos = ["HTML", "CSS", "JS"]



const arregloCursos = [
    {
      nombre: "React JS",
      tec: "JS",
    },
    {
      nombre: "django",
      tec: "Python",
    },
    {
      nombre: "Angular",
      tec: "JS",
    },
    {
      nombre: "Flask",
      tec: "Python",
    },
    {
      nombre: "Laravel",
      tec: "PHP",
    },
  ];

  const curso = ["JS", "python", "PHP"]

  //! Primera forma de bucle filter

  const cursosJs=arregloCursos.filter((curso)=>curso.tec==="JS")
  const cursosPython=arregloCursos.filter((curso)=>curso.tec==="Python")
  const cursosPhp=arregloCursos.filter((curso)=>curso.tec==="PHP")
  


  console.log(cursosJs);
  console.log(cursosPython);
  console.log(cursosPhp);







  //! segunda forma de bucle filter

const filterCursosTec = (arrayCursos, tecfiltro) => {
    return arrayCursos.filter((curso) => curso.tec === tecfiltro)
}

const cursoJS = filterCursosTec(arrayCursos, "JS")
const cursoPython = filterCursosTec(arrayCursos, "Python")
const cursoPHP = filterCursosTec(arrayCursos, "PHP")

console.log("Curso JS", cursoJS);
console.log("Curso Python", cursoPython);
console.log("Curso PHP", cursoPHP);