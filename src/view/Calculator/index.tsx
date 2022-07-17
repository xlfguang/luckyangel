import { Slider } from "@pancakeswap/uikit";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import GridContainer, {
  CalculatorCard,
  CalculatorGrid,
  CalculatorHeader,
  CalculatorInputWrapItem,
  CalculatorItem,
  CalculatorItemCard,
  CalculatorMetrics,
  CalculatorUserData,
  CalculatorUserDataRow,
  CalculatorWrapDays,
  ContainerSpacing3,
  GridItem,
} from "src/components/GridContainer";
import InputWrap from "src/components/InputWrap";
import Page from "src/Page";

export default function Calculator() {
  const { t } = useTranslation();
  const [sliderValue, setsliderValue] = useState(0);
  const sliderValueChange = (e: any) => {
    console.log(e);
    setsliderValue(e.target.value);
  };
  return (
    <Page>
      <div style={{ maxWidth: "833px", margin: "0 auto" }}>
        <CalculatorCard>
          <CalculatorGrid>
            <CalculatorItem>
              <CalculatorHeader>
                <p className="title">{t("Calculator")}</p>
                <p className="subtitle">{t("Estimate your returns")}</p>
              </CalculatorHeader>
            </CalculatorItem>
            <CalculatorItem>
              <CalculatorMetrics>
                <GridContainer>
                  <GridItem>
                    <CalculatorItemCard>
                      <p className="title">{t("EGG Price")}</p>
                      <p className="value">${0}</p>
                    </CalculatorItemCard>
                  </GridItem>
                  <GridItem>
                    <CalculatorItemCard>
                      <p className="title">{t("Current APY")}</p>
                      <p className="value">{0}%</p>
                    </CalculatorItemCard>
                  </GridItem>
                  <GridItem>
                    <CalculatorItemCard>
                      <p className="title">{t("Your EGGPLUS Balance")}</p>
                      <p className="value">{0} EGG</p>
                    </CalculatorItemCard>
                  </GridItem>
                </GridContainer>
              </CalculatorMetrics>
            </CalculatorItem>

            <div>
              <div style={{ width: "100%", marginTop: "25px" }}>
                <ContainerSpacing3>
                  <CalculatorInputWrapItem>
                    <InputWrap
                      title={t("EGGPLUS Amount")}
                      text={t("Max")}
                      defaultVal="0"
                      readOnly={false}
                    />
                  </CalculatorInputWrapItem>
                  <CalculatorInputWrapItem>
                    <InputWrap
                      title={t("APY (%)")}
                      text={t("Current")}
                      readOnly
                      defaultVal="0"
                    />
                  </CalculatorInputWrapItem>
                  <CalculatorInputWrapItem>
                    <InputWrap
                      title={t("EGGPLUS Price at purchase ($)")}
                      text={t("Current")}
                      defaultVal="0"
                      readOnly={false}
                    />
                  </CalculatorInputWrapItem>
                  <CalculatorInputWrapItem>
                    <InputWrap
                      title={t("Future EGGPLUS market price ($)")}
                      text={t("Current")}
                      defaultVal="0"
                      readOnly={false}
                    />
                  </CalculatorInputWrapItem>
                </ContainerSpacing3>
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <CalculatorWrapDays>
                {sliderValue}
                {t("days")}
              </CalculatorWrapDays>
              <Slider
                defaultValue={10}
                min={1}
                max={365}
                value={sliderValue}
                onChange={(e) => {
                  sliderValueChange(e);
                }}
                name="days"
                step={1}
                onValueChanged={function (newValue: number): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>

            <CalculatorUserData>
              <CalculatorUserDataRow>
                <p className="name">{t("Your initial investment")}</p>
                <p className="value">${0}</p>
              </CalculatorUserDataRow>
              <CalculatorUserDataRow>
                <p className="name">{t("Current wealth")}</p>
                <p className="value">${0}</p>
              </CalculatorUserDataRow>
              <CalculatorUserDataRow>
                <p className="name">{t("EGGPLUS rewards estimation")}</p>
                <p className="value">{0} EGG</p>
              </CalculatorUserDataRow>
              <CalculatorUserDataRow>
                <p className="name">{t("Potential return")}</p>
                <p className="value">${0}</p>
              </CalculatorUserDataRow>
            </CalculatorUserData>
          </CalculatorGrid>
        </CalculatorCard>
      </div>
    </Page>
  );
}
