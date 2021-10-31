# CREAR REDUCER

Una vez que tengo los archivos, tengo que añadirlos a un reducer. Este permitirá que pueda selecionar los archivos en un componente y mostrarlos en otro.

El flujo es el que sigue:

1. Tengo un listado en el componente FileExplorer
2. Pulsando en cualquiera de los items de ese componente, dicho item queda seleccionado
3. El item seleccionado queda expuesto en el FileContent

Es decir, 2 reducers:
1 -> guarda el listado
2 -> actualiza el archivo a mostrar

**Estado inicial**
Al no haber una especificación sobre cómo tiene que ser el estado inicial, supondré un listado de archivos y un fileContent vacio (quizás con un texto de "select any file to view here").

## Pasos a seguir

1. Crear un descripción de las acciones

   1. Listado
   2. Seleccionada

2. Crear los reducers necesarios
3. Implementar su lógica de funcionamiento en el front.
