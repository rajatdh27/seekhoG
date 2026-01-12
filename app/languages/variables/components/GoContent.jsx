import VariablesLanguageTemplate from "./VariablesLanguageTemplate";
import { variablesData } from "../../configs/variablesConfig";

export default function GoContent() {
  return <VariablesLanguageTemplate data={variablesData.go} />;
}
