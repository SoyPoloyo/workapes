# workapes
Proyecto de Ing.Software Cenfotec

Todo se va dividir en 2 carpetas : app - public

En app vamos a encontrar el lado del servidor, todos los archivos de node
los servicios y los esquemas para conectar con mongoo

en public vamos a encontrar toda la parte visual de nuestro proyecto
esta se va a dividir de la siguiente forma: assets - modulos - index

assets: en esta carpeta vamos a encontrar todo lo que son img
 	y archivos extras relacionados al proyecto

modulos: en esta carpeta vamos a encontrar todo nuestro proyecto divido
	con esto me refiero a que vamos a separar cada caso de uso en una carpeta
	que va cumplir una funcion deacuerdo a su nombre, cada carpeta va a constar de
	un index.html - estilos.html - index.js   eso quiere decir que tiene todo lo
	necesario para funcionar de manera independiente

index : este va ser el index principal del proyecto, el inicio de la pagina
	donde va aparecer apenas la gente inicie y desde donde vamos a llamar
	a todos los modulos que hemos creado arriba

vamos a utilizar el formate de camelCasse para todas las carpetas
haciendo referencia a lo que es y despues a lo que hace, 
por ejemplo los registros : registroUsuarioClasico, registroUsuarioTradicional o otro ejemplo
como sesionUsuarioTradicional, sesionUsuarioClasico y asi susivamente con las demas carpetas

para iniciar el proyecto y con esto me refiero al "npm run dev" vamos hacerlo en 
beesafe/app   --> ya que recordemos que esta es la carpeta donde hemos instalado todo

