import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {

	if (date) {
		const month = date.getMonth();
		let season;
	
		if (month < 2 || month === 11) { season = 'winter'} 
			else if (month >= 2 && month <= 4) { 	season = 'spring' }
			else if (month >= 5 && month <= 7) { season = 'summer' }
			else { season = 'autumn' }
		
		return season;
	} else {
		return 'Unable to determine the time of year!';
	}
}

getSeason(new Date(2020, 5, 5))
