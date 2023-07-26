import basketball from '../assets/svgIcons/1. basketball.svg'
import glasses from '../assets/svgIcons/2. glasses.svg'
import bell from '../assets/svgIcons/3. bell.svg'
import film from '../assets/svgIcons/4. film.svg'
import eye from '../assets/svgIcons/5. eye.svg'
import globe from '../assets/svgIcons/6. globe.svg'
import heart from '../assets/svgIcons/7. heart.svg'
import rocket from '../assets/svgIcons/8. rocket.svg'
import ruler from '../assets/svgIcons/9. ruler.svg'
import leaf from '../assets/svgIcons/10. leaf.svg'
import medal from '../assets/svgIcons/11. medal.svg'
import star from '../assets/svgIcons/12. star.svg'
import umbrella from '../assets/svgIcons/13. umbrella.svg'
import key from '../assets/svgIcons/14. key.svg'
import man from '../assets/svgIcons/15. man.svg'
import woman from '../assets/svgIcons/16. woman.svg'
import map from '../assets/svgIcons/17. map.svg'
import martini from '../assets/svgIcons/18. martini.svg'

export const onePlayer = [
    {value: 1, isTurn: true, points: 0}
]

export const twoPlayers = [
    {value: 1, isTurn: true, points: 0}, {value: 2, isTurn: false, points: 0}
]

export const threePlayers = [
    {value: 1, isTurn: true, points: 0}, {value: 2, isTurn: false, points: 0}, {value: 3, isTurn: false, points: 0}
]

export const fourPlayers = [
    {value: 1, isTurn: true, points: 0}, {value: 2, isTurn: false, points: 0}, {value: 3, isTurn: false, points: 0}, {value: 4, isTurn: false, points: 0}
]

export const arrayOne = [
    {value: 1,},{value: 1,},{value: 2},{value: 2},{value: 3},{value: 3},{value:4},{value:4},
    {value:5},{value:5},{value: 6},{value: 6},{value:7},{value: 7},{value:8},{value:8}
]

export const arrayTwo = [
    {value: 1},{value: 1},{value: 2},{value: 2},{value: 3},{value: 3},{value: 4},{value: 4},
    {value: 5},{value: 5},{value: 6},{value: 6},{value: 7},{value: 7},{value: 8},{value: 8},
    {value: 9},{value: 9},{value: 10},{value: 10},{value: 11},{value: 11},{value: 12},{value: 12},
    {value: 13},{value: 13},{value: 14},{value: 14},{value: 15},{value: 15},{value: 16},{value: 16},
    {value: 17},{value: 17},{value: 18},{value: 18},
]

export const arrayThree = [
    {value: basketball},{value: basketball},{value: glasses},{value: glasses},{value: bell},{value: bell},
    {value: film},{value: film},{value: eye},{value: eye},{value: globe},{value: globe},
    {value: heart},{value: heart},{value: rocket},{value: rocket}
]

export const arrayFour = [
    {value: basketball},{value: basketball},{value: glasses},{value: glasses},{value: bell},{value: bell},
    {value: film},{value: film},{value: eye},{value: eye},{value: globe},{value: globe},
    {value: heart},{value: heart},{value: rocket},{value: rocket},{value: ruler},{value: ruler},
    {value: leaf},{value: leaf},{value: medal},{value: medal},{value: star},{value: star},
    {value: umbrella},{value: umbrella},{value: key},{value: key},{value: man},{value: man},
    {value: woman},{value: woman},{value: map},{value: map},{value: martini},{value: martini},
]