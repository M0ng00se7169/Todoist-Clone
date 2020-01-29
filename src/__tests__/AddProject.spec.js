import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { AddProject } from "../components/AddProject";
import { useSelectedProjectValue } from "../context";

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(),
  useProjectsValue: jest.fn(() => ({
    projects: [
      {
        name: "🎵    MUSIC",
        projectId: "1",
        userId: "p8NWssEHY4gXq17bAC0d",
        docId: "nikitosik"
      },
      {
        name: "🙌  THE OFFICE",
        projectId: "2",
        userId: "p8NWssEHY4gXq17bAC0d",
        docId: "nikitosik"
      },
      {
        name: "🎯 FUTURE",
        projectId: "3",
        userId: "p8NWssEHY4gXq17bAC0d",
        docId: "nikitosik"
      },
      {
        name: "📚 WORDS",
        projectId: "4",
        userId: "p8NWssEHY4gXq17bAC0d",
        docId: "nikitosik"
      }
    ],
    setProjects: jest.fn()
  }))
}));

jest.mock('../firebase', () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        add: jest.fn(() => Promise.resolve('I am resolved')),
      })),
    })),
  },
}));

beforeEach(cleanup);

describe('<AddProject />', () => {
  describe('Success', () => {
    it('renders <AddProject />', () => {
      const { queryByTestId } = render(<AddProject shouldShow />)
      expect(queryByTestId('add-project')).toBeTruthy()
    })

    it('renders <AddProject /> and adds a project', () => {
      const { queryByTestId } = render(<AddProject shouldShow />)
      expect(queryByTestId('add-project')).toBeTruthy()

      fireEvent.change(queryByTestId('project-name'), {
        target: { value: 'Best project in the world!' }
      })
      expect(queryByTestId('project-name').value).toBe('Best project in the world!')
      fireEvent.click(queryByTestId('add-project-submit'))
    })

    it('hides the project overlay when cancelled using onClick', () => {
      const { queryByTestId, getByText } = render(<AddProject shouldShow />)
      expect(queryByTestId('add-project')).toBeTruthy()
      fireEvent.click(getByText('Cancel'))
    })

    it('hides the project overlay when cancelled using onKeyDown', () => {
      const { queryByTestId, getByText } = render(<AddProject shouldShow />)
      expect(queryByTestId('add-project')).toBeTruthy()
      fireEvent.keyDown(getByText('Cancel'))
    })

    it('Adds a project using onClick', () => {
      const { queryByTestId } = render(<AddProject shouldShow />)
      expect(queryByTestId('add-project-action')).toBeTruthy()
      fireEvent.click(queryByTestId('add-project-action'))
    })

    it('Adds a project using onKeyDown', () => {
      const { queryByTestId } = render(<AddProject shouldShow />)
      expect(queryByTestId('add-project-action')).toBeTruthy()
      fireEvent.keyDown(queryByTestId('add-project-action'))
    })
  })
})