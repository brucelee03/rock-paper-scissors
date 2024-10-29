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
    <div className="result-container">
      <div className="result-card">
        <div className="my-choice">
          <p>YOU</p>
          <img src={myChoice.imageUrl} alt="your choice" />
        </div>
        <div className="opponent-choice">
          <p>OPPONENT</p>
          <img src={opponentChoice.imageUrl} alt="opponent choice" />
        </div>
      </div>
      <p>{gameResult}</p>
      <button type="button" onClick={onClickPlayAgain}>
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameResultView
