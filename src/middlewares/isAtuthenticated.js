"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = isAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    //Receber o Token
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
        //Validar esse token
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        //Recuperar o id do token e colocar dentro de uma variavel admin_id dentro do Req
        req.admin_id = sub;
        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
}