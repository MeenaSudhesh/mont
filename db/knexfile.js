module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "mont",
  },
  migrations: {
          directory: __dirname + '/db/migrations'
        },
        seeds: {
          directory: __dirname + '/db/seeds'
        },
  useNullAsDefault : true,
  debug: true

};

// require('dotenv').config();

// // console.log("env",process.env);
// module.exports = {
//   development: {
//     client: process.env.DB_CLIENT,
//     connection: {
//       host: process.env.DB_HOST,
//       user: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_DATABASE
//     },
//     migrations: {
//       directory: __dirname + '/db/migrations'
//     },
//     seeds: {
//       directory: __dirname + '/db/seeds'
//     }
//   }
// };
