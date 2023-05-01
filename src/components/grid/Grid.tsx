import { useWindowHeight } from '@react-hook/window-size/throttled';
import { CompletedRow } from './CompletedRow';
import { CurrentRow } from './CurrentRow';
import { EmptyRow } from './EmptyRow';

type Props = {
  solution: string;
  guesses: string[];
  currentGuess: string;
  focusedIndex: number;
}

export const Grid = ({ solution, guesses, currentGuess, focusedIndex }: Props) => {
  const height = useWindowHeight();


  const empties =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : [];

  return (
    <div className="pb-6">
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} solution={solution} />
      ))}
      {guesses.length < 6 && (
        <CurrentRow guess={currentGuess} solution={solution} focusedIndex={focusedIndex} />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} solution={solution} />
      ))}
    </div>
  )
}
