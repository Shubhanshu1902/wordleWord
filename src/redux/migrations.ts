import { endOfToday, endOfYesterday } from "date-fns";
import { getTodaysPuzzleIndex } from "../lib/utils";
import { RootState } from "./store";

const initialState : Partial<RootState> = {
  crossword: {
    gridDatas: {},
    knownLetters: [],
    penciledLetters: [],
  },
  wordle: {
    guesses: {},
    shareHistories: {},
    gameWins: {},
    lostCells: {},
    times: {},
  },
  settings: {
    darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    pencilMode: false,
    advancedKeyboard: false,
    showTimer: false,
    highContrastMode: false,
  },
};

export const migrations : any = {
  0: (state: RootState) => {
    return {
      ...state
    }
  }
}

