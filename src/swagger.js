const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Produtos',
      version: '1.0.0',
      description: 'API Node.js com PostgreSQL rodando no AKS'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Ambiente local'
      }
    ]
  },
  apis: ['./src/routes.js']
};

module.exports = swaggerJSDoc(options);