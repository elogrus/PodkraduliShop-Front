import axios from "axios"
import { ResponseType } from "shared/types/Response"
import { DetailProductType } from "../types/DetailProduct"
import { URLs } from "shared/consts/urls"

export const getProductById = async (id: string): Promise<ResponseType<DetailProductType>> => {
    try {
        const response = await axios.get(URLs.DETAIL_PRODUCT_URL_WITHOUT_ID + id)
        return { error: false, data: response.data }

    } catch (error) {
        return {
            error: true,
            errorMessage: error.message
        }
    }
}
