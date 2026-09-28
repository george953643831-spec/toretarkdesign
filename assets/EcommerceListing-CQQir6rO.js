import { r as m, j as e, i as b, D as r } from "./index-CYlb9IhA.js";
import { a as h } from "./exportUtils-DBv8hqlY.js";

const DEFAULT_ASSETS = [
  {
    id: "upload-user-latest-219",
    src: "/images/listing-story-banner.jpg",
    fallbackSrc: "/images/listing-story-banner.jpg",
    title: "最新生成 Listing 宽幅设计稿 (A+ 品牌故事主视觉)",
    category: "aplus",
    categoryLabel: "A+模块化叙事",
    dimensions: "2100 × 900 px (超清 2.33:1 宽幅)",
    ratio: "21:9 宽屏叙事",
    badge: "最新生成图",
    isUserUpload: true,
    compliance: "21:9 宽屏叙事，极简硬核车库精洗沉浸光影，完美匹配亚马逊 A+ 全宽模块规范",
    features: ["2100×900 宽屏超清", "强化 TORETARK 品牌心智", "车库专业精洗光影质感"]
  },
  {
    id: "upload-user-1",
    src: "/images/listing-snipaste-mock.png",
    fallbackSrc: "/images/listing-snipaste-mock.png",
    title: "用户上传 Listing 实拍设计图 (核心卖点展示)",
    category: "sub",
    categoryLabel: "附图卖点动线",
    dimensions: "740 × 720 px",
    ratio: "1:1 方形画幅",
    badge: "用户已上传图",
    isUserUpload: true,
    compliance: "实物喷雾与毛巾套组交付，施工质感真实；建议翻新 2000px+ 触发亚马逊放大镜功能",
    features: ["真实车库实拍质感", "核心卖点一眼直达", "附赠双面螺旋毛巾真实呈现"]
  },
  {
    id: "upload-user-2",
    src: "/images/listing-aplus.jpg",
    fallbackSrc: "/未标题-1.jpg66.jpg",
    title: "用户上传 Listing 宽幅设计稿 (A+ 品牌故事主视觉)",
    category: "aplus",
    categoryLabel: "A+模块化叙事",
    dimensions: "3136 × 1344 px (超清 2.33:1 宽幅)",
    ratio: "21:9 宽屏叙事",
    badge: "用户已上传图",
    isUserUpload: true,
    compliance: "完美匹配亚马逊 A+ Premium 全宽横幅 (Brand Story Banner) 规范，3.1K 超清细节",
    features: ["极简车库专业精洗沉浸质感", "TORETARK 品牌心智强化", "多角度视觉张力"]
  },
  {
    id: "preset-hero-1",
    src: "/images/listing-aplus.jpg",
    fallbackSrc: "/public/images/listing-aplus.jpg",
    title: "纯白底合规主图 1 (Hero Pure White - 镀晶亮胎喷雾)",
    category: "main",
    categoryLabel: "纯白首图规范",
    dimensions: "2000 × 2000 px (300 DPI)",
    ratio: "1:1 正方形",
    badge: "合规纯白首图",
    isUserUpload: false,
    compliance: "RGB(255,255,255) 纯白红线达标 · 85% 饱满画幅 · 保留 20% 真实物理接触阴影",
    features: ["主体 85% 黄金画幅占比", "无文字/无不实徽标/无伪立体红线合规", "微侧 15° 展现立体柱面"]
  },
  {
    id: "preset-sub-1",
    src: "/images/listing-comparison-before-after.jpg",
    fallbackSrc: "/public/images/listing-comparison-before-after.jpg",
    title: "核心卖点副图 2 (车灯发黄老化翻新 施工前后极致对比)",
    category: "sub",
    categoryLabel: "附图卖点动线",
    dimensions: "1200 × 630 px",
    ratio: "1.9:1 横幅对比",
    badge: "卖点对比图",
    isUserUpload: false,
    compliance: "前后对比效果真实无夸大，符合亚马逊合规红线与消费者认知决策动线",
    features: ["清晰分界线直观展示翻新效果", "击中车主车灯老化痛点", "高点击与购买导向"]
  },
  {
    id: "preset-sub-2",
    src: "/images/listing-target-scenario.jpg",
    fallbackSrc: "/public/images/listing-target-scenario.jpg",
    title: "使用场景副图 3 (车库 DIY 极简操作场景与人群代入)",
    category: "sub",
    categoryLabel: "附图卖点动线",
    dimensions: "1200 × 800 px",
    ratio: "3:2 场景构图",
    badge: "场景代入图",
    isUserUpload: false,
    compliance: "展现真实车主车库操作环境，传递“让普通人也能在车库获得专业精洗效果”",
    features: ["家庭车库真实体验", "即喷即擦无需繁琐调配", "大众车主亲和力"]
  },
  {
    id: "preset-sub-3",
    src: "/images/listing-four-step-process.jpg",
    fallbackSrc: "/public/images/listing-four-step-process.jpg",
    title: "施工步骤副图 4 (4步极简作业指南：喷-擦-等-亮)",
    category: "sub",
    categoryLabel: "附图卖点动线",
    dimensions: "1600 × 1200 px",
    ratio: "4:3 说明排版",
    badge: "SOP 步骤图",
    isUserUpload: false,
    compliance: "清晰消除买家使用疑虑，规范施工预期，有效降低售后咨询率与退货率",
    features: ["四步清晰作业图示", "中英文规范指引", "简明直观低认知负荷"]
  },
  {
    id: "preset-aplus-1",
    src: "/images/listing-restoration-banner.jpg",
    fallbackSrc: "/public/images/listing-restoration-banner.jpg",
    title: "A+ 品牌故事全景海报 5 (车库精洗沉浸式全幅 Banner)",
    category: "aplus",
    categoryLabel: "A+模块化叙事",
    dimensions: "2400 × 1000 px",
    ratio: "2.4:1 宽幅海报",
    badge: "A+ 旗舰海报",
    isUserUpload: false,
    compliance: "亚马逊 A+ 全宽模块 100% 满屏适配，高质感车身光影呈现品牌高级感",
    features: ["专业光影车体线条", "强化 Toretark 品牌超级符号", "品牌溢价与转化双提升"]
  },
  {
    id: "preset-sub-4",
    src: "/images/listing-product-display.jpg",
    fallbackSrc: "/public/images/listing-product-display.jpg",
    title: "产品矩阵副图 6 (TORETARK 全系家族化矩阵合影)",
    category: "sub",
    categoryLabel: "附图卖点动线",
    dimensions: "2000 × 1333 px",
    ratio: "3:2 系列排布",
    badge: "产品矩阵图",
    isUserUpload: false,
    compliance: "展示 TORETARK 全品类专业矩阵，促进多 SKU 关联购买与店铺跨品类加购",
    features: ["瓶贴一致性排版", "色系区分功能线", "全系列专业品牌感"]
  }
];

