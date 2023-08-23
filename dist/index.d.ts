type payload = {
    type: string;
    data?: any;
};
declare class NativeDTO {
    static encode: (payload: payload) => string;
    static decode: (data: string) => payload;
}
export default NativeDTO;
