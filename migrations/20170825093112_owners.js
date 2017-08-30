exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('owners', (table) => {
    table.increments('id')
    table.string('name')
    table.string('address')
    table.integer('phone')
    table.integer('postCode')
    table.string('email')
    table.string('lat')
    table.string('lng')
    table.integer('user_id').unique().notNullable()
  })
};

//user_id unique has to be entered or given via token and can not be null

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('owners')
};
