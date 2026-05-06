// 通用兜底：把同目录 index.json 作为源列表返回
// 如果你的软件需要别的字段名/结构，再根据软件要求改这里。

const INDEX_JSON_URL = "https://raw.githubusercontent.com/ljf19890120/-/main/index.json";

async function fetchText(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error("fetch failed: " + r.status);
  return await r.text();
}

async function main() {
  const text = await fetchText(INDEX_JSON_URL);
  const data = JSON.parse(text);
  return data;
}

// 有的引擎用 module.exports，有的用 export default，有的直接执行 main()
// 这里尽量兼容：
try { module.exports = main; } catch (e) {}
try { export default main; } catch (e) {}