import VariablesLanguageTemplate from "./VariablesLanguageTemplate";
import { variablesData } from "../../configs/variablesConfig";

export default function CContent() {
  return <VariablesLanguageTemplate data={variablesData.c} />;
}
