import React from 'react';
import { render, fireEvent, getByDisplayValue } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import QuestionArea from './QuestionArea';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from '../reducers';
import { lesson } from '../mockData/mockData'

const questionProp =  {
  reading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  question: 'Which is NOT a planet?',
  answers: [{answer: 'Pluto', correct: true}, {answer: 'Venus', correct: false}, {answer: 'Jupiter', correct: false}, {answer: 'Mars', correct: false}]
}


const store = createStore(rootReducer, {
  setStudent:'Bill',
  setLesson: lesson
})
describe('QuestionArea', () => {
  it('should render without crashing', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <QuestionArea question={questionProp}/>
        </Provider>
      </BrowserRouter>
    )

    const question = getByText('Which is NOT a planet?')
    const answer1 = getByText('Jupiter')
    const answer2 = getByText('Mars')
    const answer3 = getByText('Pluto')
    const answer4 = getByText('Venus')

    expect(question).toBeInTheDocument();
    expect(answer1).toBeInTheDocument();
    expect(answer2).toBeInTheDocument();
    expect(answer3).toBeInTheDocument();
    expect(answer4).toBeInTheDocument();
  })
})