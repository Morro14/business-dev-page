export default function ErrorBlock({ errorMsg }: { errorMsg: string }) {
  return <p className="text-sm text-red-500">{errorMsg}</p>;
}