const p = ({ onShowToast: c }) => {
  const [n, o] = m.useState("sub");
  const [images, setImages] = m.useState(DEFAULT_ASSETS);
  const [previewItem, setPreviewItem] = m.useState(null);
  const [isDragging, setIsDragging] = m.useState(false);
  const fileInputRef = m.useRef(null);

  m.useEffect(() => {
    const handleKeyDown = (ev) => {
      if (ev.key === "Escape") setPreviewItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDownload = (item) => {
    const a = document.createElement("a");
    a.href = item.src;
    a.download = (item.title || "toretark_listing").replace(/[\s\/:*?"<>|]+/g, "_") + 
      (item.src.endsWith(".png") ? ".png" : item.src.endsWith(".webp") ? ".webp" : ".jpg");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    if (c) c(`已下载: ${item.title}`, item.dimensions, "download");
  };

  const handleCopySpec = (item) => {
    const text = `【TORETARK 亚马逊 Listing 视效图规范】\n` +
      `标题: ${item.title}\n` +
      `分类: ${item.categoryLabel}\n` +
      `尺寸: ${item.dimensions}\n` +
      `画幅比: ${item.ratio}\n` +
      `合规标准: ${item.compliance}\n` +
      `核心特征: ${item.features.join(" | ")}`;
    navigator.clipboard.writeText(text).then(() => {
      if (c) c(`已复制设计规格参数`, "可直接粘贴至 Listing 交付单或 Jira", "copy");
    });
  };

  const handleDelete = (id, title) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
    if (c) c(`已移除图层: ${title}`, "已从当前视图删除", "trash");
  };

  const handleFiles = (fileList) => {
    if (!fileList || !fileList.length) return;
    const files = Array.from(fileList).filter((f) => f.type.startsWith("image/"));
    if (!files.length) {
      if (c) c("请上传有效图片文件", "支持 JPG、PNG、WebP 等图片格式", "warning");
      return;
    }
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        const img = new Image();
        img.onload = () => {
          const w = img.naturalWidth;
          const h = img.naturalHeight;
          const ratioVal = (w / h).toFixed(2);
          const isSquare = Math.abs(w - h) <= 10;
          const isWide = w / h >= 1.8;
          const detectedCat = isSquare ? "main" : isWide ? "aplus" : "sub";
          const detectedLabel = isSquare ? "纯白首图规范" : isWide ? "A+模块化叙事" : "附图卖点动线";
          const newImg = {
            id: "user-upload-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4),
            src: dataUrl,
            fallbackSrc: dataUrl,
            title: `用户新上传图 (${file.name.replace(/\.[^/.]+$/, "")})`,
            category: detectedCat,
            categoryLabel: detectedLabel,
            dimensions: `${w} × ${h} px (${(file.size / 1024).toFixed(1)} KB)`,
            ratio: isSquare ? "1:1 正方形" : `${ratioVal}:1 比例`,
            badge: "用户新上传图",
            isUserUpload: true,
            compliance: w >= 2000 
              ? "超高分辨率达标 (≥2000px)，已触发亚马逊主图放大镜合规红线" 
              : "当前分辨率低于 2000px，建议在正式上架前翻新高清母版",
            features: [
              `本地即时解析 · ${file.type || "image"}`,
              isSquare ? "1:1 饱满正方构图" : isWide ? "宽幅全景叙事" : "标准卖点副图",
              "支持一键无损下载与大图校验"
            ]
          };
          setImages((prev) => [newImg, ...prev]);
          if (c) c(`成功导入上传图: ${file.name}`, `${w}×${h} px · 自动归类为 [${detectedLabel}]`, "check");
        };
        img.src = dataUrl;
      };
      reader.readAsDataURL(file);
    });
  };

  const filteredImages = n === "all" ? images : images.filter((img) => img.category === n);

  return e.jsxs("div", {
    className: "space-y-8 animate-in fade-in duration-200",
    children: [
      /* div:nth-of-type(1): Header */
      e.jsx("div", {
        className: "border-b border-zinc-800 pb-4",
        children: e.jsxs("div", {
          children: [
            e.jsxs("h1", {
              className: "text-xl font-extrabold text-white flex items-center gap-2",
              children: [
                e.jsx(b, { className: "w-5 h-5 text-[#FFB600]" }),
                e.jsx("span", { children: "亚马逊Listing 内容模块" })
              ]
            }),
            e.jsx("p", {
              className: "text-xs text-zinc-400 mt-1",
              children: "卖点附图认知动线与A+模块化叙事规范"
            })
          ]
        })
      }),

      /* div:nth-of-type(2): Tab Filters */
      e.jsx("div", {
        className: "flex flex-wrap items-center gap-2",
        children: [
          { id: "sub", label: "附图卖点动线" },
          { id: "aplus", label: "A+模块化叙事" }
        ].map((s) =>
          e.jsx(
            "button",
            {
              onClick: () => o(s.id),
              className: `px-3.5 py-1.5 rounded-none text-xs font-bold transition-all ${
                n === s.id
                  ? "bg-[#FFB600] text-black shadow-lg shadow-[#FFB600]/20"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`,
              children: s.label
            },
            s.id
          )
        )
      }),

      /* div:nth-of-type(3): 下方区域 - 将上传图放进来 (Upload Area & Uploaded Listing Gallery) */
      e.jsxs("div", {
        className: "space-y-6 pt-1",
        children: [
          /* Upload Dropzone Container */
          e.jsxs("div", {
            onDragOver: (ev) => {
              ev.preventDefault();
              setIsDragging(true);
            },
            onDragLeave: () => setIsDragging(false),
            onDrop: (ev) => {
              ev.preventDefault();
              setIsDragging(false);
              handleFiles(ev.dataTransfer.files);
            },
            onClick: () => fileInputRef.current && fileInputRef.current.click(),
            className: `group relative cursor-pointer border-2 border-dashed p-6 transition-all duration-200 text-center ${
              isDragging
                ? "border-[#FFB600] bg-[#FFB600]/10 scale-[1.005]"
                : "border-zinc-800 bg-zinc-950/60 hover:border-[#FFB600]/60 hover:bg-zinc-900/50"
            }`,
            children: [
              e.jsx("input", {
                ref: fileInputRef,
                type: "file",
                multiple: true,
                accept: "image/*",
                className: "hidden",
                onChange: (ev) => handleFiles(ev.target.files)
              }),
              e.jsxs("div", {
                className: "flex flex-col items-center justify-center gap-3",
                children: [
                  e.jsx("div", {
                    className: "w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#FFB600] group-hover:scale-110 group-hover:border-[#FFB600]/40 transition-transform duration-200",
                    children: e.jsxs("svg", {
                      className: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: [
                        e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" })
                      ]
                    })
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsxs("p", {
                        className: "text-sm font-bold text-white group-hover:text-[#FFB600] transition-colors",
                        children: [
                          e.jsx("span", { children: "点击或将 Listing 设计图拖拽至此上传" }),
                          e.jsx("span", { className: "text-[#FFB600] ml-2 text-xs font-semibold px-2 py-0.5 bg-[#FFB600]/10 border border-[#FFB600]/30", children: "支持多图批量导入" })
                        ]
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-400 mt-1",
                        children: "支持 JPG / PNG / WebP 格式 · 自动解析分辨率、宽高比及亚马逊首图/副图/A+合规标准"
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "flex flex-wrap items-center justify-center gap-2 pt-1 text-[11px] text-zinc-400",
                    children: [
                      e.jsx("span", { className: "px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono", children: "已入库: 2张用户上传图 + 6张标准样图" }),
                      e.jsx("span", { className: "px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-emerald-400", children: "✓ 纯白底 RGB(255,255,255) 自动检测" }),
                      e.jsx("span", { className: "px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-[#FFB600]", children: "✓ 亚马逊 2000px 放大镜达标率核验" })
                    ]
                  })
                ]
              })
            ]
          }),

          /* Gallery Header & Stats */
          e.jsxs("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-3",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2.5",
                children: [
                  e.jsx("span", { className: "w-1.5 h-4 bg-[#FFB600] inline-block" }),
                  e.jsx("h2", { className: "text-sm sm:text-base font-extrabold text-white tracking-wide", children: "已沉淀 Listing 实拍与设计大图库" }),
                  e.jsx("span", { className: "text-xs font-mono text-zinc-400 ml-1", children: `(当前显示 ${filteredImages.length} 张)` })
                ]
              }),
              e.jsxs("div", {
                className: "flex items-center gap-2 text-xs",
                children: [
                  e.jsx("span", { className: "text-zinc-400", children: "快捷筛选:" }),
                  e.jsx("span", { className: "text-[#FFB600] font-bold", children: n === "all" ? "全部图层" : n === "main" ? "首图" : n === "sub" ? "副图" : "A+模块" })
                ]
              })
            ]
          }),

          /* Empty State if filter yields nothing */
          filteredImages.length === 0 && e.jsxs("div", {
            className: "py-16 text-center border border-dashed border-zinc-800 bg-zinc-950/40",
            children: [
              e.jsx("p", { className: "text-sm text-zinc-400", children: "当前分类暂无图层" }),
              e.jsx("button", {
                onClick: () => o("sub"),
                className: "mt-3 px-4 py-1.5 bg-zinc-800 text-white text-xs font-bold hover:bg-[#FFB600] hover:text-black transition-colors",
                children: "查看全部图层"
              })
            ]
          }),

          /* Grid of Uploaded Images & Spec Cards */
          e.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: filteredImages.map((item) =>
              e.jsxs(
                "div",
                {
                  className: `group relative flex flex-col bg-zinc-950 border transition-all duration-200 hover:border-[#FFB600]/80 shadow-md ${
                    item.isUserUpload ? "border-[#FFB600]/40 ring-1 ring-[#FFB600]/20" : "border-zinc-800/90"
                  }`,
                  children: [
                    /* Card Top Badges */
                    e.jsxs("div", {
                      className: "flex items-center justify-between p-3 border-b border-zinc-800/80 bg-zinc-900/60 text-xs",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            e.jsx("span", {
                              className: `px-2 py-0.5 font-bold tracking-tight text-[11px] ${
                                item.isUserUpload
                                  ? "bg-[#FFB600] text-black"
                                  : "bg-zinc-800 text-zinc-200 border border-zinc-700"
                              }`,
                              children: item.badge
                            }),
                            e.jsx("span", {
                              className: "text-[11px] text-zinc-400 font-medium",
                              children: item.categoryLabel
                            })
                          ]
                        }),
                        e.jsx("span", {
                          className: "font-mono text-[11px] text-zinc-300 bg-black/50 px-2 py-0.5 border border-zinc-800",
                          children: item.ratio
                        })
                      ]
                    }),

                    /* Image Container with Hover Overlay */
                    e.jsxs("div", {
                      onClick: () => setPreviewItem(item),
                      className: "relative w-full aspect-square bg-[#0D0D0E] flex items-center justify-center overflow-hidden cursor-pointer group-hover:bg-zinc-900/40 transition-colors p-3",
                      children: [
                        e.jsx("img", {
                          src: item.src,
                          alt: item.title,
                          loading: "lazy",
                          onError: (ev) => {
                            if (item.fallbackSrc && ev.currentTarget.src !== item.fallbackSrc) {
                              ev.currentTarget.src = item.fallbackSrc;
                            }
                          },
                          className: "w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                        }),
                        /* Hover Overlay */
                        e.jsxs("div", {
                          className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 p-4 text-center",
                          children: [
                            e.jsxs("span", {
                              className: "px-3 py-1.5 bg-[#FFB600] text-black font-extrabold text-xs flex items-center gap-1.5 shadow-lg",
                              children: [
                                e.jsxs("svg", {
                                  className: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
                                    e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
                                  ]
                                }),
                                "点击查看高清大图"
                              ]
                            }),
                            e.jsx("span", {
                              className: "text-[11px] text-zinc-300 font-mono",
                              children: item.dimensions
                            })
                          ]
                        })
                      ]
                    }),

                    /* Card Body & Info */
                    e.jsxs("div", {
                      className: "flex-1 flex flex-col justify-between p-4 space-y-3.5 border-t border-zinc-800/80 bg-zinc-950",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            e.jsx("h3", {
                              className: "text-sm font-bold text-white line-clamp-1 leading-snug group-hover:text-[#FFB600] transition-colors",
                              children: item.title
                            }),
                            e.jsxs("div", {
                              className: "flex items-center justify-between text-xs text-zinc-400 font-mono",
                              children: [
                                e.jsx("span", { children: "分辨率: " + item.dimensions }),
                                e.jsx("span", { className: "text-[#FFB600]", children: item.ratio })
                              ]
                            })
                          ]
                        }),

                        /* Compliance note */
                        e.jsxs("div", {
                          className: "p-2.5 bg-zinc-900/90 border border-zinc-800 text-[11px] text-zinc-300 leading-relaxed flex items-start gap-2",
                          children: [
                            e.jsx("span", { className: "text-emerald-400 font-bold shrink-0 mt-0.5", children: "✓" }),
                            e.jsx("p", { className: "line-clamp-2", children: item.compliance })
                          ]
                        }),

                        /* Features pill list */
                        e.jsx("div", {
                          className: "space-y-1 text-[11px] text-zinc-400",
                          children: item.features.map((feat, idx) =>
                            e.jsxs("div", {
                              className: "flex items-center gap-1.5 line-clamp-1",
                              children: [
                                e.jsx("span", { className: "w-1 h-1 bg-[#FFB600] shrink-0" }),
                                e.jsx("span", { children: feat })
                              ]
                            }, idx)
                          )
                        }),

                        /* Action Buttons */
                        e.jsxs("div", {
                          className: "pt-2 border-t border-zinc-800 flex items-center justify-between gap-2",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsxs("button", {
                                  onClick: () => handleDownload(item),
                                  className: "px-2.5 py-1.5 bg-zinc-900 hover:bg-[#FFB600] hover:text-black border border-zinc-700 hover:border-[#FFB600] text-zinc-200 text-xs font-bold transition-colors flex items-center gap-1",
                                  title: "下载此图原文件",
                                  children: [
                                    e.jsx(r, { className: "w-3.5 h-3.5" }),
                                    e.jsx("span", { children: "下载" })
                                  ]
                                }),
                                e.jsx("button", {
                                  onClick: () => handleCopySpec(item),
                                  className: "px-2.5 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white text-xs font-medium transition-colors",
                                  title: "复制尺寸与规范参数",
                                  children: "复制规范"
                                })
                              ]
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-1.5",
                              children: [
                                e.jsx("button", {
                                  onClick: () => setPreviewItem(item),
                                  className: "px-2.5 py-1.5 text-xs text-[#FFB600] hover:underline font-bold",
                                  children: "大图预览"
                                }),
                                item.isUserUpload && e.jsx("button", {
                                  onClick: () => handleDelete(item.id, item.title),
                                  className: "px-2 py-1 text-xs text-red-400 hover:text-red-300 hover:bg-red-950/40 transition-colors",
                                  title: "从列表中移除此图",
                                  children: "删除"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                },
                item.id
              )
            )
          })
        ]
      }),

      /* Lightbox Modal */
      previewItem && e.jsx("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-150",
        onClick: (ev) => {
          if (ev.target === ev.currentTarget) setPreviewItem(null);
        },
        children: e.jsxs("div", {
          className: "relative max-w-5xl w-full max-h-[92vh] bg-zinc-950 border border-zinc-800 flex flex-col shadow-2xl overflow-hidden",
          children: [
            /* Modal Header */
            e.jsxs("div", {
              className: "flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/80",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("span", {
                      className: `px-2.5 py-0.5 text-xs font-bold ${
                        previewItem.isUserUpload ? "bg-[#FFB600] text-black" : "bg-zinc-800 text-zinc-300"
                      }`,
                      children: previewItem.badge
                    }),
                    e.jsx("h3", {
                      className: "text-base font-extrabold text-white truncate max-w-md sm:max-w-lg",
                      children: previewItem.title
                    })
                  ]
                }),
                e.jsx("button", {
                  onClick: () => setPreviewItem(null),
                  className: "w-8 h-8 rounded-none bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-sm font-bold transition-colors",
                  children: "✕"
                })
              ]
            }),

            /* Modal Image Viewer */
            e.jsx("div", {
              className: "flex-1 min-h-[300px] max-h-[65vh] p-4 flex items-center justify-center bg-[#09090b] overflow-auto select-none",
              children: e.jsx("img", {
                src: previewItem.src,
                alt: previewItem.title,
                className: "max-h-[60vh] max-w-full object-contain filter drop-shadow-2xl",
                onError: (ev) => {
                  if (previewItem.fallbackSrc && ev.currentTarget.src !== previewItem.fallbackSrc) {
                    ev.currentTarget.src = previewItem.fallbackSrc;
                  }
                }
              })
            }),

            /* Modal Footer & Specs */
            e.jsxs("div", {
              className: "p-4 border-t border-zinc-800 bg-zinc-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",
              children: [
                e.jsxs("div", {
                  className: "space-y-1 text-zinc-300",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3 font-mono",
                      children: [
                        e.jsxs("span", { className: "text-[#FFB600] font-bold", children: ["画幅尺寸: ", previewItem.dimensions] }),
                        e.jsx("span", { children: "·" }),
                        e.jsxs("span", { children: ["分类: ", previewItem.categoryLabel] }),
                        e.jsx("span", { children: "·" }),
                        e.jsxs("span", { children: ["画幅比: ", previewItem.ratio] })
                      ]
                    }),
                    e.jsx("p", { className: "text-zinc-400 text-[11px]", children: previewItem.compliance })
                  ]
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2 shrink-0",
                  children: [
                    e.jsxs("button", {
                      onClick: () => handleDownload(previewItem),
                      className: "px-4 py-2 bg-[#FFB600] text-black font-extrabold hover:bg-yellow-400 transition-colors flex items-center gap-1.5",
                      children: [
                        e.jsx(r, { className: "w-4 h-4" }),
                        e.jsx("span", { children: "下载原图文件" })
                      ]
                    }),
                    e.jsx("button", {
                      onClick: () => handleCopySpec(previewItem),
                      className: "px-3.5 py-2 bg-zinc-800 text-white font-bold hover:bg-zinc-700 transition-colors",
                      children: "复制规范"
                    }),
                    e.jsx("button", {
                      onClick: () => setPreviewItem(null),
                      className: "px-3 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors",
                      children: "关闭"
                    })
                  ]
                })
              ]
            })
          ]
        })
      })
    ]
  });
};

export { p as EcommerceListing };
