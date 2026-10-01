import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./ProjectVisual.module.css";

type ProjectVisualProps = {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover?: string;
};

// Local captures and project assets keep previews independent of live iframes.
const captures: Record<string, { image: string; address: string }> = {
  vallerieon: { image: "thumbnails/vallerieon.jpg", address: "vallerieon.vercel.app" },
  melodytix: { image: "thumbnails/melodytix.jpg", address: "melodytix.vercel.app" },
  splitthebill: { image: "splitthebill/splitthebill.png", address: "Split TheBill / original interface" },
};

function DesignScreen({ image, crop, className = "" }: {
  image: string;
  crop: [number, number, number, number, number, number];
  className?: string;
}) {
  const [x, y, width, height, sourceWidth, sourceHeight] = crop;
  const cropStyle = {
    aspectRatio: `${width} / ${height}`,
    "--crop-width": `${sourceWidth / width * 100}%`,
    "--crop-left": `${-x / width * 100}%`,
    "--crop-top": `${-y / height * 100}%`,
  } as CSSProperties;

  return (
    <div className={`${styles.designScreen} ${className}`} style={cropStyle}>
      <Image src={`/image/project/${image}`} alt="" width={sourceWidth} height={sourceHeight} sizes={`${sourceWidth}px`} className={styles.designImage} />
    </div>
  );
}

export default function ProjectVisual({ slug, title, category, year, cover }: ProjectVisualProps) {
  const capture = captures[slug];
  const isCover = slug === "nutrimind" || slug === "kopi-malas";
  const label = isCover ? "PROJECT COVER" : slug === "streamflix" || slug === "gizitron" ? "INTERFACE DESIGN" : "INTERFACE CAPTURE";

  return (
    <div className={`${styles.visual} ${styles[slug.replaceAll("-", "")] ?? ""}`} role="img" aria-label={`${title} — ${category}, ${year}; ${label.toLowerCase()}`}>
      <div className={styles.artwork} aria-hidden="true">
        {capture ? (
          <div className={styles.browser}>
            <div className={styles.browserBar}>
              <span className={styles.browserDots}><i /><i /><i /></span>
              <span className={styles.browserAddress}>{capture.address}</span>
              <span className={styles.browserIcon}>↗</span>
            </div>
            <div className={styles.browserViewport}>
              <Image src={`/image/project/${capture.image}`} alt="" fill sizes="(max-width: 620px) calc(100vw - 80px), 700px" className={styles.captureImage} />
            </div>
          </div>
        ) : slug === "nutrimind" ? (
          <>
            <div className={styles.nutriCopy}>
              <span className={styles.coverBrand}>nutrimind<span>.</span></span>
              <p className={styles.coverHeadline}>Makan lebih sadar.<br /><em>Hidup terasa</em><br />lebih ringan.</p>
              <span className={styles.coverNote}>KENALI MAKANMU, RAWAT DIRIMU</span>
            </div>
            <div className={styles.mealPhoto}><Image src="/image/project/thumbnails/hero-meal.png" alt="" fill sizes="(max-width: 620px) 220px, 380px" /></div>
          </>
        ) : slug === "kopi-malas" ? (
          <>
            <Image src="/image/project/thumbnails/hero-coffee.jpg" alt="" fill sizes="(max-width: 620px) 100vw, 760px" className={styles.coffeePhoto} />
            <div className={styles.coffeeCopy}>
              <span className={styles.coverNote}>KOPI MALAS / TANGGUL</span>
              <p className={styles.coverHeadline}>Pelan-pelan,<br />nikmati <em>setiap</em><br />tegukan.</p>
              <span className={styles.coffeeRule} />
            </div>
          </>
        ) : slug === "qr-attendance" ? (
          <>
            <div className={styles.qrCopy}><span className={styles.coverNote}>QR ATTENDANCE</span><p className={styles.qrHeadline}>Generate.<br />Scan.</p><span className={styles.coverNote}>QR CODE PROTOTYPE</span></div>
            <div className={styles.qrScreen}><Image src="/image/project/thumbnails/qr-detail.jpg" alt="" fill sizes="(max-width: 620px) 200px, 350px" className={styles.qrImage} /></div>
          </>
        ) : slug === "streamflix" ? (
          <>
            <div className={styles.mobileBrand}><span>StreamFlix</span><small>INDEPENDENT FILM / PRODUCT DESIGN</small></div>
            <div className={styles.devices}>
              <DesignScreen image="streamflix/streamflix-photo.png" crop={[286, 62, 94, 206, 1271, 605]} className={styles.deviceSide} />
              <DesignScreen image="streamflix/streamflix-photo.png" crop={[392, 62, 94, 206, 1271, 605]} className={styles.deviceCenter} />
              <DesignScreen image="streamflix/streamflix-photo.png" crop={[497, 62, 95, 206, 1271, 605]} className={styles.deviceSide} />
            </div>
          </>
        ) : slug === "gizitron" ? (
          <>
            <div className={styles.giziCopy}><span className={styles.coverBrand}>GIZITRON</span><p>Your health.<br />Your journey.</p><span className={styles.coverNote}>NUTRITION / MOBILE UI</span></div>
            <div className={styles.giziDevices}>
              <DesignScreen image="gizitron/gizitrons.png" crop={[724, 75, 137, 283, 1280, 720]} className={styles.deviceSide} />
              <DesignScreen image="gizitron/gizitrons.png" crop={[875, 2, 137, 291, 1280, 720]} className={styles.deviceCenter} />
            </div>
          </>
        ) : cover ? (
          <Image src={`/image/project/${cover}`} alt="" fill sizes="(max-width: 620px) 100vw, 760px" className={styles.captureImage} />
        ) : (
          <p className={styles.coverHeadline}>{title}</p>
        )}
      </div>
      <div className={styles.caption} aria-hidden="true"><span>{label}</span><span>{category} / {year}</span></div>
    </div>
  );
}
