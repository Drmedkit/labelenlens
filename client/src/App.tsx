import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Energielabel from "@/pages/Energielabel";
import Fotografie from "@/pages/Fotografie";
import NotFound from "@/pages/not-found";
import EnergielabelAmsterdam from "@/pages/EnergielabelAmsterdam";
import Energielabels from "@/pages/Energielabels";
import WwsPuntentelling from "@/pages/WwsPuntentelling";
import Nen2580Metingen from "@/pages/Nen2580Metingen";
import EnergielabelKosten from "@/pages/EnergielabelKosten";
import EnergielabelWoning from "@/pages/EnergielabelWoning";
import EnergielabelHuurwoning from "@/pages/EnergielabelHuurwoning";
import EnergielabelVerplicht from "@/pages/EnergielabelVerplicht";
import EnergielabelVerbeteren from "@/pages/EnergielabelVerbeteren";
import EnergielabelAmsterdamZuid from "@/pages/EnergielabelAmsterdamZuid";
import EnergielabelAmsterdamWest from "@/pages/EnergielabelAmsterdamWest";
import EnergielabelAmsterdamOost from "@/pages/EnergielabelAmsterdamOost";
import EnergielabelAmsterdamNoord from "@/pages/EnergielabelAmsterdamNoord";
import EnergielabelAmsterdamCentrum from "@/pages/EnergielabelAmsterdamCentrum";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/energielabel" component={Energielabel} />
      <Route path="/energielabels" component={Energielabels} />
      <Route path="/energielabel-aanvragen-amsterdam/" component={EnergielabelAmsterdam} />
      <Route path="/fotografie" component={Fotografie} />
      <Route path="/wws-puntentelling/" component={WwsPuntentelling} />
      <Route path="/nen-2580-metingen/" component={Nen2580Metingen} />
      {/* SEO content pages */}
      <Route path="/energielabel-kosten" component={EnergielabelKosten} />
      <Route path="/energielabel-woning" component={EnergielabelWoning} />
      <Route path="/energielabel-huurwoning" component={EnergielabelHuurwoning} />
      <Route path="/energielabel-verplicht" component={EnergielabelVerplicht} />
      <Route path="/energielabel-verbeteren" component={EnergielabelVerbeteren} />
      {/* Amsterdam district pages */}
      <Route path="/energielabel-amsterdam-zuid" component={EnergielabelAmsterdamZuid} />
      <Route path="/energielabel-amsterdam-west" component={EnergielabelAmsterdamWest} />
      <Route path="/energielabel-amsterdam-oost" component={EnergielabelAmsterdamOost} />
      <Route path="/energielabel-amsterdam-noord" component={EnergielabelAmsterdamNoord} />
      <Route path="/energielabel-amsterdam-centrum" component={EnergielabelAmsterdamCentrum} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
