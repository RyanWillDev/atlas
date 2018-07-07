import { Client } from 'pg';

let client;

export const connect = () => {
  client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
  });

  client.connect(err => {
    console.log('An error occured');
    debugger;
  });
};

export const query = (q, values) => {
  return client.query(q, values);
};
