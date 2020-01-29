import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Tasks } from "../components/Tasks";
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
    ]
  }))
}));

jest.mock('../hooks', () => ({
  useTasks: () => ({
    tasks: [
      {
        id: 'Cf95tS7LaSenroFcCNYw',
        archived: false,
        date: 'next_7',
        projectId: 1,
        task: 
          'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me',
        userId: 'p8NWssEHY4gXq17bAC0d'
      }
    ]
  })
}))

beforeEach(cleanup)

describe('<Tasks />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders tasks', () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => 'INBOX'),
      selectedProject: 'INBOX'
    }))
    const { queryByTestId } = render(<Tasks />)
    expect(queryByTestId('tasks')).toBeTruthy();
    expect(queryByTestId('project-name').textContent).toBe('Inbox');
  })

  it('renders tasks with a project title', () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => '1'),
      selectedProject: '1'
    }))
    const { queryByTestId } = render(<Tasks />)
    expect(queryByTestId('tasks')).toBeTruthy();
    expect(queryByTestId('project-name').textContent).toBe('🎵    MUSIC');
  })

  it('renders tasks with a collated title', () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => 'INBOX'),
      selectedProject: 'INBOX'
    }))
    const { queryByTestId } = render(<Tasks />)
    expect(queryByTestId('tasks')).toBeTruthy();
    expect(queryByTestId('project-name').textContent).toBe('Inbox');
  })
})

