# Imagen base de Node.js
FROM node:18-alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalamos las librerías necesarias
RUN npm install

# Copiamos todo el proyecto (incluyendo la carpeta public)
COPY . .

# Exponemos el puerto para el acceso público [cite: 11]
EXPOSE 3000

# Comando de ejecución que permite al orquestador monitorizar el proceso 
CMD ["node", "server.js"]
