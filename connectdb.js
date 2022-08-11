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
});

module.exports = {
    conn: conn,
    sql : sql
}
