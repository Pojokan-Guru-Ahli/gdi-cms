module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'zHBXQGZ9mwCGrLMoApjioyX1AksGYN4hAMcVUTB7PyG8hv+BnrTq1ThuoRrtYlcAbidjVNxKgwynKnMRBMq3Rw=='),
    },
  },
});
