export default async function postRequest(url: string, { arg }: { arg: any }) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
}
