const { chromium } = require("playwright");

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } });

  await page.goto("http://127.0.0.1:3000/publishing-services/ebook-formatting", {
    waitUntil: "networkidle",
  });

  const result = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll("h2")).map((node) =>
      node.textContent?.trim()
    );
    const heading = Array.from(document.querySelectorAll("h2")).find((node) =>
      node.textContent?.includes("Why")
    );

    if (!heading) {
      return { error: "WhyChoose heading not found", headings };
    }

    const textColumn = heading.closest("div.max-w-3xl");
    const grid = textColumn?.parentElement;
    const imageColumn = grid?.firstElementChild;
    const imageWrapper = imageColumn?.firstElementChild;
    const img = imageWrapper?.querySelector("img");

    const rect = (node) =>
      node
        ? {
            top: Math.round(node.getBoundingClientRect().top),
            height: Math.round(node.getBoundingClientRect().height),
            width: Math.round(node.getBoundingClientRect().width),
          }
        : null;

    return {
      headings,
      headingText: heading.textContent?.trim() ?? null,
      textColumn: rect(textColumn),
      imageColumn: rect(imageColumn),
      imageWrapper: rect(imageWrapper),
      image: rect(img),
      grid: rect(grid),
      imageObjectFit: img ? window.getComputedStyle(img).objectFit : null,
      imageColumnClasses: imageColumn?.className ?? null,
      imageWrapperClasses: imageWrapper?.className ?? null,
    };
  });

  console.log(JSON.stringify(result, null, 2));
  await page.screenshot({ path: "whychoose-before.png", fullPage: true });
  await browser.close();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
