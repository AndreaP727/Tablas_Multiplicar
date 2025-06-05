const contenedor = document.getElementById("tablas");

for (let i = 8; i <= 10; i++) {
  const titulo = document.createElement("h3");
  titulo.textContent = `Tabla del ${i}`;
  contenedor.appendChild(titulo);

  for (let j = 1; j <= 10; j++) {
    const linea = document.createElement("p");
    linea.textContent = `${i} x ${j} = ${i * j}`;
    contenedor.appendChild(linea);
  }
}
