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
exports.CreateAdminsController = void 0;
const CreateAdminService_1 = require("../../services/admin/CreateAdminService");
class CreateAdminsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            const createAdminService = new CreateAdminService_1.CreateAdminService();
            const user = yield createAdminService.execute({
                name,
                email,
                password
            });
            return res.json(user);
        });
    }
}
exports.CreateAdminsController = CreateAdminsController;
