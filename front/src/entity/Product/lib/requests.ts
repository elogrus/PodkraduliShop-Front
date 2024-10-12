import axios from "axios";
import { ProductType } from "../types/Product";
import { ResponseType } from "shared/types/Response";
import { URLs } from "shared/consts/urls";

export const fetchProducts = async (
    start: number,
    count: number
): Promise<ResponseType<ProductType[]>> => {
    try {
        const response = await axios.get(URLs.PRODUCTS_URL, {
            params: {
                start,
                count,
            },
        });
        return response.data;
    } catch (error) {
        return {
            error: error.message,
        };
    }
};
