const defaultJwtOptions = { expiresIn: '1h' };

module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'e145bcdb-ed05-4bb8-9857-a26c5522de62'
};