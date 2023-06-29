"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntriesWithoutSensitiveInfo = exports.getEntries = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const diaries_json_1 = __importDefault(require("../diaries.json"));
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const getEntriesWithoutSensitiveInfo = () => diaries;
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const addEntry = () => null;
exports.addEntry = addEntry;
// const diariesWithouthSensitiveInfo = getEntriesWithoutSensitiveInfo()