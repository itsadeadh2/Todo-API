function HealthRoutes(
  HealthController,
) {
  return {
    register,
  };

  function register(app) {
    app.get('/health', HealthController.healthCheck);
  }
}
module.exports = HealthRoutes;
