# Usa la imagen oficial de Nginx como base
FROM nginx

# Copia tu archivo HTML al directorio de contenido por defecto de Nginx
COPY index.html /usr/share/nginx/html

# Exponer el puerto 80 para que pueda ser accesible desde fuera del contenedor
EXPOSE 80

# Comando para iniciar Nginx cuando se inicie el contenedor
CMD ["nginx", "-g", "daemon off;"]