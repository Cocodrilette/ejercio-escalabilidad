/**
 * Desafío de Escalabilidad: Contar Likes
 *
 * Descripción:
 * Tienes una plataforma de redes sociales donde cada usuario puede dar "likes" a publicaciones.
 * Tu trabajo es escribir una función que calcule el total de likes de un conjunto de publicaciones.
 *
 * Tienes que completar la función `countLikes(posts)` para que devuelva el número total de likes de todas las publicaciones.
 *
 * Pasos:
 * 1. Implementa la función `countLikes(posts)`.
 * 2. Usa los datos generados automáticamente para probar con diferentes cantidades de publicaciones.
 * 3. Mide el tiempo que tarda en ejecutarse para diferentes cantidades de posts.
 *
 * Ejemplo de entrada:
 * const posts = [{ id: 1, likes: 10 }, { id: 2, likes: 5 }];
 * console.log(countLikes(posts)); // Resultado esperado: 15
 *
 * Prueba con:
 * - 10 publicaciones
 * - 1,000 publicaciones
 * - 1,000,000 publicaciones
 */

// NO DEBES MODIFICAR ESTA FUNCION
// Generar un array de publicaciones con likes aleatorios
function generatePosts(numPosts) {
    let posts = [];
    for (let i = 1; i <= numPosts; i++) {
      posts.push({ id: i, likes: Math.floor(Math.random() * 100) }); // Likes aleatorios entre 0 y 99
    }
    return posts;
  }
  
  // NO DEBES MODIFICAR ESTA FUNCION
  // Medir el rendimiento de la función
  function measurePerformance(numPosts) {
    const posts = generatePosts(numPosts);
  
    console.log(`\nCalculando total de likes para ${numPosts} publicaciones...`);
  
    const start = performance.now();
    const totalLikes = countLikes(posts); // Aquí se llama a la función que el estudiante debe completar
    const end = performance.now();
  
    console.log(`Total de likes: ${totalLikes}`);
    console.log(`Tiempo de ejecución: ${(end - start).toFixed(2)} ms`);
  }
  
  // COMPLETA ESTA FUNCION
  // Función incompleta para que los estudiantes la completen
  function countLikes(posts) {
    // Instrucción: Sumar el número total de likes en todas las publicaciones.
  
    let totalLikes = 0; // Inicializa el contador de likes
    // Recorrer el array de posts y sumar los likes de cada uno de la forma más eficiente posible
  
    return totalLikes; // Debería devolver el número total de likes
  }
  
  // Pruebas de rendimiento
  measurePerformance(10); // Prueba con 10 publicaciones
  measurePerformance(1000); // Prueba con 1,000 publicaciones
  measurePerformance(1000000); // Prueba con 1,000,000 publicaciones
  