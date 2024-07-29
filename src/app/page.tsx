import { useServerTest } from "./actions";

export default async function Home() {
  const result = await useServerTest();
  return <div>Mensagem: {result?.message ?? "vazia"}</div>;
}
