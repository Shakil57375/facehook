export const getDateDifferenceFromNow = (fromDate) => {
    let difference = new Date().getTime() - new Date(fromDate).getTime();

    difference = difference / (1000 * 3600 * 24); // Convert milliseconds to days
    let dayDifference = Math.floor(difference); // Get the whole number of days
    difference = difference - dayDifference; // Remove the days from the difference

    let hourDifference = Math.floor(difference * 24);  // Convert days back to hours
    difference = difference * 24 - hourDifference;  // Remove the hours from the difference

    let minuteDifference = Math.floor(difference * 60);  // Calculate the whole number of minutes
    difference = difference * 60 - minuteDifference; // Remove the minutes from the difference


    let message = '';

    if (dayDifference > 0) {
        message = `${dayDifference} day`;
        if (dayDifference > 1) {
            message += 's';
        }
    }

    if (hourDifference > 0) {
        message = message
            ? `${message} ${hourDifference} hour`
            : `${hourDifference} hour`;
        if (hourDifference > 1) {
            message += 's';
        }
    }

    if (minuteDifference > 0) {
        message = message
            ? `${message} ${minuteDifference} minute`
            : `${minuteDifference} minute`;
        if (minuteDifference > 1) {
            message += 's';
        }
    }

   

    return message;
};
