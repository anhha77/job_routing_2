import jobs from "../jobs.json";

async function fetchData(id) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  await promise;
  return jobs.find((job) => job.id === id);
}

async function fetchDataFilterJobs(queryString) {
  console.log(queryString);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  await promise;
  if (queryString) {
    const result = jobs.filter(
      (job) =>
        job.tilte.includes(queryString) ||
        job.city.includes(queryString) ||
        job.description.includes(queryString) ||
        job.skills.some((skill) => skill.includes(queryString))
    );
    if (result) return result;
    return null;
  }
}

export { fetchData, fetchDataFilterJobs };
