// Selecciona el contenedor donde se mostrarán las tablas
const contenedor = document.getElementById("tabla");

// Recorre del 1 al 10 para generar cada tabla
for (let i = 1; i <= 3; i++) {
  // Crea un contenedor tipo tarjeta para esta tabla
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta"); // le puedes aplicar estilos con esta clase en CSS

  // Agrega el título de la tabla
  const titulo = document.createElement("h3");
  titulo.textContent = `Tabla del ${i}`;
  tarjeta.appendChild(titulo);

  // Agrega cada multiplicación de la tabla
  for (let j = 1; j <= 11; j++) {
    const linea = document.createElement("p");
    linea.textContent = `${i} x ${j} = ${i * j}`;
    tarjeta.appendChild(linea);
  }

  // Agrega la tarjeta completa al contenedor principal
  contenedor.appendChild(tarjeta);
}