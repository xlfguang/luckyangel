import React from 'react'
import styled from 'styled-components'
import { Box, Flex, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from 'react-i18next'


interface BgSvgProps {
  bgType: number;
}

const getBgSvg = ({ bgType }: BgSvgProps) => {

  const bg = bgType % 4;
  switch (bg) {
    case 0:
      return "icon-bg-total-staked";
    case 1:
      return "icon-bg-my-staked";
    case 2:
      return "icon-bg-my-hashrate";
    case 3:
      return "icon-bg-harvest";
    default:
      return "icon-bg-harvest";
  }

}

const TakePartRoot = styled(Box)`
  display: block;
  box-sizing: border-box;
  border-radius: 13.5px;
  padding-bottom: 40px;
  color: #280D5F;
  margin: 24px 0;

  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 1000px;
    height: 588px;
    box-sizing: border-box;
    /* background: #18182c; */
    border-radius: 35px;
    padding: 0 56px;
    color: #280D5F;
  }
  
`

const PartTitle = styled(Box)`
  padding-top: 11px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 40px auto;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
  }
  
`

const PartBox = styled(Box)`
  padding-top: 16px;
  display: flex;
  flex-direction: row;
`


const PartImage = styled(Box)`
  width: max-content;
  position: relative;
  & img {
    width: 24px;
    height: 28px;
  }

  & div {
    position: absolute;
    left: 0px;
    top: 0px; 
    width: 100%; 
    height: 100%;
    color: rgb(255, 255, 255);  
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & img {
      width: 48px;
      height: 56px;
    }
  }
`

const PartLine = styled(Box)`
  width: 1px;
  height: 64px;
  background-color: #1d2237;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 3px;
    height: 80px;
  }


`

const PartStep = styled(Box) <BgSvgProps>`
 

  ${({ bgType, theme }) => {

    if (bgType === 0) {
      return `background-color:  ${theme.colors.backgroundAlt};`
    }

    if (bgType > 0) {
      return `
        background-color:  ${theme.colors.backgroundAlt};
        background-image: linear-gradient(to right, #439ca5, #6fd5d0);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 100% 100%; 
        `
    }

    return ''

  }};




    & .step-title {
      padding-top: 21px;
      font-size: 14px;
    }

    & .step-text {
      padding-top: 16px;
      font-size: 12px;
      color: #2e3042;
  
    }


    width: 100%;
    border-radius: 15px;
    box-sizing: border-box;
    padding: 8px;
    font-weight: 700;
    color: #fff;

    ${({ theme }) => theme.mediaQueries.lg} {
      width: 390px;
      height: 112px;
      border-radius: 35px;
      padding: 0 19px;
    }

   
`
/* style



    padding-left: 20px;
    flex: 1;
}
.me-fx-col-sb-c {
    align-items: center;
}
.me-fx-col-sb, .me-fx-col-sb-c {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

*/


const TakePart = () => {
  const { t } = useTranslation()
  const { isMobile,isDesktop } = useMatchBreakpoints()

  return (
    <>
      {
        isDesktop ?
        
          <TakePartRoot>
            <PartTitle>{t('How to Take Part')}</PartTitle>
            <Flex justifyContent="center" >
              <Flex justifyContent="center" alignItems="center" flexDirection="column">
                <PartStep bgType={3}>
                  <div className="step-title">{t('Commit The CONTRIBUTION')}</div>
                  <div className="step-text"> {t('Max limit for Ordinary User is USDT100 and Collab User is USDT200')}</div>
                </PartStep>
              </Flex>
              <Flex justifyContent="center" alignItems="center" flexDirection="column" px={30}>
                <PartImage>
                  <img src="https://www.eggplus.org/img/icon_bg.png" alt="pic" />
                  <Flex justifyContent="center" alignItems="center"> | </Flex>
                </PartImage>
                <PartLine />
                <PartImage>
                  <img src="https://www.eggplus.org/img/icon_bg.png" alt="pic" />
                  <Flex justifyContent="center" alignItems="center"> || </Flex>
                </PartImage>
                <PartLine />
                <PartImage>
                  <img src="https://www.eggplus.org/img/icon_bg.png" alt="pic" />
                  <Flex justifyContent="center" alignItems="center"> ||| </Flex>
                </PartImage>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center" flexDirection="column">
                <PartStep bgType={2}>
                  <div className="step-title">{t('Get USDT From CEX/DEX')}</div>
                  <div className="step-text"> {t('You can exchange other currencies into USDT on centralized or decentralized exchanges.')} </div>
                </PartStep>
                <PartStep bgType={1}>
                  <div className="step-title">{t('Claim Lucky Angel')}</div>
                  <div className="step-text"> {t('After IDO, you can claim and transfer $Lucky Angel to your wallet.')} </div>
                </PartStep>
              </Flex>
            </Flex>
          </TakePartRoot>

          :

          <TakePartRoot>
            <PartTitle>{t('How to Take Part')}</PartTitle>
            <PartBox>
              <Flex justifyContent="center" alignItems="center" flexDirection="column">
                <PartImage>
                  <img src="https://www.eggplus.org/img/icon_bg.png" alt="pic" />
                  <Flex justifyContent="center" alignItems="center"> | </Flex>
                </PartImage>
                <PartLine />
                <PartImage>
                  <img src="https://www.eggplus.org/img/icon_bg.png" alt="pic" />
                  <Flex justifyContent="center" alignItems="center"> || </Flex>
                </PartImage>
                <PartLine />
                <PartImage>
                  <img src="https://www.eggplus.org/img/icon_bg.png" alt="pic" />
                  <Flex justifyContent="center" alignItems="center"> ||| </Flex>
                </PartImage>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center" flexDirection="column" pl={20}>
                <PartStep bgType={3}>
                  <div className="step-title">{t('Get USDT From CEX/DEX')}</div>
                  <div className="step-text"> {t('You can exchange other currencies into USDT on centralized or decentralized exchanges.')} </div>
                </PartStep>
                <PartStep bgType={2} mt={10}>
                  <div className="step-title">{t('Commit The CONTRIBUTION')}</div>
                  <div className="step-text"> {t('Max limit for Ordinary User is USDT100 and Collab User is USDT200')} </div>
                </PartStep>
                <PartStep bgType={1} mt={10}>
                  <div className="step-title">{t('Claim Lucky Angel')}</div>
                  <div className="step-text"> {t('After IDO, you can claim and transfer $Lucky Angel to your wallet.')} </div>
                </PartStep>
              </Flex>
            </PartBox>
          </TakePartRoot>
      }




    </>
  )
}

export default TakePart