import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { ProjectOverlay } from '../components/ProjectOverlay';
import { useProjectsValue } from '../context';

beforeEach(cleanup)

jest.mock('../context', () => ({
  useProjectsValue: jest.fn(() => ({
    projects: [
      {
        name: '📚 WORDS',
        projectId: '1',
        userId: 'p8NWssEHY4gXq17bAC0d',
        docId: 'nikitosik'
      }
    ]
  }))
}))

describe('<ProjectOverlay />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Success', () => {
    it('renders the project overlay (using onClick)', () => {
      const showProjectOverlay = true
      const setProject = jest.fn()
      const setShowProjectOverlay = jest.fn(() => !showProjectOverlay)

      const { queryByTestId } = render (
        <ProjectOverlay
          showProjectOverlay
          setProject={setProject}
          setShowProjectOverlay={setShowProjectOverlay}
        />
      )

      expect(queryByTestId('project-overlay')).toBeTruthy()
      fireEvent.click(queryByTestId('project-overlay-action'))
      expect(setProject).toHaveBeenCalled()
    })

    it('renders the project overlay (using onKeyDown)', () => {
      const showProjectOverlay = true
      const setProject = jest.fn()
      const setShowProjectOverlay = jest.fn(() => !showProjectOverlay)

      const { queryByTestId } = render (
        <ProjectOverlay
          showProjectOverlay
          setProject={setProject}
          setShowProjectOverlay={setShowProjectOverlay}
        />
      )

      expect(queryByTestId('project-overlay')).toBeTruthy()
      fireEvent.keyDown(queryByTestId('project-overlay-action'))
      expect(setProject).toHaveBeenCalled()
    })
  })

  describe('Failure', () => {
    it('Does not renderthe project overlay with any projects', () => {
      useProjectsValue.mockImplementation(() => ({
        projects: []
      }))

      const { queryByTestId } = render(<ProjectOverlay showProjectOverlay />)
      expect(queryByTestId('project-overlay')).toBeTruthy()
      expect(queryByTestId('project-overlay-action')).toBeFalsy()
    })
  })
})