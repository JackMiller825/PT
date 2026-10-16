export const site = {
  name: "PointTaken",
  ticker: "PT",
  chain: "Ethereum",
  totalSupply: "1,000,000,000",
  tax: "0%",
  liquidity: "Burned",
  ownership: "Renounced",
  contractAddress: "",
  links: {
    website: "",
    x: "",
    telegram: "",
    dex: "",
    chart: "",
  },
} as const;

export type SiteLinkKey = keyof typeof site.links;

export function tickerLabel() {
  return `$${site.ticker}`;
}

export function asset(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}

export function configuredLinks() {
  return (Object.entries(site.links) as [SiteLinkKey, string][]).filter(([, href]) => href.trim().length > 0);
}
