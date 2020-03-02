// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
import { Model } from 'objection';
import { Application } from '../declarations';

class posts extends Model {
  created_at!: string;
  updated_at!: string;

  static get tableName() {
    return 'posts';
  }

  // JSON schema for validation
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title'],

      properties: {
        title: { type: 'string' }
      }
    };
  }
}

export default function (app: Application) {
  return posts;
}
