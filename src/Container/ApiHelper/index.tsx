const API_URL =
  `https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json`;

export const fetchProjects = async () => {
  try {
    const response:any = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error:any) {
    console.error(error?.message);
    return [];
  }
};
