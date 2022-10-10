import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("App component", () => {
    beforeEach(() => render(<App/>))

    test("render menu", () => {
        const Menu = screen.getByRole("Menu");
        expect(Menu).toBeInTheDocument;
    })
})