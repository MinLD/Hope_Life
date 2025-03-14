import { useState } from "react";
import FromUS from "./FromUS";
import ProgressBar from "./ProcessBar";
import FromUT from "./FromUT";

export default function RecruiterForm() {
  const [step, setStep] = useState(1);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <ProgressBar step={step} />
      <div className="rounded-lg shadow-md">
        {step === 1 && <FromUS setStep={setStep} />}

        {step === 2 && <FromUT />}
      </div>
    </div>
  );
}
