exports.up = function(knex) {
    return knex.schema
      .createTable('users', function (table) {
        table.increments('id');
        table.string('name', 255);       
        table.string('email', 255);       
        table.string('password', 255);       
        table.integer('role_id', 11);       
        table.timestamps();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('users');
  };