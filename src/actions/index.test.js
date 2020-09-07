import * as actions from './index'

describe('actions', () => {
  it('Should set the player name', () => {
    const studentName = 'Bill'

    const expectedAction = {
      type: 'SET_STUDENT_NAME',
      studentName: 'Bill'
    }

    const result = actions.setStudentName(studentName)

    expect(result).toEqual(expectedAction)
  })

  it('Should set isLoading', () => {
    const bool = true;

    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    }

    const result = actions.isLoading(bool)

    expect(result).toEqual(expectedAction)
  })

  it('Should set hasErrored', () => {
    const msg = 'Youve Errored!';

    const expectedAction = {
      type: 'HAS_ERRORED',
      message: 'Youve Errored!'
    }

    const result = actions.hasErrored(msg)

    expect(result).toEqual(expectedAction)
  })

  it('Should reset the game', () => {
    const expectedAction = {
      type: 'RESET'
    }
    
    const result = actions.reset()

    expect(result).toEqual(expectedAction)
  })

  it('Should increment the current question', () => {

    const expectedAction = {
      type: 'INCREMENT_CURRENT_QUESTION',
    }

    const result = actions.incrementCurrentQuestion()

    expect(result).toEqual(expectedAction)
  })


  it('Should reset the current question', () => {

    const expectedAction = {
      type: 'RESET_CURRENT_QUESTION',
    }

    const result = actions.resetCurrentQuestion()

    expect(result).toEqual(expectedAction)
  })
})