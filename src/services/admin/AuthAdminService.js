"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAdminService = void 0;
const bcryptjs_1 = require("bcryptjs");
const prisma_1 = __importDefault(require("../../prisma"));
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthAdminService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            // Verificar se o email existe
            const admin = yield prisma_1.default.admin.findFirst({
                where: {
                    email: email
                }
            });
            if (!admin) {
                throw new Error("Usuário/Senha estão incorretas");
            }
            // Verificar se a senha enviada está correta
            const passwordMatch = yield (0, bcryptjs_1.compare)(password, admin.password);
            if (!passwordMatch) {
                throw new Error("Usuário/Senha estão incorretas");
            }
            // Verificar se o segredo JWT está definido
            const jwtSecret = process.env.JWT_SECRET;
            if (!jwtSecret) {
                throw new Error("Segredo JWT não está definido");
            }
            // Gerar o token JWT
            const token = (0, jsonwebtoken_1.sign)({
                name: admin.name,
                email: admin.email
            }, jwtSecret, {
                subject: admin.id.toString(), // Converte para string se necessário
                expiresIn: '30d'
            });
            return {
                id: admin.id,
                name: admin.name,
                email: admin.email,
                token: token
            };
        });
    }
}
exports.AuthAdminService = AuthAdminService;
