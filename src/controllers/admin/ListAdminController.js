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
exports.ListAdminController = void 0;
const ListAdminService_1 = require("../../services/admin/ListAdminService");
class ListAdminController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listAdminService = new ListAdminService_1.ListAdminService();
            const admin = yield listAdminService.execute();
            return res.json(admin);
        });
    }
}
exports.ListAdminController = ListAdminController;
