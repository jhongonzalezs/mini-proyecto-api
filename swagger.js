const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Superheroes API',
            version: '1.0.0',
            description: 'API to retrieve details about superheroes, including their powers, weaknesses, and images.',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: 'Local server',
            },
        ],
    },
    apis: ['./routes/superheroes.js'], // Ruta a los archivos que contienen anotaciones de Swagger
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
