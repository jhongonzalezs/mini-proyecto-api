const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

const app = express();
const superheroesRoutes = require('./routes/superheroes');

// Middleware para parsear JSON
app.use(express.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas de superhéroes
app.use('/api/superheroes', superheroesRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}/api/superheroes`);
    console.log(`API documentation running on port http://localhost:${PORT}/api-docs`);
});
