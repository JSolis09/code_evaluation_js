const URL = "http://localhost:8080/api";
export async function updateCompanyById(id) {
  const response = await fetch(`${URL}/company/${id}/update`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json"
    },
  });
  return response?.json();
}
