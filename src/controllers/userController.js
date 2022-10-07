const userModel = require('../models/userModel');
const roleModel = require('../models/roleModel');
const visitModel = require('../models/visitModel');
const { responseMessage, statusCode } = require("../utils/response");
const { Model } = require('objection');
const knex = require('knex')
const fs = require('fs');
const path = require('path');
const {  exportReportData } = require("../utils/exportData");




class User extends Model{

    async removeOldFiles() {
        return fs.readdir(`./public/uploads`, async (err, files) => {
            files.forEach((file) => {
                if (path.extname(file).toLocaleLowerCase() === '.xlsx') {
                    const stats = fs.statSync(`./public/uploads/${file}`)
                    fs.unlinkSync(`./public/uploads/${file}`)
                    // if (moment(stats.mtime).add(1, 'day').format('L') < moment().format('L')) {
                    // 	fs.unlinkSync(`./public/uploads/${file}`)
                    // }
                }
            })
        })
    }
    async addUser(req, res, next) {
        try {
            console.log('req', req.body)
            const addRole = await userModel.query().insert(req.body)
            .then(data => {
                return responseHelper.success(res, responseMessage.roleMessage.roleCreate, data);
            })
            
        } catch (error) {
            if (error) return responseHelper.error(res, error, {}, 400);
        }
    }

    async editUser(req, res, next) {
        try {
            
            let result = await userModel.query()
            .findById(req.params.id)
            .patch(req.body)
            .then(data => {
                return responseHelper.success(res, responseMessage.roleMessage.roleUpdate, data);
            })
            
        } catch (error) {
            if (error) return responseHelper.error(res, error, {}, 400);
        }
    }

    async listUser(req, res, next) {
        try {
            
            let result = await userModel.query()
            .join('roles', 'users.role_id', '=', 'roles.id')
            .join('capabilities' ,'roles.capability_id', '=' ,'capabilities.id')
            .join('capability_lists' , 'capabilities.capability_list_id' ,'=', 'capability_lists.id')
            .select('users.id', 'users.name','roles.role' , 'capability_lists.name as module', 'capabilities.name as permission' )            
            .then(users => {                
                return responseHelper.success(res, responseMessage.roleMessage.roleList, users);
            })            
            
        } catch (error) {
            
            if (error) return responseHelper.error(res, error, {}, 400);
        }
    }
    async deleteUser(req, res, next) {
        try {
            
            let result = await userModel.query()
            .deleteById(req.params.id)            
            .then(data => {
                return responseHelper.success(res, responseMessage.roleMessage.roleDelete, data);
            })
            
        } catch (error) {
            if (error) return responseHelper.error(res, error, {}, 400);
            
        }
    }

    async viewUser(req, res, next) {
        try {
            
            let result = await userModel.query()
            .findById(req.params.id)            
            .then(data => {
                return responseHelper.success(res, responseMessage.roleMessage.roleUpdate, data);
            })
            
        } catch (error) {
            
        }
    }

    async visitsReport(req, res, next) {
        try {
            // this.removeOldFiles();

            let headerList = ["S No", "new", "repeat", "slabsTagged", "slabsReleased"];
            let reportList = {
                "newCount" : await visitModel.query()
            .select('user_id', 'count(user_id)')
            .where('created_at' ,'=', 'CURDATE()' )
            .groupBy('COUNT(user_id)' ,'=', '1'),

                "repeatCount" : await visitModel.query()
            .select('user_id', 'count(user_id)')
            .where('created_at' ,'>=', 'CURDATE()' )
            .groupBy('COUNT(user_id)' ,'=', '1')
            }
           return reportList

           
            
            
        } catch (error) {
            throw error
            // if (error) return responseHelper.error(res, error, {}, 400);
        }
    }

}


module.exports = new User();
