// import qcled5 from '../images/qcled5.webp'
// import qcled1 from '@/images/qcled1.jpg'
// import qcled3 from '@/images/qcled2.jpg'
// import q80c from '@/images/qled80c.jpg'
// import q80c1 from '@/images/qled80c2.jpg'
// import q80c2 from '@/images/qled80c3.jpg'

import { StaticImageData } from "next/image";
export interface TVSType {
  id: number;
  title: string;
  pickup: string[];
  description?: string;
  images: string[] | StaticImageData[];
  link: string;
  price: string;
  tags: string[];
  slug?: string;
  sizes?: {size: string, slug:string}[];
  features?: { key: string; value: string }[];
  currentSize?: string;
  discountedPrice?: string;
}
// const qcled =
//   "https://images.samsung.com/is/image/samsung/p6pim/pk/qa75q70cauxmm/gallery/pk-qled-q70c-qa75q70cauxmm-537262263";
// const qcled1 =
//   "https://images.samsung.com/is/image/samsung/p6pim/pk/qa75q70cauxmm/gallery/pk-qled-q70c-qa75q70cauxmm-537262264";
// const qcled3 =
//   "https://images.samsung.com/is/image/samsung/p6pim/pk/qa75q70cauxmm/gallery/pk-qled-q70c-qa75q70cauxmm-537262265";
// const qcled4 =
//   "https://images.samsung.com/is/image/samsung/p6pim/pk/qa75q70cauxmm/gallery/pk-qled-q70c-qa75q70cauxmm-537262278";
// const q80c2 =
//   "https://images.samsung.com/is/image/samsung/p6pim/pk/qa65q80cauxmm/gallery/pk-qled-q80c-qa65q80cauxmm-537262498";
// const qcled5 =
//   "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55q70cauxmm/gallery/pk-qled-q70c-qa55q70cauxmm-537262226";
// const q80c =
//   "https://images.samsung.com/is/image/samsung/p6pim/pk/qa65q80cauxmm/gallery/pk-qled-q80c-qa65q80cauxmm-537262512";
// const q80c1 =
//   "https://images.samsung.com/is/image/samsung/p6pim/pk/qa65q80cauxmm/gallery/pk-qled-q80c-qa65q80cauxmm-537262497";
const t325300 = "https://images.samsung.com/is/image/samsung/pk-hd-t4300-ua32t5300auxmm-frontblack-265965200"
const t325300_1 = "https://images.samsung.com/is/image/samsung/pk-hd-t4300-ua32t5300auxmm-rperspectiveblack-265965188"
const t325300_2 = "https://images.samsung.com/is/image/samsung/pk-hd-t4300-ua32t5300auxmm-lperspectiveblack-265965179"
const t435300 = "https://images.samsung.com/is/image/samsung/pk-fhd-t5300-ua43t5300auxmm-frontblack-265965080"
const t435300_1 = "https://images.samsung.com/is/image/samsung/pk-fhd-t5300-ua43t5300auxmm-rperspectiveblack-265965068"
const t435300_2 = "https://images.samsung.com/is/image/samsung/pk-fhd-t5300-ua43t5300auxmm-lperspectiveblack-265965067"
const du7000 = "https://images.samsung.com/is/image/samsung/p6pim/pk/ua43du7000usmm/gallery/pk-crystal-uhd-du7000-511088-ua43du7000usmm-542183019"
const du7000_1 = "https://images.samsung.com/is/image/samsung/p6pim/pk/ua43du7000usmm/gallery/pk-crystal-uhd-du7000-511088-ua43du7000usmm-542183004"
const du7000_2 = "https://images.samsung.com/is/image/samsung/p6pim/pk/ua43du7000usmm/gallery/pk-crystal-uhd-du7000-511088-ua43du7000usmm-542183005"
const du8000_1 = "https://images.samsung.com/is/image/samsung/p6pim/pk/ua50du8000usmm/gallery/pk-crystal-uhd-du8000-511125-ua50du8000usmm-542183146"
const du8000_2 = "https://images.samsung.com/is/image/samsung/p6pim/pk/ua50du8000usmm/gallery/pk-crystal-uhd-du8000-511125-ua50du8000usmm-542183133"
const du8000_3 = "https://images.samsung.com/is/image/samsung/p6pim/pk/ua50du8000usmm/gallery/pk-crystal-uhd-du8000-511125-ua50du8000usmm-542183134"
const du8000_4 = "https://images.samsung.com/is/image/samsung/p6pim/pk/ua50du8000usmm/gallery/pk-crystal-uhd-du8000-511125-ua50du8000usmm-542183135"
const du8000_5 = "https://images.samsung.com/is/image/samsung/p6pim/pk/ua50du8000usmm/gallery/pk-crystal-uhd-du8000-511125-ua50du8000usmm-542183136"
const q60d_1 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55q60dausmm/gallery/pk-qled-q60d-qa55q60dausmm-542201130"
const q60d_2 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55q60dausmm/gallery/pk-qled-q60d-qa55q60dausmm-542201171"
const q60d_3 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55q60dausmm/gallery/pk-qled-q60d-qa55q60dausmm-542201181"
const q60d_4 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55q60dausmm/gallery/pk-qled-q60d-qa55q60dausmm-542201190"
const q60d_5 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55q60dausmm/gallery/pk-qled-q60d-qa55q60dausmm-542201228"
const q70d_1 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55q70dausmm/gallery/pk-qled-q70d-511168-qa55q70dausmm-542196100"
const q70d_2 ="https://images.samsung.com/is/image/samsung/p6pim/pk/qa55q70dausmm/gallery/pk-qled-q70d-511168-qa55q70dausmm-542196101"
const q70d_3 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55q70dausmm/gallery/pk-qled-q70d-511168-qa55q70dausmm-542196102"
const q70d_4 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55q70dausmm/gallery/pk-qled-q70d-511168-qa55q70dausmm-542196098"
const q70d_5 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55q70dausmm/gallery/pk-qled-q70d-511168-qa55q70dausmm-542196099"
const q80d_1 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa65q80dausmm/gallery/pk-qled-q80d-511181-qa65q80dausmm-542196260"
const q80d_2 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa65q80dausmm/gallery/pk-qled-q80d-511181-qa65q80dausmm-542196245"
const q80d_3 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa65q80dausmm/gallery/pk-qled-q80d-511181-qa65q80dausmm-542196246"
const q80d_4 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa65q80dausmm/gallery/pk-qled-q80d-511181-qa65q80dausmm-542196247"
const q80d_5 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa65q80dausmm/gallery/pk-qled-q80d-511181-qa65q80dausmm-542196248"
const ls03d_5 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55ls03dausmm/gallery/pk-the-frame-ls03d-511780-qa55ls03dausmm-542195775"
const ls03d_2 ="https://images.samsung.com/is/image/samsung/p6pim/pk/qa65ls03dausmm/gallery/pk-the-frame-ls03d-511780-qa65ls03dausmm-542195823"
const ls03d_3 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55ls03dausmm/gallery/pk-the-frame-ls03d-511780-qa55ls03dausmm-542195784"
const ls03d_4 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55ls03dausmm/gallery/pk-the-frame-ls03d-511780-qa55ls03dausmm-542195772"
const ls03d_1 = "https://images.samsung.com/is/image/samsung/p6pim/pk/qa55ls03dausmm/gallery/pk-the-frame-ls03d-511780-qa55ls03dausmm-542195773"
const s90d_1 = "https://images.samsung.com/is/image/samsung/p6pim/au/qa65s90dawxxy/gallery/au-oled-s90d-qa65s90dawxxy-540639954"
const s90d_2 = "https://images.samsung.com/is/image/samsung/p6pim/au/qa65s90dawxxy/gallery/au-oled-s90d-qa65s90dawxxy-540639955"
const s90d_3 = "https://images.samsung.com/is/image/samsung/p6pim/au/qa65s90dawxxy/gallery/au-oled-s90d-qa65s90dawxxy-540639956"
const s90d_4 = "https://images.samsung.com/is/image/samsung/p6pim/au/qa65s90dawxxy/gallery/au-oled-s90d-qa65s90dawxxy-540639957"
const s90d_5 = "https://images.samsung.com/is/image/samsung/p6pim/au/qa65s90dawxxy/gallery/au-oled-s90d-qa65s90dawxxy-541060620"

