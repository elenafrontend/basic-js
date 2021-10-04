import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
	let cats = 0;

	matrix.forEach(array => {
		array.forEach(item => {
			item === '^^' ? cats += 1 : '';
		})
	})

	console.log(cats);
	return cats;
}

countCats([
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
])