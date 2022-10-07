const userModel = require('../models/userModel');



class userServices {
    
    async addRole(params){

        try {

            let result = await userModel.addRole(params);

            return result;

        } catch (error) {
            
        }
    }

    async editRole(params){

        try {

            let result = await userModel.editRole(data);

            return result;

        } catch (error) {
            
        }
    }

    async listRole(){

        try {
            

            let result = await userModel.listRole();

            return result;

        } catch (error) {
            
        }
    }

    async deleteRole(params){

        try {

            let result = await userModel.deleteRole(data);

            return result;

        } catch (error) {
            
        }
    }

    async viewRole(params){

        try {

            let result = await userModel.viewRole(data);

            return result;

        } catch (error) {
            
        }
    }
}



module.exports = new userServices();
