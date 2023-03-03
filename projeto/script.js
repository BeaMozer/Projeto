import data from "./broken_database_2.json";

function substituiCaracteresMarcas () {
    return data.map ((marca) => {
        marca.marca = marca.marca
        .replace(/æ/g, "a")
        .replace(/ø/g, "o");
        return marca
    });
} 

const marcasModificadas = substituiCaracteresMarcas()
console.log(marcasModificadas)


// const lerArquivosJson = () => {

//     //json 1
//     fetch("./broken_database_1.json")
//      .then(response => {
//         return response.json()
//      })
//      .then(jsondata => console.log(jsondata))
    
//      //json 2
//      fetch("./broken_database_2.json") 
//     .then(response => {
//         return response.json()
//     }).then(jsondata => console.log(jsondata))
    
    
// }