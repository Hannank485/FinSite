// Components LOCAL
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import type { investDataType } from "../Pages/Invest";
import { useState } from "react";

export function InvestType({
  handleNext,
  handleInvestment,
  investment,
}: {
  handleNext: () => void;
  investment: React.Dispatch<React.SetStateAction<investDataType>>;

  handleInvestment: (invest: string) => void;
}) {
  const handleReset = () => {
    investment(
      (prev) =>
        Object.fromEntries(
          Object.entries(prev).map(([key]) => [key, "0"]),
        ) as investDataType,
    );
  };
  return (
    <section className=" border border-card p-5 dark:border-darkCard animate-fade-left animate-once animate-ease-out animate-delay-100">
      <h2 className="text-2xl font-bold">Choose Investment Plan</h2>
      <p className="text-muted text-md dark:text-darkSecondary mb-4">
        Select how you want to invest.
      </p>
      <div className="flex flex-col items-center md:flex-row gap-4  ">
        <div
          className="border border-card  rounded-md hover:shadow-lg hover:bg-[#F1F5F9] dark:hover:bg-[#1F2933] transition-all ease-out dark:border-darkCard flex flex-col items-center px-8 py-5 w-64 cursor-pointer"
          onClick={() => {
            handleInvestment("lumpsum");
            handleReset();
            handleNext();
          }}
        >
          <h2 className="text-3xl rounded-md bg-softBG p-3 text-accent mb-2 dark:bg-darkSoftBG dark:text-darkAccent">
            <FaMoneyBillWave />
          </h2>
          <h2 className="text-2xl font-bold">Lump Sum</h2>
          <p className="text-muted text-sm dark:text-darkSecondary">
            Invest all at once
          </p>
        </div>
        <div
          className="border border-card  rounded-md hover:shadow-lg hover:bg-[#F1F5F9] dark:hover:bg-[#1F2933] transition-all ease-out dark:border-darkCard flex flex-col items-center px-8 py-5 w-64 cursor-pointer"
          onClick={() => {
            handleInvestment("sip");
            handleReset();
            handleNext();
          }}
        >
          <h2 className="text-3xl rounded-md bg-softBG p-3 text-accent mb-2 dark:bg-darkSoftBG dark:text-darkAccent">
            <FaMoneyBillTrendUp />
          </h2>
          <h2 className="text-2xl font-bold">SIP</h2>
          <p className="text-muted text-sm dark:text-darkSecondary">
            Regular smaller investment
          </p>
        </div>
      </div>
    </section>
  );
}
export function ErrorValidation({ errorType }: { errorType: string }) {
  return (
    <h1 className="font-bold text-sm text-red-600 dark:text-red-500">
      {errorType} cannot be 0 or less than 0
    </h1>
  );
}

