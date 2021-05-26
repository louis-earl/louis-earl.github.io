const techList = {
    "JavaScript": "#eb3434", 
    "React": "#eb8f34", 
    "Redux": "#f5c711",
    "Web Sockets": "#08e300",
    "C#": "#00e38f", 
    "Unity Engine": "#3465eb", 
    "Unreal Engine": "#8c34eb",
    "Other": "#eb34ab"
}

export function getColor(techName) {
    return techList[techName]
}