
const upperCase = (message) => {
    if (typeof message !== 'string' || message.length === 0) {
        return '';
    }


    const capitalizedMessage = message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();

    return capitalizedMessage;
};

const date = (datetimeString) => {
    const date = new Date(datetimeString);
    //convert the given date and time to local time zone
    const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    //convert the local time Nepali time
    const hours = localDate.getHours();
    const minutes = localDate.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const nepaliHours = hours % 12 || 12;
    const nepaliMinutes = minutes < 10 ? '0' + minutes : minutes;
    // formate the time as h:mm AM PM
    const nepaliTime = nepaliHours + ':' + nepaliMinutes + ':' + period;
    return nepaliTime;
}
export { upperCase, date };

