// Making a callback to get value after asynchronous request success
const CurrentLocation = options => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });

export default CurrentLocation;
