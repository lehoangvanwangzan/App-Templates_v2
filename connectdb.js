var sql = require('mssql');

var config ={
    user: 'sa',
        password: 'Admin@123',
        server: '10.95.14.203', 
        database: 'KhaiBaoThueBao',
        synchronize: true,
        trustServerCertificate: true
};

     const conn = new sql.ConnectionPool(config).connect().then(pool => {
        return pool;   
    }
   ).catch((error) =>{
    console.log('DB not connected successfully', error);
   })
module.exports = {
    conn: conn,
    sql : sql
}
// module.exports = () => {
//     return new Promise((resolve, reject) =>{
//         const con = sql.ConnectionPool(config);
//         con.connect((err) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(con);
//         }).then( )
//     })
// }