import VariablesLanguageTemplate from "./VariablesLanguageTemplate";
import { variablesData } from "../../configs/variablesConfig";

export default function SwiftContent() {
  return <VariablesLanguageTemplate data={variablesData.swift} />;
}
