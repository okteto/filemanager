# CONEXIÓN A LA API

Para acceder a los archivos, tengo que conectarme a la API vía `file/api` y realizar una petición GET
**OJO** Los archivos son solo de lectura, por lo que no necesitamos generar otras urls de modificación o eliminación.

## Pasos a seguir

1. Primero voy a usar Postman para testear que la conexión a la API es correcta

2. Voy a usar AXIOS para hacer un fetch de los datos, elijo esta librería porque ya la he usado anteriormente.

   1. Instalo axios
   2. Creo .env con las variables de entorno
   3. Creo carpeta utils para incluir axios y otras cosas útiles
   4. Creo carpeta utils > api para incluir las llamadas a la API, a priori tenemos una pero esto permite crecer al proyecto
   5. Creamos llamada en un componente para comprobar que se realiza y devuelve datos.

3. Añadir los datos en el reducer y comprobar su acceso
