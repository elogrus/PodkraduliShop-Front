import axios from "axios";
import { URLs } from "shared/consts/urls";
import { ResponseType } from "shared/types/Response";
import { ProductType } from "../types/Product";

export const getProductsList = async (
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

export const getProductById = async (
    id: string
): Promise<ResponseType<ProductType>> => {
    try {
        const response = await axios.get(
            URLs.DETAIL_PRODUCT_URL_WITHOUT_ID + id
        );
        response.data.data.attributes = JSON.parse(
            response.data.data.attributes
        );
        return response.data;
        // response.data;
    } catch (error) {
        return {
            error: error.message,
        };
    }
};
