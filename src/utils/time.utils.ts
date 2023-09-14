import moment from "moment"

const getRelativeTime = (time: string) => {
  return moment(time).fromNow();
}

export {getRelativeTime}