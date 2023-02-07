export default async function putRequest(url: string, { arg }: { arg: any }) {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
}
