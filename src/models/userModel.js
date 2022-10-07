// const roles = Model.Roles;
const { roleMessage } = require('../utils/response/responseMessage');
const { Model } = require('objection');
const knex = require('../../db/knexfile')
const Role = require('./roleModel')

Model.knex(knex)

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email', 'role_id'],

      properties: {
	id: { type: 'integer' },	
	name: { type: 'string', minLength: 1, maxLength: 255 },
	email: { type: 'string', minLength: 1, maxLength: 255 },
	role_id: { type: 'number' },
	
      }
    };
  }

  static get relationMappings() {

      return {
          roles: {
              relation: Model.HasManyRelation,
              modelClass: Role,
              join: {
                  from: 'users.role_id',
                  to: 'roles.id'
              }
          }
      }
  }

 

}

module.exports = User;

































// class userModel {
    
// async addRole(data) {
//     try{
//         console.log('data', data.role)

//         let result = await knex('roles').insert(
//             { role: 'John' }
                   
//                 );
//         console.log('result', result)

//                 return result;
//             }
            

//     catch(error){
//         console.log('error', error)
//         }
// }

// async editRole(data) {
//     try{
//         const userId = req.params.id
//         const props = req.body.user

//         let result = await knex(userId, props);
//                 return result;
//             }            

//     catch(error){

//         }
// }

// async listRole() {
//     try{
//         console.log('list')
//         let result = await knex('roles').findAll();
//         console.log('result', result)

//                 return result;
//             }
            

//     catch(error){

//         }
// }

// async deleteRole(data) {
//     try{
//         let result = await knex('roles').destroy(req.params.id);
//                 return result;
//             }
            

//     catch(error){

//         }
// }

// async viewRole(data) {
//     try{
//         let result = await knex('roles').findById(req.params.id);
//                 return result;
//             }
            

//     catch(error){

//         }
// }

// }

// module.exports = new userModel();


