import axiosDJ from "../configs/axiosDJ.js";

const ENDPOINT = 'products/categories';

export async function getAllCategories(){
    try {
        const response = await axiosDJ.get(`/${ENDPOINT}`);
        return response.data;
    } catch (e) {
        console.error('Oops unexpected', e);
        return [];
    }
}

