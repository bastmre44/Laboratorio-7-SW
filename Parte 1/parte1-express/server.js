import express from 'express'
import path from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = 3000

// Ruta /api/student
app.get("/api/student", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "files", "datos.json")
    const texto = await fs.readFile(filePath, "utf-8")
    
    res.json(JSON.parse(texto))
  } catch (error) {
    console.error(error) 
    res.status(500).json({
      error: "Error leyendo el archivo"
    })
  }
})

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Servidor Express funcionando correctamente!')
})

// Ruta info
app.get('/info', (req, res) => {
  res.json({
    mensaje: 'Esta es la ruta de información',
    curso: "Sistemas y Tecnologías Web",
    tecnologia:"Express.js"
  })
})

// Ruta saludo
app.get("/saludo", (req, res) => {
  res.send("¡Hola, bienvenido a mi servidor Express!")
})

//status
app.get("/api/status", (req, res) => {
  res.json({
    ok: true,
    status: "Servidor funcionando correctamente",
    puerto: PORT
  })
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})