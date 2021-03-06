import { test, expect } from '@jest/globals';
import { getVocative } from '../src';

test.each([
	['Γιώργος', 'Γιώργο'],
	['Ιωάννης', 'Ιωάννη'],
	['Μιχάλης', 'Μιχάλη'],
	['Παναγής', 'Παναγή'],
	['Κώστας', 'Κώστα'],
	['Παρασκευάς', 'Παρασκευά'],
	['Άδωνις', 'Άδωνι'],
	['Αδωνίς', 'Αδωνί'],
	['Κωσταντίνος', 'Κωσταντίνε'],
	['Κωσταντινος', 'Κωσταντινε'],
	['Αρχαίος', 'Αρχαίε'],
	['Αρχαιος', 'Αρχαιε'],
	['Χριστόφορος', 'Χριστόφορε'],
	['Χριστοφορος', 'Χριστοφορε'],
	['Εδουάρδος', 'Εδουάρδε'],
	['Αριστόνους', 'Αριστόνου'],
	['Αετιδεύς', 'Αετιδεύ'],
	['Ζευς', 'Ζευ'],
	['Βίκτωρ', 'Βίκτορ'],
	['Σαθρός', 'Σαθρέ'],
	['Χαράλαμπος', 'Χαράλαμπε']
])('male vocative for %s', (input, expected) => {
	expect(getVocative(input)).toBe(expected);
});

test.each([
	['Μαρία', 'Μαρία'],
	['Άρτεμις', 'Άρτεμι']
])('female vocative for %s', (name, expected) => {
	expect(getVocative(name)).toBe(expected);
});
