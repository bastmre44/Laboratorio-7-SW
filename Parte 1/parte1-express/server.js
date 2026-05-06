import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)})

//primera ruta 
app.get('/', (req, res) => {
    res.send('¡Servivor Express funcionando correctamente!');
})

//ruta info 
app.get('/info', (req, res) => {
    res.json({
        mensaje: 'Esta es la ruta de información',
        curso: "Sistemas y Tecnologías Web",
        tecnologia:"Express.js"
    })
})


//ruta saludo
app.get("/saludo", (req, res) => {
    res.send("¡Hola, bienvenido a mi servidor Express!")
})

