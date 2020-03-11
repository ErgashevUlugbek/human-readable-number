module.exports = function toReadable(number) {


    let solution1 = 0;
    let solution10 = 0;
    let solution01 = 0;
    let value010 = (number - parseInt(number / 100) * 100 - number % 10) / 10;
    let value011 = number - parseInt(number / 100) * 100;
    let solution010 = 0;
    if ((number / 10) < 1) {
        switch (number) {
            case 0:
                solution1 = 'zero';
                break;
            case 1:
                solution1 = 'one';
                break;
            case 2:
                solution1 = 'two';
                break;
            case 3:
                solution1 = 'three';
                break;
            case 4:
                solution1 = 'four';
                break;
            case 5:
                solution1 = 'five';
                break;
            case 6:
                solution1 = 'six';
                break;
            case 7:
                solution1 = 'seven';
                break;
            case 8:
                solution1 = 'eight';
                break;
            case 9:
                solution1 = 'nine';
                break;
        }
        return solution1;
    } else if (number >= 10 && number < 20) {
        switch (number) {
            case 10:
                solution1 = 'ten';
                break;
            case 11:
                solution1 = 'eleven';
                break;
            case 12:
                solution1 = 'twelve';
                break;
            case 13:
                solution1 = 'thirteen';
                break;
            case 14:
                solution1 = 'fourteen';
                break;
            case 15:
                solution1 = 'fifteen';
                break;
            case 16:
                solution1 = 'sixteen';
                break;
            case 17:
                solution1 = 'seventeen';
                break;
            case 18:
                solution1 = 'eighteen';
                break;
            case 19:
                solution1 = 'nineteen';
                break;
        }
        return solution1;
    } else if (number >= 20 && number <= 100) {
        switch (parseInt(number / 10)) {
            case 2:
                solution10 = 'twenty';
                break;
            case 3:
                solution10 = 'thirty';
                break;
            case 4:
                solution10 = 'forty';
                break;
            case 5:
                solution10 = 'fifty';
                break;
            case 6:
                solution10 = 'sixty';
                break;
            case 7:
                solution10 = 'seventy';
                break;
            case 8:
                solution10 = 'eighty';
                break;
            case 9:
                solution10 = 'ninety';
                break;
            case 10:
                solution10 = 'one hundred';
                break;
        }

        switch (number % 10) {
            case 0:
                solution01 = '';
                break;
            case 1:
                solution01 = ' one';
                break;
            case 2:
                solution01 = ' two';
                break;
            case 3:
                solution01 = ' three';
                break;
            case 4:
                solution01 = ' four';
                break;
            case 5:
                solution01 = ' five';
                break;
            case 6:
                solution01 = ' six';
                break;
            case 7:
                solution01 = ' seven';
                break;
            case 8:
                solution01 = ' eight';
                break;
            case 9:
                solution01 = ' nine';
                break;
        }

        return solution10 + solution01;
    } else {
        switch (parseInt(number / 100)) {
            case 1:
                solution100 = 'one hundred';
                break;
            case 2:
                solution100 = 'two hundred';
                break;
            case 3:
                solution100 = 'three hundred';
                break;
            case 4:
                solution100 = 'four hundred';
                break;
            case 5:
                solution100 = 'five hundred';
                break;
            case 6:
                solution100 = 'six hundred';
                break;
            case 7:
                solution100 = 'seven hundred';
                break;
            case 8:
                solution100 = 'eight hundred';
                break;
            case 9:
                solution100 = 'nine hundred';
                break;
        }

        if (value011 >= 10 && value011 < 20) {
            switch (value011) {
                case 10:
                    solution011 = ' ten';
                    break;
                case 11:
                    solution011 = ' eleven';
                    break;
                case 12:
                    solution011 = ' twelve';
                    break;
                case 13:
                    solution011 = ' thirteen';
                    break;
                case 14:
                    solution011 = ' fourteen';
                    break;
                case 15:
                    solution011 = ' fifteen';
                    break;
                case 16:
                    solution011 = ' sixteen';
                    break;
                case 17:
                    solution011 = ' seventeen';
                    break;
                case 18:
                    solution011 = ' eighteen';
                    break;
                case 19:
                    solution011 = ' nineteen';
                    break;
            }
            return solution100 + solution011;
        }

        if (value010 >= 2 && value010 <= 9) {
            switch (value010) {
                case 2:
                    solution010 = ' twenty';
                    break;
                case 3:
                    solution010 = ' thirty';
                    break;
                case 4:
                    solution010 = ' forty';
                    break;
                case 5:
                    solution010 = ' fifty';
                    break;
                case 6:
                    solution010 = ' sixty';
                    break;
                case 7:
                    solution010 = ' seventy';
                    break;
                case 8:
                    solution010 = ' eighty';
                    break;
                case 9:
                    solution010 = ' ninety';
                    break;
            }
        }



        switch (number % 10) {
            case 0:
                solution001 = '';
                break;
            case 1:
                solution001 = ' one';
                break;
            case 2:
                solution001 = ' two';
                break;
            case 3:
                solution001 = ' three';
                break;
            case 4:
                solution001 = ' four';
                break;
            case 5:
                solution001 = ' five';
                break;
            case 6:
                solution001 = ' six';
                break;
            case 7:
                solution001 = ' seven';
                break;
            case 8:
                solution001 = ' eight';
                break;
            case 9:
                solution001 = ' nine';
                break;

        }
        if (value010 === 0) {
            return solution100 + solution001;
        }
        return solution100 + solution010 + solution001;
    }
}
