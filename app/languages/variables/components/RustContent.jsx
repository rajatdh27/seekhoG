import VariablesLanguageTemplate from "./VariablesLanguageTemplate";
import { variablesData } from "../../configs/variablesConfig";

export default function RustContent() {
  return <VariablesLanguageTemplate data={variablesData.rust} />;
}
