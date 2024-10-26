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
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const filepath = path_1.default.join(process.cwd(), 'working-with-files/hello.txt');
promises_1.default.readFile(filepath, 'utf8')
    .then((contents) => {
    console.log('File contents', contents);
})
    .catch((err) => {
    if (err) {
        process.stderr.write(err.message);
    }
});
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const contents = yield promises_1.default.readFile(filepath, 'utf8');
            console.log('File contents 2', contents);
        }
        catch (err) {
            console.error(err);
        }
    });
}
run();
