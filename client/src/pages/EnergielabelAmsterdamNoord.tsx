import StadsdeelLanding from "./StadsdeelLanding";

export default function EnergielabelAmsterdamNoord() {
  return (
    <StadsdeelLanding
      stadsdeel="Amsterdam Noord"
      stadsdeelSlug="amsterdam-noord"
      wijken={["Nieuwendam", "Buiksloot", "NDSM-werf", "Tuindorp Oostzaan", "Vogelbuurt"]}
      woningTypes="Veel naoorlogse woningen, tuindorpen en nieuwe ontwikkelingen rond het IJ"
      extraInfo="Amsterdam Noord is een opkomend stadsdeel met een mix van historische tuindorpen en nieuwe creatieve ontwikkelgebieden."
    />
  );
}
