import Farm from "./farm.client";

export default function FarmPage({
  params,
}: {
  params: Record<string, string | undefined>;
}) {
  return params.id && <Farm id={params.id} />;
}
