import{r as c,j as e,I as x,v as m,D as b}from"./index-CYlb9IhA.js";
import{c as g,a as f}from"./exportUtils-DBv8hqlY.js";

const DEFAULT_ASSETS = {
  "logo-primary": {
    png: "/images/vector-logo-primary.png",
    svg: "/images/vector-logo-primary.svg",
    title: "品牌主标组合（Brand logo combination）",
    nameZh: "品牌主标组合",
    description: "TORETARK 官方矢量主标，适用于品牌视觉与物料"
  },
  "logo-monogram": {
    png: "/images/vector-logo-monogram.png",
    svg: "/images/vector-logo-monogram.svg",
    title: "超级符号标（延展）（Symbol logo）",
    nameZh: "超级符号标（延展）",
    description: "延展符号，融合T标和镜面高光元素，适用于品牌社媒头像"
  },
  "logo-stacked": {
    png: "/images/vector-logo-stacked.png",
    svg: "/images/vector-logo-stacked.svg",
    title: "商标主标（Trademark main logo）",
    nameZh: "商标主标",
    description: "适用于产品手册等渠道"
  },
  "logo-inverted-dark": {
    png: "/images/vector-logo-inverted-dark.png",
    svg: "/images/vector-logo-inverted-dark.svg",
    title: "极简反白标（Minimalist reverse white label）",
    nameZh: "极简反白标",
    description: "适用于落地页等极速识别logo"
  }
};

const triggerLocalDownload = async (fileUrl, fileName, mimeType) => {
  try {
    const res = await fetch(fileUrl, { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP error " + res.status);
    const rawBlob = await res.blob();
    const blob = mimeType ? new Blob([rawBlob], { type: mimeType }) : rawBlob;
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = fileName;
    a.style.position = "fixed";
    a.style.top = "-9999px";
    a.style.left = "-9999px";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      if (a.parentNode) a.parentNode.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    }, 1200);
    return true;
  } catch (err) {
    console.warn("Direct blob download failed, trying iframe-safe anchor fallback:", err);
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileName;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      if (a.parentNode) a.parentNode.removeChild(a);
    }, 1000);
    return false;
  }
};

const triggerBlobDownload = (blob, fileName) => {
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = fileName;
  a.style.position = "fixed";
  a.style.top = "-9999px";
  a.style.left = "-9999px";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    if (a.parentNode) a.parentNode.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  }, 1200);
};

