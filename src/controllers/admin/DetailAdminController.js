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
exports.DetailAdminController = void 0;
const DetailAdminService_1 = require("../../services/admin/DetailAdminService");
class DetailAdminController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const admin_id = req.admin_id;
            console.log("ID DO ADMIN:", admin_id);
            const detailAdminService = new DetailAdminService_1.DetailAdminService();
            const admin = yield detailAdminService.execute(admin_id);
            return res.json(admin);
        });
    }
}
exports.DetailAdminController = DetailAdminController;
