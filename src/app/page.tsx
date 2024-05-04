/* eslint-disable @next/next/no-img-element */
"use client"
import Navbar, { colorPalette } from "@/component/Navbar";
import { useEffect, useState } from "react";

export default function About() {
  const [imageDimensions, setImageDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
  const data = [
    {
      header: 'Date of Birth',
      subHeader: 'February 14th, 2003',
      date: ''
    },
    {
      header: 'Education',
      subHeader: 'Social, SMA 1 Waled, West Java',
      date: '2018 - 2021'
    },
    {
      header: '',
      subHeader: 'Visual Design, Purwadhika Digital Technology School',
      date: 'Febuary - June 2024'
    }
  ]

  const data2 = [
    {
      header: 'Software Skills',
      list: 'adobe photoshop,/ps.png|adobe illustrator,/ai.png|adobe after effects,/ae.png|adobe premiere pro,/pr.png|canva,/canva.png|procreate,/procreate.png',
      type: 'icon'
    },
  ]

  const data3 = [
    {
      header: 'Language',
      list: 'Indonesia|English|Japanese',
      type: 'text'
    },
    {
      header: 'Links',
      list: 'LinkedIn https://www.linkedin.com/in/kolose-hamonangan-valentino-sianipar-4416272ab/|Instagram https://www.instagram.com/oche_kun/|Behance https://www.behance.net/kolosesianipar',
      type: 'link'
    }
  ]

  useEffect(() => {
    const image = document.getElementById('image') as HTMLImageElement | null;
    if (image) {
      setImageDimensions({
        width: image.offsetWidth,
        height: image.offsetHeight
      });
    }
  }, []);

  return (
    <>
      <div style={{ backgroundColor: colorPalette.backgroudColor, fontFamily: 'Roboto, sans-serif', color: colorPalette.font }}>
        <Navbar page={'about'} />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100wv',
          height: '100vh',
        }}>
          <div style={{ display: "flex", width: '70%', gap: '60px', }}>
            <div style={{ position: 'relative', width: '50%' }}>
              <div style={{ border: `1px solid black`, display: 'inline-flex', backgroundColor: 'white', padding: '20px 20px 60px 20px', position: 'relative', zIndex: 2 }}>
                <img id="image" width={'300px'} style={{ border: `1px solid black` }} src="https://img.freepik.com/premium-psd/cat-with-blue-eyes-sits-white-transparent-background_540808-60.jpg?w=740" alt="" />
              </div>
              <div style={{ border: `1px solid black`, display: 'inline-flex', backgroundColor: 'white', padding: '20px 20px 60px 20px', position: 'absolute', top: 0, left: 0, width: `${imageDimensions.width}px`, height: `${imageDimensions.height}px`, zIndex: 1, transform: 'rotate(-10deg)' }}>
              </div>
            </div>
            <div style={{
              width: '50%', display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <div>
                <div>
                  <p style={{ marginBottom: 0 }}>Hi! Everyone call me</p>
                  <h1 style={{ marginTop: 0, fontWeight: 'bolder' }}>Kolose</h1>
                </div>
                <p>Majoring in Architecture at Bina Nusantara University
                  and currently a Visual Design Student at Purwadhika.
                  I am interested in making creative things.
                </p>
                <p>
                  I am enjoy working with people and willing to try and
                  learn a new things. Bringing forth a motivated attitude
                  as an active and cheerful person. I believe i can
                  deliver a message through visual.
                </p>
              </div>
            </div>
          </div>
        </div >
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100wv',
          height: '100vh',
        }}>
          <div style={{
            width: '80%', height: 'auto', display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap:'30px'
          }}>
            <div>
              {
                data && data.map((v) => (
                  // eslint-disable-next-line react/jsx-key
                  <div style={{ marginBottom: '50px' }}>
                    <p style={{ fontWeight: 'bolder', fontSize: '16px' }}>{v.header}</p>
                    <p style={{ fontSize: '18px', marginBottom: '0' }}>{v.subHeader}</p>
                    <p style={{ fontSize: '14px', marginTop: '0' }}>{v.date}</p>
                  </div>
                ))
              }
            </div>
            <div>
              {
                data3 && data3.map((v) => (
                  // eslint-disable-next-line react/jsx-key
                  <div style={{ marginBottom: '50px' }}>
                    <p style={{ fontWeight: 'bolder', fontSize: '16px' }}>{v.header}</p>
                    {v.list.split('|').map((x) => (
                      // eslint-disable-next-line react/jsx-key
                      v.type === 'text' ? <p style={{ fontSize: '18px', marginBottom: '0' }}>{x}</p> : v.type === 'icon' ?
                        <div style={{ display: "flex", gap: '10px', marginBottom: '8px' }}>
                          <img src={x.split(',')?.[1]} alt="" width={'50px'} height={'50px'} />
                          <p>{x.split(',')?.[0]}</p>
                        </div>
                        : <a href={x.split(' ')[1]} target="_blank" style={{ fontSize: '18px', marginBottom: '0', marginTop: '10px', display: 'block', textDecoration: 'none', color: colorPalette.font }}>{x.split(' ')[0]}</a>
                    ))}
                  </div>
                ))
              }
            </div>
            <div>
              {
                data2 && data2.map((v) => (
                  // eslint-disable-next-line react/jsx-key
                  <div style={{ marginBottom: '50px' }}>
                    <p style={{ fontWeight: 'bolder', fontSize: '16px' }}>{v.header}</p>
                    {v.list.split('|').map((x) => (
                      // eslint-disable-next-line react/jsx-key
                      v.type === 'text' ? <p style={{ fontSize: '18px', marginBottom: '0' }}>{x}</p> : v.type === 'icon' ?
                        <div style={{ display: "flex", gap: '10px', marginBottom: '8px' }}>
                          <img src={x.split(',')?.[1]} alt="" width={'50px'} height={'50px'} />
                          <p>{x.split(',')?.[0]}</p>
                        </div>
                        : <a href={x.split(' ')[1]} target="_blank" style={{ fontSize: '18px', marginBottom: '0', marginTop: '10px', display: 'block', textDecoration: 'none', color: colorPalette.font }}>{x.split(' ')[0]}</a>
                    ))}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
