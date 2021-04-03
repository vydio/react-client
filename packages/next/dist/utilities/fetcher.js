"use strict";

require("core-js/modules/es.promise.js");

exports.__esModule = true;
exports.fetcher = fetcher;

function fetcher(endpoint, token) {
  return fetch("http://localhost:6001" + endpoint, {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    redirect: "follow",
    headers: token ? {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    } : {
      "Content-Type": "application/json"
    }
  }).then(resp => resp.json());
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi91dGlsaXRpZXMvZmV0Y2hlci50cyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwiZW5kcG9pbnQiLCJ0b2tlbiIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImNyZWRlbnRpYWxzIiwicmVkaXJlY3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXNwIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLFNBQVNBLE9BQVQsQ0FBaUJDLFFBQWpCLEVBQW1DQyxLQUFuQyxFQUFpRTtBQUN0RSxTQUFPQyxLQUFLLDJCQUF5QkYsUUFBekIsRUFBcUM7QUFDL0NHLElBQUFBLE1BQU0sRUFBRSxLQUR1QztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLE1BRnlDO0FBRy9DQyxJQUFBQSxXQUFXLEVBQUUsYUFIa0M7QUFJL0NDLElBQUFBLFFBQVEsRUFBRSxRQUpxQztBQUsvQ0MsSUFBQUEsT0FBTyxFQUFFTixLQUFLLEdBQ1Y7QUFDRSxzQkFBZ0Isa0JBRGxCO0FBRUVPLE1BQUFBLGFBQWEsY0FBWVA7QUFGM0IsS0FEVSxHQUtWO0FBQ0Usc0JBQWdCO0FBRGxCO0FBVjJDLEdBQXJDLENBQUwsQ0FhSlEsSUFiSSxDQWFFQyxJQUFELElBQVVBLElBQUksQ0FBQ0MsSUFBTCxFQWJYLENBQVA7QUFjRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmZXRjaGVyKGVuZHBvaW50OiBzdHJpbmcsIHRva2VuPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjYwMDEke2VuZHBvaW50fWAsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgbW9kZTogXCJjb3JzXCIsXG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICByZWRpcmVjdDogXCJmb2xsb3dcIixcbiAgICBoZWFkZXJzOiB0b2tlblxuICAgICAgPyB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICB9KS50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSk7XG59XG4iXX0=