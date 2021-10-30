# Filemanager

Se quiere crear un pequeño programa que maneje archivos provistos por una API. La API y la infraestructura están resultas: necesitamos crear un front que acceda y muestre los archivos.

## Acceso a los archivos

1. Para acceder a los archivos, tenemos que contenctarnos a la API vía `file/api` y realizar una petición GET
   1. Los archivos son solo de lectura, por lo que no necesitamos generar otras urls de modificación o eliminación.
