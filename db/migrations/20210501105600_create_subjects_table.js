exports.up = function(knex) {
    return knex.schema
        .createTable('subject', function (table) {
            table.increments('id');
            table.text('url').notNullable();
            table.text('title',).notNullable();
            table.dateTime('created_at').defaultTo(knex.fn.now());
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable('subject');
};
