import StadsdeelLanding from "./StadsdeelLanding";

export default function EnergielabelAmsterdamZuid() {
  return (
    <StadsdeelLanding
      stadsdeel="Amsterdam Zuid"
      stadsdeelSlug="amsterdam-zuid"
      wijken={["De Pijp", "Rivierenbuurt", "Buitenveldert", "Zuidas", "Museumkwartier"]}
      woningTypes="Mix van vooroorlogse herenhuizen, jaren '30 woningen en moderne appartementen rond de Zuidas"
      extraInfo="Amsterdam Zuid staat bekend om de karakteristieke vooroorlogse architectuur en de mix van klassieke herenhuizen en moderne nieuwbouw bij de Zuidas."
    />
  );
}
