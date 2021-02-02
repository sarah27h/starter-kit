// swap between real (production) api and mock api
export default function getBaseUrl() {
  // http://localhost:3000/?useMockApi=true to open data provided by Mock API
  return getQueryStringParameterByName("useMockApi")
    ? "http://localhost:3001/"
    : "/";
}

// to get parameter from url
function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
