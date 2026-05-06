# Laboratorio 7 - Parte 1  
## Diferencias entre HTTP nativo y Express en Node.js

### Introducción
En Node.js existen diferentes formas de crear un servidor web. Una de ellas es utilizando el módulo nativo `http`, y otra es mediante el uso de frameworks como Express. En este laboratorio se usó el laboratorio anterior con  `http` y posteriormente se migró a Express, permitiendo identificar diferencias importantes.

### Uso de HTTP nativo
El módulo `http` es parte del núcleo de Node.js, pero requiere un manejo manual del servidor.

- Manejo manual de rutas con `if/else`
- Configuración manual de encabezados
- Uso de `JSON.stringify`
- Más código y menor legibilidad

Ejemplo:
```js
if (req.url === "/info") {
  res.writeHead(200, { "Content-Type": "application/json" })
  res.end(JSON.stringify(data))
}
```

### Uso de Express
Express simplifica la creación de servidores.

- Uso de `app.get()` para rutas
- Respuestas con `res.send` y `res.json`
- Código más limpio
- Mayor escalabilidad

Ejemplo:
```js
app.get("/info", (req, res) => {
  res.json(data)
})
```

### Comparación

- HTTP: más control pero más complejo  
- Express: más simple y organizado  

### Conclusión
Express permite desarrollar aplicaciones más rápido, con menos código y mejor estructura, mientras que `http` es útil para entender el funcionamiento interno de un servidor.
