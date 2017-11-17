// Update with your config settings.
const path = require('path')


module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/harrypotter',
    migrations:{
      directory: path.join(__dirname, 'data', 'migrations')
    },
    seeds:{directory: path.join(__dirname, 'data', 'seeds')

    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations:{
      directory: path.join(__dirname, 'data', 'migrations')
    },
    seeds:{directory: path.join(__dirname, 'data', 'seeds')

    }
  }
};
