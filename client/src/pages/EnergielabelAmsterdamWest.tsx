import StadsdeelLanding from "./StadsdeelLanding";

export default function EnergielabelAmsterdamWest() {
  return (
    <StadsdeelLanding
      stadsdeel="Amsterdam West"
      stadsdeelSlug="amsterdam-west"
      wijken={["Oud-West", "De Baarsjes", "Bos en Lommer", "Westerpark", "Overtoomse Veld"]}
      woningTypes="Veel vooroorlogse portiekwoningen, sociale woningbouw en gerenoveerde appartementen"
      extraInfo="Amsterdam West kent een grote verscheidenheid aan woningtypen, van de karakteristieke portiekflats in Bos en Lommer tot de gerenoveerde panden in Oud-West."
    />
  );
}
