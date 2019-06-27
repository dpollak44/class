//'use strict';

const dayUtils = (function () {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    /*function getDayName(index) {
        return days[index - 1];
    }

    function getDayIndex(day) {
        for (let i = 0; i < days.length; i++) {
            if (days[i] === day) {
                return i + 1;
            }
        }

        return -1;
    }*/

    return {
        /*getDayName: getDayName,
        getDayIndex: getDayIndex*/

        getDayName: function (index) {
            return days[index - 1];
        },
        getDayIndex: function (day) {
            for (let i = 0; i < days.length; i++) {
                if (days[i] === day) {
                    return i + 1;
                }
            }

            return -1;
        }
    };
}());

//dayUtils.getDayName = 5;
console.log('dayUtils.getDayName(1)', dayUtils.getDayName(1));
console.log('dayUtils.getDayIndex("Monday")', dayUtils.getDayIndex('Monday'));