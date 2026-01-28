const express = require('express');
const path = require('path');
const app = express();

// Configuración externa: Puerto definido por variable de entorno o 3000 por defecto 
const PORT = process.env.PORT || 3000;

// Servimos los archivos desde la subcarpeta donde está tu index.html
app.use(express.static(path.join(__dirname, 'public/TresEnRaya')));

// Logs accesibles: Registro de cada petición en stdout 
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] Petición: ${req.method} en ${req.url}`);
    next();
});

app.listen(PORT, () => {
    console.log(`Servidor GGM Digital activo en puerto ${PORT}`);
});
