const DB = require("mathe42.surrealdb.wasm");

async function run() {
  const Surreal = await DB;
  const db = Surreal.Instance;
  await db.init("memory");
  await db.use("test", "test");

  // This works:
  //const result = await db.sql(`CREATE test:123abc CONTENT { name: 'Scott' }`);

  // This does not work:
  const result = await db.sql(`CREATE test CONTENT { name: 'Scott' }`);
  console.log(result);
}

run();
