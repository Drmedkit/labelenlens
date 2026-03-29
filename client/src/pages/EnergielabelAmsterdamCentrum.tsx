import StadsdeelLanding from "./StadsdeelLanding";

export default function EnergielabelAmsterdamCentrum() {
  return (
    <StadsdeelLanding
      stadsdeel="Amsterdam Centrum"
      stadsdeelSlug="amsterdam-centrum"
      wijken={["Jordaan", "Grachtengordel", "De Wallen", "Nieuwmarkt", "Plantagebuurt"]}
      woningTypes="Historische grachtenpanden, monumentale woningen en compacte appartementen in het beschermd stadsgezicht"
      extraInfo="Het Centrum van Amsterdam kent veel monumentale panden en grachtenpanden die extra aandacht vragen bij de energieopname."
    />
  );
}
