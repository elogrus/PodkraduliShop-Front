import axios from "axios"
import { ProductType } from "../types/Product"
import { ResponseType } from "shared/types/Response"
import { URLs } from "shared/consts/urls"

export const fetchProducts = async (): Promise<ResponseType<ProductType[]>> => {
    try {
        const response = await axios.get(URLs.PRODUCTS_URL)
        return { error: false, data: response.data }

    } catch (error) {
        return {
            error: true,
            errorMessage: error.message
        }
    }
}
