
<p align="center">
    <img align="center" src="https://github.com/victorFernandez173/victor-fernandez-accom/blob/main/public/images/logo.png?raw=true" height="100" />
</p>


# Prueba técnica full stack developer

#### Para realizar la prueba he recurrido a laravel, react y mysql como tecnologías claves del stack tanto por lo hablado en la entrevista como por mi mayor experiencia con ellas.

#### Además ya que se comentó en la entrevista que se usa la tecnología docker, he recurrido a la creación de mi proyecto con Laravel Sail (Docker)

Decisiones durante el desarrollo:

- He utilizado el sistema de autenticación breeze con inertia que es facil de implementar, dado el poco tiempo para llevar a cabo el proyecto. He aplicado su sistema tradicional de login para el acceso a la app con dos usuarios (ver abajo del todo las credenciales).
- Para los permisos de usuarios, he aplicado el reconocido sistema de permisos de spatie: con control de permisos tanto en el back como en el front: middleware, renderizado condicional en vistas...
- He tomado decisiones rápidas y prácticas en el diseño de tablas. Para la tabla de encuestas recurro a varios enum en lugar de por ejemplo, tinyint para los si/no...(mientras que los enum complican más la modificacion de la tabla, son más legibles y rápidos de procesar para un proyecto de prueba como este). Por otro lado solo he usado una tabla, una vez más por lo mismo, para agilizar el proceso, pero a mayor complejidad en los productos/opciones de las encuestas, estaría bien estudiar la posibilidad de más de una tabla...
- He anulado/comentado todas las rutas innecesarias del sistema de autenticación, limitandome a dejar funcional login/logout que es es basicamente lo necesario para el proyecto, además de las rutas necesarias claro.
- Por otro lado he construido todas las clases necesarias para orgnizar el proyecto de la forma más clara y estructurada posible: 
    - Rutas en fichero de rutas
    - Controladores con funciones y lógica en su correspondiente seccion por defecto y encapsulando las funciones de la manera mas estructurada posible
    - Request de validación aislado con lógica encapsulada para validación dni/nie, etc...
    - Para la bbdd he editado/creado las migraciones necesarias y los seeders correspondientes tanto para poblar las tablas de usuarios (se requieren al menos 2 usuarios) como las de permisos (para estas solo he creado dos roles)
    - Lo mismo para el front, con diferentes componentes y funcionalidades
    - Modelo Encuesta con la correspondiente configuración para el adecuado mapeado de sus datos


## instalación
#### como he comentado más arriba, para poder hacer funcionar el proyecto se requiere docker en el sistema
#### proceso llevado a cabo con ubuntu, terminal bash

1. Clona el proyecto (también puedes via ssh dada una configuración adecuada)
```
git clone https://github.com/victorFernandez173/victor-fernandez-accom.git
```
2. Acceder al directorio
```
cd <directorio-del-repositorio>
```
3. Instalar dependencias del proyecto
```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php84-composer:latest \
    composer install
```
4. Preparar variables de entorno
```
cp .env.example .env
```
5. Lanzar laravel sail (se puede almacenar un alias en el .bashrc para acortar estos comandos: https://laravel.com/docs/11.x/sail#configuring-a-shell-alias)
```
./vendor/bin/sail up
```
6. Genera una clave de app
```
./vendor/bin/sail artisan key:generate
```
7. Ejecutar migraciones (en mi caso tuve que modificar los puertos de mysql para el proyecto ya que yo en mi sistema tengo mysql server que ya usa el puerto 3306, dicha modificación la llevé a cabo en docker-compose.yml:
   - '${FORWARD_DB_PORT:-3307}:3306')
```
./vendor/bin/sail artisan migrate
``` 
8. Alimentar la base de datos
```
./vendor/bin/sail artisan db:seed
```
9. Instalar dependencias npm
```
./vendor/bin/sail npm install
```
10. Arrancar el entorno de desarrollo
```
./vendor/bin/sail npm run dev
```
11. Aceder a la app
```
http://localhost
```
12. Usuarios (email/password)
```
Todos los permisos: admin@accom.com/admin@accom.com
Permisos restringidos: employee@accom.com/employee@accom.com
```
