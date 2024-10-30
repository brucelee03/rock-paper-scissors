import styled from 'styled-components'

export const GameViewContainer = styled.div`
  background-color: #223a5f;
  background-size: cover;
  height: 100vh;
  font-family: 'Roboto';
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ScoreBoard = styled.div`
  border: solid 2px #fff;
  border-radius: 10px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 23px;
  font-family: 'Bree Serif';

  @media screen and (max-width: 577px) {
    width: 96%;
  }
`

export const MainHeading = styled.h1`
  margin: 11px 0px;
  line-height: 1.2;
  color: #fff;
  font-size: 25px;
  font-weight: 500;

  @media screen and (max-width: 577px) {
    font-size: 22px;
  }
`

export const ScoreCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 120px;
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreLabel = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #223a5f;
  margin: 0;
`

export const Score = styled.p`
  font-size: 45px;
  font-weight: 600;
  color: #223a5f;
  font-family: 'Roboto';
  margin: 0;
`

export const ChoicesButton = styled.button`
  width: 18%;
  padding: 0;
  background-color: transparent;
  border-width: 0;

  @media screen and (max-width: 577px) {
    width: 42%;
  }
`

export const GameImages = styled.img`
  width: 100%;
`

export const PlayingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayingButtonCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  height: 36px;
  width: 67px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Bree Serif';
  color: #223a5f;
  border-radius: 8px;
  border-width: 0;
`

export const PopupContainer = styled.div`
  margin-left: auto;
`

export const RulesCard = styled.div`
  padding: 10px 40px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  border-radius: 0;
  border-width: 0;
  padding: 5px;
  width: 30px;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
`

export const ResultChoicesCard = styled(ResultContainer)`
  width: 18%;

  @media screen and (max-width: 577px) {
    width: 42%;
  }
`

export const ResultCard = styled(PlayingButtonCard)`
  gap: 120px;

  @media screen and (max-width: 577px) {
    gap: 60px;
  }
`
export const Contestant = styled.p`
  font-size: 20px;
  margin: 9px 0px;
  color: #ffffff;
  font-weight: 600;
`

export const Result = styled(Contestant)`
  font-size: 25px;
  margin-top: 0;
`

export const ResultButton = styled(RulesButton)`
  border-radius: 12px;
  width: 130px;
  height: 39px;
`
