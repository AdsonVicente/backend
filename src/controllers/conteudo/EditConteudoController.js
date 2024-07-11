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
exports.EditConteudoController = void 0;
const EditConteudoService_1 = require("../../services/Conteudo/EditConteudoService");
class EditConteudoController {
    handleEdit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { novoTitulo, novoCorpo } = req.body;
            if (!novoTitulo || !novoCorpo) {
                return res.status(400).json({ error: 'Campos obrigatórios não foram fornecidos' });
            }
            const editConteudoService = new EditConteudoService_1.EditConteudoService();
            try {
                const conteudoAtualizado = yield editConteudoService.execute({
                    conteudo_id: id,
                    novoTitulo,
                    novoCorpo,
                });
                return res.status(200).json(conteudoAtualizado);
            }
            catch (error) {
                console.error('Erro ao editar conteúdo:', error);
                return res.status(500).json({ error: 'Erro interno ao editar conteúdo' });
            }
        });
    }
}
exports.EditConteudoController = EditConteudoController;
