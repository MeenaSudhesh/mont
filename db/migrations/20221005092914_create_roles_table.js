exports.up = function(knex) {
    return knex.schema
      .createTable('roles', function (table) {
        table.increments('id');
        table.string('role', 255).notNullable();       
        table.timestamps();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('roles');
  };