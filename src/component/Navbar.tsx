import Link from "next/link";

export const colorPalette = {
  backgroudColor: '#f7f9e1',
  green: '#34ad3c',
  font: '#2e332e',
}

export default function Navbar({ page }: { page: string }) {
  const pageNow = page.toLocaleUpperCase();
  return (
    <div style={{
      color: colorPalette.font, fontFamily: 'Roboto, sans-serif', top: 0, right: 0, left: 0, position: 'fixed', width: '100%',
      margin: "30px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      fontSize: '20px',
    }}>
      <div style={{
        display: 'flex', margin: 'auto', gap: '18px'
      }}>
        <Link href={'/'} style={{ textDecoration: 'none', color: colorPalette.font }}>
          <div style={{ margin: '10px', cursor: 'pointer', fontWeight: `${pageNow === 'ABOUT' ? 'bold' : 'normal'}` }}>about</div>
        </Link>
        <Link href={'/brandbook'} style={{ textDecoration: 'none', color: colorPalette.font }}>
          <div style={{ margin: '10px', cursor: 'pointer', fontWeight: `${pageNow === 'BRANDBOOK' ? 'bold' : 'normal'}` }}>brandbook</div>
        </Link>
        <Link href={'/about'} style={{ textDecoration: 'none', color: colorPalette.font }}><div style={{ margin: '10px', cursor: 'pointer', fontWeight: `${pageNow === 'SOCIALMEDIA' ? 'bold' : 'normal'}` }}>social media</div></Link>
        <Link href={'/about'} style={{ textDecoration: 'none', color: colorPalette.font }}><div style={{ margin: '10px', cursor: 'pointer', fontWeight: `${pageNow === 'POSTER' ? 'bold' : 'normal'}` }}>poster</div></Link>
        <Link href={'/about'} style={{ textDecoration: 'none', color: colorPalette.font }}><div style={{ margin: '10px', cursor: 'pointer', fontWeight: `${pageNow === 'CAMPAIGN' ? 'bold' : 'normal'}` }}>campaign</div></Link>
        <Link href={'/about'} style={{ textDecoration: 'none', color: colorPalette.font }}><div style={{ margin: '10px', cursor: 'pointer', fontWeight: `${pageNow === 'MOTION' ? 'bold' : 'normal'}` }}>motion</div></Link>
        <Link href={'/about'} style={{ textDecoration: 'none', color: colorPalette.font }}><div style={{ margin: '10px', cursor: 'pointer', fontWeight: `${pageNow === 'HAMPERS' ? 'bold' : 'normal'}` }}>hampers</div></Link>
        <Link href={'/about'} style={{ textDecoration: 'none', color: colorPalette.font }}><div style={{ margin: '10px', cursor: 'pointer', fontWeight: `${pageNow === 'LOGOPACKAGING' ? 'bold' : 'normal'}` }}>logo & packaging</div></Link>
        <Link href={'/about'} style={{ textDecoration: 'none', color: colorPalette.font }}><div style={{ margin: '10px', cursor: 'pointer', fontWeight: `${pageNow === 'CONTACT' ? 'bold' : 'normal'}` }}>contact</div></Link>
      </div>
    </div >
  );
}