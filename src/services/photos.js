export const getPhotos = async (photosPerPage, callback) => {
  const apiKey = import.meta.env.VITE_KEI_API_PEXELS;

  const baseUrl = "https://api.pexels.com/v1/curated";

  let response = [];

  try {
    response = await fetch(`${baseUrl}?page=1&per_page=${photosPerPage}`, {
      method: "get",
      headers: new Headers({
        Authorization: apiKey,
      }),
    })
      .then((response) => response.json())
      .then((data) => data.photos);

    return response;
  } catch (error) {
    console.log(error);
  } finally {
    callback();
  }
};
