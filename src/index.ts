type payload = {
    type: string,
    data?: any
}

class NativeDTO {
    public static encode = (payload: payload) => {
        try {
            return JSON.stringify(payload)
        } catch (e) {
            console.log(e)
            return payload.toString()
        }
    }
    public static decode = (data: string) => {
        try {
            return JSON.parse(data) as payload
        } catch (e) {
            console.log(e)
            return {type: "none", data} as payload
        }
    }
}

export default NativeDTO
