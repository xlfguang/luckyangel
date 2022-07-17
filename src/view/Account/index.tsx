import { Box, Card } from "@pancakeswap/uikit";
import { useTranslation } from "react-i18next";
import Page from "src/Page";
import styled from "styled-components";
interface BgSvgProps {
  bgType?: number;
}
const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;
export const ContainerSpacing2 = styled(GridContainer)`
  width: calc(100% + 16px);
  margin: -8px;
`;

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

export const AccountCard = styled(Card)<BgSvgProps>`
  padding: 20px;
  justify-content: center;
  margin: 30px auto auto;
  border-radius: 35px;
  background: linear-gradient(to right, #439ca5, #6fd5d0);
`;

export const AccountItem = styled(Card)<BgSvgProps>`
  padding: 0;
  height: 150px;
  background: linear-gradient(to right, #439ca5, #6fd5d0);
  p {
    font-size: 1.2rem;
    line-height: 2.5;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    letter-spacing: 0.00938em;
  }
  h4 {
    font-family: "Montserrat Medium";
    color: #006dccde;
    font-weight: bolder;
    font-size: 38px;
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
  background: #294d5d;

  & > p {
    font-family: Montserrat Medium;
    font-weight: normal;
    font-size: 1rem;
    color: #fff;
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
export default function Account() {
  const { t } = useTranslation();
  return (
    <Page>
      <Box width="80%">
        <ContainerSpacing2>
          <GridItem sm="100%" lg="100%">
            <AccountCard bgType={3}>
              <AccountItem background="linear-gradient(to right,#439ca5,#6fd5d0)">
                <p>{t("Your Balance")}</p>
                <h4>${0}</h4>
                <p>{0} EGG</p>
              </AccountItem>
            </AccountCard>
          </GridItem>
          <GridItem sm="100%" lg="100%">
            <AccountCard bgType={2}>
              <AccountItem background="linear-gradient(to right,#439ca5,#6fd5d0)">
                <p>{t("APY")}</p>
                <h4>{0}%</h4>
                <p>
                  {t("Daily ROI")} {0}%
                </p>
              </AccountItem>
            </AccountCard>
          </GridItem>
          <GridItem sm="100%" lg="100%">
            <AccountCard bgType={1}>
              <AccountItem background="linear-gradient(to right,#439ca5,#6fd5d0)">
                <p>{t("Next Rebase:")}</p>
                <h4>{"00:00"}</h4>
                <p>{t("You will earn money soon")}</p>
              </AccountItem>
            </AccountCard>
          </GridItem>
        </ContainerSpacing2>
      </Box>
      <Box width="80%">
        <AccountCard bgType={0}>
          <DataRow>
            <p>{t("Current EGG Price")}</p>
            <h5>${0}</h5>
          </DataRow>
          <DataRow>
            <p>{t("Next Reward Amount")}</p>
            <h5>{0} EGG</h5>
          </DataRow>
          <DataRow>
            <p>{t("Next Reward Amount USD")}</p>
            <h5>${0}</h5>
          </DataRow>
          <DataRow>
            <p>{t("Next Reward Yield")}</p>
            <h5>0.021447%</h5>
          </DataRow>
          <DataRow>
            <p>{t("ROI(1-Day Rate) USD")}</p>
            <h5>${0}</h5>
          </DataRow>
          <DataRow>
            <p>{t("ROI(5-Day Rate)")}</p>
            <h5>{0}%</h5>
          </DataRow>
          <DataRow>
            <p>{t("ROI(5-Day Rate) USD")}</p>
            <h5>${0}</h5>
          </DataRow>
        </AccountCard>
      </Box>
    </Page>
  );
}
