"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
var bob;
(function (bob) {
    bob[bob["km"] = 1000] = "km";
    bob[bob["hm"] = 100] = "hm";
    bob[bob["dam"] = 10] = "dam";
    bob[bob["m"] = 1] = "m";
    bob[bob["dm"] = 0.1] = "dm";
    bob[bob["cm"] = 0.01] = "cm";
    bob[bob["mm"] = 0.001] = "mm";
})(bob || (bob = {}));
// a minha funcao vai receber um NUMERO e duas STRING.
// o NUMERO é o valor.
// a primeira String é a medida do VALOR.
// a segunda String é a medida do RESULTADO.
// 1m para mm 1000 
// 1m pra km 0.001
// 1000 000000
console.log(bob);
// const convert = (valor: number, medida: string, converterPara: string): number {
// }
app.listen(3000, () => {
    console.log(bob);
});
// 1 parametro - number: 1000    valor da medida
// 2 parametro - string: metros  medida
// 3 parametro - string: km      nova medida
// resultado: 1000m são 1km = 1
