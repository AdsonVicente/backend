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
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("./routes");
const GetConteudoByIdService_1 = require("./services/Conteudo/GetConteudoByIdService");
const RemoveConteudoService_1 = require("./services/Conteudo/RemoveConteudoService");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.router);
app.use((req, res, next) => {
    console.log('✨ Backend Online! ✨');
    console.log('O servidor da Comunidade Católica Ágape está agora disponível e funcionando perfeitamente.');
    console.log('Deus abençoe você!');
    next();
});
app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor da Comunidade Católica Ágape!');
});
app.use('/files', express_1.default.static(path_1.default.resolve(__dirname, '..', 'tmp')));
//Conteudo detalhes por Id
routes_1.router.get('/conteudo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const getConteudoByIdService = new GetConteudoByIdService_1.GetConteudoByIdService();
    try {
        const conteudo = yield getConteudoByIdService.execute(id);
        if (conteudo) {
            res.status(200).json(conteudo);
        }
        else {
            res.status(404).json({ message: 'Conteúdo não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao buscar conteúdo', error });
    }
}));
//Deletar Contéudo por Id
routes_1.router.delete('/conteudo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const service = new RemoveConteudoService_1.RemoveConteudoService();
        const conteudo = yield service.execute({ conteudo_id: id });
        res.status(200).json(conteudo);
    }
    catch (error) {
        console.error('Erro ao excluir conteúdo:', error);
        res.status(500).json({ error: 'Erro interno ao excluir conteúdo' });
    }
}));
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        //se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});
app.listen(3333, () => console.log('Servidor online!'));
