import { describe, it, expect, beforeEach, vi } from "vitest";
import fs from "fs";
import path from "path";
import { initForm } from "../src/formHandler.js";

describe("Grupo de pruebas", () => {
	beforeEach(() => {
		// Cargar el HTML original para tener la página limpia
		const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8");

		// Poner el HTML en el documento simulado (JSDOM)
		document.documentElement.innerHTML = html;
	});

	it("prueba 1 - al enviar el formulario con nombre y email muestra alerta de gracias", () => {
		initForm();

		const form = document.getElementById("eventForm");
		const nameInput = document.getElementById("name");
		const emailInput = document.getElementById("email");

		nameInput.value = "Lala";
		emailInput.value = "Lalalin@example.com";

		const alertMock = vi.spyOn(window, "alert").mockImplementation(() => { });

		form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

		expect(alertMock).toHaveBeenCalledWith("¡Gracias por inscribirte, Lala!");

		alertMock.mockRestore();
	});

	it("prueba 2 - deshabilita submit y muestra mensaje si la fecha actual es posterior al evento", () => {
		// Simular fecha actual después del evento
		vi.setSystemTime(new Date("2025-08-25T12:00:00"));

		initForm();

		const discountMessage = document.getElementById("discountMessage");
		expect(discountMessage.textContent).toBe("El periodo de inscripción ha finalizado.");

		const submitButton = document.querySelector('button[type="submit"]');
		expect(submitButton.disabled).toBe(true);

		vi.useRealTimers();
	});
});
