// const roles = Model.Roles;
const { roleMessage } = require('../utils/response/responseMessage');
const { Model } = require('objection');
const knex = require('../../db/knexfile')
const User = require('./userModel')

Model.knex(knex)

class Visits extends Model {
  static get tableName() {
    return 'visits';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id', 'user_id', 'date_time', 'slabs_tagged', 'slabs_released'],

      properties: {
	id: { type: 'integer' },	
	user_id: { type: 'number' },
	slabs_tagged: { type: 'number' },
	labs_released_id: { type: 'number' },
	
      }
    };
  }

  

 

}

module.exports = Visits;

































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


