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
exports.CreateInscricaoController = void 0;
const CreateInscricaoService_1 = require("../../services/inscricao/CreateInscricaoService");
class CreateInscricaoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, group, sector, eventId, telefone, idade } = req.body;
            const createInscricaoService = new CreateInscricaoService_1.CreateInscricaoService();
            const inscricao = yield createInscricaoService.execute({
                name, email, group, sector, eventId, telefone, idade
            });
            return res.json(inscricao);
        });
    }
}
exports.CreateInscricaoController = CreateInscricaoController;
