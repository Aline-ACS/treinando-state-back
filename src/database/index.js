import Sequelize from 'sequelize';
import 'dotenv/config';
import databaseConfig from '../config/database';

import Brand from '../app/models/Brand';
import Product from '../app/models/Product';

const models = [Brand, Product];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    console.log('iniciou o banco');

    this.connection = new Sequelize(process.env.DATABASE_URL, databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new DataBase();
