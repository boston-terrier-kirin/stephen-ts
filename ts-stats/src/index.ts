// abstract class
// import { MatchReader } from './v1/MatchReader';
// const readerV1 = new MatchReader('football.csv');
// readerV1.read();

import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const reader = new MatchReader(csvFileReader);
reader.load();

Summary.winsAnalysiAndConsoleReport('Arsenal').buildAndPrintReport(
	reader.matches
);

Summary.winsAnalysiAndConsoleReport('Man United').buildAndPrintReport(
	reader.matches
);
