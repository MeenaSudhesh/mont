// const roles = Model.Roles;
const { roleMessage } = require('../utils/response/responseMessage');
const { Model } = require('objection');
const knex = require('../../db/knexfile')

Model.knex(knex)

class Role extends Model {
  static get tableName() {
    return 'roles';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['role'],
      properties: {
      id: { type: 'integer' },	
      role: { type: 'string', minLength: 1, maxLength: 255 },
	
      }
    };
  }

  static get relationMappings() {
    const User = require('./userModel')

      return {
          roles: {
              relation: Model.HasManyRelation,
              modelClass: User,
              join: {
                  from: 'roles.id',
                  to: 'roles.role_id'
              }
          }
      }
  }

 

}

module.exports = Role;

































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


