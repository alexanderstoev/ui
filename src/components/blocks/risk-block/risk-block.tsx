import type { Risk } from "@/types";

export type RiskProps = {
  risk: Risk;
};
export const RiskBlock = ({ risk }: RiskProps) => {
  return <div>{risk.impact}</div>;
};
