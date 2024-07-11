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
exports.RemoveConteudoController = void 0;
const RemoveConteudoService_1 = require("../../services/Conteudo/RemoveConteudoService");
class RemoveConteudoController {
    handle(req, Res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conteudo_id = req.query.conteudo_id;
            const removeConteudo = new RemoveConteudoService_1.RemoveConteudoService();
            const conteudo = yield removeConteudo.execute({
                conteudo_id
            });
            return Res.json(conteudo);
        });
    }
}
exports.RemoveConteudoController = RemoveConteudoController;
