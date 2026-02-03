import { useParams, Navigate } from "react-router-dom";
import AembitWorkPage from "./AembitWorkPage";
import Dash0WorkPage from "./Dash0WorkPage";
import ApolloWorkPage from "./ApolloWorkPage";
import TheRaumObjectsWorkPage from "./TheRaumObjectsWorkPage";
import HubspaceWorkPage from "./HubspaceWorkPage";
import KoppicoWorkPage from "./KoppicoWorkPage";
import KommaWorkPage from "./KommaWorkPage";
import AFuckingGoodCoffeeWorkPage from "./AFuckingGoodCoffeeWorkPage";
import BerabucksWorkPage from "./BerabucksWorkPage";
import MediflowWorkPage from "./MediflowWorkPage";
import GunsevenWorkPage from "./GunsevenWorkPage";
import TrackFitWorkPage from "./TrackFitWorkPage";
import FleureaWorkPage from "./FleureaWorkPage";
import WorldOfMonstersWorkPage from "./WorldOfMonstersWorkPage";
import KokkopiWorkPage from "./KokkopiWorkPage";
import ServiscellWorkPage from "./ServiscellWorkPage";
import SodekWorkPage from "./SodekWorkPage";
import ErasmusportWorkPage from "./ErasmusportWorkPage";
import NeredeNeYenirWorkPage from "./NeredeNeYenirWorkPage";

export default function WorkDetailPage() {
  const { slug } = useParams();

  if (!slug) {
    return <Navigate to="/work" replace />;
  }

  if (slug === "aembit") {
    return <AembitWorkPage />;
  }
  if (slug === "dash0") {
    return <Dash0WorkPage />;
  }
  if (slug === "apollo") {
    return <ApolloWorkPage />;
  }
  if (slug === "the-raum-objects") {
    return <TheRaumObjectsWorkPage />;
  }
  if (slug === "hubspace") {
    return <HubspaceWorkPage />;
  }
  if (slug === "koppico") {
    return <KoppicoWorkPage />;
  }
  if (slug === "komma") {
    return <KommaWorkPage />;
  }
  if (slug === "a-fucking-good-coffee") {
    return <AFuckingGoodCoffeeWorkPage />;
  }
  if (slug === "berabucks") {
    return <BerabucksWorkPage />;
  }
  if (slug === "mediflow") {
    return <MediflowWorkPage />;
  }
  if (slug === "gunseven") {
    return <GunsevenWorkPage />;
  }
  if (slug === "trackfit") {
    return <TrackFitWorkPage />;
  }
  if (slug === "fleurea") {
    return <FleureaWorkPage />;
  }
  if (slug === "world-of-monsters") {
    return <WorldOfMonstersWorkPage />;
  }
  if (slug === "kokkopi") {
    return <KokkopiWorkPage />;
  }
  if (slug === "serviscell") {
    return <ServiscellWorkPage />;
  }
  if (slug === "sodek") {
    return <SodekWorkPage />;
  }
  if (slug === "erasmusport") {
    return <ErasmusportWorkPage />;
  }
  if (slug === "nerede-ne-yenir") {
    return <NeredeNeYenirWorkPage />;
  }

  return <Navigate to="/work" replace />;
}