import VariablesLanguageTemplate from "./VariablesLanguageTemplate";
import { variablesData } from "../../configs/variablesConfig";

export default function CppContent() {
  return <VariablesLanguageTemplate data={variablesData.cpp} />;
}
