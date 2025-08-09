// importa la función calculateDiscount usando ESM Modules 
import { calculateDiscount } from "../src/calculateDiscount.js";
import { describe, it, expect } from 'vitest';

describe('Calcular los descuentos', () => {
    it('Descuento mas de 15 dias restantes', () => {
        // Aquí va el código de la prueba 1
        let expectedResult = 30
        let result = calculateDiscount(17)
        expect(result).toBe(expectedResult);
    });

    it('Descuento entre 3 y 15 dias restantes', () => {
        // Aquí va el código de la prueba 2
        let expectedResult = 15
        let result = calculateDiscount(7)
        expect(result).toBe(expectedResult);
    });
        it('Descuento entre 0 y 3 dias restantes', () => {
        // Aquí va el código de la prueba 3
        let expectedResult = 0
        let result = calculateDiscount(2)
        expect(result).toBe(expectedResult);
    });
            it('Descuento entre 0 y 3 dias restantes', () => {
        // Aquí va el código de la prueba 3
        let expectedResult = -1
        let result = calculateDiscount()
        expect(result).toBe(expectedResult);
    });
});