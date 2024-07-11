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
exports.ListByEventoController = void 0;
const ListByEventoService_1 = require("../../services/evento/ListByEventoService");
class ListByEventoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listByEventoService = new ListByEventoService_1.ListByEventoService();
            const evento = yield listByEventoService.execute();
            return res.json(evento);
        });
    }
}
exports.ListByEventoController = ListByEventoController;
