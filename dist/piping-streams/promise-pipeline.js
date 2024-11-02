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
const fs_1 = __importDefault(require("fs"));
const stream_1 = require("stream");
const util_1 = require("util");
const path_1 = __importDefault(require("path"));
const pipelinePromesse = (0, util_1.promisify)(stream_1.pipeline);
const filepath = path_1.default.join(process.cwd(), 'piping-streams/file.txt');
const newFilepath = path_1.default.join(process.cwd(), 'piping-streams/newFile.txt');
const rs = fs_1.default.createReadStream(filepath);
const newFileS = fs_1.default.createWriteStream(newFilepath);
const uppercase = new stream_1.Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    },
});
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pipelinePromesse(rs, uppercase, newFileS);
        console.log('Pipeline run with success');
    });
}
run().catch(() => {
    console.log('Error in the pipeline');
});
