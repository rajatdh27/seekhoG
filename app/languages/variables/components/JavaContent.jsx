import VariablesLanguageTemplate from "./VariablesLanguageTemplate";
import { variablesData } from "../../configs/variablesConfig";

export default function JavaContent() {
  return <VariablesLanguageTemplate data={variablesData.java} />;
}
