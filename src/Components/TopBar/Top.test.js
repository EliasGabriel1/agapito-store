import { render, screen } from "@testing-library/react";
import TopBar from "../TopBar";

describe("TopBar Component", () => {
  test("deve renderizar o botão 'VER TODO' dentro da classe 'ver-tudo'", () => {
    render(<TopBar />);

    const verTodoButton = screen.getByText("VER TODO");

    // Verifica se o botão 'VER TODO' está presente
    expect(verTodoButton).toBeInTheDocument();

    // Verifica se o botão 'VER TODO' está dentro da classe 'ver-tudo'
    expect(verTodoButton).toHaveClass("ver-tudo");
  });

  test("deve renderizar o texto 'Coleção Black 20%OFF'", () => {
    render(<TopBar />);

    const colecaoBlackText = screen.getByText("20%OFF");

    // Verifica se o texto 'Coleção Black 20%OFF' está presente
    expect(colecaoBlackText).toBeInTheDocument();
  });
});
