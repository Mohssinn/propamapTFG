"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function add(n1, n2) {
    return n1 + n2;
}
console.log('Hola Mundo!');
console.log(`El resultado es: ${add(2, 2)}`);
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/hello', (req, res) => {
    console.log('Llega una peticion de Hello World!!');
    res.send('Hello World!');
});
app.post('/add', (req, res) => {
    console.log(req);
    //const body = JSON.parse(req.body)
    const n1 = req.body.n1;
    const n2 = req.body.n2;
    const resultado = add(n1, n2);
    console.log(`Suma: ${resultado}`);
    res.send(JSON.stringify(resultado));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
