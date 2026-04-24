export default function KPIBlock({
  name,
  value,
}: {
  name: string;
  value: number | undefined;
}) {
  return (
    <div className="space-y-0 min-w-28">
      <div className="">{name}</div>
      <div className="text-2xl font-semibold">{value || "..."}</div>
    </div>
  );
}
