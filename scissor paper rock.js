let user = prompt("enter S, G OR W Write in Capital letter");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "G", "W"][cpuI]
const match = (cpu, user) => {
  if (cpu === user) {
    return "nobody wins"
  }
  else if (cpu === "S" && user === "W") {
    return "cpu wins"
  }
  else if (cpu === "S" && user === "G") {
    return "user wins"
  }
  else if (cpu === "G" && user === "W") {
    return "user wins"
  }
  else if (cpu === "G" && user === "S") {
    return "cpu wins"
  }
  else if (cpu === "W" && user === "G") {
    return "cpu wins"
  }
  else if (cpu === "W" && user === "S") {
    return "user wins"
  }
}
let result = match(cpu, user)
document.write(`cpu:${cpu}<br> user: ${user} <br> the winner is : ${result}`)