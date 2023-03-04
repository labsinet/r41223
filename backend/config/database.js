import { Sequelize } from 'sequelize';
 
const db = new Sequelize('newdb', 'root', 'usbw', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
 
export default db;
