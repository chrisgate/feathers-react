// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
import { Model } from 'objection';
import { Application } from '../declarations';

class users extends Model {
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['password'],

      properties: {

        email: { type: ['string', 'null'] },
        password: { type: 'string' },

      }
    };
  }
}

export default function (app: Application) {
  return users;
}
