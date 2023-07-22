const URL = "http://localhost:8080";

export async function getServiceCompanyById(id) {
  const data = await fetch(`${URL}/service_company/${id}`);
  return await data?.json();
}

export async function getDwellingById(id) {
  const data = await fetch(`${URL}/dwelling/${id}`);
  return await data?.json();
}

export async function getDeviceById(id) {
  const data = await fetch(`${URL}/device/${id}`);
  return await data?.json();
}
