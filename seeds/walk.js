
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('walk').del()
    .then(function () {
      // Inserts seed entries
      return knex('walk').insert([
        {location:"Nightingale Road", time: "12.30", status:"out", walker_id: 1, owner_id:1, dog_id:1}
      ]);
    });
};
