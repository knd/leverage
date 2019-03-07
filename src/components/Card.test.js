import React from 'react'
import {
  cleanup,
  fireEvent,
  render,
  waitForElement
} from 'react-testing-library'
import 'jest-dom/extend-expect'
import { Card, DEFAULT_CARD_COLOR, HIGHLIGHTED_CARD_COLOR } from './Card'

afterEach(cleanup)

const CARD_LABEL = 'hello world'
const ONCLICK_EVENT_HANDLER = jest.fn()

describe('Card', () => {
  test('should display text label, default color when card is rendered', async () => {
    // perform test
    const { getByTestId } = render(
      <Card
        onClick={ONCLICK_EVENT_HANDLER}
        highlighted={false}
        label={CARD_LABEL}
      />
    )

    // test verification
    const cardBox = await waitForElement(() => getByTestId('CARD'))
    expect(cardBox).toHaveTextContent(CARD_LABEL)
    expect(cardBox).toHaveStyle(`background-color: ${DEFAULT_CARD_COLOR}`)
  })

  test('should display text label, highlighted color when card is highlighted', async () => {
    // perform test
    const { getByTestId } = render(
      <Card
        onClick={ONCLICK_EVENT_HANDLER}
        highlighted={true}
        label={CARD_LABEL}
      />
    )

    // test verification
    const cardBox = await waitForElement(() => getByTestId('CARD'))
    expect(cardBox).toHaveTextContent(CARD_LABEL)
    expect(cardBox).toHaveStyle(`background-color: ${HIGHLIGHTED_CARD_COLOR}`)
  })

  test('should call event handler on click card', async () => {
    const { getByTestId } = render(
      <Card
        onClick={ONCLICK_EVENT_HANDLER}
        highlighted={true}
        label={CARD_LABEL}
      />
    )

    // perform test
    fireEvent.click(getByTestId('CARD'))

    // test verification
    process.nextTick(() => {
      expect(ONCLICK_EVENT_HANDLER).toBeCalledTimes(1)
    })
  })
})
