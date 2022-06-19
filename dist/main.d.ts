type SourceLang = "be" | "ru" | "uk";
type TargetLang = "de" | "en" | "scientific";
interface UserOptions {
    from?: SourceLang;
    to?: TargetLang;
    showDetails?: boolean;
    debug?: boolean;
}
type LetterPos = number;
type LetterRange = [LetterPos, LetterPos];
interface AppliedRule {
    description: string | undefined;
    word: string;
    affectedLetters: LetterRange;
}
interface Result {
    output: string;
    appliedRules: AppliedRule[];
    from: SourceLang;
    to: TargetLang;
}
export function transcribe(input?: string, _options?: UserOptions): string | Result;

//# sourceMappingURL=main.d.ts.map
