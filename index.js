require('dotenv').config() // Línea 1: Carga las variables del archivo .env
const http = require('http')

function requestController(req, res){
  // Aquí se manejan las peticiones HTTP
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bienvenidos al curso, ejecutandose en el puerto ' + process.env.PORT);
  console.log('Bienvenidos al curso')
}

const server = http.createServer(requestController)

const PORT = process.env.PORT // Línea 10: Obtiene el puerto de las variables de entorno

server.listen(PORT, function(){
  console.log("Aplicacion corriendo en: " + PORT)
})