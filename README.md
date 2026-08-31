# RiwiMediCare Plus - API

## Información del Coder

**Nombre:** [Valentina Pacheco]
**Clan:** [Node AM]

---

## Tecnologías utilizadas

* Node.js
* TypeScript
* Express.js
* PostgreSQL
* Sequelize
* JWT
* bcryptjs
* Joi
* Swagger / OpenAPI
* Docker
* Docker Compose

---

## Instructivo de Instalación

### 1. Clonar el repositorio

```bash
git clone [https://github.com/valentina27101/prueba-desempe-o-node.git]
```

Ingresar al proyecto:

```bash
cd prueba-nodeAM
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Configurar las variables de entorno

Crear un archivo `.env` en la carpeta del proyecto.

Ejemplo:

```env
PORT=3000

JWT_SECRET=343e16935fab5e7f226309ca40079e7a027a0444f1d157eb2bb8265a87fadb6f

DB_HOST=localhost
DB_PORT=5432
DB_NAME=technical_test
DB_USER=postgres
DB_PASSWORD=postgres
```

---

## Ejecución del proyecto

### Opción 1: Ejecución local

Después de instalar las dependencias y configurar el archivo `.env`, ejecutar:

```bash
npm run dev
```

La API estará disponible en:

```text
http://localhost:3000
```

### Opción 2: Ejecución con Docker

El proyecto cuenta con Docker Compose para ejecutar la aplicación y PostgreSQL.

Construir y levantar los contenedores:

```bash
docker compose up --build
```

Para ejecutarlos en segundo plano:

```bash
docker compose up --build -d
```

Para detener los contenedores:

```bash
docker compose down
```

---

## Seeders

Los seeders permiten cargar datos de prueba desde archivos JSON a la base de datos.

Antes de ejecutar los seeders, asegúrate de que la base de datos esté configurada y disponible.

Ejemplo de ejecución:

```bash
npm run seed
```

Si el proyecto utiliza un comando específico para cada archivo JSON, se pueden ejecutar de esta forma:

```bash
npm run seed:users
npm run seed:clinics
npm run seed:warehouses
npm run seed:medicines
```

Los archivos JSON utilizados para los datos de prueba se encuentran dentro de la carpeta:

```text
src/seeders/
```

> Si el proyecto utiliza un único seeder, ejecutar solamente `npm run seed`.

---

## Documentación de la API

La API cuenta con documentación mediante Swagger / OpenAPI.

Con el proyecto ejecutándose, ingresar a:

```text
http://localhost:3000/api/docs
```

Desde Swagger se pueden consultar y probar los endpoints disponibles.

---

## Autenticación

La API utiliza JWT para proteger los endpoints que requieren autenticación.

Primero se debe registrar un usuario:

```http
POST /auth/register
```

Después realizar login:

```http
POST /auth/login
```

El login devuelve un token JWT que debe utilizarse en las rutas protegidas.

En Swagger se puede utilizar el botón:

```text
Authorize
```

e ingresar:

```text
Bearer TU_TOKEN
```

---

## Funcionalidades principales

La API permite gestionar:

* Usuarios y autenticación.
* Roles de usuario.
* Clínicas.
* Almacenes (warehouses).
* Medicinas.
* Solicitudes de abastecimiento.
* Autenticación mediante JWT.
* Autorización mediante roles.
* Validación de datos.
* Persistencia de información en PostgreSQL.

---

## 🔗 Repositorio

**GitHub:** [https://github.com/valentina27101/prueba-desempe-o-node.git]


