import React from "react";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import Home from "./Home";

describe("Home Component", () => {
    test("", () => {
        // Mock do fetch para evitar chamadas reais à API durante o teste
        beforeAll(() => {
            jest.spyOn(global, "fetch").mockImplementation((url) => {
                if (url.includes("/api/Category.json")) {
                    return Promise.resolve({
                        ok: true,
                        json: () =>
                            Promise.resolve({
                                // Simulação de dados retornados pela API
                                data: "Categoria",
                            }),
                    });
                } else if (url.includes("/api/Vitrine.json")) {
                    return Promise.resolve({
                        ok: true,
                        json: () =>
                            Promise.resolve({
                                // Simulação de dados retornados pela API
                                vitrineUm: "Vitrine 1",
                            }),
                    });
                } else if (url.includes("/api/Vitrine2.json")) {
                    return Promise.resolve({
                        ok: true,
                        json: () =>
                            Promise.resolve({
                                // Simulação de dados retornados pela API
                                vitrineDois: "Vitrine 2",
                            }),
                    });
                }
            });
        });
    })

    test("", () => {
        // Restaurar fetch após os testes
        afterAll(() => {
            global.fetch.mockRestore();
        });
    })

    test("", () => {
        it("renderiza o componente Home corretamente", async () => {
            // Renderiza o componente Home
            const { getByText, getByTestId } = render(<Home />);

            // Verifica se o componente de carregamento está sendo exibido
            expect(getByTestId("loading-component")).toBeInTheDocument();

            // Aguarda a remoção do componente de carregamento
            await waitForElementToBeRemoved(() => getByTestId("loading-component"));

            // Verifica se o componente Header foi renderizado corretamente
            expect(getByText("Header Component")).toBeInTheDocument();

            // Verifica se os dados da API de Category foram renderizados corretamente
            expect(getByText("Categoria")).toBeInTheDocument();

            // Verifica se o componente TopBar foi renderizado corretamente
            expect(getByText("TopBar Component")).toBeInTheDocument();

            // Verifica se o componente Banner foi renderizado corretamente
            expect(getByText("Banner Component")).toBeInTheDocument();

            // Verifica se o componente MiniBanners foi renderizado corretamente
            expect(getByText("MiniBanners Component")).toBeInTheDocument();

            // Verifica se o componente Vitrine foi renderizado corretamente
            expect(getByText("Vitrine 1")).toBeInTheDocument();

            // Verifica se o componente CenterBanners foi renderizado corretamente
            expect(getByText("CenterBanners Component")).toBeInTheDocument();

            // Verifica se o componente Vitrine foi renderizado corretamente
            expect(getByText("Vitrine 2")).toBeInTheDocument();

            // Verifica se o componente Instafeed foi renderizado corretamente
            expect(getByText("Instafeed Component")).toBeInTheDocument();

            // Verifica se o componente Footer foi renderizado corretamente
            expect(getByText("Footer Component")).toBeInTheDocument();
        });

    })
    test("deve esconder o botão carrinhovazio após clicar em Card__comprar-button e container-minicart-button", () => {
        render(<Home />);

        // Clique no botão com a classe Card__comprar-button
        const comprarButton = screen.getByRole("button", { name: "Comprar" });
        fireEvent.click(comprarButton);

        // Clique no botão com a classe container-minicart-button
        const containerMinicartButton = screen.getByRole("button", { name: "Container Minicart" });
        fireEvent.click(containerMinicartButton);

        // Verifique se o botão com a classe carrinhovazio não é encontrado
        const carrinhoVazioButton = screen.queryByRole("button", { name: "Carrinho Vazio" });
        expect(carrinhoVazioButton).not.toBeInTheDocument();
    });
});