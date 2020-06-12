/* lib/utils */
export const dateFormat = () => {
    var d = new Date();
  
    var datestring =
      d.getDate() +
      "-" +
      (d.getMonth() + 1) +
      "-" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes();
    return datestring;
  };
