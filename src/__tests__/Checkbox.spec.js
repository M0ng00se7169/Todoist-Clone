import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Checkbox } from "../components/Checkbox";

// Clean the DOM !
beforeEach(cleanup);

// Mock my DB 
jest.mock("../firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          update: jest.fn()
        }))
      }))
    }))
  }
}));


// Tests are starting here ...
describe("<Checkbox />", () => {
  describe("Success", () => {
    it("renders the task checkbox", () => {
      const { queryByTestId, debug } = render(
        <Checkbox id="1" taskDesc="Finish this development" />
      );
      expect(queryByTestId('checkbox-action')).toBeTruthy()
    });
  });
});

