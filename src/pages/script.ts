import GUI from "lil-gui";

const values = {
  counter: 0,
};

async function render() {
  const gui = new GUI();
  gui.add(values, "counter", 0, 100);
}

if (typeof window !== "undefined") {
  render()
    .then(() => console.log("loaded"))
    .catch((err) => console.error("ERROR", err));
}
