import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Header } from "../components/layout/Header";

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(() => ({ selectedProject: 1 })),
  useProjectsValue: jest.fn(() => ({ projects: [] }))
}));

beforeEach(cleanup);

describe("<Header />", () => {
  describe("Succes", () => {
    it("renders the header component", () => {
      const { queryByTestId } = render(<Header />);
      expect(queryByTestId("header")).toBeTruthy();
    });

    it("renders the quick add task action using onClick", () => {
      const { queryByTestId } = render(<Header />);

      fireEvent.click(queryByTestId("quick-add-task-action"));
      expect(queryByTestId("quick-add-task-action")).toBeTruthy();
    });

    it("renders the quick add task action using onKeyDown", () => {
      const { queryByTestId } = render(<Header />);

      fireEvent.keyDown(queryByTestId("quick-add-task-action"));
      expect(queryByTestId("quick-add-task-action")).toBeTruthy();
    });

    it("renders the header component and activates the dark mode using onClick", () => {
      const darkMode = false;
      const setDarkMode = jest.fn(() => !darkMode);
      const { queryByTestId } = render(
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      );
      expect(queryByTestId('header')).toBeTruthy()

      fireEvent.click(queryByTestId('dark-mode-action'));
      expect(setDarkMode).toHaveBeenCalledWith(true)
    });

    it("renders the header component and activates the dark mode using onKeyDown", () => {
      const darkMode = false;
      const setDarkMode = jest.fn(() => !darkMode);
      const { queryByTestId } = render(
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      );
      expect(queryByTestId('header')).toBeTruthy()

      fireEvent.keyDown(queryByTestId('dark-mode-action'));
      expect(setDarkMode).toHaveBeenCalledWith(true)
    });
  });
});
