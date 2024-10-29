import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import {Score} from '../styledComponents'

import GameRulesView from '../GameRulesView'
import GameResultView from '../GameResultView'

class GamePlayingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myChoice: '',
      score: 0,
      choicesList: props.choicesList,
      showResult: false,
    }
  }

  onClickRock = () => {
    this.setState({showResult: true, myChoice: 'ROCK'})
  }

  onClickScissors = () => {
    this.setState({showResult: true, myChoice: 'SCISSORS'})
  }

  onClickPaper = () => {
    this.setState({showResult: true, myChoice: 'PAPER'})
  }

  onClickPlayAgain = () => {
    this.setState({myChoice: '', score: 0, showResult: false})
  }

  getResult = (myChoice, opponentChoice) => {
    if (myChoice === opponentChoice) {
      return 'IT IS A DRAW'
    }
    switch (myChoice) {
      case 'PAPER':
        return opponentChoice === 'ROCK' ? 'YOU WON' : 'YOU LOSE'
      case 'SCISSORS':
        return opponentChoice === 'PAPER' ? 'YOU WON' : 'YOU LOSE'
      case 'ROCK':
        return opponentChoice === 'SCISSORS' ? 'YOU WON' : 'YOU LOSE'
      default:
        return 'IT IS A DRAW'
    }
  }

  updateScore = result => {
    if (result === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (result === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  renderPlayingView = () => {
    const {choicesList} = this.state

    return (
      <div className="playing-container">
        <div className="button-container">
          <button
            type="button"
            onClick={this.onClickRock}
            data-testid="rockButton"
          >
            <img src={choicesList[0].imageUrl} alt={choicesList[0].id} />
          </button>
          <button
            type="button"
            onClick={this.onClickScissors}
            data-testid="scissorsButton"
          >
            <img src={choicesList[1].imageUrl} alt={choicesList[1].id} />
          </button>
        </div>
        <button
          type="button"
          onClick={this.onClickPaper}
          data-testid="paperButton"
        >
          <img src={choicesList[2].imageUrl} alt={choicesList[2].id} />
        </button>
      </div>
    )
  }

  render() {
    const {showResult, choicesList, score, myChoice} = this.state

    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[randomIndex].id
    const result = this.getResult(myChoice, opponentChoice)

    if (showResult) {
      this.updateScore(result)
    }

    return (
      <div className="game-view-container">
        <div className="score-board">
          <div className="game-name-container">
            <h1>
              Rock
              <br />
              Paper
              <br /> Scissors
            </h1>
          </div>
          <div className="score-container">
            <p>Score</p>
            <Score fontFamily="Roboto">{score}</Score>
          </div>
        </div>
        {showResult ? (
          <GameResultView
            choicesList={choicesList}
            myChoiceId={myChoice}
            opponentChoiceId={opponentChoice}
            onPlayAgain={this.onClickPlayAgain}
            gameResult={result}
          />
        ) : (
          this.renderPlayingView()
        )}

        <div>
          <Popup
            modal
            trigger={
              <button type="button" className="rules-button">
                RULES
              </button>
            }
            className="popup-content"
          >
            {close => (
              <>
                <button
                  type="button"
                  className="close-button"
                  data-testid="closeButton"
                  onClick={() => close()}
                >
                  <RiCloseLine className="close-icon" />
                </button>
                <GameRulesView />
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default GamePlayingView
