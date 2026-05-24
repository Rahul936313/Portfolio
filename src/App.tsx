import { Index } from "@/routes/index";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <Index />
      <Analytics />
    </>
  );
}
