const baseUrl = "http://localhost:4000";

export default {
  login: async body =>
    await fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
};
