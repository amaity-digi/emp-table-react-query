export async function getAllData() {
    const response = await fetch(`http://localhost:3000/data`);
    return response.json();
}
