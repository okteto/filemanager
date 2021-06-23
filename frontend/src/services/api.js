export async function getFileManager() {
    const response = await fetch('/api/files');
    const data = await response.json();
    return data;
    
}