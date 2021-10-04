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

	// для прохождения тестов проверяем:
	// - наличие аргумента date
	// - его принадлежность к классу Date 
	// - объект Date созданный или встроенный

	// последний пункт проверить можно 3 способами:
	// 1. Object.getOwnPropertyNames(date) воз­вра­ща­ет массив, состоящий 
	// из всех имен собственных (неунаследованных) свойств

	// 2. 
		// try {
			// 	date.getTime();
			// } catch (error) {
			// 	throw new Error ('Invalid date!');
			// }

			// 3. собраnm ключи у data const arr = Object.keys(data) 
			// если в массиве есть ключи значит это объект созданный,  
			// если пустой то он встроенный if(arr.length > 0) {
			// 	throw new Error('Invalid date!')
			// }
			// => короче:
			// if (Object.keys(date).length !== 0) throw Error('Invalid date!');

	if (date) {

		if (date instanceof Date && Object.getOwnPropertyNames(date).length === 0) {
		
			const month = date.getMonth();
			let season;
		
			if (month < 2 || month === 11) { season = 'winter'} 
				else if (month >= 2 && month <= 4) { 	season = 'spring' }
				else if (month >= 5 && month <= 7) { season = 'summer' }
				else { season = 'autumn' }
			
			return season;
		} else {
			throw new Error ('Invalid date!');
		}
		
	} else {
		return 'Unable to determine the time of year!';
	}
}