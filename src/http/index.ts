import ky from "ky";

const $api = ky.create({ prefixUrl: process.env.REACT_API_URL });

$api.extend({
  //   headers: {
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   },
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set(
          "Authorization",
          `Bearer ${localStorage.getItem("token")}`
        );
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 401) {
          try {
            const refresh_result = await ky.get(
              `${import.meta.env.VITE_REACT_APP_API_URL}/user/refresh`
            );
            console.log(refresh_result);
            localStorage.setItem("token", refresh_result.statusText);
            return ky(request);
          } catch (e) {
            console.log("Not authorized");
          }
        }
      },
    ],
  },
});
