import type { Decision } from "@/types";

export type DecisionProps = {
  decision: Decision;
};
export const DecisionBlock = ({ decision }: DecisionProps) => {
  return <div>{decision.decision}</div>;
};
