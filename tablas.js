// Selecciona el contenedor donde se mostrarán las tablas 
const contenedor = document.getElementById("tabla");

// Recorre solo los números 6 y 7 para generar sus tablas
for (let i = 6; i <= 7; i++) {
  // Crea un contenedor tipo tarjeta para esta tabla
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  // Agrega el título de la tabla
  const titulo = document.createElement("h3");
  titulo.textContent = `Tabla del ${i}`;
  tarjeta.appendChild(titulo);

  // Agrega cada multiplicación de la tabla
  for (let j = 1; j <= 10; j++) {
    const linea = document.createElement("p");
    linea.textContent = `${i} x ${j} = ${i * j}`;
    tarjeta.appendChild(linea);
  }

  // Agrega la tarjeta completa al contenedor principal
  contenedor.appendChild(tarjeta);
}