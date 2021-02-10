const connect = ({ dotenv,pg}) => {
    return async function conn() {
        dotenv.config()
        const { Pool } = pg
        const config = { 

            user:process.env.PGUSER,
            database:process.env.PGPASSWORD,
            password:process.env.PGDATABASE,
            port:process.env.PGPORT,
            host:process.env.PGHOST

        }
        const pool = new Pool(config)
        return pool;
    }
}
module.exports = connect