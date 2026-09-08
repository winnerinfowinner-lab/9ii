import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/videos');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const clips = [
  {
    id: 1,
    title: "1. مهزلة السيرفرات التقليدية",
    enTitle: "Server Downtime Farce",
    sub: "استضافة سحابية 99.9% - 9ii.xyz",
    accentHex: "0x10b981",
    freq: 330
  },
  {
    id: 2,
    title: "2. الطائرة الحربية والحماية",
    enTitle: "Fighter Jet & Cyber Shield",
    sub: "تشفير وأمان فائق - 9ii.xyz",
    accentHex: "0x0284c7",
    freq: 440
  },
  {
    id: 3,
    title: "3. ملك الغابة والموقع الرقمي",
    enTitle: "The Jungle King & Digital Web",
    sub: "مبيعات آلية 24/7 - 9ii.xyz",
    accentHex: "0xd97706",
    freq: 523
  },
  {
    id: 4,
    title: "4. لا تخف.. نحن نبني كل شيء",
    enTitle: "Zero Code - We Build It All",
    sub: "دومين + استضافة وتصميم شامل",
    accentHex: "0x10b981",
    freq: 587
  },
  {
    id: 5,
    title: "5. قفزة المظلة والأمان",
    enTitle: "Parachute Jump & Safety",
    sub: "مظلة الأمان والنجاح - 9ii.xyz",
    accentHex: "0x9333ea",
    freq: 659
  },
  {
    id: 6,
    title: "6. متجرك ينام وموقعك يبيع",
    enTitle: "Store Sleeps, Website Sells",
    sub: "أرباح وطلبات على مدار الساعة",
    accentHex: "0x10b981",
    freq: 698
  },
  {
    id: 7,
    title: "7. مقابلة العمل والمصداقية",
    enTitle: "Pitch Meeting & Trust",
    sub: "الهيبة والمصداقية الرسمية",
    accentHex: "0x38bdf8",
    freq: 784
  },
  {
    id: 8,
    title: "8. استقلاليتك الرقمية",
    enTitle: "Digital Sovereignty",
    sub: "منصة ملكك بالكامل بدون قيود",
    accentHex: "0xf43f5e",
    freq: 880
  },
  {
    id: 9,
    title: "9. راحة المتجر الإلكتروني",
    enTitle: "E-Commerce vs Physical Store",
    sub: "وفر الإيجارات وانطلق للعالمية",
    accentHex: "0x14b8a6",
    freq: 987
  }
];

const fontPath = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf";

for (const clip of clips) {
  const outFile = path.join(outDir, `clip-${clip.id}.mp4`);
  console.log(`Generating Reel ${clip.id} -> ${outFile}...`);

  // Generate vertical 9:16 (540x960) video reel with synth audio, badge, animated background
  const cmd = `ffmpeg -y \
    -f lavfi -i "color=c=0x0a0f1d:s=540x960:r=25:d=8" \
    -f lavfi -i "sine=frequency=${clip.freq}:duration=8" \
    -filter_complex "\
      [0:v]drawbox=x=30:y=120:w=480:h=720:color=white@0.08:t=fill, \
          drawbox=x=30:y=120:w=480:h=720:color=${clip.accentHex}@0.8:t=3, \
          drawtext=fontfile=${fontPath}:text='9ii.xyz':fontcolor=0x10b981:fontsize=48:x=(w-text_w)/2:y=180, \
          drawtext=fontfile=${fontPath}:text='OFFICIAL REEL #0${clip.id}':fontcolor=${clip.accentHex}:fontsize=22:x=(w-text_w)/2:y=260, \
          drawtext=fontfile=${fontPath}:text='${clip.enTitle}':fontcolor=white:fontsize=28:x=(w-text_w)/2:y=380, \
          drawtext=fontfile=${fontPath}:text='500 USD / YEAR':fontcolor=0xfbbf24:fontsize=38:x=(w-text_w)/2:y=520, \
          drawtext=fontfile=${fontPath}:text='Domain + Fast Hosting + SSL':fontcolor=0xd1d5db:fontsize=20:x=(w-text_w)/2:y=590, \
          drawtext=fontfile=${fontPath}:text='Zero Code Hassle':fontcolor=0x9ca3af:fontsize=18:x=(w-text_w)/2:y=630, \
          drawbox=x=80:y=710:w=380:h=60:color=0x10b981@0.9:t=fill, \
          drawtext=fontfile=${fontPath}:text='ORDER VIA WHATSAPP':fontcolor=0x000000:fontsize=22:x=(w-text_w)/2:y=730 \
      [v]" \
    -map "[v]" -map 1:a \
    -c:v libx264 -pix_fmt yuv420p -preset ultrafast \
    -c:a aac -b:a 96k -shortest "${outFile}"`;

  execSync(cmd, { stdio: 'inherit' });
}

console.log('Finished creating all 9 video reels!');
