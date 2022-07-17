import styled from "styled-components";
import { Box } from "@pancakeswap/uikit";

const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;
export default GridContainer;

export const ContainerSpacing2 = styled(GridContainer)`
  width: calc(100% + 16px);
  margin: -8px;
`;

export const ContainerSpacing3 = styled(GridContainer)`
  width: calc(100% + 24px);
  margin: -12px;
`;

interface BgSvgProps {
  bgType?: number;
}

const getBgSvg = ({ bgType }: BgSvgProps) => {
  const bg = (bgType as number) % 4;
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
};

export const GridItem = styled.div<{ sm?: string; lg?: string }>`
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
  padding: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: ${({ sm }) => sm ?? "50%"};
    flex-basis: ${({ sm }) => sm ?? "50%"};
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: ${({ lg }) => lg ?? "33.333333%"};
    flex-basis: ${({ lg }) => lg ?? "33.333333%"};
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    max-width: ${({ lg }) => (lg === "100%" ? "33.333333%" : lg)};
    flex-basis: ${({ lg }) => (lg === "100%" ? "33.333333%" : lg)};
  }
`;

const Card = styled(Box)<BgSvgProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;

  ${({ bgType, theme }) => {
    if (bgType === 0) {
      return `background-color:  ${theme.colors.backgroundAlt};`;
    }

    if ((bgType as number) > 0) {
      return `
            background-color:  ${theme.colors.backgroundAlt};
            background-image: url(../img/${getBgSvg({ bgType })}.svg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 100% 100%; 
            `;
    }

    return "";
  }};
`;

export const DashboardCard = styled(Card)<BgSvgProps>`
  padding: 13px 0;

  & > .title {
    font-family: Montserrat Medium;
    font-weight: 500;
    font-size: 1rem;
    color: #ecebeb;
    padding: 3px 0;
  }

  & > .value {
    font-family: Montserrat Bold;
    font-size: 1.3118rem;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.success};
  }
`;

export const BannerCard = styled(Box)`
  background: url(../img/banner.2224160a.png) 0% 0% / 100% 100% rgb(24, 24, 44);
  border-radius: 35px;
`;

export const IndividualdCard = styled(Card)<BgSvgProps>`
  border-radius: 35px;
  height: 100px;
  margin-top: 1.3rem;
  & > .title {
    font-family: Montserrat Medium;
    font-weight: 500;
    font-size: 1rem;
    color: #676c9b;
    padding: 5px 0;
  }
  & > .value {
    font-family: Montserrat Bold;
    font-size: 1.5rem;
    color: #fff;
  }
`;

export const AccountCard = styled(Card)<BgSvgProps>`
  padding: 20px;
  justify-content: center;
  margin: 30px auto auto;
  border-radius: 35px;
`;

export const AccountItem = styled(Card)<BgSvgProps>`
  padding: 15px 10px;
  height: 150px;
  & > p {
    color: #f3f0f0de;
    font-size: 1.2rem;
    line-height: 2.5;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    letter-spacing: 0.00938em;
  }
  & > h4 {
    font-family: "Montserrat Medium";
    color: ${({ theme }) => theme.colors.success};
    font-weight: bolder;
    font-size: 2.125rem;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }
`;

export const DataRow = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid #1d2237;
  padding: 10px 30px;

  & > p {
    font-family: Montserrat Medium;
    font-weight: normal;
    font-size: 1rem;
    color: #676c9b;
    line-height: 1;
    letter-spacing: 0.00938em;
  }

  & > h5 {
    color: #f3f0f0de;
    font-family: "Montserrat Medium";
    font-weight: bolder;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
    margin: 0;
  }
`;
export const CalculatorCard = styled(Card)<BgSvgProps>`
  background-color: #294d5d;
  position: relative;
  z-index: 2;
  border-radius: 35px;
  padding: 50px;
  width: 95%;
  margin: 0 auto;
`;

export const CalculatorGrid = styled(GridContainer)`
  flex-direction: column;
`;

export const CalculatorItem = styled(Box)`
  padding: 8px;
  margin: 0;
  box-sizing: border-box;
`;

export const CalculatorHeader = styled(Box)`
  & > .title {
    font-family: Montserrat Bold;
    font-weight: 700;
    font-size: 20px;
    color: #fff;
    margin-bottom: 4px;
  }
  & > .subtitle {
    font-family: Montserrat SemiBold;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #676c9b;
  }
`;

export const CalculatorMetrics = styled(Box)`
  display: flex;
  width: 100%;
  padding: 0;
  text-align: center;
  margin-top: 10px;
`;

export const CalculatorItemCard = styled(DashboardCard)`
  padding: 0;
  & > .title {
    margin-bottom: 10px;
  }
  & > .value {
    font-size: 1.5rem;
  }
`;

export const CalculatorInputWrapItem = styled(DashboardCard)`
  padding: 12px;
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 50%;
    flex-basis: 50%;
  }
`;

export const CalculatorWrapDays = styled.p`
  font-family: Montserrat Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;
`;

export const CalculatorUserData = styled(Box)`
  justify-content: center;
  padding: 0 5px;
  margin-top: 30px;
`;

export const CalculatorUserDataRow = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  & > .name {
    font-family: Montserrat Medium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #676c9b;
  }
  & > .value {
    font-family: Montserrat;
    font-size: 14px;
    line-height: 17px;
    color: #fff;
  }
`;

export const MedalCard = styled(Card)<BgSvgProps>`
  border-radius: 35px;
  min-height: 170px;
  margin-top: 1.3rem;
  & > .title {
    font-family: Montserrat Medium;
    font-weight: 800;
    font-size: 24px;
    color: #fff;
    padding: 3px 10px;
    text-align: center;
    margin: 5px 0;
  }
  & > .value {
    font-size: 30px;
    font-family: Montserrat Medium;
    color: ${({ theme }) => theme.colors.success};
    font-weight: 700;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }
