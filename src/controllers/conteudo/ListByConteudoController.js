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
exports.ListByConteudoController = void 0;
const ListByConteudoService_1 = require("../../services/Conteudo/ListByConteudoService");
class ListByConteudoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listByConteudoService = new ListByConteudoService_1.ListByConteudoService();
            const conteudo = yield listByConteudoService.execute();
            return res.json(conteudo);
        });
    }
}
exports.ListByConteudoController = ListByConteudoController;
