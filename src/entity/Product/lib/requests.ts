import axios from "axios"
import { ProductType } from "../types/Product"
import { ResponseType } from "shared/types/Response"

export const getProducts = async (): Promise<ResponseType<ProductType[]>> => {
    try {
        const response = await axios.get('http://localhost:3000/products')
        return { error: false, data: response.data }

    } catch (error) {
        return {
            error: true,
            errorMessage: error.message
        }
    }
}
