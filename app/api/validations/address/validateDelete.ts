import { fieldValueNumber } from "../global/fieldValue";

export function validateDelete(
    userId?: number
) {
    try {
        fieldValueNumber(userId, 'userId');

    } catch (error) {
        throw new Error(`Erro de validação: ${error.message}`);
    }

}