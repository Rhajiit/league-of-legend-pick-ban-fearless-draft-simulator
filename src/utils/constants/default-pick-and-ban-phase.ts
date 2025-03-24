type PhaseType = "blueSelect" | "redSelect" | "blueBan" | "redBan";

const defaultPickAndBanPhase: PhaseType[] = [
  "blueBan",
  "redBan",
  "blueBan",
  "redBan",
  "blueBan",
  "redBan",
  "blueSelect",
  "redSelect",
  "redSelect",
  "blueSelect",
  "blueSelect",
  "redSelect",
  "blueBan",
  "redBan",
  "blueBan",
  "redBan",
  "redSelect",
  "blueSelect",
  "blueSelect",
  "redSelect",
];

export type { PhaseType };

export default defaultPickAndBanPhase;
