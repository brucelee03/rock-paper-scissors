import {
  ResultContainer,
  GameImages,
  ResultCard,
  ResultChoicesCard,
  Contestant,
  Result,
  ResultButton,
} from '../styledComponents'

const GameResultView = props => {
  const {
    choicesList,
    myChoiceId,
    opponentChoiceId,
    onPlayAgain,
    gameResult,
  } = props

  const myChoice = choicesList.find(eachItem => eachItem.id === myChoiceId)
  const opponentChoice = choicesList.find(
    eachItem => eachItem.id === opponentChoiceId,
  )
  const onClickPlayAgain = () => {
    onPlayAgain()
  }

  return (
    <ResultContainer>
      <ResultCard>
        <ResultChoicesCard>
          <Contestant>YOU</Contestant>
          <GameImages src={myChoice.imageUrl} alt="your choice" />
        </ResultChoicesCard>
        <ResultChoicesCard>
          <Contestant>OPPONENT</Contestant>
          <GameImages src={opponentChoice.imageUrl} alt="opponent choice" />
        </ResultChoicesCard>
      </ResultCard>
      <Result>{gameResult}</Result>
      <ResultButton type="button" onClick={onClickPlayAgain}>
        PLAY AGAIN
      </ResultButton>
    </ResultContainer>
  )
}

export default GameResultView
