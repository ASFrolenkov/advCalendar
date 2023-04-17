import { IDate } from "../types/types";

const addZero = (number: number): string => {
    return `${number}`.length < 2 ? `0${number}` : `${number}`
}

export const createDate = (): IDate => {
    const curDate = new Date(),
          dateStr = {
                day: addZero(curDate.getDate()),
                year: `${curDate.getFullYear()}`,
                month: addZero(curDate.getMonth() + 1)
          },
          timeStr = {
                hours: addZero(curDate.getHours()),
                minutes: addZero(curDate.getMinutes()),
                seconds: addZero(curDate.getSeconds())
          };

    return {dateStr, timeStr}
}