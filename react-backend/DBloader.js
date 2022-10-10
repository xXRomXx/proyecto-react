// LECTURA DE ARCHIVOS UTILIZANDO EL FILE SYSTEM
// const fs = require('fs')
// let data = fs.readFileSync('./menu.json');
// console.log(data)
// let personas = JSON.parse(data)
// console.log(personas);

/**
 * 
 */

//ALTERNATIVA DOS DE LEER UN ARCHIVO JSON DIRECTAMENTE
// let jsonData = require('./menu.json')
// console.log(jsonData);
// console.log(typeof(jsonData));


//ESCRIBIR EN UN ARCHIVO JSON 


//let data = {
//   dishes: [
//        {
//          "id": 100,
//          "name": "Huevito con Catsup",
//          "price": 45,
//          "description": "Preparado con nuestro mejor salmón"
//        },
//        {
//          "id": 200,
//          "name": "Chilaquiles",
//          "price": 99,
//          "description": "Una especialidad Mexicana"
//        },
//        {
//          "id": 300,
//          "name": "Higado encebollado",
//          "price": 129,
//          "description": "Platillo típico mexicano"
//        },
//        {
//          "id": 400,
//          "name": "Tostada de Tinga",
//          "price": 25,
//          "description": "El mejor platillo del mundo mundial"
//        }
//      ]
//};
//
//let jsonData = JSON.stringify(data);
//
//console.log(jsonData);
//console.log(typeof(jsonData));
//
//fs.writeFile('./menu.json', jsonData, (error) =>{
//  if(error){
//      console.log(`Error: ${error}`);
//  }else{
//      console.log("Archivo generado correctamente")
//  }
//})
import {llamar} from "./prueba/index.js";
const data = llamar();

const fs = require("edit-json-file");
//import fs from 'fs';
let file = fs(`./menu.json`);
export function sobreEscribir (data) {
    console.log(typeof(data))
    console.log("SOBREESCRIBIENDO...")
    file.empty();
    console.log("Archivo vacio " + file.get());
    console.log(data);
    file.set(`./menu.json`, data);
    file.save();
    console.log(file.get());
//  let platillosNuevos = JSON.stringify(data)
//  
//  fs.writeFile('./menu.json', platillosNuevos, (error) =>{
//  if(error){
//      console.log(`Error: ${error}`);
//  }else{
//      console.log("Archivo modificado correctamente.")
//  }
//})
}

sobreEscribir(data);

// sobreEscribir(
//     {
//            dishes: [
//                 {
//                   "id": 100,
//                   "name": "Huevito con Catsup",
//                   "price": 45,
//                   "description": "Preparado con nuestro mejor salmón"
//                 },
//                 {
//                   "id": 200,
//                   "name": "Chilaquiles",
//                   "price": 99,
//                   "description": "Una especialidad Mexicana"
//                 },
//                 {
//                   "id": 300,
//                   "name": "Higado encebollado",
//                   "price": 129,
//                   "description": "Platillo típico mexicano"
//                 },
//                 {
//                   "id": 400,
//                   "name": "Tostada de Tinga",
//                   "price": 25,
//                   "description": "El mejor platillo del mundo mundial"
//                 }
//               ]
//         }
// )
// 