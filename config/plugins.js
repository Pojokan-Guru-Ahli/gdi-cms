module.exports = ({
  env
}) => ({
  email: {
    provider: 'amazon-ses',
    providerOptions: {
      key: env('AWS_SES_KEY'),
      secret: env('AWS_SES_SECRET'),
      amazon: env('AWS_SES_ENDPOINT_URL'),
    },
    settings: {
      defaultFrom: env('AWS_SES_EMAIL_FROM'),
      defaultReplyTo: env('AWS_SES_EMAIL_REPLY_TO'),
    },
  },
});
