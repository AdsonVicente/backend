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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConteudoController = void 0;
const CreateConteudoService_1 = require("../../services/Conteudo/CreateConteudoService");
class CreateConteudoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, corpo, autor, categoriaId } = req.body;
            const createConteudoService = new CreateConteudoService_1.CreateConteudoService();
            if (!req.file) {
                throw new Error("error upload file");
            }
            else {
                const { originalname, filename: banner } = req.file;
                try {
                    // Chame execute() com os argumentos corretos e aguarde a resolução da Promise
                    const conteudo = yield createConteudoService.execute({
                        titulo,
                        corpo,
                        autor,
                        categoriaId,
                        banner
                    });
                    // Retorne o conteúdo como JSON
                    return res.json(conteudo);
                }
                catch (error) {
                    // Em caso de erro, retorne um status 400 e o erro como JSON
                    return res.status(400).json({ error: error.message });
                }
            }
        });
    }
}
exports.CreateConteudoController = CreateConteudoController;
