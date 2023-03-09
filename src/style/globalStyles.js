import { StyleSheet } from 'react-native';

const colors = {
    backgroundColorGrass: '#9bcc50',
    backgroundColorFire: '#fd7d24',
    backgroundColorWater: '#4592c4',
    backgroundColorFly1: '#3dc7ef',
    backgroundColorFly2: '#bdb9b8',
    backgroundColorPoison: '#b97fc9',
    backgroundColorBug: '#729f3f',
    backgroundColorNormal: '#a4acaf',
    backgroundColorElectric: '#eed535',
    backgroundColorGround1: '#f7de3f',
    backgroundColorGround2: '#ab9842',
    backgroundColorFairy: '#fdb9e9',
    backgroundColorFighting: '#d56723',
    backgroundColorPsychic: '#f366b9',
    backgroundColorRock: '#a38c21',
    backgroundColorSteel: '#9eb7b8',
    backgroundColorIce: '#51c4e7',
    backgroundColorGhost: '#7b62a3',
    backgroundColorDragon1: '#53a4cf',
    backgroundColorDragon2: '#f16e57',
    backgroundColorDark: '#707070',
}

const GlobalStyles = (type) => {
    switch (type) {
        case 'grass':
            return colors.backgroundColorGrass;

        case 'fire':
            return colors.backgroundColorFire;

        case 'water':
            return colors.backgroundColorWater;

        case 'flying':
            return colors.backgroundColorFly1;

        case 'poison':
            return colors.backgroundColorPoison;

        case 'bug':
            return colors.backgroundColorBug;

        case 'normal':
            return colors.backgroundColorNormal;

        case 'electric':
            return colors.backgroundColorElectric;

        case 'ground':
            return colors.backgroundColorGround1;

        case 'fairy':
            return colors.backgroundColorFairy;

        case 'fighting':
            return colors.backgroundColorFighting;

        case 'psychic':
            return colors.backgroundColorPsychic;

        case 'rock':
            return colors.backgroundColorRock;

        case 'steel':
            return colors.backgroundColorSteel;

        case 'ice':
            return colors.backgroundColorIce;

        case 'ghost':
            return colors.backgroundColorGhost;

        case 'dragon':
            return colors.backgroundColorDragon1;

        case 'dark':
            return colors.backgroundColorDark;

        default:
            return colors.backgroundColorNormal;
    }
}

export default GlobalStyles;