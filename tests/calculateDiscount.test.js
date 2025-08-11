// importa la función calculateDiscount usando ESM Modules 
import { calculateDiscount } from "../src/calculateDiscount.js";
import { describe, it, expect } from 'vitest';
import { parseISO, startOfDay, toDate } from 'date-fns';


const eventDate = parseISO('2025-08-20');


describe('Calcular los descuentos', () => {
    it('Descuento mas de 15 dias restantes', () => {
        // Aquí va el código de la prueba 1
        const todayDate = parseISO("2025-07-20")
        let expectResult = 30
        let result = calculateDiscount(todayDate, eventDate)
        expect(expectResult).toBe(result)
    });

    it('Descuento entre 3 y 15 dias restantes', () => {
        // Aquí va el código de la prueba 2
        const todayDate = parseISO("2025-08-15")
        let expectResult = 15
        let result = calculateDiscount(todayDate, eventDate)
        expect(expectResult).toBe(result)
    });
    it('Descuento entre 0 y 3 dias restantes', () => {
        // Aquí va el código de la prueba 3
        const todayDate = parseISO("2025-08-19")
        let expectResult = 0
        let result = calculateDiscount(todayDate, eventDate)
        expect(expectResult).toBe(result)
    });
    it('Descuento invalido dias restantes', () => {
        // Aquí va el código de la prueba 3
        const todayDate = parseISO("2025-08-21")
        let expectResult = -1
        let result = calculateDiscount(todayDate, eventDate)
        expect(expectResult).toBe(result)
    });
});