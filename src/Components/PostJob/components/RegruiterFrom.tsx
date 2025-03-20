import FromUS from "./FromUS";

export default function RecruiterForm() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      {/* <ProgressBar step={step} /> */}
      <div className="rounded-lg shadow-md">
        <FromUS />

        {/* {step === 2 && <FromUT />} */}
      </div>
    </div>
  );
}
