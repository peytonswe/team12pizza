import express from '../node_modules';
import mysql from '../node_modules';

class modifyPage {
    constructor() {
        this.first_name = '', this.last_name = '', this.list = '', this.address = '', this.phone = '', this.amount = '';
    this.app = express();
    this.app.use(express.static('D:\\telegram_bot\\pages'));
    this.app.use(express.static('D:\\telegram_bot\\styles'));
    this.app.use(express.static('D:\\telegram_bot\\js'));
    this.app.set('views', 'D:\\telegram_bot\\controller');
    this.app.set('view engine', 'jade');

    this.app.get('/', function (req, res) {

        let connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "cfvgbh",
            database: "pizzeria"
        });

        res.setHeader('Content-Type', 'text/html');
        connection.connect(function (err) {
        });

        connection.query('SELECT * FROM orders ORDER BY id DESC LIMIT 1', function (err, rows, fields) {
            for (i = 0; i < rows.length; i++) {
                this.first_name = rows[i].first_name;
                this.last_name = rows[i].last_name;
                this.list = rows[i].list;
                this.address = rows[i].address;
                this.phone = rows[i].phone;
                this.amount = rows[i].amount;
            }
            res.render('index', {
                first_name: this.first_name,
                last_name: this.last_name,
                list: this.list,
                address: this.address,
                phone: this.phone,
                amount: this.amount
            });
            res.end();
        });
    });
}
}
let modifyPageHtml;
export default modifyPageHtml = new modifyPage();
