import { useState } from "react";
import {
  InvestType,
  LumpsumInvest,
  Result,
  SipInvest,
} from "./Components/investForm";
export type investDataType = {
  principle: string;
  return: string;
  time: string;
};
function Invest() {
  // INPUT VALUES FOR INVESTMENT

  const [investmentData, setInvestmentData] = useState<investDataType>({
    principle: "0",
    return: "0",
    time: "0",
  });
  // INVESTMENT AND STEPS
  const [investment, setInvestment] = useState<"lumpsum" | "sip" | "">("");
  const [step, setStep] = useState<1 | 2 | 3>(1);
  //   NEXT FUNCTION
  const handleInvesment = (invest: string) => {
    setInvestment(invest as "lumpsum" | "sip");
  };
  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setInvestment("");
      setStep(1);
    }
  };
  //   BACK FUNCTION
  const handleBack = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
      setInvestment("");
    }
  };
  const handleSubmit = () => {
    handleNext();
  };
  return (
    <div className="flex flex-col items-center ">
      <section className="text-center mb-8 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          Investment Calculator
        </h1>
        <p className="text-lg md:text-xl max-w-md md:max-w-3xl text-muted dark:text-darkSecondary">
          Forecast your financial future. Choose an investment type and see your
          potential growth.
        </p>
      </section>
      {/* TO DISPLAY CARDS */}
      {step === 1 && investment === "" && (
        <InvestType
          handleNext={handleNext}
          investment={setInvestmentData}
          handleInvestment={handleInvesment}
        />
      )}
      {step === 2 && investment === "lumpsum" && (
        <LumpsumInvest
          handleSubmit={handleSubmit}
          handleBack={handleBack}
          investment={setInvestmentData}
          investmentData={investmentData}
        />
      )}
      {step === 2 && investment === "sip" && (
        <SipInvest
          handleSubmit={handleSubmit}
          handleBack={handleBack}
          investment={setInvestmentData}
          investmentData={investmentData}
        />
      )}
      {step === 3 && (
        <Result
          investment={investment}
          handleBack={handleBack}
          dataStr={investmentData}
          handleNext={handleNext}
        />
      )}
    </div>
  );
}

export default Invest;
