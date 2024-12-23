
<p align="center">
    <img align="center" src="https://github.com/victorFernandez173/victor-fernandez-accom/blob/main/public/images/logo.png?raw=true" height="100" />
</p>


# prueba técnica full stack developer

Proyecto propio sin ánimo de lucro y puramente didáctico de una web de cine responsiva con diferentes funcionalidades basada en laravel 11, vue 3 e inertia:

- Responsividad global para todos los tamaños de pantalla y estilos basada en tailwind y su sistema de clases.
- Login y registro de usuarios basado en breeze de laravel: contraseñas hasheadas, recuperación y modificación de contraseñas, envio de email de validación de cuenta...
- Sistema de control de eventos de laravel aplicado para envío de emails al: registrarse, validar cuenta o borrar cuenta.
- Uso de librerías Node variadas para diferentes funcionalidades:
    - jquery

Testeada y funcionando

Veamos algunas capturas:

<p align="center">
    <img align="center" src="https://github.com/victorFernandez173/filmXtra-vue/blob/main/public/screenshots/01.png?raw=true" height="400" />
    <br>Pantalla de bienvenida (escritorio)
</p>
<br>
<p align="center">
    <img align="center" src="https://github.com/victorFernandez173/filmXtra-vue/blob/main/public/screenshots/14.png?raw=true" height="50" />
    <br>Urls SEO friendly 
</p>
<br>
<p align="center">
    <img align="center" src="https://github.com/victorFernandez173/filmXtra-vue/blob/main/public/screenshots/02.png?raw=true" height="400" />
    <br>Pantalla de bienvenida con menú login desplegado (movil)
</p>
<br>
<p align="center">
    <img align="center" src="https://github.com/victorFernandez173/filmXtra-vue/blob/main/public/screenshots/03.png?raw=true" height="400" />
    <br>Pantalla de login (escritorio)
</p>


## instalación
### tienes que tener php, composer, npm y mysql
#### también puedes hacerlo mediante sail la solución basada en docker de laravel

1. Clona el proyecto (también puedes via ssh dada una configuración adecuada)
```
git clone https://github.com/victorFernandez173/filmXtra-vue.git
cd filmXtra-vue
```
2. Instalar composer dependencias
```
composer install
```
3. Instalar npm dependencias
```
npm install
```
4. Clona el .env.example
```
cp .env.example .env
```
5. Añade las variables necesarias para la configuración
   (te indico las más importantes para que la app funcione, puede que se me pase algo...):
    + DB_USERNAME para tu usuario de bbdd
    + DB_PASSWORD su clave
    + DB_DATABASE el nombre que quieras para la bbdd


6. Genera una clave de app
```
php artisan key:generate
``` 

7. Aplica los inserts (necesarios)
+ En el directorio /public encontraras inserts.sql
8. Arranca el servidor de desarrollo
```
php artisan serve
```
9. Arranca vite para que los assets se compilen en tiempo real
```
npm run dev
```
10. Aplica las migraciones
```
php artisan migrate
```