export const TVS:TVSType[] = [
  
  {
    id: 1003,
    title: 'Samsung 32" T5300 HD Flat Smart TV',
    pickup: [
      "Watch HDR content with better clarity and detailed color expression.",
      "Ultra Clean View delivers higher quality images with less distortion, using an advanced algorithm to analyze original content.",
    ],
    description: 'The Samsung 32" T5300 Full HD Smart TV offers vibrant visuals and smart connectivity, perfect for smaller rooms or secondary spaces. With HDR support and a sleek design, enjoy an immersive viewing experience at an affordable price.',
    images: [t325300, t325300_1, t325300_2],
    features: [
      { key: "Resolution", value: "1,366 x 768" },
      { key: "HDMI", value: "2" },
      { key: "USB", value: "1" },
      { key: "Design", value: "Slim" },
      { key: "Picture Engine", value: "Hyper Real" },
      { key: "HDR", value: "HDR" },
      { key: "Contrast", value: "Mega Contrast" },
      { key: "Motion Technology", value: "Motion Rate 50" },
      { key: "Audio Output", value: "10W RMS (2CH)" },
      { key: "Audio Features", value: "Dolby Digital Plus" },
      { key: "Smart OS", value: "Tizen OS" },
      { key: "Voice Assistants", value: "Not Supported" },
      { key: "Connectivity", value: "Wi-Fi 4, Ethernet" },
      { key: "Other Features", value: "Digital Clean View, ConnectShare" },
    ],
    slug: '32-fhd-smart-t5300',
    link: "/products/32-fhd-smart-t5300",
    price: "RS: 89,999.00",
    discountedPrice: "RS: 74,999.00",
    tags: ["T5300", "32", "samsung", "Full HD", "smart tv", "budget tv"],
    sizes: [{ size: "32", slug: "32-fhd-smart-t5300" },
      { size: "43", slug: "43-fhd-smart-t5300" }
    ],
    currentSize: "32"
  },
  {
    id: 1004,
    title: 'Samsung 43" T5300 Full HD Flat Smart TV',
    pickup: [
      "Enjoy Full HD picture quality with vivid details and bright colors.",
      "HDR and Ultra Clean View enhance clarity and image depth even in bright scenes.",
    ],
    description: 'The Samsung 43" T5300 Full HD Smart TV brings your favorite content to life with sharp visuals and smart features. Perfect for everyday viewing, it includes HDR, smart connectivity, and a sleek design.',
    images: [t435300, t435300_1, t435300_2],
    features: [
      { key: "Resolution", value: "1,920 x 1,080" },
      { key: "HDMI", value: "2" },
      { key: "USB", value: "1" },
      { key: "Design", value: "Slim" },
      { key: "Picture Engine", value: "Hyper Real" },
      { key: "HDR", value: "HDR" },
      { key: "Contrast", value: "Mega Contrast" },
      { key: "Motion Technology", value: "Motion Rate 50" },
      { key: "Audio Output", value: "20W RMS (2CH)" },
      { key: "Audio Features", value: "Dolby Digital Plus" },
      { key: "Smart OS", value: "Tizen OS" },
      { key: "Connectivity", value: "Wi-Fi 4, Ethernet" },
      { key: "Other Features", value: "Digital Clean View, ConnectShare" },
    ],
    slug: '43-fhd-smart-t5300',
    link: "/products/43-fhd-smart-t5300",
    price: "RS: 119,999.00",
    discountedPrice: "RS: 99,999.00",
    tags: ["T5300", "43", "samsung", "Full HD", "smart tv", "top rated"],
    sizes: [
      { size: "32", slug: "32-fhd-smart-t5300" },
      { size: "43", slug: "43-fhd-smart-t5300" }
    ],
    currentSize: "43"
  },
  {
    id: 1005,
    title: 'Samsung 43" Crystal UHD 4K DU7000',
    pickup: [
      "See stunning 4K visuals with Crystal Processor 4K for lifelike picture quality.",
      "Motion Xcelerator delivers smooth performance for sports and action scenes.",
    ],
    description: 'The Samsung 43" DU7000 Crystal UHD 4K Smart TV (2024) combines sharp 4K resolution, a sleek design, and smart features like Tizen OS and voice assistants. Ideal for modern entertainment setups with HDR and powerful picture processing.',
    images: [du7000, du7000_1, du7000_2],
    features: [
      { key: "Refresh Rate", value: "60Hz" },
      { key: "Resolution", value: "3,840 x 2,160" },
      { key: "HDMI", value: "3" },
      { key: "USB", value: "1" },
      { key: "Design", value: "Slim Look" },
      { key: "Picture Engine", value: "Crystal Processor 4K" },
      { key: "HDR", value: "HDR, HDR10+" },
      { key: "Contrast", value: "Mega Contrast" },
      { key: "Motion Technology", value: "Motion Xcelerator" },
      { key: "Audio Output", value: "20W RMS (2CH)" },
      { key: "Audio Features", value: "Object Tracking Sound Lite, Q-Symphony" },
      { key: "Smart OS", value: "Tizen OS" },
      { key: "Voice Assistants", value: "Bixby via SmartThings app" },
      { key: "Gaming Features", value: "Auto Game Mode (ALLM)" },
      { key: "Connectivity", value: "Wi-Fi 5, Bluetooth 5.2, Ethernet" },
      { key: "Other Features", value: "SmartThings, Samsung TV Plus" },
    ],
    slug: '43-uhd-4k-du7000',
    link: "/products/43-uhd-4k-du7000",
    price: "RS: 154,999.00",
    discountedPrice: "RS: 134,999.00",
    tags: ["DU7000", "43", "samsung", "4K UHD", "smart tv", "2024 model", "top rated"],
    sizes: [
      { size: "43", slug: "43-crystal-uhd-4k-du7000" },
      { size: "50", slug: "50-crystal-uhd-4k-du7000" },
      { size: "55", slug: "55-crystal-uhd-4k-du7000" },
      { size: "65", slug: "65-crystal-uhd-4k-du7000" },
      { size: "75", slug: "75-crystal-uhd-4k-du7000" }
    ],
    currentSize: "43"
  },
  {
    id: 1006,
    title: 'Samsung 50" Crystal UHD 4K DU7000',
    pickup: [
      "Crystal Processor 4K delivers vibrant, lifelike picture quality in 4K resolution.",
      "Motion Xcelerator + Auto Low Latency Mode ensure smooth action and responsive gameplay."
    ],
    description: 'The Samsung 50" DU7000 Crystal UHD 4K Smart TV (2024, 50DU7000) offers stunning 4K visuals, smart connectivity via Tizen OS, and immersive audio with OTS Lite and Q‑Symphony—ideal for living rooms and gaming setups.',
    images: [du7000, du7000_1, du7000_2],
    features: [
      { key: "Resolution", value: "3,840 × 2,160 (4K UHD)" },
      { key: "HDMI", value: "3" },
      { key: "USB", value: "1 × USB‑A" },
      { key: "Picture Engine", value: "Crystal Processor 4K" },
      { key: "HDR", value: "HDR10+" },
      { key: "Color Technology", value: "PurColor" },
      { key: "Contrast", value: "Mega Contrast + Contrast Enhancer" },
      { key: "Motion Technology", value: "Motion Xcelerator + ALLM" },
      { key: "Audio Output", value: "20 W RMS (2‑channel)" },
      { key: "Audio Features", value: "Object Tracking Sound Lite, Q‑Symphony, Adaptive Sound" },
      { key: "Smart OS", value: "Tizen OS with Samsung Daily+, SmartThings, Gaming Hub" },
      { key: "Voice Assistants", value: "Bixby via SmartThings app" },
      { key: "Connectivity", value: "Wi‑Fi 5, Bluetooth 5.2, Ethernet, eARC" },
      { key: "Other Features", value: "4K Upscaling, Filmmaker Mode, SmartThings, Samsung TV Plus" }
    ],
    slug: '50-uhd-4k-du7000',
    link: "/products/50-uhd-4k-du7000",
    price: "RS: 173,999.00",
    discountedPrice: "RS: 160,000.00",
    tags: ["DU7000", "50", "samsung", "4K UHD", "smart tv", "2024 model"],
    sizes: [
      { size: "43", slug: "43-crystal-uhd-4k-du7000" },
      { size: "50", slug: "50-crystal-uhd-4k-du7000" },
      { size: "55", slug: "55-crystal-uhd-4k-du7000" },
      { size: "65", slug: "65-crystal-uhd-4k-du7000" },
      { size: "75", slug: "75-crystal-uhd-4k-du7000" }
    ],
    currentSize: "50"
  },
  {
    id: 1007,
    title: 'Samsung 55" Crystal UHD 4K DU7000',
    pickup: [
      "Crystal Processor 4K delivers vibrant 4K picture quality with lifelike clarity.",
      "Motion Xcelerator with VRR and ALLM ensures fluid motion and responsive gaming."
    ],
    description: 'The Samsung 55" DU7000 Crystal UHD 4K Smart TV (2024, 55DU7000) offers stunning visuals, smart features like Tizen OS, and immersive audio with OTS Lite and Q‑Symphony—ideal for home entertainment and gaming.',
    images: [du7000, du7000_1, du7000_2, ],
    features: [
      { key: "Resolution", value: "3,840 × 2,160 (4K UHD)" },
      { key: "HDMI", value: "3 (4K 60Hz capable)" },
      { key: "USB", value: "1 × USB‑A" },
      { key: "Picture Engine", value: "Crystal Processor 4K" },
      { key: "HDR", value: "HDR, HDR10+" },
      { key: "Color Technology", value: "PurColor, Mega Contrast, UHD Dimming" },
      { key: "Contrast Enhancer", value: "Yes" },
      { key: "Motion Technology", value: "Motion Xcelerator + VRR + ALLM" },
      { key: "Filmmaker Mode", value: "Yes" },
      { key: "Audio Output", value: "20 W RMS (2‑channel)" },
      { key: "Audio Features", value: "OTS Lite, Q‑Symphony, Adaptive Sound" },
      { key: "Smart OS", value: "Tizen OS" },
      { key: "Voice Assistants", value: "Bixby via SmartThings app" },
      { key: "Connectivity", value: "Wi‑Fi 5, Bluetooth 5.2, Ethernet, eARC" },
      { key: "Smart Features", value: "SmartThings, Apple AirPlay, Samsung TV Plus, Daily+, Web Browser" },
      { key: "Gaming Features", value: "ALLM, VRR, HGiG, Auto Game Mode" }
    ],
    slug: '55-crystal-uhd-4k-du7000',
    link: "/products/55-crystal-uhd-4k-du7000",
    price: "RS: 189,900.00",
    discountedPrice: "RS: 169,999.00",
    tags: ["DU7000", "55", "samsung", "4K UHD", "smart tv", "2024 model"],
    sizes: [
      { size: "43", slug: "43-crystal-uhd-4k-du7000" },
      { size: "50", slug: "50-crystal-uhd-4k-du7000" },
      { size: "55", slug: "55-crystal-uhd-4k-du7000" },
      { size: "65", slug: "65-crystal-uhd-4k-du7000" },
      { size: "75", slug: "75-crystal-uhd-4k-du7000" }
    ],
    currentSize: "55"
  },
  {
    id: 1008,
    title: 'Samsung 65" Crystal UHD 4K DU7000',
    pickup: [
      "Crystal Processor 4K delivers lifelike 4K visuals with vibrant color and clarity.",
      "Motion Xcelerator, VRR & ALLM provide smooth action and responsive gaming."
    ],
    description: 'The Samsung 65" DU7000 Crystal UHD 4K Smart TV (2024, UA65DU7000U) offers stunning 4K visuals, a slim design with adjustable stand, Tizen OS smart features, and immersive audio with OTS Lite & Q‑Symphony—great for home cinema and gaming setups.',
    images: [du7000, du7000_1, du7000_2],
    features: [
      { key: "Resolution", value: "3,840 × 2,160 (4K UHD)" },
      { key: "HDMI", value: "3" },
      { key: "USB", value: "1 × USB‑A" },
      { key: "Picture Engine", value: "Crystal Processor 4K" },
      { key: "HDR", value: "HDR, HDR10+" },
      { key: "Color Technology", value: "PurColor, Mega Contrast" },
      { key: "Dimming", value: "UHD Dimming + Contrast Enhancer" },
      { key: "Motion Technology", value: "Motion Xcelerator + VRR + ALLM" },
      { key: "Filmmaker Mode", value: "Yes" },
      { key: "Audio Output", value: "20 W RMS (2CH)" },
      { key: "Audio Features", value: "OTS Lite, Q‑Symphony, Adaptive Sound" },
      { key: "Smart OS", value: "Tizen OS" },
      { key: "Voice Assistants", value: "Bixby via SmartThings app" },
      { key: "Connectivity", value: "Wi‑Fi 5, Bluetooth 5.2, Ethernet, eARC" },
      { key: "Smart Features", value: "SmartThings, Apple AirPlay, TV Plus, Daily+, Web Browser" },
      { key: "Gaming Features", value: "ALLM, VRR, HGiG, Auto Game Mode" },
      { key: "Design", value: "Slim Look, Adjustable Stand" }
    ],
    slug: '65-crystal-uhd-4k-du7000',
    link: "/products/65-crystal-uhd-4k-du7000",
    price: "RS: 254,999.00",
    discountedPrice: "RS: 239,999.00",
    tags: ["DU7000", "65", "samsung", "4K UHD", "smart tv", "2024 model"],
    sizes: [
      { size: "43", slug: "43-crystal-uhd-4k-du7000" },
      { size: "50", slug: "50-crystal-uhd-4k-du7000" },
      { size: "55", slug: "55-crystal-uhd-4k-du7000" },
      { size: "65", slug: "65-crystal-uhd-4k-du7000" },
      { size: "75", slug: "75-crystal-uhd-4k-du7000" }
    ],
    currentSize: "65"
  },
  {
    id: 1009,
    title: 'Samsung 75" Crystal UHD 4K DU7000',
    pickup: [
      "PurColor delivers vibrant, lifelike colors on a large 75″ 4K screen.",
      "Crystal Processor 4K and 4K Upscaling ensure crisp detail from any source."
    ],
    description: 'The Samsung 75" DU7000 Crystal UHD 4K Smart TV (2024, 75DU7000) brings immersive 4K clarity, rich sound via OTS Lite & Q‑Symphony, and smart features like Tizen OS, SmartThings, and Gaming Hub—perfect for home theater setups.',
    images: [du7000, du7000_1, du7000_2],
    features: [
      { key: "Resolution", value: "3,840 × 2,160 (4K UHD)" },
      { key: "HDMI", value: "3" },
      { key: "USB", value: "1 × USB‑A" },
      { key: "Picture Engine", value: "Crystal Processor 4K" },
      { key: "HDR", value: "HDR, HDR10+" },
      { key: "Color Technology", value: "PurColor" },
      { key: "Contrast", value: "Mega Contrast, UHD Dimming + Contrast Enhancer" },
      { key: "Motion Technology", value: "Motion Xcelerator + Auto Game Mode (ALLM)" },
      { key: "4K Upscaling", value: "Yes" },
      { key: "Filmmaker Mode", value: "Yes" },
      { key: "Audio Output", value: "20 W RMS (2CH)" },
      { key: "Audio Features", value: "OTS Lite, Adaptive Sound, Q‑Symphony" },
      { key: "Smart OS", value: "Tizen OS with SmartThings, Web Browser, Samsung TV Plus" },
      { key: "Voice Assistants", value: "Bixby via SmartThings app" },
      { key: "Gaming Features", value: "ALLM, HGiG" },
      { key: "Connectivity", value: "Wi‑Fi 5, Bluetooth 5.2, Ethernet, eARC/ARC" },
      { key: "Design", value: "Slim Look, 3‑Bezel‑less" },
    ],
    slug: '75-crystal-uhd-4k-du7000',
    link: "/products/75-crystal-uhd-4k-du7000",
    price: "RS: 399,999.00",
    discountedPrice: "RS: 379,999.00",
    tags: ["DU7000", "75", "samsung", "4K UHD", "smart tv", "2024 model"],
    sizes: [
      { size: "43", slug: "43-crystal-uhd-4k-du7000" },
      { size: "50", slug: "50-crystal-uhd-4k-du7000" },
      { size: "55", slug: "55-crystal-uhd-4k-du7000" },
      { size: "65", slug: "65-crystal-uhd-4k-du7000" },
      { size: "75", slug: "75-crystal-uhd-4k-du7000" }
    ],
    currentSize: "75"
  },
  {
  "id": 1010,
  "title": "Samsung 50\" Crystal UHD 4K DU8000",
  "pickup": [
    "Dynamic Crystal Color delivers over 1 billion colors on a sleek 50″ 4K screen.",
    "Crystal Processor 4K and 4K Upscaling ensure sharp detail and lifelike visuals."
  ],
  "description": "The Samsung 50\" DU8000 Crystal UHD 4K Smart TV (2024, UA50DU8000U) features stunning 4K visuals powered by Dynamic Crystal Color and Motion Xcelerator. Enjoy rich sound with OTS Lite and Q‑Symphony, plus seamless smart experiences with Tizen OS, SmartThings, and Gaming Hub.",
  "images": [du8000_1, du8000_2, du8000_3,du8000_4, du8000_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "HDMI", "value": "3" },
    { "key": "USB", "value": "2 × USB‑A" },
    { "key": "Picture Engine", "value": "Crystal Processor 4K" },
    { "key": "HDR", "value": "HDR, HDR10+" },
    { "key": "Color Technology", "value": "Dynamic Crystal Color" },
    { "key": "Contrast", "value": "Mega Contrast, UHD Dimming + Contrast Enhancer" },
    { "key": "Motion Technology", "value": "Motion Xcelerator + Auto Game Mode (ALLM)" },
    { "key": "4K Upscaling", "value": "Yes" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "20 W RMS (2CH)" },
    { "key": "Audio Features", "value": "OTS Lite, Adaptive Sound, Q‑Symphony" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Web Browser." },
    { "key": "Voice Assistants", "value": "Bixby built‑in, Alexa compatible" },
    { "key": "Gaming Features", "value": "ALLM, HGiG, Gaming Hub" },
    { "key": "Connectivity", "value": "Wi‑Fi 5, Bluetooth 5.2, Ethernet, eARC/ARC" },
    { "key": "Design", "value": "AirSlim Design, 3‑Bezel‑less" }
  ],
  "slug": "50-crystal-uhd-4k-du8000",
  "link": "/products/50-crystal-uhd-4k-du8000",
  "price": "RS: 234,999.00",
  "discountedPrice": "RS:  169,999.00",
  "tags": ["DU8000", "50", "samsung", "4K UHD", "smart tv", "2024 model"],
  "sizes": [
    { "size": "50", "slug": "50-crystal-uhd-4k-du8000" },
    { "size": "55", "slug": "55-crystal-uhd-4k-du8000" },
    { "size": "65", "slug": "65-crystal-uhd-4k-du8000" },
    { "size": "75", "slug": "75-crystal-uhd-4k-du8000" },
    { "size": "85", "slug": "85-crystal-uhd-4k-du8000" }
  ],
  "currentSize": "50"
},
  {
  "id": 1011,
  "title": "Samsung 55\" Crystal UHD 4K DU8000",
  "pickup": [
    "Dynamic Crystal Color produces lifelike visuals on a large 55″ 4K screen.",
    "Crystal Processor 4K and Motion Xcelerator deliver smooth and detailed picture quality."
  ],
  "description": "The Samsung 55\" DU8000 Crystal UHD 4K Smart TV (2024, UA55DU8000U) brings immersive entertainment with HDR10+, OTS Lite, 4K Upscaling, and a sleek AirSlim design. Powered by Tizen OS, it includes SmartThings, Gaming Hub, and support for multiple voice assistants.",
  "images": [du8000_1, du8000_2, du8000_3, du8000_4, du8000_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "HDMI", "value": "3" },
    { "key": "USB", "value": "2 × USB‑A" },
    { "key": "Picture Engine", "value": "Crystal Processor 4K" },
    { "key": "HDR", "value": "HDR, HDR10+" },
    { "key": "Color Technology", "value": "Dynamic Crystal Color" },
    { "key": "Contrast", "value": "Mega Contrast, UHD Dimming + Contrast Enhancer" },
    { "key": "Motion Technology", "value": "Motion Xcelerator + Auto Game Mode (ALLM)" },
    { "key": "4K Upscaling", "value": "Yes" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "20 W RMS (2CH)" },
    { "key": "Audio Features", "value": "OTS Lite, Adaptive Sound, Q‑Symphony" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Web Browser, Daily+" },
    { "key": "Voice Assistants", "value": "Bixby built‑in, Alexa compatible" },
    { "key": "Gaming Features", "value": "ALLM, HGiG, Gaming Hub" },
    { "key": "Connectivity", "value": "Wi‑Fi 5, Bluetooth 5.2, Ethernet, eARC/ARC" },
    { "key": "Design", "value": "AirSlim Design, 3‑Bezel‑less" }
  ],
  "slug": "55-crystal-uhd-4k-du8000",
  "link": "/products/55-crystal-uhd-4k-du8000",
  "price": "RS: 264,999.00",
  "discountedPrice": "RS: 249,999.00",
  "tags": ["DU8000", "55", "samsung", "4K UHD", "smart tv", "2024 model"],
  "sizes": [
    { "size": "50", "slug": "50-crystal-uhd-4k-du8000" },
    { "size": "55", "slug": "55-crystal-uhd-4k-du8000" },
    { "size": "65", "slug": "65-crystal-uhd-4k-du8000" },
    { "size": "75", "slug": "75-crystal-uhd-4k-du8000" },
    { "size": "85", "slug": "85-crystal-uhd-4k-du8000" }
  ],
  "currentSize": "55"
},
{
  "id": 1012,
  "title": "Samsung 65\" Crystal UHD 4K DU8000",
  "pickup": [
    "Dynamic Crystal Color displays over 1 billion shades on a spacious 65″ 4K screen.",
    "Crystal Processor 4K and Motion Xcelerator ensure clarity and smooth visuals."
  ],
  "description": "The Samsung 65\" DU8000 Crystal UHD 4K Smart TV (UA65DU8000U) delivers immersive picture and sound with HDR10+, OTS Lite, and 4K Upscaling. Designed with AirSlim elegance and powered by Tizen OS, it supports SmartThings, Gaming Hub, Alexa, and more.",
  "images": [du8000_1, du8000_2, du8000_3, du8000_4, du8000_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "HDMI", "value": "3" },
    { "key": "USB", "value": "2 × USB‑A" },
    { "key": "Picture Engine", "value": "Crystal Processor 4K" },
    { "key": "HDR", "value": "HDR, HDR10+" },
    { "key": "Color Technology", "value": "Dynamic Crystal Color" },
    { "key": "Contrast", "value": "Mega Contrast, UHD Dimming + Contrast Enhancer" },
    { "key": "Motion Technology", "value": "Motion Xcelerator + Auto Game Mode (ALLM)" },
    { "key": "4K Upscaling", "value": "Yes" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "20 W RMS (2CH)" },
    { "key": "Audio Features", "value": "OTS Lite, Adaptive Sound, Q‑Symphony" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Web Browser, Daily+" },
    { "key": "Voice Assistants", "value": "Bixby built‑in, Alexa compatible" },
    { "key": "Gaming Features", "value": "ALLM, HGiG, Gaming Hub" },
    { "key": "Connectivity", "value": "Wi‑Fi 5, Bluetooth 5.2, Ethernet, eARC/ARC" },
    { "key": "Design", "value": "AirSlim Design, 3‑Bezel‑less" }
  ],
  "slug": "65-crystal-uhd-4k-du8000",
  "link": "/products/65-crystal-uhd-4k-du8000",
  "price": "RS: 324,999.00",
  "discountedPrice": "RS: 309,999.00",
  "tags": ["DU8000", "65", "samsung", "4K UHD", "smart tv", "2024 model"],
  "sizes": [
    { "size": "50", "slug": "50-crystal-uhd-4k-du8000" },
    { "size": "55", "slug": "55-crystal-uhd-4k-du8000" },
    { "size": "65", "slug": "65-crystal-uhd-4k-du8000" },
    { "size": "85", "slug": "85-crystal-uhd-4k-du8000" }
  ],
  "currentSize": "65"
},
{
  "id": 1013,
  "title": "Samsung 85\" Crystal UHD 4K DU8000",
  "pickup": [
    "Dynamic Crystal Color and a massive 85″ screen deliver breathtaking 4K clarity.",
    "120Hz refresh rate and VRR support ensure ultra-smooth visuals for movies and next-gen gaming."
  ],
  "description": "The Samsung 85\" DU8000 Crystal UHD 4K Smart TV (UA85DU8000U) delivers epic home cinema and next-gen gaming experiences with its 4K resolution, 120Hz refresh rate, and VRR support. Enjoy immersive audio with OTS Lite and Q‑Symphony, plus seamless connectivity through Tizen OS, SmartThings, and Gaming Hub.",
  "images": [du8000_1, du8000_2, du8000_3, du8000_4, du8000_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "120 Hz" },
    { "key": "VRR", "value": "Yes" },
    { "key": "HDMI", "value": "3" },
    { "key": "USB", "value": "2 × USB‑A" },
    { "key": "Picture Engine", "value": "Crystal Processor 4K" },
    { "key": "HDR", "value": "HDR, HDR10+" },
    { "key": "Color Technology", "value": "Dynamic Crystal Color" },
    { "key": "Contrast", "value": "Mega Contrast, UHD Dimming + Contrast Enhancer" },
    { "key": "Motion Technology", "value": "Motion Xcelerator Turbo + Auto Game Mode (ALLM)" },
    { "key": "4K Upscaling", "value": "Yes" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "20 W RMS (2CH)" },
    { "key": "Audio Features", "value": "OTS Lite, Adaptive Sound, Q‑Symphony" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Web Browser, Daily+" },
    { "key": "Voice Assistants", "value": "Bixby built‑in, Alexa compatible" },
    { "key": "Gaming Features", "value": "ALLM, HGiG, Gaming Hub, VRR, 120Hz" },
    { "key": "Connectivity", "value": "Wi‑Fi 5, Bluetooth 5.2, Ethernet, eARC/ARC" },
    { "key": "Design", "value": "AirSlim Design, 3‑Bezel‑less" }
  ],
  "slug": "85-crystal-uhd-4k-du8000",
  "link": "/products/85-crystal-uhd-4k-du8000",
  "price": "RS: 519,999.00",
  "discountedPrice": "RS: 489,999.00",
  "tags": ["DU8000", "85", "samsung", "4K UHD", "smart tv", "2024 model", "120Hz", "gaming"],
  "sizes": [
    { "size": "50", "slug": "50-crystal-uhd-4k-du8000" },
    { "size": "55", "slug": "55-crystal-uhd-4k-du8000" },
    { "size": "65", "slug": "65-crystal-uhd-4k-du8000" },
    { "size": "85", "slug": "85-crystal-uhd-4k-du8000" }
  ],
  "currentSize": "85"
},
{
  "id": 1014,
  "title": "Samsung 55\" QLED 4K Q60D",
  "pickup": [
    "100% Color Volume with Quantum Dot delivers vibrant, accurate colors at any brightness.",
    "Quantum Processor Lite 4K and Dual LED technology enhance contrast and detail."
  ],
  "description": "The Samsung 55\" Q60D QLED 4K Smart TV (QA55Q60DAU) combines stunning QLED visuals with Quantum Dot technology for vibrant colors and clarity. Powered by the Quantum Processor Lite 4K, it features Dual LED backlighting, Q‑Symphony sound, and smart tools like Tizen OS, Gaming Hub, and SmartThings.",
  "images": [q60d_1, q60d_2, q60d_3, q60d_4, q60d_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Color Volume", "value": "100% with Quantum Dot" },
    { "key": "Backlight", "value": "Dual LED" },
    { "key": "Picture Engine", "value": "Quantum Processor Lite 4K" },
    { "key": "HDR", "value": "HDR, HDR10+" },
    { "key": "Contrast", "value": "Dual LED with Supreme UHD Dimming" },
    { "key": "Motion Technology", "value": "Motion Xcelerator" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "20 W RMS (2CH)" },
    { "key": "Audio Features", "value": "OTS Lite, Q‑Symphony, Adaptive Sound" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Web Browser, Daily+" },
    { "key": "Voice Assistants", "value": "Bixby" },
    { "key": "Gaming Features", "value": "ALLM, HGiG, Gaming Hub" },
    { "key": "Connectivity", "value": "Wi‑Fi 5, Bluetooth 5.2, 3× HDMI, 2× USB, Ethernet, eARC" },
    { "key": "Design", "value": "AirSlim, 3‑Bezel‑less" }
  ],
  "slug": "55-qled-4k-q60d",
  "link": "/products/55-qled-4k-q60d",
  "price": "RS: 384,999.00",
  "discountedPrice": "RS: 359,999.00",
  "tags": ["Q60D", "QLED", "55", "samsung", "4K", "HDR", "smart tv", "2024 model", "new arrival"],
  "sizes": [
    { "size": "55", "slug": "55-qled-4k-q60d" },
    { "size": "65", "slug": "65-qled-4k-q60d" },
  ],
  "currentSize": "55"
},
{
  "id": 1015,
  "title": "Samsung 65\" QLED 4K Q60D",
  "pickup": [
    "Quantum Dot technology with 100% Color Volume brings vibrant, true-to-life visuals to a spacious 65″ screen.",
    "Quantum Processor Lite 4K and Dual LED enhance contrast and sharpness for cinematic viewing."
  ],
  "description": "The Samsung 65\" Q60D QLED 4K Smart TV (QA65Q60DAU) delivers immersive QLED picture quality with Quantum Dot and HDR10+. Featuring Dual LED backlighting, Quantum Processor Lite 4K, and AirSlim design, it's packed with smart features including Gaming Hub, Tizen OS, and SmartThings support.",
  "images": [q60d_1, q60d_2, q60d_3, q60d_4, q60d_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Color Volume", "value": "100% with Quantum Dot" },
    { "key": "Backlight", "value": "Dual LED" },
    { "key": "Picture Engine", "value": "Quantum Processor Lite 4K" },
    { "key": "HDR", "value": "HDR, HDR10+, HLG" },
    { "key": "Contrast", "value": "Dual LED with Supreme UHD Dimming" },
    { "key": "Motion Technology", "value": "Motion Xcelerator" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "20 W RMS (2CH)" },
    { "key": "Audio Features", "value": "OTS Lite, Q‑Symphony, Adaptive Sound" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Web Browser, Daily+" },
    { "key": "Voice Assistants", "value": "Bixby" },
    { "key": "Gaming Features", "value": "ALLM, HGiG, Gaming Hub" },
    { "key": "Connectivity", "value": "Wi‑Fi 5, Bluetooth 5.2, 3× HDMI, 2× USB, Ethernet, eARC" },
    { "key": "Design", "value": "AirSlim, 3‑Bezel‑less" }
  ],
  "slug": "65-qled-4k-q60d",
  "link": "/products/65-qled-4k-q60d",
  "price": "RS: 429,999.00",
  "discountedPrice": "RS: 409,999.00",
  "tags": ["Q60D", "QLED", "65", "samsung", "4K", "HDR", "smart tv", "2024 model", "new arrival"],
  "sizes": [
    { "size": "55", "slug": "55-qled-4k-q60d" },
    { "size": "65", "slug": "65-qled-4k-q60d" },
  ],
  "currentSize": "65"
},
{
  "id": 1016,
  "title": "Samsung 55\" QLED 4K Q70D",
  "pickup": [
    "Quantum Dot and Quantum HDR deliver rich color and deep contrast for stunning 4K visuals.",
    "Enjoy ultra-smooth motion with a 120Hz refresh rate, Motion Xcelerator Turbo+, and VRR."
  ],
  "description": "The Samsung 55\" Q70D QLED 4K Smart TV (2024, QA55Q70DAU) delivers a premium viewing and gaming experience with Quantum Dot technology, 120Hz refresh rate, and powerful Quantum Processor 4K. Packed with smart features like Gaming Hub, Q‑Symphony, and Tizen OS, it's built for both entertainment and performance.",
  "images": [q70d_1, q70d_2, q70d_3, q70d_4, q70d_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "120Hz" },
    { "key": "Color Volume", "value": "100% with Quantum Dot" },
    { "key": "Picture Engine", "value": "Quantum Processor 4K" },
    { "key": "Backlight", "value": "Dual LED with Supreme UHD Dimming" },
    { "key": "HDR", "value": "Quantum HDR, HDR10+" },
    { "key": "Motion Technology", "value": "Motion Xcelerator120Hz" },
    { "key": "VRR", "value": "Yes" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "20W RMS (2CH)" },
    { "key": "Audio Features", "value": "OTS Lite, Adaptive Sound Pro, Q‑Symphony" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Web Browser, Daily+" },
    { "key": "Voice Assistants", "value": "Bixby built-in" },
    { "key": "Gaming Features", "value": "ALLM, HGiG, Gaming Hub, 120Hz, VRR" },
    { "key": "Connectivity", "value": "Wi‑Fi 5, Bluetooth 5.2, 4× HDMI (1x eARC), 2× USB, Ethernet" },
    { "key": "Design", "value": "AirSlim Design, 3‑Bezel‑less" }
  ],
  "slug": "55-qled-4k-q70d",
  "link": "/products/55-qled-4k-q70d",
  "price": "RS: 474,999.00",
  "discountedPrice": "RS: 449,999.00",
  "tags": ["Q70D", "QLED", "55", "samsung", "4K", "HDR", "120Hz", "gaming", "smart tv", "2024 model", "new arrival", "top"],
  "sizes": [
    { "size": "55", "slug": "55-qled-4k-q70d" },
    { "size": "65", "slug": "65-qled-4k-q70d" },
    { "size": "75", "slug": "75-qled-4k-q70d" },
    { "size": "85", "slug": "85-qled-4k-q70d" }
  ],
  "currentSize": "55"
},
{
  "id": 1017,
  "title": "Samsung 65\" QLED 4K Q70D",
  "pickup": [
    "Quantum Dot with Quantum HDR delivers 100% Color Volume and exceptional contrast on a large 65″ screen.",
    "Enjoy ultra-smooth performance with a native 120Hz refresh rate and Motion Xcelerator Turbo+."
  ],
  "description": "The Samsung 65\" Q70D QLED 4K Smart TV (QA65Q70DAU) is engineered for immersive entertainment and high-performance gaming. With Quantum Processor 4K, 120Hz refresh rate, advanced HDR, and smart tools like Gaming Hub, SmartThings, and Q‑Symphony, this AirSlim TV blends cinematic visuals and next-gen interactivity.",
  "images": [q70d_1, q70d_2, q70d_3, q70d_4, q70d_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "120Hz" },
    { "key": "Color Volume", "value": "100% with Quantum Dot" },
    { "key": "Picture Engine", "value": "Quantum Processor 4K" },
    { "key": "Backlight", "value": "Dual LED with Supreme UHD Dimming" },
    { "key": "HDR", "value": "Quantum HDR, HDR10+" },
    { "key": "Motion Technology", "value": "Motion Xcelerator 120Hz" },
    { "key": "VRR", "value": "Yes" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "20W RMS (2CH)" },
    { "key": "Audio Features", "value": "OTS Lite, Adaptive Sound Pro, Q‑Symphony" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Web Browser, Daily+" },
    { "key": "Voice Assistants", "value": "Bixby built-in" },
    { "key": "Gaming Features", "value": "ALLM, HGiG, Gaming Hub, 120Hz, VRR" },
    { "key": "Connectivity", "value": "Wi‑Fi 5, Bluetooth 5.2, 4× HDMI (1x eARC), 2× USB, Ethernet" },
    { "key": "Design", "value": "AirSlim Design, 3‑Bezel‑less" }
  ],
  "slug": "65-qled-4k-q70d",
  "link": "/products/65-qled-4k-q70d",
  "price": "RS: 569,999.00",
  "discountedPrice": "RS: 549,999.00",
  "tags": ["Q70D", "QLED", "65", "samsung", "4K", "HDR", "120Hz", "gaming", "smart tv", "2024 model", "new arrival", "top"],
  "sizes": [
    { "size": "55", "slug": "55-qled-4k-q70d" },
    { "size": "65", "slug": "65-qled-4k-q70d" },
    { "size": "75", "slug": "75-qled-4k-q70d" },
    { "size": "85", "slug": "85-qled-4k-q70d" }
  ],
  "currentSize": "65"
},
{
  "id": 1018,
  "title": "Samsung 75\" QLED 4K Q70D",
  "pickup": [
    "Quantum Dot technology with 100% Color Volume and Quantum HDR ensures a cinematic 4K experience on a massive 75″ screen.",
    "120Hz refresh rate, VRR, and Motion Xcelerator 120Hz offer ultra-smooth performance for high-speed action and gaming."
  ],
  "description": "The Samsung 75\" Q70D QLED 4K Smart TV (QA75Q70DAU) is a premium entertainment hub designed for immersive visuals and powerful performance. With Quantum Processor 4K, rich HDR support, advanced motion tech, and smart features like Gaming Hub and SmartThings, it’s ideal for gamers and home cinema lovers alike.",
  "images": [q70d_1, q70d_2, q70d_3, q70d_4, q70d_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "120Hz" },
    { "key": "Color Volume", "value": "100% with Quantum Dot" },
    { "key": "Picture Engine", "value": "Quantum Processor 4K" },
    { "key": "Backlight", "value": "Dual LED with Supreme UHD Dimming" },
    { "key": "HDR", "value": "Quantum HDR, HDR10+" },
    { "key": "Motion Technology", "value": "Motion Xcelerator120Hz" },
    { "key": "VRR", "value": "Yes" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "20W RMS (2CH)" },
    { "key": "Audio Features", "value": "OTS Lite, Adaptive Sound Pro, Q‑Symphony" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Web Browser, Daily+" },
    { "key": "Voice Assistants", "value": "Bixby built-in" },
    { "key": "Gaming Features", "value": "ALLM, HGiG, Gaming Hub, 120Hz, VRR" },
    { "key": "Connectivity", "value": "Wi‑Fi 5, Bluetooth 5.2, 4× HDMI (1x eARC), 2× USB, Ethernet" },
    { "key": "Design", "value": "AirSlim Design, 3‑Bezel‑less" }
  ],
  "slug": "75-qled-4k-q70d",
  "link": "/products/75-qled-4k-q70d",
  "price": "RS: 674,999.00",
  "discountedPrice": "RS: 639,999.00",
  "tags": ["Q70D", "QLED", "75", "samsung", "4K", "HDR", "120Hz", "gaming", "smart tv", "2024 model", "new arrival", "top"],
  "sizes": [
    { "size": "55", "slug": "55-qled-4k-q70d" },
    { "size": "65", "slug": "65-qled-4k-q70d" },
    { "size": "75", "slug": "75-qled-4k-q70d" },
    { "size": "85", "slug": "85-qled-4k-q70d" }
  ],
  "currentSize": "75"
},
{
  "id": 1019,
  "title": "Samsung 85\" QLED 4K Q70D",
  "pickup": [
    "Quantum Dot technology with 100% Color Volume and Quantum HDR ensures a cinematic 4K experience on a massive 85″ screen.",
    "120Hz refresh rate, VRR, and Motion Xcelerator 120Hz offer ultra-smooth performance for high-speed action and gaming."
  ],
  "description": "The Samsung 85\" Q70D QLED 4K Smart TV (QA85Q70DAU) is a premium entertainment hub designed for immersive visuals and powerful performance. With Quantum Processor 4K, rich HDR support, advanced motion tech, and smart features like Gaming Hub and SmartThings, it’s ideal for gamers and home cinema lovers alike.",
  "images": [q70d_1, q70d_2, q70d_3, q70d_4, q70d_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "120Hz" },
    { "key": "Color Volume", "value": "100% with Quantum Dot" },
    { "key": "Picture Engine", "value": "Quantum Processor 4K" },
    { "key": "Backlight", "value": "Dual LED with Supreme UHD Dimming" },
    { "key": "HDR", "value": "Quantum HDR, HDR10+" },
    { "key": "Motion Technology", "value": "Motion Xcelerator120Hz" },
    { "key": "VRR", "value": "Yes" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "20W RMS (2CH)" },
    { "key": "Audio Features", "value": "OTS Lite, Adaptive Sound Pro, Q‑Symphony" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Web Browser, Daily+" },
    { "key": "Voice Assistants", "value": "Bixby built-in" },
    { "key": "Gaming Features", "value": "ALLM, HGiG, Gaming Hub, 120Hz, VRR" },
    { "key": "Connectivity", "value": "Wi‑Fi 5, Bluetooth 5.2, 4× HDMI (1x eARC), 2× USB, Ethernet" },
    { "key": "Design", "value": "AirSlim Design, 3‑Bezel‑less" }
  ],
  "slug": "85-qled-4k-q70d",
  "link": "/products/85-qled-4k-q70d",
  "price": "RS: 674,999.00",
  "discountedPrice": "RS: 639,999.00",
  "tags": ["Q70D", "QLED", "85", "samsung", "4K", "HDR", "120Hz", "gaming", "smart tv", "2024 model", "new arrival", "top"],
  "sizes": [
    { "size": "55", "slug": "55-qled-4k-q70d" },
    { "size": "65", "slug": "65-qled-4k-q70d" },
    { "size": "75", "slug": "75-qled-4k-q70d" },
    { "size": "85", "slug": "85-qled-4k-q70d" }
  ],
  "currentSize": "85"
},
{
  "id": 1020,
  "title": "Samsung 65\" QLED 4K Q80D",
  "pickup": [
    "Direct Full Array with Quantum Dot technology delivers deep blacks and brilliant 4K color.",
    "120 Hz refresh rate with Motion Xcelerator ensures fluid motion for sports and gaming."
  ],
  "description": "The Samsung 65\" Q80D QLED 4K Smart TV (QA65Q80DAU) delivers an immersive experience with lifelike contrast, bold colors, and advanced gaming features. Powered by the NQ4 AI Gen2 processor and enhanced with Dolby Atmos, Object Tracking Sound Lite, and Tizen OS Smart Hub, it’s perfect for cinematic viewing and next-gen gaming setups.",
  "images": [q80d_1, q80d_2, q80d_3, q80d_4, q80d_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "120 Hz" },
    { "key": "Backlight", "value": "Direct Full Array" },
    { "key": "Picture Engine", "value": "NQ4 AI Gen2 Processor with 4K AI Upscaling" },
    { "key": "Color Technology", "value": "Quantum Dot (100% Color Volume)" },
    { "key": "HDR", "value": "Quantum HDR+, HDR10+" },
    { "key": "Contrast Enhancement", "value": "Supreme UHD Dimming, Real Depth Enhancer" },
    { "key": "Motion Technology", "value": "Motion Xcelerator120 Hz" },
    { "key": "VRR", "value": "Yes (FreeSync Premium Pro)" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "40 W RMS (2.2‑Channel)" },
    { "key": "Audio Features", "value": "Dolby Atmos, OTS Lite, Q‑Symphony, Adaptive Sound Pro" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Gaming Hub" },
    { "key": "Voice Assistants", "value": "Bixby built-in" },
    { "key": "Gaming Features", "value": "ALLM, VRR, Game Bar, Super Ultra Wide GameView, HGiG" },
    { "key": "Connectivity", "value": "Wi‑Fi 5, Bluetooth 5.2, 4× HDMI (eARC), 2× USB, Ethernet" },
    { "key": "Design", "value": "Slim Look, 3-Bezel-less, NEW HEXAGON PLATE" },
    { "key": "Eco & Power", "value": "Eco Sensor" }
  ],
  "slug": "65-qled-4k-q80d",
  "link": "/products/65-qled-4k-q80d",
  "price": "RS: 579,999.00",
  "discountedPrice": "RS: 549,999.00",
  "tags": ["Q80D", "QLED", "65", "samsung", "4K", "HDR", "120Hz", "gaming", "smart tv", "2024 model","recommened", "new arrival", "top"],
  "sizes": [
    { "size": "65", "slug": "65-qled-4k-q80d" },
    { "size": "75", "slug": "75-qled-4k-q80d" },
  ],
  "currentSize": "65"
},
{
  "id": 1021,
  "title": "Samsung 75\" QLED 4K Q80D",
  "pickup": [
    "Quantum Dot with Direct Full Array delivers lifelike color and deep contrast in stunning 4K.",
    "120 Hz refresh rate and VRR deliver ultra-smooth gaming and sports viewing."
  ],
  "description": "The Samsung 75\" Q80D QLED 4K Smart TV (QA75Q80DAU) features bold contrast from Direct Full Array and rich colors via Quantum Dot. Enhanced with a 120 Hz panel, Dolby Atmos sound, and a powerful NQ4 AI Gen2 processor, it's ideal for cinematic experiences and next-gen console gaming—all supported by Tizen OS with SmartThings and Gaming Hub.",
  "images": [q80d_1, q80d_2, q80d_3,q80d_4, q80d_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "120 Hz" },
    { "key": "Backlight", "value": "Direct Full Array" },
    { "key": "Picture Engine", "value": "NQ4 AI Gen2 Processor with 4K AI Upscaling" },
    { "key": "Color Technology", "value": "Quantum Dot (100% Color Volume)" },
    { "key": "HDR", "value": "Quantum HDR+ (HDR10, HDR10+, HLG)" },
    { "key": "Contrast Enhancement", "value": "Supreme UHD Dimming, Real Depth Enhancer" },
    { "key": "Motion Technology", "value": "Motion Xcelerator120 Hz" },
    { "key": "VRR", "value": "Yes (FreeSync Premium Pro)" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "40 W RMS (2.2‑Channel)" },
    { "key": "Audio Features", "value": "Dolby Atmos, OTS Lite, Adaptive Sound Pro, Q‑Symphony" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Gaming Hub" },
    { "key": "Voice Assistants", "value": "Bixby built-in" },
    { "key": "Gaming Features", "value": "ALLM, VRR, Game Bar, HGiG, Super Ultra Wide GameView" },
    { "key": "Connectivity", "value": "Wi‑Fi 5, Bluetooth 5.2, 4× HDMI (eARC), 2× USB, Ethernet" },
    { "key": "Design", "value": "Slim Look, 3-Bezel-less, NEW HEXAGON PLATE" },
    { "key": "Eco & Power", "value": "Eco Sensor" }
  ],
  "slug": "75-qled-4k-q80d",
  "link": "/products/75-qled-4k-q80d",
  "price": "RS: 799,999.00",
  "discountedPrice": "RS: 749,999.00",
  "tags": ["Q80D", "QLED", "75", "samsung", "4K", "HDR", "120Hz", "gaming", "smart tv", "2024 model", "recommened", "new arrival", "top product"],
  "sizes": [
    { "size": "65", "slug": "65-qled-4k-q80d" },
    { "size": "75", "slug": "75-qled-4k-q80d" },
  ],
  "currentSize": "75"
},
{
  "id": 1022,
  "title": "Samsung 55\" The Frame LS03D QLED 4K",
  "pickup": [
    "Transforms into a work of art when not in use, blending seamlessly with your home décor.",
    "QLED 4K picture quality with 100% Color Volume powered by Quantum Dot."
  ],
  "description": "The Samsung 55\" The Frame LS03D QLED 4K Smart TV (QA55LS03DAU) combines stunning QLED visuals with an art-inspired design. Enjoy lifelike color, customizable bezels, and Art Mode that displays artwork or personal photos when the TV is off. Powered by the 4K AI Upscaling, The Frame delivers cinematic quality and smart features via Tizen OS with SmartThings integration.",
  "images": [ls03d_1, ls03d_2, ls03d_3, ls03d_4, ls03d_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "120 Hz" },
    { "key": "Picture Engine", "value": "Quantum Processor 4K" },
    { "key": "Color Technology", "value": "Quantum Dot (100% Color Volume)" },
    { "key": "HDR", "value": "Quantum HDR (HDR10, HDR10+)" },
    { "key": "Contrast Enhancement", "value": "Supreme UHD Dimming" },
    { "key": "Motion Technology", "value": "Motion Xcelerator120Hz" },
    { "key": "VRR", "value": "Yes" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "40 W RMS (2.0.2-Channel)" },
    { "key": "Audio Features", "value": "Dolby Atmos, Adaptive Sound Pro, Q-Symphony" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Art Mode" },
    { "key": "Voice Assistants", "value": "Bixby built-in" },
    { "key": "Special Features", "value": "Customizable Bezels, Slim Fit Wall-Mount, Art Store Access" },
    { "key": "Connectivity", "value": "Wi-Fi 5, Bluetooth 5.2, 4× HDMI (eARC), 2× USB, Ethernet" },
    { "key": "Design", "value": "Slim Fit, Art Frame Design" },
    { "key": "Eco & Power", "value": "Eco Sensor, Motion Sensor for Art Mode" }
  ],
  "slug": "55-qled-4k-ls03d",
  "link": "/products/55-qled-4k-ls03d",
  "price": "RS: 479,999.00",
  "discountedPrice": "RS: 449,999.00",
  "tags": ["LS03D", "The Frame", "QLED", "55", "samsung", "4K", "HDR", "Art Mode", "smart tv", "2024 model", "recommended", "new arrival", "top"],
  "sizes": [
    { "size": "55", "slug": "55-qled-4k-ls03d" },
    { "size": "65", "slug": "65-qled-4k-ls03d" }
  ],
  "currentSize": "55"
},
{
  "id": 1023,
  "title": "Samsung 65\" The Frame LS03D QLED 4K",
  "pickup": [
    "Transforms into a work of art when not in use, blending seamlessly with your home décor.",
    "QLED 4K picture quality with 100% Color Volume powered by Quantum Dot."
  ],
  "description": "The Samsung 65\" The Frame LS03D QLED 4K Smart TV (QA65LS03DAU) combines premium picture quality with an art-inspired design. Featuring Art Mode to display artwork or personal photos when off, it enhances any living space. 4K AI Upscaling, and Quantum Dot technology, it delivers vibrant colors and lifelike detail. Powered by Tizen OS with SmartThings integration, it offers seamless streaming and smart home control.",
  "images": [ls03d_1, ls03d_2, ls03d_3, ls03d_4, ls03d_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "120 Hz" },
    { "key": "Picture Engine", "value": "Quantum Processor 4K with 4K AI Upscaling" },
    { "key": "Color Technology", "value": "Quantum Dot (100% Color Volume)" },
    { "key": "HDR", "value": "Quantum HDR (HDR10, HDR10+)" },
    { "key": "Contrast Enhancement", "value": "Supreme UHD Dimming" },
    { "key": "Motion Technology", "value": "Motion Xcelerator120Hz" },
    { "key": "VRR", "value": "Yes" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "40 W RMS (2.0.2-Channel)" },
    { "key": "Audio Features", "value": "Dolby Atmos, Adaptive Sound Pro, Q-Symphony" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Art Mode" },
    { "key": "Voice Assistants", "value": "Bixby built-in" },
    { "key": "Special Features", "value": "Customizable Bezels, Slim Fit Wall-Mount, Art Store Access" },
    { "key": "Connectivity", "value": "Wi-Fi 5, Bluetooth 5.2, 4× HDMI (eARC), 2× USB, Ethernet" },
    { "key": "Design", "value": "Slim Fit, Art Frame Design" },
    { "key": "Eco & Power", "value": "Eco Sensor, Motion Sensor for Art Mode" }
  ],
  "slug": "65-qled-4k-ls03d",
  "link": "/products/65-qled-4k-ls03d",
  "price": "RS: 619,999.00",
  "discountedPrice": "RS: 589,999.00",
  "tags": ["LS03D", "The Frame", "QLED", "65", "samsung", "4K", "HDR", "Art Mode", "smart tv", "2024 model", "recommended", "new arrival", "top product" ],
  "sizes": [
    { "size": "55", "slug": "55-qled-4k-ls03d" },
    { "size": "65", "slug": "65-qled-4k-ls03d" }
  ],
  "currentSize": "65"
},
{
  "id": 1024,
  "title": "Samsung 65\" OLED 4K S90D",
  "pickup": [
    "OLED delivers pure blacks and stunning color accuracy.",
    "144 Hz refresh rate and near-instant response time for ultra-smooth gaming and action scenes."
  ],
  "description": "The Samsung 65\" S90D OLED 4K Smart TV (QA65S90DAU) offers exceptional picture quality with pure blacks, vibrant colors, and incredible detail thanks to OLED technology. Equipped with the powerful NQ4 AI Gen2 processor, 144 Hz refresh rate, Dolby Atmos sound, and advanced gaming features, it’s built for both cinematic viewing and next-gen console gaming. Powered by Tizen OS, it includes SmartThings, Gaming Hub, and voice control integration.",
  "images": [s90d_1, s90d_2, s90d_3, s90d_4, s90d_5],
  "features": [
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "144 Hz" },
    { "key": "Display Type", "value": "OLED" },
    { "key": "Picture Engine", "value": "NQ4 AI Gen2 Processor with 4K AI Upscaling" },
    { "key": "Color Technology", "value": "Perceptional Color Mapping" },
    { "key": "HDR", "value": "OLED HDR+ (HDR10, HDR10+, HLG)" },
    { "key": "Contrast Enhancement", "value": " Real Depth Enhancer" },
    { "key": "Motion Technology", "value": "Motion Xcelerator 144 Hz" },
    { "key": "VRR", "value": "Yes (FreeSync Premium)" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Audio Output", "value": "40 W RMS (2.1-Channel)" },
    { "key": "Audio Features", "value": "Dolby Atmos, OTS Lite, Adaptive Sound Pro, Q-Symphony" },
    { "key": "Smart OS", "value": "Tizen OS with SmartThings, Gaming Hub" },
    { "key": "Voice Assistants", "value": "Bixby built-in" },
    { "key": "Gaming Features", "value": "ALLM, VRR, Game Bar, HGiG, Super Ultra Wide GameView" },
    { "key": "Connectivity", "value": "Wi-Fi 5, Bluetooth 5.2, 4× HDMI (eARC), 2× USB, Ethernet" },
    { "key": "Design", "value": "LaserSlim Design, 4 Bezel-less" },
    { "key": "Eco & Power", "value": "Eco Sensor" }
  ],
  "slug": "65-oled-4k-s90d",
  "link": "/products/65-oled-4k-s90d",
  "price": "RS: 759,999.00",
  "discountedPrice": "RS: 719,999.00",
  "tags": ["S90D", "OLED", "65", "samsung", "4K", "HDR", "144Hz", "gaming", "smart tv", "2024 model", "recommended", "new arrival", "top product", "main"],
  "sizes": [
    { "size": "65", "slug": "65-oled-4k-s90d" },
    { "size": "77", "slug": "77-oled-4k-s90d" }
  ],
  "currentSize": "65"
}


];


