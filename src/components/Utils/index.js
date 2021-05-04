import { unix } from 'moment';

// Convert content with paragraphs/new lines to an array of data
// Each paragraph will be it's own element in an array, easier to iterate over this data
// and insert it into <p> dynamically
export const parseNewLines = (data) => {
  return data?.match(/[^\r\n]+/gim);
};

export const convertUnixTimestampToDate = (timestamp) => {
  let date;
  if (timestamp?.seconds) {
    date = unix(timestamp.seconds).format('DD/MM/YYYY HH:mm:ss');
    return date;
  } else {
    return timestamp;
  }
};
