import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Scan Me landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Scan Me/i);
  assert.match(html, /DIGITIZE/);
  assert.match(html, /INSTAGRAM/);
  assert.match(html, /WHATSAPP/);
});

test("server-renders the Be Chef review, location, and menu links", async () => {
  const response = await render("/be-chef");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Avis Google &amp; Location/);
  assert.match(html, /DÉCOUVREZ NOTRE CARTE/);
  assert.match(html, /href="https:\/\/be-chef\.vercel\.app\/"/);
});