const u = ({ onShowToast: d }) => {
  const [i, r] = c.useState("dark");
  const [downloadingKey, setDownloadingKey] = c.useState(null);

  const handleDownloadPng = async (n) => {
    const key = `${n.id}-png`;
    setDownloadingKey(key);
    const assetInfo = DEFAULT_ASSETS[n.id] || { png: "/images/vector-logo-primary.png", svg: "/images/vector-logo-primary.svg", nameZh: n.name };
    const fileName = `TORETARK_${n.id}_${assetInfo.nameZh || n.name}.png`;
    
    try {
      await triggerLocalDownload(assetInfo.png, fileName, "image/png");
      d("已成功下载到本地", `${fileName} (超清 PNG 原图已保存至下载目录)`, "download");
    } catch (e) {
      d("下载已触发", `${fileName}`, "download");
    } finally {
      setTimeout(() => setDownloadingKey(null), 500);
    }
  };

  const handleDownloadSvg = async (n) => {
    const key = `${n.id}-svg`;
    setDownloadingKey(key);
    const assetInfo = DEFAULT_ASSETS[n.id] || { png: "/images/vector-logo-primary.png", svg: "/images/vector-logo-primary.svg", nameZh: n.name };
    const fileName = `TORETARK_${n.id}_${assetInfo.nameZh || n.name}.svg`;
    
    try {
      const ok = await triggerLocalDownload(assetInfo.svg, fileName, "image/svg+xml;charset=utf-8");
      if (!ok && n.svgContent) {
        const blob = new Blob([n.svgContent], { type: "image/svg+xml;charset=utf-8" });
        triggerBlobDownload(blob, fileName);
      }
      d("已成功下载到本地", `${fileName} (矢量 SVG 源文件已保存至下载目录)`, "download");
    } catch (e) {
      if (n.svgContent) {
        const blob = new Blob([n.svgContent], { type: "image/svg+xml;charset=utf-8" });
        triggerBlobDownload(blob, fileName);
        d("已成功下载到本地", `${fileName} (矢量 SVG 源文件已保存至下载目录)`, "download");
      }
    } finally {
      setTimeout(() => setDownloadingKey(null), 500);
    }
  };

  const visibleItems = m.filter(n => n.id !== "logo-badge");

  return e.jsxs("div", {
    className: "space-y-8 animate-in fade-in duration-200",
    children: [
      e.jsxs("div", {
        className: "border-b border-zinc-800 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4",
        children: [
          e.jsxs("div", {
            children: [
              e.jsxs("h1", {
                className: "text-xl font-extrabold text-white flex items-center gap-2",
                children: [
                  e.jsx(x, { className: "w-5 h-5 text-[#FFB600]" }),
                  e.jsx("span", { children: "矢量 Logo 官方素材库" })
                ]
              }),
              e.jsx("p", {
                className: "text-xs text-zinc-400 mt-1",
                children: "品牌logo支持下载（包含超清 PNG 与矢量 SVG 格式）"
              })
            ]
          }),
          e.jsxs("div", {
            className: "flex items-center gap-1.5 bg-zinc-800 p-1 rounded-none text-xs",
            children: [
              e.jsx("span", { className: "px-2 text-zinc-400 font-mono text-[11px]", children: "预览底色:" }),
              [{ id: "dark", label: "暗黑底" }, { id: "transparent", label: "透明网格" }, { id: "light", label: "浅白底" }, { id: "yellow", label: "品牌黄底" }].map(n =>
                e.jsx("button", {
                  key: n.id,
                  onClick: () => r(n.id),
                  className: `px-2.5 py-1 rounded-none font-semibold transition-colors ${i === n.id ? "bg-[#FFB600] text-black shadow-xs font-bold" : "text-zinc-400 hover:text-white cursor-pointer"}`,
                  children: n.label
                })
              )
            ]
          })
        ]
      }),
      e.jsx("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
        children: visibleItems.map(n => {
          const assetInfo = DEFAULT_ASSETS[n.id] || { png: "/images/vector-logo-primary.png", svg: "/images/vector-logo-primary.svg", nameZh: n.name };
          const isDownloadingPng = downloadingKey === `${n.id}-png`;
          const isDownloadingSvg = downloadingKey === `${n.id}-svg`;
          const cardTitle = (DEFAULT_ASSETS[n.id] && DEFAULT_ASSETS[n.id].title) || n.name;
          const cardDescription = (DEFAULT_ASSETS[n.id] && DEFAULT_ASSETS[n.id].description) || n.description;

          return e.jsxs("div", {
            key: n.id,
            className: "rounded-2xl border border-zinc-800 bg-zinc-900/70 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-zinc-700/80 transition-colors",
            children: [
              e.jsx("div", {
                title: `${cardTitle} 独立固定图片预览（支持多底色切换查看）`,
                className: `h-48 p-4 flex items-center justify-center relative overflow-hidden transition-colors ${
                  i === "transparent" ? "bg-[linear-gradient(45deg,#18181b_25%,transparent_25%),linear-gradient(-45deg,#18181b_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#18181b_75%),linear-gradient(-45deg,transparent_75%,#18181b_75%)] bg-[size:16px_16px]" : i === "light" ? "bg-zinc-100" : i === "dark" ? "bg-zinc-950 text-white" : "bg-[#FFB600] text-black"
                }`,
                children: e.jsx("div", {
                  className: "w-full h-full max-h-36 max-w-sm flex items-center justify-center drop-shadow-md p-2",
                  children: e.jsx("img", {
                    src: assetInfo.png,
                    alt: cardTitle,
                    className: `max-h-36 max-w-[85%] w-auto h-auto object-contain drop-shadow-md select-none pointer-events-none ${n.id === "logo-monogram" ? "max-h-28 max-w-[110px]" : ""}`,
                    loading: "lazy",
                    decoding: "async"
                  })
                })
              }),
              e.jsxs("div", {
                className: "p-5 space-y-4 bg-zinc-900/80",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", { className: "text-sm font-bold text-white", children: cardTitle }),
                      e.jsx("p", { className: "text-xs text-zinc-400 mt-1 leading-relaxed", children: cardDescription })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "pt-4 border-t border-zinc-800/80 grid grid-cols-2 gap-3",
                    children: [
                      e.jsxs("button", {
                        type: "button",
                        disabled: isDownloadingPng,
                        onClick: () => handleDownloadPng(n),
                        title: `下载 ${cardTitle} 超清 PNG (透明底原图)`,
                        className: "w-full py-2.5 px-3 rounded-xl border border-zinc-700/90 bg-zinc-800/80 hover:bg-zinc-700 hover:border-zinc-500 hover:text-white text-zinc-200 text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed group",
                        children: [
                          e.jsx(b, { className: `w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors shrink-0 ${isDownloadingPng ? "animate-bounce" : ""}` }),
                          e.jsx("span", { children: isDownloadingPng ? "保存中..." : "下载 PNG" }),
                          e.jsx("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-700/60 text-zinc-400 group-hover:bg-zinc-600 group-hover:text-zinc-200 ml-0.5", children: "超清" })
                        ]
                      }),
                      e.jsxs("button", {
                        type: "button",
                        disabled: isDownloadingSvg,
                        onClick: () => handleDownloadSvg(n),
                        title: `下载 ${cardTitle} 矢量 SVG 源文件`,
                        className: "w-full py-2.5 px-3 rounded-xl border border-[#FFB600]/40 bg-[#FFB600]/10 hover:bg-[#FFB600] hover:text-black hover:border-[#FFB600] text-[#FFB600] text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow-[#FFB600]/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed group",
                        children: [
                          e.jsx(b, { className: `w-3.5 h-3.5 text-[#FFB600] group-hover:text-black transition-colors shrink-0 ${isDownloadingSvg ? "animate-bounce" : ""}` }),
                          e.jsx("span", { children: isDownloadingSvg ? "保存中..." : "下载 SVG" }),
                          e.jsx("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#FFB600]/20 text-[#FFB600] group-hover:bg-black/20 group-hover:text-black ml-0.5", children: "矢量" })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          });
        })
      })
    ]
  });
};

export{u as VectorLogos};
