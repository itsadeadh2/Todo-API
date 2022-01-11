function HealthController() {
  return {
    healthCheck,
  };

  function healthCheck(req, res) {
    return res.send({ message: 'I\'m okay c:' });
  }
}

module.exports = HealthController;
