import OperatorsLanguageTemplate from "./OperatorsLanguageTemplate";
import { operatorsData } from "../../configs/operatorsConfig";

export default function SwiftOperators() {
  return <OperatorsLanguageTemplate data={operatorsData.swift} />;
}
