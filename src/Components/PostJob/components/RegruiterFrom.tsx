import FromUS from "./FromUS";
type Props = { type?: string };
export default function RecruiterForm({ type }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      {/* <ProgressBar step={step} /> */}
      <div className="rounded-lg shadow-md">
        <FromUS type={type} />

        {/* {step === 2 && <FromUT />} */}
      </div>
    </div>
  );
}
