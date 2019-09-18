/**
 * PAYEE FACTORY SCHEMA
 * Mirage automatically uses the Ember model. Refer ember model for data stubs
 * Fake data generated by faker
 * https://github.com/marak/Faker.js/
 * https://rawgit.com/Marak/faker.js/master/examples/browser/index.html
 * https://emberigniter.com/mock-json-api-backend-with-mirage/
 */
import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  // Generate some fake data for mocking, testing & development
  number() { return faker.random.number(); },
  name() { return faker.company.companyName(); },
  image() { return faker.internet.avatar(); },
  website() { return faker.internet.url(); },
  description() { return faker.lorem.paragraph(); },
  transactions() { return faker.random.number(8, 3432); },
  spend() { return faker.finance.amount(10, 100000, null, 0); },

  afterCreate(payee, server) {
    server.createList('alias', 3, { payee });
  }

});
