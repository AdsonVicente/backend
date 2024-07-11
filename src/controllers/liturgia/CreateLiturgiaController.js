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
exports.CreateLiturgiaController = void 0;
const CreateLiturgiaService_1 = require("../../services/liturgia/CreateLiturgiaService");
class CreateLiturgiaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { primeiraLeitura, segundaLeitura, salmoResponsorial, titulo, evangelho, corLiturgica } = req.body;
            const createAdminService = new CreateLiturgiaService_1.CreateLiturgiaService();
            const user = yield createAdminService.execute({
                primeiraLeitura, segundaLeitura, salmoResponsorial, titulo, evangelho, corLiturgica
            });
            return res.json(user);
        });
    }
}
exports.CreateLiturgiaController = CreateLiturgiaController;
