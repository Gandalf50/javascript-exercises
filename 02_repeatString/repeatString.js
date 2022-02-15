const repeatString = function(hey='',num) {
    if (!hey) {
        return '';
    } else if (num==0) {
        return '';
    } else if (num<0) {
        return 'ERROR'
    } else {
        for (i=1;i<num;i++) {
            hey += 'hey';
        }
        return hey
    }
};

// Do not edit below this line
module.exports = repeatString;
