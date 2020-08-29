function starSign(date) {
    const dateInt = Date.parse(date);
    const dateYear = date.getFullYear();
    switch (true) {
        case dateInt >= Date.parse(new Date(dateYear, 0, 21)) &&
            dateInt <= Date.parse(new Date(dateYear, 1, 19)): {
            return "Aquarius";
            break;
        }
        case dateInt >= Date.parse(new Date(dateYear, 1, 20)) &&
            dateInt <= Date.parse(new Date(dateYear, 2, 20)): {
            return "Pisces";
            break;
        }
        case dateInt >= Date.parse(new Date(dateYear, 2, 21)) &&
            dateInt <= Date.parse(new Date(dateYear, 3, 20)): {
            return "Aries";
            break;
        }
        case dateInt >= Date.parse(new Date(dateYear, 3, 21)) &&
            dateInt <= Date.parse(new Date(dateYear, 4, 21)): {
            return "Taurus";
            break;
        }
        case dateInt >= Date.parse(new Date(dateYear, 4, 22)) &&
            dateInt <= Date.parse(new Date(dateYear, 5, 21)): {
            return "Gemini";
            break;
        }
        case dateInt >= Date.parse(new Date(dateYear, 5, 22)) &&
            dateInt <= Date.parse(new Date(dateYear, 6, 22)): {
            return "Cancer";
            break;
        }
        case dateInt >= Date.parse(new Date(dateYear, 6, 23)) &&
            dateInt <= Date.parse(new Date(dateYear, 7, 23)): {
            return "Leo";
            break;
        }
        case dateInt >= Date.parse(new Date(dateYear, 7, 24)) &&
            dateInt <= Date.parse(new Date(dateYear, 8, 23)): {
            return "Virgo";
            break;
        }
        case dateInt >= Date.parse(new Date(dateYear, 8, 24)) &&
            dateInt <= Date.parse(new Date(dateYear, 9, 23)): {
            return "Libra";
            break;
        }
        case dateInt >= Date.parse(new Date(dateYear, 9, 24)) &&
            dateInt <= Date.parse(new Date(dateYear, 10, 22)): {
            return "Scorpio";
            break;
        }
        case dateInt >= Date.parse(new Date(dateYear, 10, 23)) &&
            dateInt <= Date.parse(new Date(dateYear, 11, 21)): {
            return "Sagittarius";
            break;
        }
        case dateInt >= Date.parse(new Date(dateYear, 11, 22)) &&
            dateInt <= Date.parse(new Date(dateYear, 12, 20)): {
            return "Capricorn";
            break;
        }
        default: {
            // console.log("dateInt=" + dateInt, "start Date=" + sDate);
            // console.log(sDate - dateInt);
            return 'HZZZZZZ'
            break;
        }
    }
}
