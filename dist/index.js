"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NativeDTO {
}
NativeDTO.encode = (payload) => {
    try {
        return JSON.stringify(payload);
    }
    catch (e) {
        console.log(e);
        return payload.toString();
    }
};
NativeDTO.decode = (data) => {
    try {
        return JSON.parse(data);
    }
    catch (e) {
        console.log(e);
        return { type: "none", data };
    }
};
exports.default = NativeDTO;
