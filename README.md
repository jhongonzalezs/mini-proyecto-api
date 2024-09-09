# API Superheroes

Esta API de superhéroes está desarrollada utilizando Express y documentada con Swagger. Permite obtener un listado de superhéroes y sus poderes

## Requisitos del Sistema

Antes de comenzar, asegúrate de que tu máquina cumple con los siguientes requisitos:

- **Sistema Operativo**: Windows, macOS, o Linux
- **Node.js**: Versión 12 o superior
- **npm**: Viene incluido con Node.js
- **Git**: Para clonar el repositorio

## Instalación de Herramientas

### 1. Instalar Node.js y npm

Si no tienes Node.js y npm instalados, puedes descargarlos e instalarlos desde el sitio oficial:

- [Descargar Node.js](https://nodejs.org/)

Para verificar la instalación, abre una terminal o consola de comandos y ejecuta:

```bash
node -v
npm -v
```

Clonar el Repositorio

Una vez que tengas las herramientas instaladas, clona el repositorio:

```bash
git clone https://github.com/jhongonzalezs/mini-proyecto-api.git
cd mini-proyecto-api
```

Instalación de Dependencias

En el directorio raíz del proyecto (donde se encuentra el archivo package.json), instala las dependencias necesarias ejecutando

```bash
npm install
node index.js
```


Documentación de la API con Swagger

La API está documentada con Swagger. Para acceder a la documentación, dirígete a:
Usage

    Get all superheroes
        Endpoint: /api/superheroes
        Method: GET

    Get a specific superhero
        Endpoint: /api/superheroes/:id
        Method: GET

