function setElementClass(
  selector: string,
  value: string,
  ignores?: string[],
): void {

  const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
  for (const num in elements) {
    if (elements.hasOwnProperty(num)) {
      const cls: string = elements[num].className;

      if (ignores === undefined || ignores.indexOf(cls) < 0) {
        elements[num].classList.add(value);
      }
    }
  }
}

function backToTop(): void {
  const button: HTMLElement | null  = document.getElementById("btn-gototop");
  if (null === button) { return; }

  button.addEventListener("click", (): void => {
    function scroll(): void {
      const offset: number = window.pageYOffset;
      if (offset > 0) { setTimeout(scroll, 8); }
      window.scroll(0, offset - 512);
    }
    scroll();
  });
}

function setupFeatureImageSwappers(): void {
    const featureImages = document.querySelectorAll(".list-post-preview-image.has-second-feature");

    for (const element of featureImages) {
        const imageElement = element.querySelector("img")!!;
        const originalSrc = imageElement.src ?? "";

        element.addEventListener("mouseenter", () => {
            imageElement.src = originalSrc.replace("feature", "feature2");
        });

        element.addEventListener("mouseleave", () => {
            imageElement.src = originalSrc;
        });
    }
}

document.addEventListener("DOMContentLoaded", (): void => {
  setElementClass("img", "pure-img");
  setElementClass("table", "pure-table", ["lntable"]);

  backToTop();
});

window.addEventListener("load", () => {
    setupFeatureImageSwappers();

    const inputSearch = document.querySelector("#inputSearch") as HTMLInputElement;
    const searchNoResults = document.querySelector("#searchNoResults") as HTMLInputElement;

    if (!inputSearch) return;

    function match(query: string, title: string): boolean {
        if (query === "") return true;

        return title.toLowerCase().includes(query.toLowerCase());
    }

    inputSearch.addEventListener("input", () => {
        const posts = Array.from(document.querySelectorAll<HTMLElement>(".list-post-wrapper"));

        let noResults = true;
        for (const p of posts) {
            const title = (p?.querySelector(".post-title") as HTMLElement)?.innerText;

            if (match(inputSearch.value, title)) {
                p.style.display = "block";
                noResults = false;
            } else {
                p.style.display = "none";
            }
        }

        searchNoResults.classList.toggle("visible", noResults);
    });
});
