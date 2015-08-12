/**
* User.js
*
* @description:: Created by terminal command:
*   sails generate model user username:string photo:string email:string
* @docs       :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true,
    },

    photo: {
      type: 'string',
    },

    email: {
      type: 'string',
    },
  },
};