`;
export const MedalClaim = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  color: #8e94bb;
  display: inline-block;
  margin-right: 20px;
  vertical-align: middle;
`;

export const MedalAddressTitle = styled.span`
    font-weight: 700;
    color: #fff;
    font-size: 30px;
    display: inline-block;
    margin-top: 10px;
    word-break: break-all;
}
`;

export const MedalAddressValue = styled.span`
  font-weight: 700;
  display: inline-block;
  color: ${({ theme }) => theme.colors.success};
  margin-left: 10px;
  margin-top: 10px;
  font-size: 20px;
  word-break: break-all;
`;

export const RewardContent = styled.div`
  font-size: 18px;
  width: 100%;
  color: #fff;
  line-height: 1.5;
  margin: 30px auto;

  & > h1 {
    margin-bottom: 20px;
  }

  & > p {
    font-size: 16px;
    color: #676c9b;
  }
`;
export const RewardCard = styled(Card)<BgSvgProps>`
  border-radius: 35px;
  min-height: 170px;
  margin-top: 1.3rem;

  & > .title {
    font-family: Montserrat Medium;
    font-weight: 800;
    font-size: 1.3rem;
    color: rgba(243, 240, 240, 0.87);
    padding: 3px 0;
  }

  & > .value {
    font-size: 1.8rem;
    font-family: Montserrat Medium;
    color: ${({ theme }) => theme.colors.success};
    font-weight: bolder;
    line-height: 1.235;
    letter-spacing: 0.00735em;
    margin: 5px 0;
  }
`;

export const RewardPartnerBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
`;

const RewardPartnerSide = styled.div<{ color?: string }>`
  padding: 40px;
  box-sizing: border-box;
  border-radius: 50px;

  & > h1 {
    text-align: center;
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  & > .btn_box {
    text-align: center;
    margin: 0 auto;

    & :last-child {
      margin-left: 10px;
    }
  }
`;

export const RewardPartnerLeft = styled(RewardPartnerSide)`
  width: 100%;
  max-width: 100%;
  flex-basis: 100%;
  margin-bottom: 20px;

  border: 1px solid ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.success};

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 60%;
    flex-basis: 60%;
    margin-bottom: 0px;
  }

  & button {
    width: 45%;
    ${({ theme }) => theme.mediaQueries.sm} {
      font-size: 24px;
    }
  }
`;

export const RewardPartnerRight = styled(RewardPartnerSide)`
  width: 100%;
  max-width: 100%;
  flex-basis: 100%;

  border: 1px solid ${({ theme }) => theme.colors.failure};
  color: ${({ theme }) => theme.colors.failure};

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 36%;
    flex-basis: 36%;
    margin-bottom: 0px;
  }

  & button {
    width: 100%;
    ${({ theme }) => theme.mediaQueries.sm} {
      font-size: 24px;
    }
  }
`;

export const IdoDesc = styled(Box)`
  background: #18182c;
  box-sizing: border-box;
  padding: 15px;
  box-shadow: none;
  border-radius: 13px;
  color: #fff;

  & .desc-image {
    padding: 10px 0 0;
  }

  & .desc-title {
    font-size: 18px;
    padding: 8px 0 12px;
    font-weight: 700;
    border-bottom: 1px solid #1d2237;
  }

  & .entry {
    padding-top: 10px;
  }

  & .progress {
    padding: 8px 0 10px;

    & .list-title {
      padding-bottom: 6px;
      color: #fff;
      font-size: 14px;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 520px;
    margin-bottom: 60px;
    padding: 20px 35px;
    border-radius: 35px;
    margin: 24px auto;

    & .desc-image {
      padding: 30px 0 0;
    }

    & .desc-title {
      padding: 16px 0 22px;
    }

    & .entry {
      padding-top: 45px;
    }

    & .progress {
      padding: 10px 0;
    }
  }
`;

export const IdoMe = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;

  & .image {
    width: 78px;
    height: 78px;
    border-radius: 50%;
  }

  & .image-title {
    font-weight: 600;
    padding-top: 6px;
    font-size: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    & .image-title {
      padding-top: 20px;
      font-size: 20px;
    }
  }
`;

export const IdoEntryList = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-top: 6px;

    font-size: 12px;
    font-weight: 400;

    & .title {
        width: 115px;
        transform: scale(.9);
        color: #8e94bb;
        font-size: 14px;
    }

    & .content {
        font-size: 14px;
    }






    ${({ theme }) => theme.mediaQueries.md} {
        padding-top: 10px;

        & .title {
            width: unset;
            transform: scale(1);
        }

        & .content {
            font-size: 16px;
        }
     
    }
    
    }
`;

export const IdoProgressbar = styled(Box)`
  padding-right: 0;
  margin-right: 0;

  width: 100%;
  box-sizing: border-box;

  display: inline-block;
  vertical-align: middle;

  & .outer {
    height: 24px;
    border-radius: 100px;
    background-color: #1d2237;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
  }

  & .inner {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradients.success};
    text-align: right;
    border-radius: 100px;
    white-space: nowrap;
    transition: width 0.6s ease;
    line-height: 20px;
  }

  & .innerText {
    color: #090a19;
    font-size: 12px;
    margin: 0 5px;
    display: inline-block;
    color: #ffffff;
    vertical-align: middle;
  }
`;

export const IdoTitle = styled(Box)`
  padding-bottom: 6px;
  color: #676c9b;
  font-size: 14px;
`;
