export const signupUserInfo = async (signupInfo) => {
  console.log("signupInfo==", signupInfo);
  const response = await fetch(`http://localhost:3001/users`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(signupInfo),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
};

export const loginInfoAuthentication = async () => {
  const response = await fetch(`http://localhost:3001/users`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status : ${response.status}`);
  }
  const result = await response.json();
  return result;
  //   const sortedItems = result.sort((a, b) => a.title.localeCompare(b.title));
  //   return sortedItems;
};
