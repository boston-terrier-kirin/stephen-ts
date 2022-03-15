import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';

export class AverageGoalsAnalysis implements Analyzer {
	run(matches: MatchData[]): string {
		throw new Error('Method not implemented.');
	}
}
