const techList = [
    "JavaScript",
    "React",
    "Redux",
    "Web Sockets",
    "Canvas",
    "CSS",
    "C#",
    "Unity Engine",
    "Unreal Engine",
]

export function getColor(techName) {

    const i = techList.indexOf(techName)
    if (i == -1) {
        console.warn("Tech (" + techName + ") not specified in techList. " + techList)
        return "#FFFFFF"
    }

    const hue = ((360 / techList.length) * i) + 330

    return ("hsl(" + hue + ", 95%, 55%)")
}