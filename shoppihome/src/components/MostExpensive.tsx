import CardExpensive from "./shadcnComps/CardExpensive";

export default function MostExpensive() {
  return (
    <div className="w-full flex justify-center space-x-16 mt-4">
      <CardExpensive src="home1.png" alt="inget" title="Dyrt hus" />
      <CardExpensive src="apart.png" alt="not" title="Dyrt hus" />
      <CardExpensive src="home1.png" alt="inget" title="Dyrt hus" />
      <CardExpensive src="apart.png" alt="not" title="Dyrt hus" />
    </div>
  );
}
