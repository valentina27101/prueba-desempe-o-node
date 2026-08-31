import swaggerJSDoc from "swagger-jsdoc";

/**
 * OpenAPI specification for the API.
 */
export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RiwiMediCare Plus API",
      version: "2.0.0",
      description: "REST API for managing medical supply requests.",
    },
    servers: [
        { 
            url: "http://localhost:3000" 
        ,}
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/docs/*.ts"],
});