import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let teamName = '';

  try {
    members.forEach(member => {
      if(typeof member === 'string' && !!member) {
        
        for (let i = 0; i < member.length; i++) {
          if (member[i] !== ' ') {
            teamName += member[i].toUpperCase();
            break
          }
        }
      }
    })
  } catch (error) {
    return false
  }

  if (!!teamName) {
    
    teamName = teamName.split('');
    
    for (let i = 0; i < teamName.length - 1; i++) {
      let firstLetter = teamName[i];
  
      for(let j = i + 1; j < teamName.length; j++) {
        if (firstLetter > teamName[j]) {
          firstLetter = teamName[j];
          let swap = teamName[i];
          teamName[i] = firstLetter;
          teamName[j] = swap;
        } 
      }
    }
    return teamName.join('')
  } else {
    return false
  }
}

createDreamTeam(
  [
    '   William Alston ',
    ' Paul Benacerraf',
    '  Ross Cameron',
    '       Gilles Deleuze',
    '  Arda Denkel ',
    '  Michael Devitt',
    '  Kit Fine',
    ' Nelson Goodman',
    'David Kolb',
    '   Saul Kripke',
    '  Trenton Merricks',
    '  Jay Rosenberg',
  ]
)
