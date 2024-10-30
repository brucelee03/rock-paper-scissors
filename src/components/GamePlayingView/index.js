import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import {
  GameViewContainer,
  ScoreBoard,
  MainHeading,
  ScoreCard,
  ScoreLabel,
  Score,
  ChoicesButton,
  GameImages,
  PlayingContainer,
  PlayingButtonCard,
  RulesButton,
  PopupContainer,
  CloseButton,
} from '../styledComponents'

import GameRulesView from '../GameRulesView'
import GameResultView from '../GameResultView'

class GamePlayingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myChoiceId: '',
      opponentChoiceId:
        props.choicesList[Math.floor(Math.random() * props.choicesList.length)]
          .id,
      score: 0,
      result: '',
      choicesList: props.choicesList,
      showResult: false,
    }
  }

  onClickRock = () => {
    const {opponentChoiceId} = this.state
    const result = this.getResult('ROCK', opponentChoiceId)
    this.setState(
      {
        showResult: true,
        myChoiceId: 'ROCK',
        result,
      },
      () => this.updateScore(result),
    )
  }

  onClickScissors = () => {
    const {opponentChoiceId} = this.state
    const result = this.getResult('SCISSORS', opponentChoiceId)
    this.setState(
      {
        showResult: true,
        myChoiceId: 'SCISSORS',
        result,
      },
      () => this.updateScore(result),
    )
  }

  onClickPaper = () => {
    const {opponentChoiceId} = this.state
    const result = this.getResult('PAPER', opponentChoiceId)
    this.setState(
      {
        showResult: true,
        myChoiceId: 'PAPER',
        result,
      },
      () => this.updateScore(result),
    )
  }

  onClickPlayAgain = () => {
    const {choicesList} = this.state
    const newOpponentChoiceId =
      choicesList[Math.floor(Math.random() * choicesList.length)].id
    this.setState({
      myChoiceId: '',
      showResult: false,
      opponentChoiceId: newOpponentChoiceId,
    })
  }

  getResult = (myChoiceId, opponentChoice) => {
    if (myChoiceId === opponentChoice) {
      return 'IT IS DRAW'
    }
    switch (myChoiceId) {
      case 'PAPER':
        return opponentChoice === 'ROCK' ? 'YOU WON' : 'YOU LOSE'
      case 'SCISSORS':
        return opponentChoice === 'PAPER' ? 'YOU WON' : 'YOU LOSE'
      case 'ROCK':
        return opponentChoice === 'SCISSORS' ? 'YOU WON' : 'YOU LOSE'
      default:
        return 'IT IS DRAW'
    }
  }

  updateScore = result => {
    if (result === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (result === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  render() {
    const {
      showResult,
      choicesList,
      score,
      myChoiceId,
      opponentChoiceId,
      result,
    } = this.state

    return (
      <GameViewContainer>
        <ScoreBoard>
          <div>
            <MainHeading>
              Rock
              <br />
              Paper
              <br /> Scissors
            </MainHeading>
          </div>
          <ScoreCard>
            <ScoreLabel>Score</ScoreLabel>
            <Score>{score}</Score>
          </ScoreCard>
        </ScoreBoard>
        {showResult ? (
          <GameResultView
            choicesList={choicesList}
            myChoiceId={myChoiceId}
            opponentChoiceId={opponentChoiceId}
            onPlayAgain={this.onClickPlayAgain}
            gameResult={result}
          />
        ) : (
          <PlayingContainer>
            <PlayingButtonCard className="button-container">
              <ChoicesButton
                type="button"
                onClick={this.onClickRock}
                data-testid="rockButton"
              >
                <GameImages
                  src={choicesList[0].imageUrl}
                  alt={choicesList[0].id}
                />
              </ChoicesButton>
              <ChoicesButton
                type="button"
                onClick={this.onClickScissors}
                data-testid="scissorsButton"
              >
                <GameImages
                  src={choicesList[1].imageUrl}
                  alt={choicesList[1].id}
                />
              </ChoicesButton>
            </PlayingButtonCard>
            <ChoicesButton
              type="button"
              onClick={this.onClickPaper}
              data-testid="paperButton"
            >
              <GameImages
                src={choicesList[2].imageUrl}
                alt={choicesList[2].id}
              />
            </ChoicesButton>
          </PlayingContainer>
        )}

        <PopupContainer>
          <Popup
            modal
            trigger={<RulesButton type="button">RULES</RulesButton>}
            className="popup-content"
            contentStyle={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {close => (
              <>
                <CloseButton
                  type="button"
                  className="close-button"
                  data-testid="closeButton"
                  onClick={() => close()}
                >
                  <RiCloseLine
                    styledIcon={{color: '#223a5f', fontSize: '13px'}}
                  />
                </CloseButton>
                <GameRulesView />
              </>
            )}
          </Popup>
        </PopupContainer>
      </GameViewContainer>
    )
  }
}

export default GamePlayingView
