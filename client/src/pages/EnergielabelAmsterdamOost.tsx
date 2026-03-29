import StadsdeelLanding from "./StadsdeelLanding";

export default function EnergielabelAmsterdamOost() {
  return (
    <StadsdeelLanding
      stadsdeel="Amsterdam Oost"
      stadsdeelSlug="amsterdam-oost"
      wijken={["Watergraafsmeer", "IJburg", "Indische Buurt", "Zeeburg", "Betondorp"]}
      woningTypes="Van tuindorp-architectuur in Betondorp en Watergraafsmeer tot moderne nieuwbouw op IJburg"
      extraInfo="Amsterdam Oost combineert historische tuindorpen met de modernste nieuwbouwwijken van de stad, zoals IJburg."
    />
  );
}
