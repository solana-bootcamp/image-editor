var extractNameFromUrl = function (a) {
  var b = a.split("/");
  return b[b.length - 1].split("?")[0];
};
export default extractNameFromUrl;