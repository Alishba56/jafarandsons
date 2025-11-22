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
  brand: string;
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

const QNED100front_view = "https://www.lg.com/content/dam/channel/wcms/my/2025_ms_lg-com/tv/qned-evo/qned85/gp1/gallery/100-qned85-a/gallery/100QNED86_Infill_0000_2010.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const QNED100side_view = "https://www.lg.com/content/dam/channel/wcms/my/2025_ms_lg-com/tv/qned-evo/qned85/gp1/gallery/100-qned85-a/gallery/100QNED86_Infill_0008_2010.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const QNED100dimensional_view = "https://www.lg.com/content/dam/channel/wcms/my/2025_ms_lg-com/tv/qned-evo/qned85/gp1/gallery/100-qned85-a/gallery/2010-100-04.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const QNED100rear_view = "https://www.lg.com/content/dam/channel/wcms/my/2025_ms_lg-com/tv/qned-evo/qned85/gp1/gallery/100-qned85-a/gallery/100QNED86_Infill_0010_2010.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const OLEDfront_view = "https://www.lg.com/content/dam/channel/wcms/au/2025/2025_he_lg-com/tv/oled-evo/c5/gallery-usp/83inch/2010_1.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const OLEDside_view = "https://www.lg.com/content/dam/channel/wcms/au/2025/2025_he_lg-com/tv/oled-evo/c5/gallery-usp/83inch/2010_5.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const OLEDdimensional_view = "https://www.lg.com/content/dam/channel/wcms/au/2025/2025_he_lg-com/tv/oled-evo/c5/gallery-usp/83inch/2010_6.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const OLEDrear_view = "https://www.lg.com/content/dam/channel/wcms/au/2025/2025_he_lg-com/tv/oled-evo/c5/gallery-usp/83inch/2010_4.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const QNED82front_view = "https://www.lg.com/content/dam/channel/wcms/hk_en/images/tv/qned/2025/qned82/75qned82aca/qned-qned82-2025-75-gallery-01.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const QNED82side_view = "https://www.lg.com/content/dam/channel/wcms/hk_en/images/tv/qned/2025/qned82/75qned82aca/qned-qned82-2025-75-gallery-04.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const QNED82dimensional_view = "https://www.lg.com/content/dam/channel/wcms/hk_en/images/tv/qned/2025/qned82/75qned82aca/qned-qned82-2025-75-gallery-05.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const QNED82rear_view = "https://www.lg.com/content/dam/channel/wcms/hk_en/images/tv/qned/2025/qned82/75qned82aca/qned-qned82-2025-75-gallery-03.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const UA84front_view = "https://www.lg.com/content/dam/channel/wcms/sg/products/tvs/4k-uhd/ua8450psa/uhd-ua75-2025-43-gallery-01.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const UA84side_view = "https://www.lg.com/content/dam/channel/wcms/sg/2025_ms_lg-com/tv/uhd/ua75/gp1/gallery/43-ua75-a/gallery1/uhd-ua75-2025-43-gallery-04.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const UA84dimensional_view = "https://www.lg.com/content/dam/channel/wcms/sg/2025_ms_lg-com/tv/uhd/ua75/gp1/gallery/43-ua75-a/gallery1/uhd-ua75-2025-43-gallery-05.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const UA84rear_view = "https://www.lg.com/content/dam/channel/wcms/sg/2025_ms_lg-com/tv/uhd/ua75/gp1/gallery/43-ua75-a/gallery1/uhd-ua75-2025-43-gallery-03.jpg/jcr:content/renditions/thum-1600x1062.jpeg";
const WA70Hfront_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa70h4000sgurt/gallery/pk-wa70h4000-top-load-with-diamond-drum-7-kg-wa70h4000sgurt-501223072?$684_547_PNG$";
const WA70Hside_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa70h4000sgurt/gallery/pk-wa70h4000-top-load-with-diamond-drum-7-kg-wa70h4000sgurt-501223079?$Q90_684_547_JPG$";
const WA70Hdimensional_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa70h4000sgurt/gallery/pk-wa70h4000-top-load-with-diamond-drum-7-kg-wa70h4000sgurt-501223085?$Q90_684_547_JPG$";
const WA70Hrear_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa70h4000sgurt/gallery/pk-wa70h4000-top-load-with-diamond-drum-7-kg-wa70h4000sgurt-501223087?$Q90_684_547_JPG$";
const WA80Hfront_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa80ck4240bwrt/gallery/pk-wa4000c-522585-wa80ck4240bwrt-543483108?$684_547_PNG$";
const WA80Hside_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa80ck4240bwrt/gallery/pk-wa4000c-522585-wa80ck4240bwrt-543483096?$Q90_684_547_JPG$";
const WA80Hdimensional_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa80ck4240bwrt/gallery/pk-wa4000c-522585-wa80ck4240bwrt-543483098?$Q90_684_547_JPG$";
const WA80Hrear_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa80ck4240bwrt/gallery/pk-wa4000c-522585-wa80ck4240bwrt-543483099?$Q90_684_547_JPG$";
const WA90Hfront_view = "https://images.samsung.com/is/image/samsung/p6pim/ph/wa90cg4545bdtc/gallery/ph-wa4000c-465713-wa90cg4545bdtc-537138240?$684_547_PNG$";
const WA90Hside_view = "https://images.samsung.com/is/image/samsung/p6pim/ph/wa90cg4545bdtc/gallery/ph-wa4000c-465713-wa90cg4545bdtc-thumb-537138238?$104_104_PNG$";
const WA90Hdimensional_view = "https://images.samsung.com/is/image/samsung/p6pim/ph/wa90cg4545bdtc/gallery/ph-wa4000c-465713-wa90cg4545bdtc-thumb-537138234?$104_104_PNG$";
const WA90Hrear_view = "https://images.samsung.com/is/image/samsung/p6pim/ph/wa90cg4545bdtc/gallery/ph-wa4000c-465713-wa90cg4545bdtc-thumb-537138235?$104_104_PNG$";
const WA10Hfront_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa10ck4545byrt/gallery/pk-wa4000c-wa10ck4545byrt-539148013?$684_547_PNG$";
const WA10Hside_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa10ck4545byrt/gallery/pk-wa4000c-wa10ck4545byrt-thumb-539148006?$104_104_PNG$";
const WA10Hdimensional_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa10ck4545byrt/gallery/pk-wa4000c-wa10ck4545byrt-thumb-539148007?$104_104_PNG$";
const WA10Hrear_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa10ck4545byrt/gallery/pk-wa4000c-wa10ck4545byrt-thumb-539148005?$104_104_PNG$";
const WA21Hfront_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa21ck6745bvrt/gallery/pk-wa6000c-wa21ck6745bvrt-thumb-539148222?$104_104_PNG$";
const WA21Hside_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa21ck6745bvrt/gallery/pk-wa6000c-wa21ck6745bvrt-thumb-539148214?$104_104_PNG$";
const WA21Hdimensional_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa21ck6745bvrt/gallery/pk-wa6000c-wa21ck6745bvrt-thumb-539148215?$104_104_PNG$";
const WA21Hrear_view = "https://images.samsung.com/is/image/samsung/p6pim/pk/wa21ck6745bvrt/gallery/pk-wa6000c-wa21ck6745bvrt-thumb-539148215?$104_104_PNG$";
const LHD657front_view = "https://www.lg.com/ae/images/home-theatre-systems/md05841609/gallery/LHD657-large.jpg";
const S40Tfront_view = "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/98ac7633-bd80-415f-aabf-33fbbbbe337c/AV_S40T_gallery_1_2048x1152?io=transform:fill,width:596";
const S40Tside_view = "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/460547f9-dce4-4786-ba92-33edbf3aba60/AV_S40T_gallery_6_2048x1152?io=transform:fill,width:94";
const S40Tdimensional_view = "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/21c3a578-ef80-4729-83d9-7096e384fe3d/AV_S40T_gallery_4_2048x2048?io=transform:fill,width:596";
const S40Trear_view = "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/fdace978-6418-48ca-bf03-a594965a8773/AV_S40T_gallery_8_2048x1152?io=transform:fill,width:94";


