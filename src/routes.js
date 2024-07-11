"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateAdminsController_1 = require("./controllers/admin/CreateAdminsController");
const AuthAdminController_1 = require("./controllers/admin/AuthAdminController");
const DetailAdminController_1 = require("./controllers/admin/DetailAdminController");
const CreateCategoryController_1 = require("./controllers/categoria/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/categoria/ListCategoryController");
const CreateConteudoController_1 = require("./controllers/conteudo/CreateConteudoController");
const ListByCategoryController_1 = require("./controllers/conteudo/ListByCategoryController");
const ListByConteudoController_1 = require("./controllers/conteudo/ListByConteudoController");
const CreateInscricaoController_1 = require("./controllers/inscricao/CreateInscricaoController");
const CreateEventController_1 = require("./controllers/evento/CreateEventController");
const isAtuthenticated_1 = require("./middlewares/isAtuthenticated");
const multer_2 = __importDefault(require("./config/multer"));
const ListInscricaoController_1 = require("./controllers/inscricao/ListInscricaoController");
const ListAdminController_1 = require("./controllers/admin/ListAdminController");
const ListByEventoController_1 = require("./controllers/evento/ListByEventoController");
const EditConteudoController_1 = require("./controllers/conteudo/EditConteudoController");
const CreateLiturgiaController_1 = require("./controllers/liturgia/CreateLiturgiaController");
const ListLiturgiaController_1 = require("./controllers/liturgia/ListLiturgiaController");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
//rotas user
router.post('/users', isAtuthenticated_1.isAuthenticated, new CreateAdminsController_1.CreateAdminsController().handle);
router.post('/session', new AuthAdminController_1.AuthAdminController().handle);
router.get('/me', isAtuthenticated_1.isAuthenticated, new DetailAdminController_1.DetailAdminController().handle);
router.get('/administradores', isAtuthenticated_1.isAuthenticated, new ListAdminController_1.ListAdminController().handle);
//Rotas Categorias
router.post('/category', isAtuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/category', new ListCategoryController_1.ListCategoryController().handle);
//Rotas Contéudos
router.post('/conteudo', isAtuthenticated_1.isAuthenticated, upload.single('file'), new CreateConteudoController_1.CreateConteudoController().handle);
router.get('/category/conteudo', new ListByCategoryController_1.ListByCategoryController().handle);
router.get('/conteudo', new ListByConteudoController_1.ListByConteudoController().handle);
router.patch('/conteudo/editar/:id', isAtuthenticated_1.isAuthenticated, new EditConteudoController_1.EditConteudoController().handleEdit);
//Rotas Delete/conteudo
// router.delete('/conteudo/:id', isAuthenticated, new RemoveConteudoController().handle)
//Rotas Inscições
router.post('/inscricao', new CreateInscricaoController_1.CreateInscricaoController().handle);
router.get('/inscricao', isAtuthenticated_1.isAuthenticated, new ListInscricaoController_1.ListInscricaoController().handle);
//Rotas Eventos
router.post('/evento', isAtuthenticated_1.isAuthenticated, upload.single('file'), new CreateEventController_1.CreateEventController().handle);
router.get('/evento', new ListByEventoController_1.ListByEventoController().handle);
//Rota Liturgia
router.post('/liturgia', isAtuthenticated_1.isAuthenticated, new CreateLiturgiaController_1.CreateLiturgiaController().handle);
router.get('/liturgia', new ListLiturgiaController_1.ListLiturgiaDiariaController().handle);
