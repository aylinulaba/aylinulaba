import { useParams, Navigate } from "react-router-dom";
import ConsciousDifficulty from "./ConsciousDifficulty";
import DoesItFeelRight from "./DoesItFeelRight";
import StyleIsTheAnswerToEverything from "./StyleIsTheAnswerToEverything";
import ThatThingYouLove from "./ThatThingYouLove";

export default function BlogDetailPage() {
  const { slug } = useParams();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  if (slug === "conscious-difficulty") {
    return <ConsciousDifficulty />;
  }

  if (slug === "does-it-feel-right") {
    return <DoesItFeelRight />;
  }

  if (slug === "style-is-the-answer-to-everything") {
    return <StyleIsTheAnswerToEverything />;
  }

  if (slug === "that-thing-you-love") {
    return <ThatThingYouLove />;
  }

  return <Navigate to="/blog" replace />;
}