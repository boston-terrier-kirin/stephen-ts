"use strict";
// abstract class
// import { MatchReader } from './v1/MatchReader';
// const readerV1 = new MatchReader('football.csv');
// readerV1.read();
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var Summary_1 = require("./Summary");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var reader = new MatchReader_1.MatchReader(csvFileReader);
reader.load();
Summary_1.Summary.winsAnalysiAndConsoleReport('Arsenal').buildAndPrintReport(reader.matches);
Summary_1.Summary.winsAnalysiAndConsoleReport('Man United').buildAndPrintReport(reader.matches);
