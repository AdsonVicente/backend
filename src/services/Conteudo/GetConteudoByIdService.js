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
exports.GetConteudoByIdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class GetConteudoByIdService {
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conteudo = yield prisma_1.default.conteudo.findUnique({
                where: { id },
                select: {
                    id: true,
                    banner: true,
                    titulo: true,
                    corpo: true,
                    autor: true,
                    publicadoEm: true,
                    categoriaId: true,
                    categoria: { select: { name: true } },
                }
            });
            return conteudo;
        });
    }
}
exports.GetConteudoByIdService = GetConteudoByIdService;