export function LumpsumInvest({
  handleSubmit,
  handleBack,
  investment,
}: {
  handleSubmit: () => void;
  handleBack: () => void;
  investment: React.Dispatch<React.SetStateAction<investDataType>>;
  investmentData: investDataType;
}) {
  const handleChange = (field: string, value: string) => {
    investment((prev) => ({ ...prev, [field]: value }));
  };
  type errorCheckType = {
    principalError: boolean | null;
    tenureError: boolean | null;
    returnError: boolean | null;
  };
  const [errors, setErrors] = useState<errorCheckType>({
    principalError: null,
    tenureError: null,
    returnError: null,
  });
  const handleError = (
    e: React.ChangeEvent<HTMLInputElement>,
    typeError: string,
    changeType: string,
  ) => {
    if (Number(e.target.value) < 0 || Number(e.target.value) === 0) {
      setErrors((prev) => ({ ...prev, [typeError]: true }));
      e.target.value = "";
    } else {
      setErrors((prev) => ({ ...prev, [typeError]: false }));
      return handleChange(changeType, e.target.value);
    }
  };

  return (
    <>
      <section className=" border border-card p-5 dark:border-darkCard animate-fade-left animate-once animate-ease-out">
        <p
          className="text-muted text-md dark:text-darkSecondary cursor-pointer"
          onClick={handleBack}
        >
          <IoMdArrowRoundBack />
        </p>
        <h2 className="text-2xl font-bold">Lump Sum Investment</h2>
        <p className="text-muted text-md dark:text-darkSecondary mb-4">
          Calculate your returns on a one time Investment
        </p>
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label htmlFor="Principal">Principal Amount (USD)</label>
          {errors.principalError && <ErrorValidation errorType="Principle" />}

          <input
            type="number"
            name="Principal"
            className={`border-2   p-1 rounded-md focus:outline-none ${errors.principalError ? "focus:border-red-500 border-red-500 dark:border-red-400" : errors.principalError === null ? "border-card dark:border-darkCard" : "border-green-600 dark:border-green-500"}`}
            required
            onChange={(e) => {
              handleError(e, "principalError", "principle");
            }}
            max={999999999999}
            placeholder="0"
            step="0.01"
          />
          <label htmlFor="Year">Tenure (Years)</label>
          {errors.tenureError && <ErrorValidation errorType="Tenure" />}

          <input
            type="number"
            name="Year"
            className={`border-2   p-1 rounded-md focus:outline-none ${errors.tenureError ? "focus:border-red-500 border-red-500 dark:border-red-400" : errors.tenureError === null ? "border-card dark:border-darkCard" : "border-green-600 dark:border-green-500"}`}
            max={100}
            required
            onChange={(e) => {
              handleError(e, "tenureError", "time");
            }}
            placeholder="0"
            step="0.01"
          />
          <label htmlFor="roi">Rate of Return %</label>
          {errors.returnError && <ErrorValidation errorType="Rate of Return" />}

          <input
            type="number"
            name="roi"
            className={`border-2   p-1 rounded-md focus:outline-none ${errors.returnError ? "focus:border-red-500 border-red-500 dark:border-red-400" : errors.returnError === null ? "border-card dark:border-darkCard" : "border-green-600 dark:border-green-500"}`}
            required
            onChange={(e) => {
              handleError(e, "returnError", "return");
            }}
            max={200}
            placeholder="0"
            step="0.01"
          />
          <button
            type="submit"
            className="border cursor-pointer border-card dark:border-darkCard py-1 rounded-md mt-4 bg-accent dark:accent-active text-white "
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export function SipInvest({
  handleSubmit,
  handleBack,
  investment,
}: {
  handleSubmit: () => void;
  handleBack: () => void;
  investment: React.Dispatch<React.SetStateAction<investDataType>>;
  investmentData: investDataType;
}) {
  const handleChange = (field: string, value: string) => {
    investment((prev) => ({ ...prev, [field]: value }));
  };
  type errorCheckType = {
    principalError: boolean | null;
    tenureError: boolean | null;
    returnError: boolean | null;
  };
  const [errors, setErrors] = useState<errorCheckType>({
    principalError: null,
    tenureError: null,
    returnError: null,
  });
  const handleError = (
    e: React.ChangeEvent<HTMLInputElement>,
    typeError: string,
    changeType: string,
  ) => {
    if (Number(e.target.value) < 0 || Number(e.target.value) === 0) {
      setErrors((prev) => ({ ...prev, [typeError]: true }));
      e.target.value = "";
    } else {
      setErrors((prev) => ({ ...prev, [typeError]: false }));
      return handleChange(changeType, e.target.value);
    }
  };

  return (
    <>
      <section className=" border border-card p-5 dark:border-darkCard animate-fade-left animate-once animate-ease-out">
        <p
          className="text-muted text-md dark:text-darkSecondary cursor-pointer"
          onClick={handleBack}
        >
          <IoMdArrowRoundBack />
        </p>
        <h2 className="text-2xl font-bold">SIP Investment</h2>
        <p className="text-muted text-md dark:text-darkSecondary mb-4">
          Calculate your returns on regular monthly investment
        </p>
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();

            handleSubmit();
          }}
        >
          <label htmlFor="Principal">Principal Amount (Monthly) (USD)</label>
          {errors.principalError && <ErrorValidation errorType="Principle" />}
          <input
            type="number"
            name="Principal"
            className={`border-2   p-1 rounded-md focus:outline-none ${errors.principalError ? "focus:border-red-500 border-red-500 dark:border-red-400" : errors.principalError === null ? "border-card dark:border-darkCard" : "border-green-600 dark:border-green-500"}`}
            required
            onChange={(e) => {
              handleError(e, "principalError", "principle");
            }}
            max={999999999999}
            placeholder="0"
            step="0.01"
          />
          <label htmlFor="Year">Tenure (Years)</label>
          {errors.tenureError && <ErrorValidation errorType="Tenure" />}

          <input
            type="number"
            name="Year"
            className={`border-2   p-1 rounded-md focus:outline-none ${errors.tenureError ? "focus:border-red-500 border-red-500 dark:border-red-400" : errors.tenureError === null ? "border-card dark:border-darkCard" : "border-green-600 dark:border-green-500"}`}
            required
            onChange={(e) => {
              handleError(e, "tenureError", "time");
            }}
            max={100}
            placeholder="0"
            step="0.01"
          />

          <label htmlFor="roi">Rate of Return %</label>
          {errors.returnError && <ErrorValidation errorType="Rate of Return" />}

          <input
            type="number"
            name="roi"
            className={`border-2   p-1 rounded-md focus:outline-none ${errors.returnError ? "focus:border-red-500 border-red-500 dark:border-red-400" : errors.returnError === null ? "border-card dark:border-darkCard" : "border-green-600 dark:border-green-500"}`}
            required
            onChange={(e) => {
              handleError(e, "returnError", "return");
            }}
            max={200}
            placeholder="0"
            step="0.01"
          />
          <button
            type="submit"
            className="border cursor-pointer border-card dark:border-darkCard py-1 rounded-md mt-4 bg-accent dark:accent-active text-white "
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export function Result({
  handleBack,
  dataStr,
  handleNext,
  investment,
}: {
  handleBack: () => void;
  dataStr: investDataType;
  handleNext: () => void;
  investment: string;
}) {
  const data = Object.fromEntries(
    Object.entries(dataStr).map(([key, value]) => [key, Number(value)]),
  );
  let amount: number;
  let profit: number;
  let principle: number;
  if (investment === "lumpsum") {
    principle = data.principle;
    const calc1: number = 1 + data.return / 100;
    const calcFinal: number = Math.pow(calc1, data.time);
    amount = data.principle * calcFinal;
    profit = amount - principle;
  } else {
    const interest = data.return / 100;
    // prettier-ignore

    const months = data.time * 12;
    principle = data.principle * months;

    const monthlyReturn = Math.pow(1 + interest, 1 / 12) - 1;
    const calc1: number = 1 + monthlyReturn;
    const calc2: number = Math.pow(calc1, months) - 1;
    const calcFinal: number = (calc2 / monthlyReturn) * (1 + monthlyReturn);
    amount = data.principle * calcFinal;
    profit = amount - principle;
  }

  return (
    <>
      <section className=" border w-sm md:w-lg border-card p-5 dark:border-darkCard animate-fade-left animate-once animate-ease-out">
        <p
          className="text-muted text-md dark:text-darkSecondary cursor-pointer"
          onClick={handleBack}
        >
          <IoMdArrowRoundBack />
        </p>
        <h2 className="text-3xl text-center font-bold">
          {investment === "lumpsum" ? "Lump Sum Results" : "SIP Results"}
        </h2>
        <div className="flex flex-col md:flex-row w-full justify-between my-2 items-center">
          <p className="text-xl  text-muted dark:text-darkSecondary">
            Principal Amount:
          </p>
          <h2 className="text-xl ">
            $ {parseFloat(principle.toFixed(2)).toLocaleString("en-US")}
          </h2>
        </div>
        <div className="flex w-full flex-col md:flex-row justify-between mb-3 items-center">
          <p className="text-xl  text-muted dark:text-darkSecondary">
            Estimated Return:
          </p>
          <h2 className="text-xl ">
            $ {parseFloat(profit.toFixed(2)).toLocaleString("en-US")}
          </h2>
        </div>
        <div className="flex w-full flex-col md:flex-row justify-between items-center border-t border-card dark:border-darkCard">
          <p className="text-2xl font-bold ">Total Value:</p>
          <h2 className="text-2xl font-bold">
            $ {parseFloat(amount.toFixed(2)).toLocaleString("en-US")}
          </h2>
        </div>
        <button
          className="border w-full border-card cursor-pointer dark:border-darkCard py-3 rounded-md mt-4 bg-accent dark:accent-active text-white "
          onClick={handleNext}
        >
          Enter Again
        </button>
      </section>
    </>
  );
}
