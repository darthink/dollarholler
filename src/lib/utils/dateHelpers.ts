import { isBefore } from "date-fns";


/**
 * This takes yyyy-mm-dd and returns a m-d-yyyy
 * @param {string} myDate
 * @returns {string} m-d-yyyy
 */
export const convertDate = (myDate: string): string => {
    const [year, month, date] = splitDate(myDate);
    return `${parseInt(month)} / ${parseInt(date)} / ${year}`;
}


/**
 * Determines whether a date is before today (meaning it's late!)
 * @param {string} myDate 
 * @returns {boolean}
 */
export const isLate = (myDate: string): boolean => {
    const [year, month, date] = splitDate(myDate);
    const dueDate = new Date(parseInt(year), parseInt(month), parseInt(date));
    const today = new Date();
    return isBefore(dueDate, today);
}


/**
 * Takes a date yyyy-mm-dd and splits it into an array
 * @param {string} myDate 
 * @returns {Array} [yyyy, mm, dd]
 */
export const splitDate = (myDate: string): string[] => {
    return myDate.split('-');
}