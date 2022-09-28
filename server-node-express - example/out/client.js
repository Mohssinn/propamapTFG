"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Make a request for a user with a given ID
axios_1.default.get('http://localhost:3000/hello')
    .then(function (response) {
    // handle success
    console.log(response.data);
});
axios_1.default.post('http://localhost:3000/add', { n1: 6, n2: 4 })
    .then(function (response) {
    console.log(`result: ${response.data}`);
})
    .catch(function (error) {
    console.log(error);
});
