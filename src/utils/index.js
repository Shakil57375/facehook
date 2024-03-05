export const getDateDifferenceFromNow = (formDate) => {
    let difference = new Date().getTime() - new Date(formDate).getTime();

    difference = difference / 1000;
    let hourDifference = Math.floor(difference / 3600);
    difference = difference - hourDifference * 3600;
    let minuteDifference = Math.floor(difference / 60);
    difference = difference - minuteDifference * 60;
    let message;
    if (hourDifference > 0) {
        message = `${hourDifference} hour`;
    }
    if (minuteDifference > 0) {
        message = message
            ? `${message} ${minuteDifference} minutes`
            : `${minuteDifference} minutes`;
    }
    if (difference) {
        message = message
            ? `${message} ${Math.round(difference)} minutes`
            : `${Math.round(difference)} minutes`;
    }
    return message;
};
