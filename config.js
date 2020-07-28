module.exports = {
  mongodb: {
    uri: process.env.MONGO_URI,
  },
  crypto: {
    iterations: 1,
    length: 128,
    digest: 'sha512',
  },
  providers: {
    github: {
      app_id: process.env.GITHUB_APP_ID,
      app_secret: process.env.GITHUB_APP_SECRET,
      callback_uri: 'http://localhost:3000/oauth/github',
      options: {
        scope: ['user:email'],
      },
    },
    facebook: {
      app_id: process.env.FACEBOOK_APP_ID,
      app_secret: process.env.FACEBOOK_APP_SECRET,
      callback_uri: 'http://localhost:3000/oauth/facebook',
      options: {
        scope: ['email'],
      },
    },
    vkontakte: {
      app_id: 'vkontakte_app_id',
      app_secret: 'vkontakte_app_secret',
      callback_uri: 'http://localhost:3000/oauth/vkontakte',
      options: {
        scope: ['email'],
      },
    },
  },
  mailer: {
    user: process.env.MAILER_USER,
    password: process.env.MAILER_PASSWORD,
  },
}

