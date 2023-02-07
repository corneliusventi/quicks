export default async function deleteRequest(url: string) {
  return fetch(url, {
    method: "DELETE",
  }).then((res) => res.json());
}
