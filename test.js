const input = `[2025-01-25 21:14:10] [world] The Player <ConsueB> has dropped 9 of ARROW at X= 512, Y= 113, Z= -39 that had [] enchantment(s) | 
[2025-01-25 21:14:10] [world] The Player <ConsueB> has dropped 1 of DIAMOND HOE at X= 512, Y= 113, Z= -39 that had [Efficiency 5, Mending 1] enchantment(s) | 
[2025-01-25 21:14:10] [world] The Player <ConsueB> has dropped 1 of NETHERITE SWORD at X= 512, Y= 113, Z= -39 that had [Mending 1, Sharpness 5, Sweeping Edge 3, Fire Aspect 2] enchantment(s) | 
[2025-01-25 21:14:11] [world] The Player <ConsueB> has dropped 1 of DIAMOND AXE at X= 512, Y= 113, Z= -39 that had [Efficiency 5, Mending 1] enchantment(s) | 
[2025-01-25 21:14:11] [world] The Player <ConsueB> has dropped 1 of NETHERITE PICKAXE at X= 512, Y= 113, Z= -39 that had [Efficiency 5, Mending 1, Unbreaking 3, Fortune 3] enchantment(s) | 
[2025-01-25 21:14:11] [world] The Player <ConsueB> has dropped 43 of TORCH at X= 512, Y= 113, Z= -39 that had [] enchantment(s) | 
[2025-01-25 21:14:12] [world] The Player <ConsueB> has dropped 1 of NETHERITE BOOTS at X= 512, Y= 113, Z= -39 that had [Mending 1, Protection 4, Feather Falling 4, Unbreaking 3, Soul Speed 3] enchantment(s) | 
[2025-01-25 21:14:12] [world] The Player <ConsueB> has dropped 1 of NETHERITE CHESTPLATE at X= 512, Y= 113, Z= -39 that had [Mending 1, Protection 4, Unbreaking 3] enchantment(s) | 
[2025-01-25 21:14:12] [world] The Player <ConsueB> has dropped 1 of NETHERITE HELMET at X= 512, Y= 113, Z= -39 that had [Aqua Affinity 1, Mending 1, Protection 4, Respiration 3, Unbreaking 3] enchantment(s) | 
[2025-01-25 21:14:12] [world] The Player <ConsueB> has dropped 1 of BOW at X= 512, Y= 113, Z= -39 that had [Infinite 1, Unbreaking 3, Punch 1, Flame 1, Power 5] enchantment(s) | 
[2025-01-25 21:14:12] [world] The Player <ConsueB> has dropped 1 of DIAMOND SHOVEL at X= 512, Y= 113, Z= -39 that had [Efficiency 4, Mending 1, Unbreaking 3] enchantment(s) | 
[2025-01-25 21:14:13] [world] The Player <ConsueB> has dropped 33 of BAKED POTATO at X= 512, Y= 113, Z= -39 that had [] enchantment(s) | 
[2025-01-25 21:14:13] [world] The Player <ConsueB> has dropped 64 of TORCH at X= 512, Y= 113, Z= -39 that had [] enchantment(s) | 
[2025-01-25 21:14:13] [world] The Player <ConsueB> has dropped 1 of WATER BUCKET at X= 512, Y= 113, Z= -39 that had [] enchantment(s) | 
[2025-01-25 21:14:13] [world] The Player <ConsueB> has dropped 1 of FLINT AND STEEL at X= 512, Y= 113, Z= -39 that had [] enchantment(s) | 
[2025-01-25 21:14:13] [world] The Player <ConsueB> has dropped 8 of ENDER PEARL at X= 512, Y= 113, Z= -39 that had [] enchantment(s) | 
[2025-01-25 21:14:14] [world] The Player <ConsueB> has dropped 60 of COAL at X= 512, Y= 113, Z= -39 that had [] enchantment(s) | 
[2025-01-25 21:14:14] [world] The Player <ConsueB> has dropped 31 of IRON INGOT at X= 512, Y= 113, Z= -39 that had [] enchantment(s) | 
[2025-01-25 21:14:14] [world] The Player <ConsueB> has dropped 13 of STICK at X= 512, Y= 113, Z= -39 that had [] enchantment(s) | `

const parseLog = (log) => {
  // Expresión regular para capturar datos relevantes de cada línea
  const regex = /\[(.*?)\] \[world\] The Player <(.*?)> has dropped (\d+) of (.*?) at X= (.*?), Y= (.*?), Z= (.*?) that had \[(.*?)\] enchantment\(s\)/;

  const match = log.match(regex);
  if (!match) return null;

  const [, , player, quantity, item, x, y, z, enchantments] = match;

  // Procesar encantamientos en formato JSON
  const enchantmentsObject = {};
  if (enchantments.trim()) {
    enchantments.split(", ").forEach((ench) => {
      const [name, level] = ench.split(" ");
      enchantmentsObject[`minecraft:${name.toLowerCase()}`] = parseInt(level, 10);
    });
  }

  return {
    player,
    quantity: parseInt(quantity, 10),
    item: item.toLowerCase().replace(/ /g, "_"),
    coordinates: { x: parseInt(x, 10), y: parseInt(y, 10), z: parseInt(z, 10) },
    enchantments: enchantmentsObject,
  };
};

const generateGiveCommand = ({ quantity, item, enchantments }) => {
  // Convertir encantamientos en formato JSON
  const enchantmentsString = Object.keys(enchantments).length
    ? `enchantments={levels:${JSON.stringify(enchantments)}}`
    : "";

  return `give 4ldito minecraft:${item}${enchantmentsString ? `[${enchantmentsString}]` : ""} ${quantity}`;
};

// Dividir el input en líneas y procesar cada una
const lines = input.split("|").map(line => line.trim()).filter(Boolean);
const parsedItems = lines.map(parseLog).filter(Boolean);

// Generar los comandos
const commands = parsedItems.map(generateGiveCommand);

// Mostrar los comandos en la consola
commands.forEach((cmd) => console.log(cmd));