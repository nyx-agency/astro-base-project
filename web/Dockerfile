# Path: web/Dockerfile

# Utiliza una imagen base de Node.js versión 20
FROM node:20-slim

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencias del proyecto
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos del proyecto al contenedor
COPY . .

# Expone el puerto en el que tu aplicación se ejecutará
EXPOSE 3210

# Comando por defecto a ejecutar cuando se inicia el contenedor
CMD [ "npm", "run", "dev" ]
