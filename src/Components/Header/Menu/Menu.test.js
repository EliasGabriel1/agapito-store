import { render, screen } from "@testing-library/react";
import Menu from "../Menu/index";

describe("Menu Component", () => {
    test("deve renderizar corretamente os subcomponentes de acordo com a largura da janela", () => {
        // Renderiza o componente Menu com uma largura de janela maior que 900px
        window.innerWidth = 1000;
        render(<Menu api="api" />);

        // Verifica se o subcomponente Desktop está presente
        const desktopElement = screen.getByTestId("desktop");
        expect(desktopElement).toBeInTheDocument();

        // Verifica se o subcomponente Mobile não está presente
        const mobileElement = screen.queryByTestId("mobile");
        expect(mobileElement).not.toBeInTheDocument();

        // Renderiza o componente Menu com uma largura de janela menor que 900px
        window.innerWidth = 800;
        render(<Menu api="api" />);

        // Verifica se o subcomponente Mobile está presente
        const mobileElement2 = screen.getByTestId("mobile");
        expect(mobileElement2).toBeInTheDocument();

        // Verifica se o subcomponente Desktop não está presente
        const desktopElement2 = screen.queryByTestId("desktop");
        expect(desktopElement2).not.toBeInTheDocument();
    });
});