export const TVS:TVSType[] = [
  
  {
    id: 1003,
    brand: "samsung",
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
    price: "Rs: 89,999.00",
    discountedPrice: "RS: 74,999.00",
    tags: ["T5300", "32", "samsung", "Full HD", "smart tv", "budget tv", "tv"],
    sizes: [{ size: "32", slug: "32-fhd-smart-t5300" },
      { size: "43", slug: "43-fhd-smart-t5300" }
    ],
    currentSize: "32"
  },
  {
    id: 1004,
    title: 'Samsung 43" T5300 Full HD Flat Smart TV',
    brand: "samsung",
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
    price: "Rs: 119,999.00",
    discountedPrice: "RS: 99,999.00",
    tags: ["T5300", "43", "samsung", "Full HD", "smart tv", "top rated", "tv"],
    sizes: [
      { size: "32", slug: "32-fhd-smart-t5300" },
      { size: "43", slug: "43-fhd-smart-t5300" }
    ],
    currentSize: "43"
  },
  {
    id: 1005,
    title: 'Samsung 43" Crystal UHD 4K DU7000',
    brand: "samsung",
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
    price: "Rs: 154,999.00",
    discountedPrice: "RS: 134,999.00",
    tags: ["DU7000", "43", "samsung", "4K UHD", "smart tv", "2024 model", "top rated", "tv"],
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
    brand: "samsung",
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
    price: "Rs: 173,999.00",
    discountedPrice: "RS: 160,000.00",
    tags: ["DU7000", "50", "samsung", "4K UHD", "smart tv", "2024 model", "tv"],
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
    brand: "samsung",
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
    price: "Rs: 189,900.00",
    discountedPrice: "RS: 169,999.00",
    tags: ["DU7000", "55", "samsung", "4K UHD", "smart tv", "2024 model", "tv"],
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
    brand: "samsung",
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
    price: "Rs: 254,999.00",
    discountedPrice: "RS: 239,999.00",
    tags: ["DU7000", "65", "samsung", "4K UHD", "smart tv", "2024 model", "tv"],
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
    brand: "samsung",
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
    price: "Rs: 399,999.00",
    discountedPrice: "RS: 379,999.00",
    tags: ["DU7000", "75", "samsung", "4K UHD", "smart tv", "2024 model", "tv"],
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
  brand: "samsung",
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
  "price": "Rs: 234,999.00",
  "discountedPrice": "RS:  169,999.00",
  "tags": ["DU8000", "50", "samsung", "4K UHD", "smart tv", "2024 model", "tv"],
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
  brand: "samsung",
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
  "price": "R: 264,999.00",
  "discountedPrice": "RS: 249,999.00",
  "tags": ["DU8000", "55", "samsung", "4K UHD", "smart tv", "2024 model", "tv"],
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
  brand: "samsung",
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
  "price": "Rs: 324,999.00",
  "discountedPrice": "RS: 309,999.00",
  "tags": ["DU8000", "65", "samsung", "4K UHD", "smart tv", "2024 model", "tv"],
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
  brand: "samsung",
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
  "price": "Rs: 519,999.00",
  "discountedPrice": "RS: 489,999.00",
  "tags": ["DU8000", "85", "samsung", "4K UHD", "smart tv", "2024 model", "120Hz", "gaming", "tv"],
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
  brand: "samsung",
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
  "price": "Rs: 384,999.00",
  "discountedPrice": "RS: 359,999.00",
  "tags": ["Q60D", "QLED", "55", "samsung", "4K", "HDR", "smart tv", "2024 model", "new arrival", "tv"],
  "sizes": [
    { "size": "55", "slug": "55-qled-4k-q60d" },
    { "size": "65", "slug": "65-qled-4k-q60d" },
  ],
  "currentSize": "55"
},
{
  "id": 1015,
  "title": "Samsung 65\" QLED 4K Q60D",
  brand: "samsung",
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
  "price": "Rs: 429,999.00",
  "discountedPrice": "RS: 409,999.00",
  "tags": ["Q60D", "QLED", "65", "samsung", "4K", "HDR", "smart tv", "2024 model", "new arrival", "tv"],
  "sizes": [
    { "size": "55", "slug": "55-qled-4k-q60d" },
    { "size": "65", "slug": "65-qled-4k-q60d" },
  ],
  "currentSize": "65"
},
{
  "id": 1016,
  "title": "Samsung 55\" QLED 4K Q70D",
  brand: "samsung",
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
  "price": "Rs: 474,999.00",
  "discountedPrice": "RS: 449,999.00",
  "tags": ["Q70D", "QLED", "55", "samsung", "4K", "HDR", "120Hz", "gaming", "smart tv", "2024 model", "new arrival", "top", "tv"],
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
  brand: "samsung",
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
  "price": "Rs: 569,999.00",
  "discountedPrice": "RS: 549,999.00",
  "tags": ["Q70D", "QLED", "65", "samsung", "4K", "HDR", "120Hz", "gaming", "smart tv", "2024 model", "new arrival", "top", "tv"],
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
  brand: "samsung",
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
  "price": "Rs: 674,999.00",
  "discountedPrice": "RS: 639,999.00",
  "tags": ["Q70D", "tv", "QLED", "75", "samsung", "4K", "HDR", "120Hz", "gaming", "smart tv", "2024 model", "new arrival", "top"],
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
  brand: "samsung",
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
  "price": "Rs: 674,999.00",
  "discountedPrice": "RS: 639,999.00",
  "tags": ["Q70D" , "tv", "QLED", "85", "samsung", "4K", "HDR", "120Hz", "gaming", "smart tv", "2024 model", "new arrival", "top"],
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
  brand: "samsung",
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
  "price": "Rs: 579,999.00",
  "discountedPrice": "RS: 549,999.00",
  "tags": ["Q80D", "tv", "QLED", "65", "samsung", "4K", "HDR", "120Hz", "gaming", "smart tv", "2024 model","recommened", "new arrival", "top"],
  "sizes": [
    { "size": "65", "slug": "65-qled-4k-q80d" },
    { "size": "75", "slug": "75-qled-4k-q80d" },
  ],
  "currentSize": "65"
},
{
  "id": 1021,
  "title": "Samsung 75\" QLED 4K Q80D",
  brand: "samsung",
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
  "price": "Rs: 799,999.00",
  "discountedPrice": "RS: 749,999.00",
  "tags": ["Q80D" , "tv", "QLED", "75", "samsung", "4K", "HDR", "120Hz", "gaming", "smart tv", "2024 model", "recommened", "new arrival", "top product"],
  "sizes": [
    { "size": "65", "slug": "65-qled-4k-q80d" },
    { "size": "75", "slug": "75-qled-4k-q80d" },
  ],
  "currentSize": "75"
},
{
  "id": 1022,
  "title": "Samsung 55\" The Frame LS03D QLED 4K",
  brand: "samsung",
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
  "price": "Rs: 479,999.00",
  "discountedPrice": "RS: 449,999.00",
  "tags": ["LS03D" , "tv", "The Frame", "QLED", "55", "samsung", "4K", "HDR", "Art Mode", "smart tv", "2024 model", "recommended", "new arrival", "top"],
  "sizes": [
    { "size": "55", "slug": "55-qled-4k-ls03d" },
    { "size": "65", "slug": "65-qled-4k-ls03d" }
  ],
  "currentSize": "55"
},
{
  "id": 1023,
  "title": "Samsung 65\" The Frame LS03D QLED 4K",
  brand: "samsung",
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
  "price": "Rs: 619,999.00",
  "discountedPrice": "RS: 589,999.00",
  "tags": ["LS03D" , "tv", "The Frame", "QLED", "65", "samsung", "4K", "HDR", "Art Mode", "smart tv", "2024 model", "recommended", "new arrival", "top product" ],
  "sizes": [
    { "size": "55", "slug": "55-qled-4k-ls03d" },
    { "size": "65", "slug": "65-qled-4k-ls03d" }
  ],
  "currentSize": "65"
},
{
  "id": 1024,
  "title": "Samsung 65\" OLED 4K S90D",
  brand: "samsung",
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
  "price": "Rs: 759,999.00",
  "discountedPrice": "RS: 719,999.00",
  "tags": ["S90D" , "tv", "OLED", "65", "samsung", "4K", "HDR", "144Hz", "gaming", "smart tv", "2024 model", "recommended", "new arrival", "top product", "main"],
  "sizes": [
    { "size": "65", "slug": "65-oled-4k-s90d" },
    { "size": "77", "slug": "77-oled-4k-s90d" }
  ],
  "currentSize": "65"
},
  {
    "id": 1025,
    "title": "LG 100\" QNED evo AI QNED86 4K Mini-LED Smart TV (2025)",
    "brand": "lg",
    "pickup": [
      "Massive 100-inch 4K Mini-LED display with Dynamic QNED Color and Precision Dimming for vivid contrast.",
      "α8 AI Processor Gen2 enhances visuals and sound; supports 120 Hz native (VRR up to 144 Hz) for ultra-smooth motion."
    ],
    "description": "The LG 100\" QNED evo AI QNED86 (100QNED86AS) is a 2025 flagship Mini-LED 4K Smart TV offering stunning visuals via Dynamic QNED Color, Dolby Vision, and Precision Dimming. Equipped with the powerful α8 AI Processor 4K Gen2, it delivers AI Super Upscaling, Dynamic Tone Mapping Pro, and a personalized viewing experience with AI Picture Wizard and Voice ID—running on webOS 25 with the AI Magic Remote.",
    "images": [QNED100front_view, QNED100side_view, QNED100rear_view, QNED100dimensional_view],
    "features": [
      { "key": "Display Type", "value": "4K QNED Mini-LED" },
      { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
      { "key": "Backlight", "value": "Mini-LED with Precision Dimming" },
      { "key": "Refresh Rate", "value": "120 Hz Native (VRR up to 144 Hz)" },
      { "key": "Processor", "value": "α8 AI Processor 4K Gen2" },
      { "key": "AI Upscaling", "value": "α8 AI Super Upscaling 4K" },
      { "key": "Tone Mapping", "value": "Dynamic Tone Mapping Pro" },
      { "key": "HDR Support", "value": "Dolby Vision, HDR10, HLG" },
      { "key": "Filmmaker Mode", "value": "Yes" },
      { "key": "Color Technology", "value": "Dynamic QNED Color" },
      { "key": "Picture Modes", "value": "10 modes" },
      { "key": "Motion Technology", "value": "Motion Pro" },
      { "key": "Dimensions (W×H×D)", "value": "2230 × 1277 × 49.9 mm (without stand)" },
      { "key": "Weight", "value": "65.9 kg (without stand)" },
      { "key": "Audio Output", "value": "40 W RMS, 2.2-Channel" },
      { "key": "Audio Features", "value": "Dolby Atmos, α8 AI Sound Pro, Bluetooth Surround, Clear Voice Pro" },
      { "key": "Smart OS", "value": "webOS 25 with AI features (Voice ID, AI Chatbot, AI Picture/Sound Wizard)" },
      { "key": "Connectivity", "value": "4× HDMI 2.1 (4K 120Hz, eARC, VRR, ALLM), 2× USB, Ethernet, Wi-Fi 6, Bluetooth 5.3" },
      { "key": "Voice Remote", "value": "AI Magic Remote with AI button" }
    ],
    "slug": "100-qned86a-miniled-smart-tv",
    "link": "/products/100-qned86a-miniled-smart-tv",
    "price": "RS: 2,100,000",
    "discountedPrice": "RS: 1,932,000",
    "tags": ["LG" , "tv", "QNED evo", "100-inch", "Mini-LED", "4K", "VRR", "2025", "AI", "Smart TV"],
    "sizes": [
      { "size": "55", "slug": "55-qned-evo-qned86-miniled" },
      { "size": "65", "slug": "65-qned-evo-qned86-miniled" },
      { "size": "75", "slug": "75-qned-evo-qned86-miniled" },
      { "size": "86", "slug": "86-qned-evo-qned86-miniled" },
      { "size": "100", "slug": "100-qned86a-miniled-smart-tv" }
    ],
    "currentSize": "100"
  },
  {
    "id": 1026,
    "title": "LG 86\" QNED AI QNED86 4K Smart TV (2024)",
    "brand": "lg",
    
    "pickup": [
      "Stunning 86-inch 4K QNED display with QNED Color wide gamut and precise local dimming for deep contrast.",
      "Powered by α8 AI Processor 4K delivering AI-super-enhanced visuals, Dynamic Tone Mapping Pro, and smooth motion with 120 Hz native refresh."
    ],
    "description": "The LG 86\" QNED AI QNED86 4K Smart TV (model 86QNED86TSA) brings immersive viewing with its large-scale 4K QNED panel, edge local dimming, AI-enhanced picture quality via α8 AI Processor 4K, and sleek webOS 24 smart experience with Magic Remote. It supports HDR10, HLG, Filmmaker Mode, and advanced gaming features like VRR, ALLM, and Game Optimizer.",
    "images": [QNED100front_view, QNED100side_view, QNED100rear_view, QNED100dimensional_view],
    "features": [
      { "key": "Display Type", "value": "4K QNED (LED/LCD)" },
      { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
      { "key": "Backlight Type", "value": "Edge LED with Local Dimming" },
      { "key": "Refresh Rate", "value": "120 Hz Native" },
      { "key": "Wide Color Gamut", "value": "QNED Color" },
      { "key": "Picture Processor", "value": "α8 AI Processor 4K" },
      { "key": "AI Upscaling", "value": "α8 AI Super Upscaling 4K" },
      { "key": "Dynamic Tone Mapping", "value": "Yes (Dynamic Tone Mapping Pro)" },
      { "key": "HDR Support", "value": "HDR10 / HLG" },
      { "key": "Filmmaker Mode", "value": "Yes" },
      { "key": "Motion Technology", "value": "Motion Pro" },
      { "key": "Picture Modes", "value": "10 modes including Personalized Picture Wizard and Filmmaker Mode" },
      { "key": "Gaming Features", "value": "VRR, ALLM, FreeSync Compatible (AMD), HGiG, Game Optimizer" },
      { "key": "Speaker System", "value": "2.0-Channel, 20 W" },
      { "key": "Audio Enhancements", "value": "AI Sound Pro, Bluetooth Surround Ready, Clear Voice Pro, WOW Orchestra" },
      { "key": "Smart OS", "value": "webOS 24 with Magic Remote" },
      { "key": "Connectivity", "value": "4× HDMI 2.1 (4K 120Hz, eARC, VRR), 2× USB, Ethernet, Wi-Fi 5, Bluetooth 5.1" },
      { "key": "Dimensions (W×H×D) without Stand", "value": "approx. 1,925 × 1,105 × 46 mm" },
      { "key": "Weight without Stand", "value": "approx. 50 kg" },
      { "key": "VESA Mount", "value": "600 × 400 mm" }
    ],
    "slug": "86-qned86-4k-smart-tv",
    "link": "/products/86-qned86-4k-smart-tv",
    "price": "RS: 958,000",
    "discountedPrice": "RS: 881,360",
    "tags": ["LG" , "tv", "QNED86", "86-inch", "QNED Color", "4K", "120Hz", "webOS 24", "AI", "Gaming"],
    "sizes": [
      { "size": "55", "slug": "55-qned-evo-qned86-miniled" },
      { "size": "65", "slug": "65-qned-evo-qned86-miniled" },
      { "size": "75", "slug": "75-qned-evo-qned86-miniled" },
      { "size": "86", "slug": "86-qned-evo-qned86-miniled" },
      { "size": "100", "slug": "100-qned86a-miniled-smart-tv" }
    ],
    "currentSize": "86"
  },
  
  {
    "id": 1027,
    "title": "LG 75\" QNED evo AI QNED86 4K Smart TV (2025)",
    "brand": "lg",

    "pickup": [
      "75-inch QNED evo 4K display with QNED Color wide gamut and edge local dimming for exceptional contrast.",
      "α8 AI Processor 4K delivers AI-enhanced visuals, Dynamic Tone Mapping Pro, and smooth 120 Hz native refresh."
    ],
    "description": "The LG 75\" QNED evo AI QNED86 (model 75QNED86ASA/T6A) is a 2025 Mini-LED 4K Smart TV featuring QNED Color, edge local dimming, and α8 AI Processor 4K for vivid colors and smooth motion. It offers HDR10 and HLG support, Filmmaker Mode, AI Picture enhancements, and a refined webOS 24 experience with AI-based features and Magic Remote.",
    "images": [QNED100front_view, QNED100side_view, QNED100rear_view, QNED100dimensional_view],
    "features": [
      { "key": "Display Type", "value": "4K QNED (Edge LED, Local Dimming)" },
      { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
      { "key": "Refresh Rate", "value": "120 Hz Native" },
      { "key": "Wide Color Gamut", "value": "QNED Color" },
      { "key": "Picture Processor", "value": "α8 AI Processor 4K" },
      { "key": "AI Upscaling", "value": "α8 AI Super Upscaling 4K" },
      { "key": "Dynamic Tone Mapping", "value": "Yes (Dynamic Tone Mapping Pro)" },
      { "key": "AI Brightness & Genre", "value": "Yes (AI Brightness Control & Genre Selection)" },
      { "key": "HDR Support", "value": "HDR10 / HLG" },
      { "key": "Filmmaker Mode", "value": "Yes" },
      { "key": "Motion Technology", "value": "Motion Pro" },
      { "key": "Picture Modes", "value": "10 modes including Personalized Picture Wizard and Filmmaker Mode" },
      { "key": "Gaming Features", "value": "FreeSync (AMD), VRR, ALLM, HGiG, Game Optimizer" },
      { "key": "Audio Output", "value": "20 W (2.0-Channel)" },
      { "key": "Audio Enhancements", "value": "α8 AI Sound Pro (Virtual 9.1.2), Clear Voice Pro, Bluetooth Surround Ready" },
      { "key": "Smart OS", "value": "webOS 24 with Magic Remote (AI features)" },
      { "key": "Dimensions (WxHxD) without Stand", "value": "1,677 × 965 × 30.9 mm" },
      { "key": "Weight without Stand", "value": "33.3 kg" },
      { "key": "VESA Mount", "value": "400 × 300 mm" }
    ],
    "slug": "75-qned86a-miniled-smart-tv",
    "link": "/products/75-qned86a-miniled-smart-tv",
    "price": "RS: 599,999",
    "discountedPrice": "RS: 551,999",
    "tags": ["LG" , "tv", "QNED evo", "75-inch", "QNED Color", "4K", "120Hz", "webOS 24", "AI", "Gaming"],
    "sizes": [
      { "size": "55", "slug": "55-qned-evo-qned86-miniled" },
      { "size": "65", "slug": "65-qned-evo-qned86-miniled" },
      { "size": "75", "slug": "75-qned-evo-qned86-miniled" },
      { "size": "86", "slug": "86-qned-evo-qned86-miniled" },
      { "size": "100", "slug": "100-qned86a-miniled-smart-tv" }
    ],
    "currentSize": "75"
  },
  {
    "id": 1028,
    "title": "LG 65\" QNED-evo AI QNED86 4K Mini-LED Smart TV (2025)",
    "brand": "lg",
    "pickup": [
      "65-inch 4K QNED Mini-LED display with Dynamic QNED Colour and precision local dimming for outstanding contrast and brightness.",
      "Powered by α8 AI Processor 4K Gen2 for AI-enhanced visuals, plus smooth motion via 120 Hz native refresh (VRR up to 144 Hz)."
    ],
    "description": "The LG 65\" QNED-evo AI QNED86 (model 65QNED86ASA) is a 2025 Mini-LED 4K Smart TV featuring Dynamic QNED Colour, Precision Dimming, and the α8 AI Processor 4K Gen2. It delivers stunning picture quality with Dolby Vision, HDR10, HLG, AI Brightness Control, Filmmaker Mode, and webOS 25 intelligence—perfect for cinema-quality viewing and gaming.",
    "images": [QNED100front_view, QNED100side_view, QNED100rear_view, QNED100dimensional_view],
    "features": [
      { "key": "Display Type", "value": "4K QNED Mini-LED" },
      { "key": "Resolution", "value": "3840 × 2160 (4K UHD)" },
      { "key": "Backlight", "value": "Mini-LED with Local Dimming / Precision Dimming" },
      { "key": "Refresh Rate", "value": "120 Hz Native (VRR Up to 144 Hz)" },
      { "key": "Wide Colour Gamut", "value": "Dynamic QNED Colour" },
      { "key": "Picture Processor", "value": "α8 AI Processor 4K Gen2" },
      { "key": "AI Upscaling", "value": "α8 AI Super Upscaling 4K" },
      { "key": "Dynamic Tone Mapping", "value": "Yes (Dynamic Tone Mapping Pro)" },
      { "key": "AI Brightness & Genre Selection", "value": "Yes" },
      { "key": "HDR", "value": "Dolby Vision / HDR10 / HLG" },
      { "key": "Filmmaker Mode", "value": "Yes" },
      { "key": "Motion Technology", "value": "Motion Pro" },
      { "key": "Picture Modes", "value": "10 modes including Personalized, Cinema, Game, Filmmaker" },
      { "key": "Gaming Features", "value": "VRR (up to 144 Hz), ALLM, FreeSync Compatible, HGIG, Game Optimizer" },
      { "key": "Audio Output", "value": "20 W (2.0-Channel)" },
      { "key": "Audio Features", "value": "α8 AI Sound Pro (Virtual 9.1.2), Clear Voice Pro, Bluetooth Surround Ready" },
      { "key": "Smart OS", "value": "webOS 25 with AI Magic Remote & AI features" },
      { "key": "Connectivity", "value": "HDMI 2.1 (4K 120 Hz, eARC), USB, Wi-Fi 6, Bluetooth" },
      { "key": "Dimensions (W×H×D) without Stand", "value": "approx. 1456 × 840 × 29.7 mm" },
      { "key": "Weight without Stand", "value": "approx. 22.5 kg" }
    ],
    "slug": "65-qned-evo-qned86-miniled",
    "link": "/products/65-qned-evo-qned86-miniled",
    "price": "RS: 410,000",
    "discountedPrice": "RS: 377,200",
    "tags": ["LG" , "tv", "QNED evo", "65-inch", "Mini-LED", "4K", "120Hz", "AI", "Smart TV", "2025"],
    "sizes": [
      { "size": "55", "slug": "55-qned-evo-qned86-miniled" },
      { "size": "65", "slug": "65-qned-evo-qned86-miniled" },
      { "size": "75", "slug": "75-qned-evo-qned86-miniled" },
      { "size": "86", "slug": "86-qned-evo-qned86-miniled" },
      { "size": "100", "slug": "100-qned86a-miniled-smart-tv" }

    ],
    "currentSize": "65"
  },

  {
    "id": 1029,
    "title": "LG 55\" QNED evo AI QNED86 4K Mini-LED Smart TV (2025)",
    "brand": "lg",

    "pickup": [
      "55-inch 4K QNED Mini-LED display with Dynamic QNED Color and precision local dimming for vibrant contrast.",
      "α8 AI Processor 4K Gen2 delivers AI-enhanced visuals, smooth 120 Hz native refresh (VRR up to 144 Hz), and intuitive AI Magic Remote control."
    ],
    "description": "The LG 55\" QNED evo AI QNED86 (model 55QNED86ASA) is a 2025 Mini-LED 4K Smart TV offering superior picture quality thanks to Dynamic QNED Color, Precision Dimming, and the powerful α8 AI Processor 4K Gen2. With features like Dolby Vision, HDR10, HLG, Filmmaker Mode, AI Smart Brightness, and webOS 25’s advanced AI suite, it's built for cinematic viewing, seamless smart functionality, and immersive gaming.",
    "images": [QNED100front_view, QNED100side_view, QNED100rear_view, QNED100dimensional_view],

    "features": [
      { "key": "Display Type", "value": "4K QNED Mini-LED" },
      { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
      { "key": "Backlight", "value": "Mini-LED with Precision Dimming / Local Dimming" },
      { "key": "Refresh Rate", "value": "120 Hz Native (VRR Supported)" },
      { "key": "Wide Color Gamut", "value": "Dynamic QNED Color" },
      { "key": "Picture Processor", "value": "α8 AI Processor 4K Gen2" },
      { "key": "AI Upscaling", "value": "α8 AI Super Upscaling 4K" },
      { "key": "Dynamic Tone Mapping", "value": "Yes" },
      { "key": "HDR Support", "value": "Dolby Vision, HDR10, HLG" },
      { "key": "Filmmaker Mode", "value": "Yes" },
      { "key": "Motion Technology", "value": "Motion Pro" },
      { "key": "Gaming Features", "value": "VRR, ALLM, FreeSync Compatible, HGiG, Game Optimizer" },
      { "key": "Audio Output", "value": "20 W (2.0-Channel)" },
      { "key": "Audio Enhancements", "value": "α8 AI Sound Pro (Virtual 9.1.2), Clear Voice Pro, Bluetooth Surround Ready" },
      { "key": "Smart OS", "value": "webOS 25 with AI Magic Remote & AI Features" },
      { "key": "Accessibility", "value": "High Contrast, Grayscale, Invert Colors" },
      { "key": "Dimensions (W×H×D, without stand)", "value": "approx. 1,236 × 716 × 29.7 mm" },
      { "key": "Weight (without stand)", "value": "approx. 15.5 kg" }
    ],
    "slug": "55-qned-evo-qned86-miniled",
    "link": "/products/55-qned-evo-qned86-miniled",
    "price": "RS: 299,000",
    "discountedPrice": "RS: 275,080",
    "tags": ["LG" , "tv", "QNED evo", "55-inch", "Mini-LED", "4K", "120Hz", "AI", "Smart TV", "2025"],
    "sizes": [
      { "size": "55", "slug": "55-qned-evo-qned86-miniled" },
      { "size": "65", "slug": "65-qned-evo-qned86-miniled" },
      { "size": "75", "slug": "75-qned-evo-qned86-miniled" },
      { "size": "86", "slug": "86-qned-evo-qned86-miniled" }
    ],
    "currentSize": "55"
  },
  {
    "id": 1030,
    "title": "LG 83\" OLED evo AI C5 4K Smart TV (2025)",
    "brand": "lg",

    "pickup": [
      "Stunning 83-inch 4K OLED evo panel offering true-to-life Perfect Black and 100% Color Fidelity/Volume.",
      "Powered by the α9 AI Processor 4K Gen8 for AI-enhanced visuals and 120 Hz native (VRR up to 144 Hz) for ultra-responsive motion."
    ],
    "description": "The LG 83\" OLED evo AI C5 (OLED83C5PSA) is a flagship 2025 4K Smart TV featuring an OLED evo panel with Perfect Black and Brightness Booster. It houses the advanced α9 AI Processor 4K Gen8 offering AI Picture Pro, Dynamic Tone Mapping Pro, Auto Calibration, and AI Sound Pro. With webOS 25, Dolby Vision, HDR10, HLG support, and a host of gaming features, it’s built for top-tier cinematic viewing and high-performance gaming.",
    "images": [OLEDfront_view, OLEDside_view,OLEDrear_view, OLEDdimensional_view],
    "features": [
      { "key": "Display Type", "value": "4K OLED evo" },
      { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
      { "key": "Refresh Rate", "value": "120 Hz Native (VRR up to 144 Hz)" },
      { "key": "Colour Technology", "value": "OLED Colour (Perfect Black, 100% Fidelity/Volume)" },
      { "key": "Picture Processor", "value": "α9 AI Processor 4K Gen8" },
      { "key": "AI Upscaling", "value": "α9 AI Super Upscaling 4K" },
      { "key": "Dynamic Tone Mapping", "value": "OLED Dynamic Tone Mapping Pro" },
      { "key": "AI Features", "value": "AI Genre Selection, AI Brightness Control, AI Picture Pro" },
      { "key": "HDR Support", "value": "Dolby Vision / HDR10 / HLG" },
      { "key": "Filmmaker Mode", "value": "Yes" },
      { "key": "Dimming Technology", "value": "Pixel Dimming" },
      { "key": "Motion Technology", "value": "OLED Motion" },
      { "key": "Picture Modes", "value": "10 modes" },
      { "key": "Gaming Features", "value": "G-Sync, FreeSync, VRR, ALLM, HGiG, Game Optimizer, HFR" },
      { "key": "Response Time", "value": "< 0.1 ms" },
      { "key": "Audio Output", "value": "40 W (2.2-Channel)" },
      { "key": "Audio Features", "value": "Dolby Atmos, α9 AI Sound Pro (Virtual 11.1.2), Clear Voice Pro, WiSA Ready" },
      { "key": "Smart OS", "value": "webOS 25 with AI Magic Remote & Copilot support" },
      { "key": "Connectivity", "value": "4× HDMI 2.1 (VRR, ALLM, eARC, QMS), 3× USB, Wi-Fi 6, Bluetooth 5.3, Ethernet" },
      { "key": "Dimensions (WxHxD, without stand)", "value": "1,842 × 1,055 × 52.9 mm" },
      { "key": "Weight (without stand)", "value": "28.3 kg" },
      { "key": "VESA Mount", "value": "400 × 400 mm" }
    ],
    "slug": "83-oled-evo-c5-4k-smart-tv",
    "link": "/products/83-oled-evo-c5-4k-smart-tv",
    "price": "RS: 2,000,000",
    "discountedPrice": "RS:1,840,000",
    "tags": ["LG" , "tv", "OLED evo", "83-inch", "4K", "120 Hz", "Gaming", "AI", "webOS 25"],
    "sizes": [
      { "size": "65", "slug": "65-oled-evo-c5-4k-smart-tv" },
      { "size": "83", "slug": "83-oled-evo-c5-4k-smart-tv" }
    ],
    "currentSize": "83"
  },
  {
    "id": 1031,
    "title": "LG 65\" OLED evo AI C5 4K Smart TV (2025)",
    "brand": "lg",

    "pickup": [
      "65-inch 4K OLED evo panel with Perfect Black and OLED Colour delivering cinematic contrast and vibrant color.",
      "Powered by α9 AI Processor 4K Gen 8, supports 120 Hz native refresh with VRR up to 144 Hz and advanced AI picture enhancements."
    ],
    "description": "The LG 65\" OLED evo AI C5 (OLED65C5PSA) is a 2025 4K Smart TV featuring an OLED evo panel with Perfect Black and Brightness Booster, powered by the advanced α9 AI Processor 4K Gen 8 for AI Picture Pro, AI Super Upscaling, Dynamic Tone Mapping Pro, and Auto Calibration. It delivers immersive Dolby Vision, HDR10, HLG, Filmmaker Mode, plus elite gaming features including G-Sync, FreeSync, VRR (up to 144 Hz), ALLM, Game Optimizer, and ultra-low response time—all wrapped in webOS 25 smart platform with voice control and AI enhancements.",
    "images": [OLEDfront_view, OLEDside_view,OLEDrear_view, OLEDdimensional_view],
    "features": [
      { "key": "Display Type", "value": "4K OLED evo (Self-lit pixels)" },
      { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
      { "key": "Refresh Rate", "value": "120 Hz Native (VRR up to 144 Hz)" },
      { "key": "Colour Technology", "value": "OLED Colour (Perfect Black & 100 % Color Fidelity/Volume)" },
      { "key": "Processor", "value": "α9 AI Processor 4K Gen 8" },
      { "key": "AI Upscaling", "value": "α9 AI Super Upscaling 4K" },
      { "key": "Dynamic Tone Mapping", "value": "OLED Dynamic Tone Mapping Pro" },
      { "key": "AI Features", "value": "AI Genre Selection, AI Brightness Control, AI Picture Pro, Auto Calibration" },
      { "key": "HDR Support", "value": "Dolby Vision / HDR10 / HLG" },
      { "key": "Filmmaker Mode", "value": "Yes" },
      { "key": "Dimming", "value": "Pixel Dimming" },
      { "key": "Motion Technology", "value": "OLED Motion" },
      { "key": "HFR", "value": "4K 120 fps (HDMI, USB)" },
      { "key": "Picture Modes", "value": "10 modes" },
      { "key": "Gaming Features", "value": "G-Sync, FreeSync, VRR (up to 144 Hz), ALLM, HGiG, Game Optimizer" },
      { "key": "Response Time", "value": "< 0.1 ms" },
      { "key": "Audio Output", "value": "40 W (2.2-Channel)" },
      { "key": "Audio Features", "value": "Dolby Atmos, α9 AI Sound Pro (Virtual 11.1.2), Clear Voice Pro, WiSA Ready, AI Acoustic Tuning" },
      { "key": "Smart OS", "value": "webOS 25 with AI Magic Remote & Copilot" },
      { "key": "Connectivity", "value": "4× HDMI 2.1 (VRR, ALLM, eARC, QMS), Wi-Fi 6E" },
      { "key": "Dimensions (W×H×D, without stand)", "value": "1,441 × 826 × 45.1 mm" },
      { "key": "Weight (without stand)", "value": "16.6 kg" },
      { "key": "VESA Mount", "value": "300 × 200 mm" }
    ],
    "slug": "65-oled-evo-c5-4k-smart-tv",
    "link": "/products/65-oled-evo-c5-4k-smart-tv",
    "price": "PKR: 810,000",
    "discountedPrice": "PKR: 745,200",
    "tags": ["LG", "tv", "OLED evo", "65-inch", "4K", "120Hz", "Gaming", "AI", "webOS 25"],
    "sizes": [
      { "size": "65", "slug": "65-oled-evo-c5-4k-smart-tv" },
      { "size": "83", "slug": "83-oled-evo-c5-4k-smart-tv" }
    ],
    "currentSize": "65"
  },
  {
    "id": 1032,
    "title": "LG 75\" QNED AI QNED82 4K Smart TV (2025)",
    "brand": "lg",

    "pickup": [
      "Vivid Dynamic QNED Color with 100% Color Volume for lifelike visuals.",
      "Alpha 7 AI Processor 4K Gen8 delivers AI-enhanced upscaling and picture calibration."
    ],
    "description": "The LG 75\" QNED AI QNED82 (model 75QNED82ASA) is a 2025 4K Smart TV featuring Dynamic QNED Color, edge local dimming, and the α7 AI Processor 4K Gen8 for refined image processing, upscaling, and AI brightness control. Running on webOS 25 with AI Magic Remote, it supports HDR10/HLG, Filmmaker Mode, Game Optimizer, and a full suite of accessibility features.",
    "images": [QNED82front_view, QNED82side_view, QNED82rear_view, QNED82dimensional_view],
    "features": [
      { "key": "Display Type", "value": "4K QNED (LED/LCD)" },
      { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
      { "key": "Backlight Type", "value": "Edge LED with Local Dimming" },
      { "key": "Refresh Rate", "value": "60 Hz Native" },
      { "key": "Wide Color Gamut", "value": "Dynamic QNED Color" },
      { "key": "Picture Processor", "value": "α7 AI Processor 4K Gen8" },
      { "key": "AI Upscaling", "value": "4K Super Upscaling" },
      { "key": "Dynamic Tone Mapping", "value": "Yes" },
      { "key": "AI Brightness Control", "value": "Yes" },
      { "key": "HDR Support", "value": "HDR10 / HLG" },
      { "key": "Filmmaker Mode", "value": "Yes" },
      { "key": "Picture Modes", "value": "10 modes" },
      { "key": "Auto Calibration", "value": "Yes" },
      { "key": "Gaming Features", "value": "VRR (up to 60 Hz), ALLM, Game Optimizer (Game Dashboard), HGiG" },
      { "key": "Audio Output", "value": "20 W, 2.0-Channel" },
      { "key": "Smart OS", "value": "webOS 25 with AI Magic Remote" },
      { "key": "Accessibility", "value": "High Contrast, Gray Scale, Invert Colors" },
      { "key": "Dimensions (W×H×D, without stand)", "value": "1,677 × 966 × 51.6 mm" },
      { "key": "Weight (without stand)", "value": "31.4 kg" },
      { "key": "VESA Mount", "value": "300 × 200 mm" }
    ],
    "slug": "75-qned82-4k-smart-tv",
    "link": "/products/75-qned82-4k-smart-tv",
    "price": "PKR: 505,000",
    "discountedPrice": "PKR: 464,600",
    "tags": ["LG", "tv", "QNED82", "75-inch", "Dynamic QNED Color", "4K", "AI Processor", "webOS 25"],
    "sizes": [
      { "size": "75", "slug": "75-qned82-4k-smart-tv" },
      { "size": "65", "slug": "65-qned82-4k-smart-tv" },
      { "size": "55", "slug": "55-qned82-4k-smart-tv" }
    ],
    "currentSize": "75"
  },
  {
    "id": 1033,
    "title": "LG 65\" QNED AI QNED82 4K Smart TV (2025)",
    "brand": "lg",

    "pickup": [
      "Dynamic QNED Color delivers vivid, lifelike colors with 100% Color Volume.",
      "α7 AI Processor 4K Gen8 enables AI-enhanced upscaling and brightness optimization."
    ],
    "description": "The LG 65\" QNED AI QNED82 (model 65QNED82ASA) is a 2025 4K AI-powered Smart TV featuring Dynamic QNED Color, local edge dimming, and the α7 AI Processor 4K Gen8 for refined image processing and AI brightness control. It runs on webOS 25 with Magic Remote and includes HDR10/HLG, Filmmaker Mode, Game Optimizer, VRR (up to 60 Hz), and robust accessibility features.",
    "images": [QNED82front_view, QNED82side_view, QNED82rear_view, QNED82dimensional_view],
    "features": [
      { "key": "Display Type", "value": "4K QNED (Edge LED with Local Dimming)" },
      { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
      { "key": "Refresh Rate", "value": "60 Hz Native (VRR up to 60 Hz)" },
      { "key": "Wide Color Gamut", "value": "Dynamic QNED Color (100% Color Volume)" },
      { "key": "Picture Processor", "value": "α7 AI Processor 4K Gen8" },
      { "key": "AI Upscaling", "value": "4K Super Upscaling" },
      { "key": "Dynamic Tone Mapping", "value": "Yes" },
      { "key": "AI Brightness Control", "value": "Yes" },
      { "key": "HDR Support", "value": "HDR10 / HLG" },
      { "key": "Filmmaker Mode", "value": "Yes" },
      { "key": "Picture Modes", "value": "10 modes" },
      { "key": "Auto Calibration", "value": "Yes" },
      { "key": "Gaming Features", "value": "VRR (up to 60 Hz), ALLM, Game Optimizer, HGiG" },
      { "key": "Audio Output", "value": "20 W (2.0-Channel)" },
      { "key": "Audio Enhancements", "value": "α7 AI Sound Pro (Virtual 9.1.2), Clear Voice Pro, Bluetooth Surround Ready, AI Acoustic Tuning" },
      { "key": "Smart OS", "value": "webOS 25 with AI Magic Remote" },
      { "key": "Accessibility", "value": "High Contrast, Gray Scale, Invert Colors" },
      { "key": "Dimensions (WxHxD, without stand)", "value": "1,456 × 841 × 49.9 mm" },
      { "key": "Weight (without stand)", "value": "22.8 kg" },
      { "key": "VESA Mount", "value": "300 × 200 mm" }
    ],
    "slug": "65-qned82-4k-smart-tv",
    "link": "/products/65-qned82-4k-smart-tv",
    "price": "PKR: 331,000",
    "discountedPrice": "PKR: 304,520",
    "tags": ["LG", "tv", "QNED82", "65-inch", "Dynamic QNED Color", "4K", "AI", "webOS 25"],
    "sizes": [
      { "size": "65", "slug": "65-qned82-4k-smart-tv" },
      { "size": "55", "slug": "55-qned82-4k-smart-tv" },
      { "size": "75", "slug": "75-qned82-4k-smart-tv" }
    ],
    "currentSize": "65"
  },
  {
    "id": 1034,
    "title": "LG 55\" QNED AI QNED82 4K Smart TV (2025)",
    "brand": "lg",

    "pickup": [
      "Dynamic QNED Color with rich and vivid 100% Color Volume.",
      "Powered by α7 AI Processor 4K Gen8 for AI-enhanced upscaling and picture calibration."
    ],
    "description": "The LG 55″ QNED AI QNED82 (model 55QNED82ASA) is a 2025 4K AI-powered Smart TV featuring Dynamic QNED Color, edge-backlit local dimming, and the α7 AI Processor 4K Gen8 for refined image processing and intelligent brightness control. It runs on webOS 25 with the AI Magic Remote, offering HDR10/HLG, Filmmaker Mode, Game Optimizer features, VRR up to 60 Hz, and full accessibility tools.",
    "images": [QNED82front_view, QNED82side_view, QNED82rear_view, QNED82dimensional_view],
    "features": [
      { "key": "Display Type", "value": "4K QNED (Edge-lit with Local Dimming)" },
      { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
      { "key": "Refresh Rate", "value": "60 Hz Native (VRR up to 60 Hz)" },
      { "key": "Wide Color Gamut", "value": "Dynamic QNED Color (100% DCI-P3 Volume)" },
      { "key": "Picture Processor", "value": "α7 AI Processor 4K Gen8" },
      { "key": "AI Upscaling", "value": "4K Super Upscaling" },
      { "key": "Dynamic Tone Mapping", "value": "Yes" },
      { "key": "AI Brightness Control", "value": "Yes" },
      { "key": "HDR Support", "value": "HDR10 / HLG" },
      { "key": "Filmmaker Mode", "value": "Yes" },
      { "key": "Picture Modes", "value": "10 modes" },
      { "key": "Auto Calibration", "value": "Yes" },
      { "key": "Gaming Features", "value": "VRR (Up to 60 Hz), ALLM, Game Optimizer, HGiG Mode" },
      { "key": "Audio Output", "value": "20 W (2.0-Channel)" },
      { "key": "Audio Enhancements", "value": "α7 AI Sound Pro (Virtual 9.1.2), Clear Voice Pro, Bluetooth Surround Ready, AI Acoustic Tuning" },
      { "key": "Smart OS", "value": "webOS 25 with AI Magic Remote" },
      { "key": "Accessibility", "value": "High Contrast, Gray Scale, Invert Colors" },
      { "key": "Connectivity", "value": "3× HDMI (eARC, ALLM), 1× USB, Ethernet, Wi-Fi 5, Bluetooth 5.0" },
      { "key": "Dimensions (W×H×D, without stand)", "value": "1,237 × 717 × 49.9 mm" },
      { "key": "Weight (without stand)", "value": "15.7 kg" },
      { "key": "VESA Mount", "value": "300 × 200 mm" }
    ],
    "slug": "55-qned82-4k-smart-tv",
    "link": "/products/55-qned82-4k-smart-tv",
    "price": "PKR: 249,000",
    "discountedPrice": "PKR: 229,080",
    "tags": ["LG" , "tv", "QNED82", "55-inch", "QNED Color", "4K", "AI Processor", "webOS 25"],
    "sizes": [
      { "size": "55", "slug": "55-qned82-4k-smart-tv" },
      { "size": "65", "slug": "65-qned82-4k-smart-tv" },
      { "size": "75", "slug": "75-qned82-4k-smart-tv" }
    ],
    "currentSize": "55"
  },
  {
  "id": 1035,
  "title": "LG 43\" UHD AI 43UA8450PSA 4K Smart TV (2025)",
    "brand": "lg",

  "pickup": [
    "4K UHD display powered by α7 AI Processor 4K Gen8 for enhanced clarity and brightness.",
    "Advanced AI-driven picture and sound—including 4K Super Upscaling and AI Sound Pro (Virtual 9.1.2 up-mix)."
  ],
  "description": "The LG 43\" UHD AI 43UA8450PSA is a 2025 4K Smart TV featuring a Direct-LED UHD panel, α7 AI Processor 4K Gen8 with AI picture enhancements like Super Upscaling, Dynamic Tone Mapping, and Auto Calibration. It includes HDR10/HLG support, Filmmaker Mode, webOS 25 with AI Magic Remote, rich accessibility tools, Game Optimizer with VRR (up to 60 Hz), and immersive AI Sound features.",
  "images": [UA84front_view, UA84side_view, UA84rear_view, UA84dimensional_view],
  "features": [
    { "key": "Display Type", "value": "4K UHD (Direct-LED)" },
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "60 Hz Native (VRR up to 60 Hz)" },
    { "key": "Picture Processor", "value": "α7 AI Processor 4K Gen8" },
    { "key": "AI Upscaling", "value": "4K Super Upscaling" },
    { "key": "Dynamic Tone Mapping", "value": "Yes" },
    { "key": "HDR Support", "value": "HDR10 / HLG" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Picture Modes", "value": "10 modes" },
    { "key": "Auto Calibration", "value": "Yes" },
    { "key": "Gaming Features", "value": "VRR up to 60 Hz, ALLM, Game Optimizer, HGiG" },
    { "key": "Audio Output", "value": "20 W (2.0-Channel, Down-Firing)" },
    { "key": "Audio Enhancements", "value": "α7 AI Sound Pro (Virtual 9.1.2), Clear Voice Pro, Bluetooth Surround Ready, AI Acoustic Tuning" },
    { "key": "Smart OS", "value": "webOS 25 with AI Magic Remote, AI Chatbot, Voice ID" },
    { "key": "Connectivity", "value": "3× HDMI (eARC, ALLM), 1× USB, Ethernet, Wi-Fi 5, Bluetooth 5.0" },
    { "key": "Accessibility", "value": "High Contrast, Gray Scale, Invert Colors" },
    { "key": "Dimensions (without stand)", "value": "968 × 567 × 67.9 mm" },
    { "key": "Weight (without stand)", "value": "7.3 kg" },
    { "key": "VESA Mount", "value": "200 × 200 mm" }
  ],
  "slug": "43-uhd-ai-43ua8450psa-smart-tv",
  "link": "/products/43-uhd-ai-43ua8450psa-smart-tv",
  "price": "PKR: 124,000",
  "discountedPrice": "PKR: 114,080",
  "tags": ["LG", "tv", "UHD", "43-inch", "AI", "4K", "webOS 25", "HDR10", "smart tv", "2025"],
  "sizes": [
    { "size": "43", "slug": "43-uhd-ai-ua84-4k-smart-tv" },
    { "size": "50", "slug": "50-uhd-ai-ua84-4k-smart-tv" },
    { "size": "55", "slug": "55-uhd-ai-ua84-4k-smart-tv" },
    { "size": "65", "slug": "65-uhd-ai-ua84-4k-smart-tv" }
    ],
  "currentSize": "43"
},
{
  "id": 1036,
  "title": "LG 50\" UHD AI 50UA8450PSA 4K Smart TV (2025)",
    "brand": "lg",
  
  "pickup": [
    "4K UHD display with α7 AI Processor 4K Gen8 for enhanced clarity, brightness, and AI upscaling.",
    "Immersive AI Sound Pro with virtual 9.1.2 surround sound and convenient AI Magic Remote control."
  ],
  "description": "The LG 50\" UHD AI 50UA8450PSA is a 2025 4K Smart TV featuring a Direct-LED UHD panel, α7 AI Processor 4K Gen8 for intelligent picture processing (4K Super Upscaling, Dynamic Tone Mapping, Auto Calibration), and a feature-rich webOS 25 platform with AI Magic Remote, AI Chatbot, voice ID, HDR10/HLG & Filmmaker Mode, as well as Game Optimizer with VRR support.",
  "images": [UA84front_view, UA84side_view, UA84rear_view, UA84dimensional_view],
  "features": [
    { "key": "Display Type", "value": "4K UHD (Direct-LED)" },
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "60 Hz Native (VRR up to 60 Hz)" },
    { "key": "Picture Processor", "value": "α7 AI Processor 4K Gen8" },
    { "key": "AI Upscaling", "value": "4K Super Upscaling" },
    { "key": "Dynamic Tone Mapping", "value": "Yes" },
    { "key": "HDR Support", "value": "HDR10 / HLG" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Picture Modes", "value": "10 modes" },
    { "key": "Auto Calibration", "value": "Yes" },
    { "key": "Gaming Features", "value": "HGiG, Game Optimizer, ALLM, VRR (up to 60 Hz)" },
    { "key": "Audio Output", "value": "20 W (2.0-Channel, Down-Firing)" },
    { "key": "Audio Features", "value": "α7 AI Sound Pro (Virtual 9.1.2), Clear Voice Pro, Bluetooth Surround Ready, AI Acoustic Tuning" },
    { "key": "Smart OS", "value": "webOS 25 with AI Magic Remote, AI Chatbot, Voice ID" },
    { "key": "Connectivity", "value": "3× HDMI (eARC, ALLM), 1× USB, Ethernet, Wi-Fi 5, Bluetooth 5.0" },
    { "key": "Accessibility", "value": "High Contrast, Gray Scale, Invert Colors" },
    { "key": "Dimensions (without stand)", "value": "1,122 × 654 × 67.9 mm" },
    { "key": "Weight (without stand)", "value": "9.4 kg" },
    { "key": "VESA Mount", "value": "200 × 200 mm" }
  ],
  "slug": "50-uhd-ai-50ua8450psa-smart-tv",
  "link": "/products/50-uhd-ai-50ua8450psa-smart-tv",
  "price": "PKR: 168,000",
  "discountedPrice": "PKR: 154,560",
  "tags": ["LG" , "tv", "UHD", "50-inch", "AI", "4K", "webOS 25", "HDR10", "2025"],
  "sizes": [
    { "size": "43", "slug": "43-uhd-ai-ua84-4k-smart-tv" },
    { "size": "50", "slug": "50-uhd-ai-ua84-4k-smart-tv" },
    { "size": "55", "slug": "55-uhd-ai-ua84-4k-smart-tv" },
    { "size": "65", "slug": "65-uhd-ai-ua84-4k-smart-tv" }
    ],
  "currentSize": "50"
},
{
  "id": 1037,
  "title": "LG 55\" UHD AI 55UA8450PSA 4K Smart TV (2025)",
    "brand": "lg",

  "pickup": [
    "4K HDR10 Pro picture with enhanced depth and clarity via α7 AI Processor 4K Gen 8.",
    "AI Magic Remote simplifies control with voice, drag-and-drop, and AI Chatbot features."
  ],
  "description": "The LG 55\" UHD AI 55UA8450PSA is a 2025 4K Smart TV featuring a Direct-LED UHD panel, α7 AI Processor 4K Gen 8 for upscale and tone-optimized visuals, HDR10/HLG support, Filmmaker Mode, webOS 25 with AI Magic Remote, AI Sound Pro, and gaming tools like Game Optimizer and VRR (up to 60 Hz).",
  "images": [UA84front_view, UA84side_view, UA84rear_view, UA84dimensional_view],
  "features": [
    { "key": "Display Type", "value": "4K UHD (Direct-LED)" },
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "60 Hz Native (VRR up to 60 Hz)" },
    { "key": "Picture Processor", "value": "α7 AI Processor 4K Gen 8" },
    { "key": "AI Upscaling", "value": "4K Super Upscaling" },
    { "key": "Dynamic Tone Mapping", "value": "Yes" },
    { "key": "HDR Support", "value": "HDR10 / HLG" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Picture Modes", "value": "10 modes" },
    { "key": "Auto Calibration", "value": "Yes" },
    { "key": "Gaming Features", "value": "HGiG, Game Optimizer, ALLM, VRR (up to 60 Hz)" },
    { "key": "Audio Output", "value": "20 W (2.0-Channel, Down-Firing)" },
    { "key": "Audio Features", "value": "α7 AI Sound Pro (Virtual 9.1.2), Clear Voice Pro, Bluetooth Surround Ready, AI Acoustic Tuning" },
    { "key": "Smart OS", "value": "webOS 25 with AI Magic Remote, AI Chatbot, Voice ID" },
    { "key": "Connectivity", "value": "3× HDMI (eARC, ALLM), 1× USB, Ethernet, Wi-Fi 5, Bluetooth 5.0" },
    { "key": "Accessibility", "value": "High Contrast, Gray Scale, Invert Colors" },
    { "key": "Dimensions (W×H×D, without stand)", "value": "1,236 × 718 × 67.9 mm" },
    { "key": "Weight (without stand)", "value": "11.5 kg" },
    { "key": "VESA Mount", "value": "300 × 200 mm" }
  ],
  "slug": "55-uhd-ai-55ua8450psa-smart-tv",
  "link": "/products/55-uhd-ai-55ua8450psa-smart-tv",
  "price": "PKR: 199,000",
  "discountedPrice": "PKR: 183,080",
  "tags": ["LG", "tv", "UHD", "55-inch", "AI", "4K", "webOS 25", "HDR10 Pro", "2025"],
  "sizes": [
    { "size": "43", "slug": "43-uhd-ai-ua84-4k-smart-tv" },
    { "size": "50", "slug": "50-uhd-ai-ua84-4k-smart-tv" },
    { "size": "55", "slug": "55-uhd-ai-ua84-4k-smart-tv" },
    { "size": "65", "slug": "65-uhd-ai-ua84-4k-smart-tv" }
    ],
  "currentSize": "55"
},
{
  "id": 1038,
  "title": "LG 65\" UHD AI 65UA8450PSA 4K Smart TV (2025)",
    "brand": "lg",

  "pickup": [
    "Striking 4K UHD visuals powered by the advanced α7 AI Processor 4K Gen8.",
    "AI Magic Remote with intuitive controls—including AI button, voice command, and drag-and-drop functionality."
  ],
  "description": "The LG 65\" UHD AI 65UA8450PSA (2025) is a 4K Smart TV featuring a Direct-LED UHD panel, AI-powered 4K Super Upscaling, Dynamic Tone Mapping, HDR10 Pro, HLG, and Filmmaker Mode. With webOS 25, AI Sound Pro, Game Optimizer with HGiG, and AI acoustic tuning, it offers cinematic quality visuals and immersive smart features backed by α7 AI Processor Gen8.",
  "images": [UA84front_view, UA84side_view, UA84rear_view, UA84dimensional_view],
  "features": [
    { "key": "Display Type", "value": "4K UHD (Direct-LED)" },
    { "key": "Resolution", "value": "3,840 × 2,160 (4K UHD)" },
    { "key": "Refresh Rate", "value": "60 Hz Native (VRR up to 60 Hz)" },
    { "key": "Picture Processor", "value": "α7 AI Processor 4K Gen8" },
    { "key": "AI Upscaling", "value": "4K Super Upscaling" },
    { "key": "Dynamic Tone Mapping", "value": "Yes" },
    { "key": "HDR Support", "value": "HDR10 Pro / HLG" },
    { "key": "Filmmaker Mode", "value": "Yes" },
    { "key": "Picture Modes", "value": "10 modes" },
    { "key": "Auto Calibration", "value": "Yes" },
    { "key": "Gaming Features", "value": "HGIG Mode, Game Optimizer, ALLM, VRR (Up to 60 Hz)" },
    { "key": "Audio Output", "value": "20 W (2.0-Channel, Down-Firing)" },
    { "key": "Audio Features", "value": "α7 AI Sound Pro (Virtual 9.1.2), Clear Voice Pro, Bluetooth Surround Ready, AI Acoustic Tuning" },
    { "key": "Smart OS", "value": "webOS 25 with AI Magic Remote, AI Chatbot, Voice ID" },
    { "key": "Connectivity", "value": "3× HDMI (eARC, ALLM), 1× USB, Ethernet, Wi-Fi 5, Bluetooth 5.0" },
    { "key": "Accessibility", "value": "High Contrast, Gray Scale, Invert Colors" },
    { "key": "Dimensions (W×H×D, without stand)", "value": "1,455 × 841 × 67.9 mm" },
    { "key": "Weight (without stand)", "value": "16.5 kg" },
    { "key": "VESA Mount", "value": "300 × 200 mm" }
  ],
  "slug": "65-uhd-ai-65ua8450psa-smart-tv",
  "link": "/products/65-uhd-ai-65ua8450psa-smart-tv",
  "price": "PKR: 290,000",
  "discountedPrice": "PKR: 266,800",
  "tags": ["LG", "tv", "UHD AI", "65-inch", "4K", "α7 AI Processor", "HDR10 Pro", "webOS 25"],
  "sizes": [
    { "size": "43", "slug": "43-uhd-ai-ua84-4k-smart-tv" },
    { "size": "50", "slug": "50-uhd-ai-ua84-4k-smart-tv" },
    { "size": "55", "slug": "55-uhd-ai-ua84-4k-smart-tv" },
    { "size": "65", "slug": "65-uhd-ai-ua84-4k-smart-tv" }
    ],
  "currentSize": "65"
} ,
{
  "id": 1039,
  "title": "Samsung 7 kg Top-Load Washer WA70H4000SGURT",
    "brand": "samsung",

  "pickup": [
    "Air Turbo Drying system to reduce moisture and speed up drying of washed clothes.",
    "Diamond Drum & Double Storm pulsator for gentler, thorough wash performance."
  ],
  "description": "The Samsung WA70H4000SGURT is a 7 kg top-load washing machine with Air Turbo drying, designed to clean clothes effectively and reduce residual moisture. Featuring Diamond Drum, Double Storm pulsator, tempered glass lid, multiple wash cycles including eco-tub clean, and safety features like child lock and auto restart. Its sleek grey finish and ergonomic control panel make it a stylish and practical appliance for Pakistani households.",
  "images": [WA70Hfront_view, WA70Hside_view, WA70Hrear_view, WA70Hdimensional_view],
  "features": [
    { "key": "Capacity", "value": "7.0 kg" },
    { "key": "Washer Type", "value": "Top Load" },
    { "key": "Pulsator", "value": "Double Storm" },
    { "key": "Drum Type", "value": "Diamond Drum" },
    { "key": "Spin Speed", "value": "700 rpm" },
    { "key": "Air Turbo Drying", "value": "Yes" },
    { "key": "Magic Filter", "value": "Yes" },
    { "key": "Water Levels", "value": "5 Levels" },
    { "key": "Wash Cycles", "value": "Blanket, Delicates, Jeans, Quick, Fuzzy, Eco Tub Clean" },
    { "key": "Tempered Glass Window", "value": "Yes" },
    { "key": "Motor Type", "value": "AC Motor" },
    { "key": "Auto Restart", "value": "Yes" },
    { "key": "Child Lock", "value": "Yes" },
    { "key": "Dimensions (WxHxD)", "value": "540 × 850 × 560 mm" },
    { "key": "Net Weight", "value": "30 kg" }
  ],
  "slug": "samsung-wa70h4000sgurt-7kg-topload",
  "link": "/products/samsung-wa70h4000sgurt-7kg-topload",
  "price": "PKR: 88,999", 
  "discountedPrice": "PKR: 81,080",
  "tags": ["Samsung", "Top Load", "7kg", "Air Turbo", "Diamond Drum", "Laundry", "washing machine"],
  "sizes": [
    { "size": "7kg", "slug": "samsung-wa70h4000sgurt-7kg-topload" }
  ],
  "currentSize": "7kg"
},
{
  "id": 1040,
  "title": "Samsung 8 kg Top-Load Washing Machine WA80CK4240BWRT",
    "brand": "samsung",

  "pickup": [
    "Ecobubble™ technology helps wash well even in low temperatures, saving energy and being gentle on fabrics.",
    "Digital Inverter Technology for quiet operation and long motor life with 20-year warranty on motor."
  ],
  "description": "The Samsung WA80CK4240BWRT is an 8 kg capacity top-load fully automatic washing machine with Ecobubble™ for efficient cleaning, Digital Inverter Motor for durability and noise reduction, Eco Tub Clean to maintain hygiene without harsh chemicals, and various wash cycles optimized for different fabric types. Its sleek white design, LED display panel, and smart features make it ideal for family/household use in Pakistan.",
  "images": [WA80Hfront_view, WA80Hside_view, WA80Hrear_view, WA80Hdimensional_view],
  "features": [
    { "key": "Washing Capacity", "value": "8 kg" },
    { "key": "Machine Type", "value": "Top Load Automatic" },
    { "key": "Technology", "value": "Ecobubble™" },
    { "key": "Motor", "value": "Digital Inverter Technology" },
    { "key": "Wash Cycles", "value": "Multiple (Normal, Intensive, Eco Tub Clean, etc.)" },
    { "key": "Pulsator Type", "value": "PP Dual Storm" },
    { "key": "Drum Type", "value": "2nd Generation Diamond Drum" },
    { "key": "Display", "value": "LED Panel Display" },
    { "key": "Super Speed Wash", "value": "Yes" },
    { "key": "Magic Filter", "value": "Yes" },
    { "key": "Eco Tub Clean", "value": "Yes" },
    { "key": "Noise & Vibration Reduction", "value": "VRT Plus / frame design" },
    { "key": "Dimensions (WxHxD)", "value": "540 × 857 × 568 mm" },
    { "key": "Net Weight", "value": "approx. 27 kg" },
    { "key": "Body Color", "value": "White" }
  ],
  "slug": "samsung-wa80ck4240bwrt-8kg-topload",
  "link": "/products/samsung-wa80ck4240bwrt-8kg-topload",
  "price": "PKR: 105,999",
  "discountedPrice": "PKR: 96,567",
  "tags": ["Samsung", "Ecobubble", "Digital Inverter", "8kg", "Top Load", "Washing Machine"],
  "sizes": [
    { "size": "8kg", "slug": "samsung-wa80ck4240bwrt-8kg-topload" }
  ],
  "currentSize": "8kg"
},
{
  "id": 1041,
  "title": "Samsung 9 kg Top-Load Washer WA90CG4545BDTC Ecobubble",
    "brand": "samsung",

  "pickup": [
    "Powerful Ecobubble cleaning even in low temperatures, with 9 kg capacity for larger loads.",
    "Digital Inverter Motor with 20-year motor warranty & multiple smart wash features such as Super Speed, Eco Tub Clean & Smart Check."
  ],
  "description": "The Samsung WA90CG4545BDTC is a 9 kg top-load washing machine, equipped with Ecobubble™ and Digital Inverter Technology. It features 10 water levels, dual storm pulsator, 2nd generation Diamond Drum, 700 rpm spin, plus smart functions like Magic Filter, Soft Close Lid, Auto Restart, Delay End, and a full wash cycle set including Baby Care, Bedding, Delicates, Jeans, Quick Wash, etc. Designed in elegant Versailles Gray with a Black Caviar lid, it is robust & efficient for family usage.",
  "images": [WA90Hfront_view, WA90Hside_view, WA90Hrear_view, WA90Hdimensional_view],
  "features": [
    { "key": "Capacity", "value": "9.0 kg" },
    { "key": "Motor", "value": "Digital Inverter Technology (20-year warranty)" },
    { "key": "Cleaning Technology", "value": "Ecobubble™, BubbleStorm™, SpeedSpray™, Dual Storm" },
    { "key": "Drum Type", "value": "2nd Diamond Drum" },
    { "key": "Pulsator", "value": "PP Dual Storm" },
    { "key": "Spin Speed", "value": "700 rpm" },
    { "key": "Water Levels", "value": "10 Levels" },
    { "key": "Wash Cycles", "value": "Normal, Quick, Bedding, Baby Care, Delicates, Jeans, Rinse+Spin, Super Clean, Eco Tub Clean" },
    { "key": "Additional Features", "value": "Magic Filter, Soft Close Lid, Auto Restart, Delay End, Child Lock, Smart Check" },
    { "key": "Design", "value": "Versailles Gray body, Black Caviar lid, LED panel" },
    { "key": "Dimensions (WxHxD)", "value": "540 × 1008 × 577 mm" },
    { "key": "Net Weight", "value": "30 kg" },
    { "key": "Gross Weight", "value": "34 kg" },
    { "key": "Voltage / Frequency", "value": "230 V / 60 Hz" }
  ],
  "slug": "samsung-wa90cg4545bdtc-9kg-topload",
  "link": "/products/samsung-wa90cg4545bdtc-9kg-topload",
  "price": "PKR: 134,999",
  "discountedPrice": "PKR: 122,986",
  "tags": ["Samsung", "Ecobubble", "Digital Inverter", "9kg", "Top Load", "Smart Wash", "washing machine"],
  "sizes": [
    { "size": "9kg", "slug": "samsung-wa90cg4545bdtc-9kg-topload" }
  ],
  "currentSize": "9kg"
},
{
  "id": 1042,
  "title": "Samsung 10 kg Top-Load Washer WA10CK4545BYRT",
    "brand": "samsung",

  "pickup": [
    "Super-Speed wash finishes a normal 2 kg load in only ~29 minutes, thanks to Ecobubble + SpeedSpray technologies.",
    "Large 10 kg capacity & Digital Inverter motor for quiet, durable performance."
  ],
  "description": "The Samsung WA10CK4545BYRT is a 10 kg top-load fully-automatic washing machine featuring Ecobubble™, BubbleStorm™, Dual Storm™ pulsator, SpeedSpray™, and a modern design in Lavender Gray with a Black Caviar lid. It includes a LED control panel, Smart Check diagnostics, an intensive wash program, soft-close lid, and Eco Tub Clean for hygienic maintenance. Great choice for bigger households needing fast, efficient washes.",
  "images": [WA10Hfront_view, WA10Hside_view, WA10Hrear_view, WA10Hdimensional_view],
  "features": [
    { "key": "Capacity", "value": "10.0 kg" },
    { "key": "Machine Type", "value": "Top Load Automatic" },
    { "key": "Technology", "value": "Ecobubble™, BubbleStorm™, SpeedSpray™, Dual Storm™" },
    { "key": "Drum Type", "value": "2nd Diamond Drum" },
    { "key": "Pulsator", "value": "PP Dual Storm" },
    { "key": "Spin Speed", "value": "700 rpm" },
    { "key": "Water Levels", "value": "10 Levels" },
    { "key": "Display", "value": "LED Panel" },
    { "key": "Special Wash Programs", "value": "Baby Care, Bedding, Delicates, Quick Wash, Eco Tub Clean, Intensive Wash, Jeans, Normal, Rinse + Spin, Super Clean, Aqua Preserve" },
    { "key": "Convenience Features", "value": "Soft Close Lid, Delay End, Auto Restart, Child Lock, Smart Check" },
    { "key": "Body Color / Door", "value": "Lavender Gray body, Black Caviar door" },
    { "key": "Net Dimensions (WxHxD)", "value": "540 × 1008 × 577 mm" },
    { "key": "Net Weight", "value": "30 kg" },
    { "key": "Gross Dimensions", "value": "580 × 1080 × 640 mm" },
    { "key": "Gross Weight", "value": "34 kg" }
  ],
  "slug": "samsung-wa10ck4545byrt-10kg-topload",
  "link": "/products/samsung-wa10ck4545byrt-10kg-topload",
  "price": "PKR: 139,999",
  "discountedPrice": "PKR: 127,541",
  "tags": ["Samsung", "Top Load", "10kg", "Ecobubble", "SpeedSpray", "Digital Inverter", "Smart Wash", "washing machine"],
  "sizes": [
    { "size": "10kg", "slug": "samsung-wa10ck4545byrt-10kg-topload" }
  ],
  "currentSize": "10kg"
},
{
  "id": 1043,
  "title": "Samsung 15 kg Top-Load WA15CK5745BDRT with Ecobubble™",
    "brand": "samsung",

  "pickup": [
    "Huge 15 kg capacity for large loads – wash more fewer cycles.",
    "Ecobubble™, Dual Storm, and SpeedSpray for powerful cleaning even at lower temperatures."
  ],
  "description": "The Samsung WA15CK5745BDRT is a premium 15 kg top-load washing machine with advanced features like Ecobubble™, 2nd Diamond Drum, PP Dual Storm pulsator, soft-close lid, Smart Check diagnostics, and super speed wash cycles. Designed in Dark Versailles Gray and Black Caviar lid, it balances performance, ease of use, and stylish design for large households.",
  "images": [WA90Hfront_view, WA90Hside_view, WA90Hrear_view, WA90Hdimensional_view],
  "features": [
    { "key": "Capacity", "value": "15.0 kg" },
    { "key": "Drum Type", "value": "2nd Diamond Drum" },
    { "key": "Pulsator", "value": "PP Dual Storm" },
    { "key": "Spin Speed", "value": "700 rpm" },
    { "key": "Body Color", "value": "Versailles Gray body with Black Caviar Lid" },
    { "key": "Display Panel", "value": "LED Display" },
    { "key": "Technology Features", "value": "Ecobubble™, BubbleStorm™, SpeedSpray™, Dual Storm™, Air Turbo" },
    { "key": "Convenience Features", "value": "Soft Close Lid, Smart Check, Magic Filter, Auto Restart, Delay End, Child Lock" },
    { "key": "Wash Modes / Cycles", "value": "Normal, Intensive, Quick Wash, Eco Tub Clean, Bedding, Baby Care, Delicates, Jeans, Rinse + Spin, Super Clean" },
    { "key": "Water Levels", "value": "10 Levels" },
    { "key": "Physical Dimensions (WxHxD, without stand)", "value": "610 × 1089 × 675 mm" },
    { "key": "Weight (Net)", "value": "41 kg" },
    { "key": "Gross Dimensions (WxHxD)", "value": "660 × 1165 × 740 mm" },
    { "key": "Gross Weight", "value": "45 kg" }
  ],
  "slug": "samsung-wa15ck5745bdrt-15kg-topload",
  "link": "/products/samsung-wa15ck5745bdrt-15kg-topload",
  "price": "PKR: 169,999", 
  "discountedPrice": "PKR: 154,872",
  "tags": ["Samsung", "15kg", "Ecobubble", "Dual Storm", "Large Capacity", "Top Load", "Smart Features", "washing machine"],
  "sizes": [
    { "size": "15kg", "slug": "samsung-wa15ck5745bdrt-15kg-topload" }
  ],
  "currentSize": "15kg"
},
{
  "id": 1044,
  "title": "Samsung 17 kg Top-Load Washer WA17CK6745BDRT with Ecobubble™",
    "brand": "samsung",

  "pickup": [
    "Massive 17 kg capacity for large households & big loads.",
    "Full suite of wash-tech: Ecobubble™, BubbleStorm™, Dual Storm™, SpeedSpray™, with a soft-close tempered glass lid."
  ],
  "description": "The Samsung WA17CK6745BDRT is a 17 kg top-load fully automatic washing machine with Ecobubble™ and a 2nd Diamond Drum. It features PP Dual Storm pulsator, 700 RPM spin speed, LED panel display, 10 water levels, and a variety of wash cycles such as Quick Wash, Baby Care, Bedding, Delicates, Eco Tub Clean, etc. Designed with Dark / Versailles Gray body and Black Caviar lid, plus safety & convenience features like child lock, delay end, smart check, and auto-restart. Good fit for big families wanting efficiency and capacity.",
  "images": [WA90Hfront_view, WA90Hside_view, WA90Hrear_view, WA90Hdimensional_view],
  "features": [
    { "key": "Capacity", "value": "17.0 kg" },
    { "key": "Drum Type", "value": "2nd Diamond Drum" },
    { "key": "Pulsator", "value": "PP Dual Storm" },
    { "key": "Motor Type", "value": "Digital Inverter Technology" },
    { "key": "Spin Speed", "value": "700 RPM" },
    { "key": "Water Levels", "value": "10 Levels" },
    { "key": "Wash Cycles", "value": "Quick Wash, Baby Care, Bedding, Delicates, Eco Tub Clean, Normal, Super Clean, Rinse + Spin, etc." },
    { "key": "Special Features", "value": "Ecobubble™, BubbleStorm™, SpeedSpray™, Dual Storm™, Soft Close Lid, Smart Check, Delay End, Child Lock, Auto Restart, Magic Filter" },
    { "key": "Body Color / Lid", "value": "Versailles Gray body, Black Caviar lid" },
    { "key": "Panel Display", "value": "LED" },
    { "key": "Net Dimensions (W×H×D)", "value": "637 × 1068 × 701 mm" },
    { "key": "Gross Dimensions (W×H×D)", "value": "705 × 1136 × 748 mm" },
    { "key": "Net Weight", "value": "45 kg" },
    { "key": "Gross Weight", "value": "49 kg" }
  ],
  "slug": "samsung-wa17ck6745bdrt-17kg-topload",
  "link": "/products/samsung-wa17ck6745bdrt-17kg-topload",
  "price": "PKR: 209,999",
  "discountedPrice": "PKR: 191,313",
  "tags": ["Samsung", "17kg", "Top Load", "Ecobubble", "Digital Inverter", "Large Capacity", "Smart Wash", "wahsing machine"],
  "sizes": [
    { "size": "17kg", "slug": "samsung-wa17ck6745bdrt-17kg-topload" }
  ],
  "currentSize": "17kg"
},
{
  "id":   1045,
  "title": "Samsung 21 kg Top-Load Washer WA21CK6745BVRT with Ecobubble™",
    "brand": "samsung",

  "pickup": [
    "Huge 21 kg capacity—designed for very large loads to reduce wash frequency.",
    "Includes Ecobubble™, PP Dual Storm pulsator, and 2nd Diamond Drum for effective but gentle cleaning."
  ],
  "description": "The Samsung WA21CK6745BVRT is a 21 kg top-load automatic washing machine featuring Ecobubble™, BubbleStorm™, SpeedSpray™, Dual Storm™ pulsator, and 2nd Diamond Drum. It comes with LED panel display, strong spin speed of 700 rpm, soft close lid, smart features such as Smart Check, Auto Restart, Child Lock, Delay End, and 10 water levels. Built in Black Caviar design, this machine is ideal for large family usage or commercial light-duty needs.",
  "images": [WA21Hfront_view, WA21Hside_view, WA21Hrear_view, WA21Hdimensional_view],
  "features": [
    { "key": "Capacity", "value": "21.0 kg" },
    { "key": "Drum Type", "value": "2nd Diamond Drum" },
    { "key": "Pulsator", "value": "PP Dual Storm" },
    { "key": "Spin Speed", "value": "700 rpm" },
    { "key": "Water Levels", "value": "10 Levels" },
    { "key": "Display", "value": "LED Panel Display" },
    { "key": "Motor Technology", "value": "Digital Inverter Technology (DIT)" },
    { "key": "Wash Technologies", "value": "Ecobubble™, BubbleStorm™, SpeedSpray™, Dual Storm™" },
    { "key": "Convenience Features", "value": "Soft Close Lid, Smart Check, Auto Restart, Child Lock, Delay End" },
    { "key": "Body Color", "value": "Black Caviar" },
    { "key": "Physical Dimensions (WxHxD, without stand)", "value": "637 × 1093 × 701 mm" },
    { "key": "Net Weight", "value": "45 kg" },
    { "key": "Gross Dimensions (WxHxD)", "value": "705 × 1175 × 748 mm" },
    { "key": "Gross Weight", "value": "51 kg" }
  ],
  "slug": "samsung-wa21ck6745bvrt-21kg-topload",
  "link": "/products/samsung-wa21ck6745bvrt-21kg-topload",
  "price": "PKR: 229,999.00",
  "discountedPrice": "PKR: 209,533.00",
  "tags": ["Samsung","21kg","Top Load","Ecobubble","Digital Inverter","Heavy Duty","Smart Check", "washing machine"],
  "sizes": [
    { "size": "21kg", "slug": "samsung-wa21ck6745bvrt-21kg-topload" }
  ],
  "currentSize": "21kg"
},
{
  "id": 3001,
  "title": "LG LHD657 5.1-Channel Home Theater System (DVD HTS, 1000W)",
    "brand": "lg",

  "pickup": [
    "Powerful 1,000 watt RMS total output with 5.1-channel surround sound for an immersive audio experience.",
    "Region-free DVD playback + Bluetooth + USB direct recording + Bass Blast subwoofer for both music & movies."
  ],
  "description": "The LG LHD657 is a region-free 5.1-channel Home Theater System with 1,000W RMS output, featuring a multi-system DVD player, Bluetooth streaming, USB media playback & recording, HD-video upscaling, and a full complement of speakers including front, rear, center, and subwoofer. Designed to bring theater-like audio to your home setup.",
  "images": [LHD657front_view],
  "features": [
    { "key": "Channels", "value": "5.1" },
    { "key": "Total Power Output (RMS)", "value": "1000 W" },
    { "key": "Speaker Configuration", "value": "2 Front Tallboys + Center + 2 Rear + Subwoofer" },
    { "key": "Front L/R Power", "value": "167 W × 2 (per channel @ 3 Ω)" },
    { "key": "Center Speaker Power", "value": "167 W" },
    { "key": "Rear Speakers Power (each)", "value": "167 W" },
    { "key": "Subwoofer", "value": "167 W (Passive Subwoofer)" },
    { "key": "DVD Region", "value": "Region-free (multi-region DVD)" },
    { "key": "Disc Types Supported", "value": "DVD, DVD±R, DVD±RW, Audio CD, CD-R, CD-RW" },
    { "key": "Bluetooth", "value": "Yes (audio streaming)" },
    { "key": "USB", "value": "USB front input (media playback + direct recording)" },
    { "key": "Inputs / Outputs", "value": "HDMI OUT, Optical IN, Composite Video, RCA Audio, 3.5 mm aux, mic inputs, FM antenna" },
    { "key": "Upscaling", "value": "1080p video upscaling" },
    { "key": "Radio", "value": "FM tuner (≈ 87.5-108 MHz)" },
    { "key": "Power Requirements", "value": "100-240 VAC, 50/60 Hz (multi-voltage capable)" },
    { "key": "Main Unit Dimensions (WxHxD, mm)", "value": "360 × 60.5 × 299 mm" },
    { "key": "Front / Rear Speaker Dimensions", "value": "250 × 1100 × 250 mm each" },
    { "key": "Center Speaker Dimensions", "value": "260 × 93 × 74 mm" },
    { "key": "Subwoofer Dimensions", "value": "191 × 388.5 × 318 mm" }
  ],
  "slug": "lg-lhd657-1000w-5-1-home-theater",
  "link": "/products/lg-lhd657-1000w-5-1-home-theater",
  "price": "PKR: N/A",
  "discountedPrice": "PKR: N/A",
  "tags": ["LG", "LHD657", "5.1", "1000W", "Home Theater", "DVD HTS", "Bluetooth", "Region Free", "sound system"],
  "sizes": [
    { "size": "LHD657", "slug": "lg-lhd657-1000w-5-1-home-theater" }
  ],
  "currentSize": "LHD657"
},
{
  "id": 4001,
  "title": "LG S40T 2.1-Channel Sound Bar (300 W, Sound + Wireless Subwoofer)",
  "brand": "lg",
  "pickup": [
    "Powerful 300 W total output (100 W soundbar + 200 W wireless subwoofer) for deeper, more immersive bass.",
    "Features AI Sound Pro & WOW Interface for seamless control (via LG TV remote) and adaptive sound modes."
  ],
  "description": "The LG S40T is a 2.1-channel soundbar system delivering 300 W RMS, comprising a slim soundbar and wireless subwoofer. Equipped with multiple sound modes (Standard, Cinema, Game, etc.), Bluetooth 5.3, HDMI ARC, USB, Optical input, Dolby Digital & DTS Digital Surround support, WOW Interface for integrated control with LG TVs, and a subwoofer that fills out low frequencies, it provides a strong home theatre upgrade for medium size rooms.",
  "images": [S40Tfront_view, S40Tside_view, S40Trear_view, S40Tdimensional_view],
  "features": [
    { "key": "Channels", "value": "2.1 (Soundbar + Wireless Subwoofer)" },
    { "key": "Total Output Power", "value": "300 W RMS" },
    { "key": "Soundbar Power", "value": "100 W (approx.)" },
    { "key": "Subwoofer Power", "value": "200 W (approx.)" },
    { "key": "Sound Modes", "value": "Standard, Cinema, Game, AI Sound Pro" },
    { "key": "Connectivity", "value": "HDMI ARC, Optical input, USB, Bluetooth 5.3" },
    { "key": "Audio Formats Supported", "value": "Dolby Digital, DTS Digital Surround, AAC / SBC, LPCM, etc." },
    { "key": "WOW Interface", "value": "Yes (control via compatible LG TV remote)" },
    { "key": "Dimensions (Soundbar, WxHxD)", "value": "720 × 63 × 87 mm" },
    { "key": "Dimensions (Subwoofer, WxHxD)", "value": "171 × 320 × 252 mm" },
    { "key": "Weight (Soundbar)", "value": "≈ 1.65 kg" },
    { "key": "Weight (Subwoofer)", "value": "≈ 4.2 kg" },
    { "key": "Power Consumption", "value": "22 W (soundbar); 35 W (subwoofer); < 0.5 W on standby" },
    { "key": "Wireless Features", "value": "Bluetooth 5.3 streaming, wireless subwoofer" }
  ],
  "slug": "lg-s40t-2-1-300w-soundbar",
  "link": "/products/lg-s40t-2-1-300w-soundbar",
  "price": "PKR: N/A",
  "discountedPrice": "PKR: N/A",
  "tags": ["LG", "S40T", "2.1-channel", "300W", "Soundbar", "Wireless Subwoofer", "HDMI ARC", "Bluetooth", "sound system"],
  "sizes": [
    { "size": "-", "slug": "lg-s40t-2-1-300w-soundbar" }
  ],
  "currentSize": "-"
},





];


