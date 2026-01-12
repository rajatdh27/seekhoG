import VariablesLanguageTemplate from "./VariablesLanguageTemplate";
import { variablesData } from "../../configs/variablesConfig";

export default function KotlinContent() {
  return <VariablesLanguageTemplate data={variablesData.kotlin} />;
}
