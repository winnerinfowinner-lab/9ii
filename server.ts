import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client Lazily/Safely
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("Warning: GEMINI_API_KEY environment variable is not defined. Falling back to structured templates.");
      throw new Error("GEMINI_API_KEY_MISSING");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Highly appealing fallback blueprints based on business type and language
const fallbackBlueprints: Record<string, Record<string, any>> = {
  restaurant: {
    ar: {
      businessName: "مذاق الشرق",
      slogan: "أصالة النكهة في كل لقمة بلمسة عصرية",
      heroTitle: "تجربة طعام لا تُنسى في قلب مدينتكم",
      heroSubtitle: "نقدم تشكيلة فريدة من الأطباق الشرقية والغربية المحضرة على أيدي أمهر الطهاة العالميين باستخدام مكونات طازجة يومياً لنوفر لعملائنا أرقى تجربة ضيافة.",
      ctaText: "احجز طاولتك الآن",
      services: [
        { title: "قائمة طعام فاخرة", description: "مجموعة من الأطباق المبتكرة والحلويات الاستثنائية التي تلبي رغبات جميع الأذواق.", iconName: "Utensils" },
        { title: "تجهيز الحفلات والمناسبات", description: "تنظيم احترافي وتقديم بوفيه متكامل ليومكم الخاص بمواصفات تليق بكم وبضيوفكم.", iconName: "Sparkles" },
        { title: "خدمة توصيل سريعة", description: "نصل إليك أينما كنت بأقصى سرعة ممكنة مع الحفاظ على حرارة وجودة الطعام.", iconName: "Truck" }
      ],
      aboutSection: {
        title: "حكايتنا ونشأتنا",
        story: "بدأنا كحلم صغير لعائلة تعشق الطهي والضيافة، وتطورنا لنصبح الوجهة الأولى لعشاق المذاق الأصيل. نجمع بين عراقة التقاليد وابتكار الحاضر لتقديم أطباق تحمل روحاً وهوية مغذية.",
        values: ["الجودة المطلقة", "المكونات الطازجة", "كرم الضيافة العربي"]
      },
      accentColor: "emerald"
    },
    en: {
      businessName: "The Eastern Taste",
      slogan: "Authentic Flavors with a Modern Twist",
      heroTitle: "An Unforgettable Dining Experience",
      heroSubtitle: "We offer a unique selection of Eastern and Western dishes prepared by world-class chefs using fresh ingredients daily to provide our guests with premium hospitality.",
      ctaText: "Book Your Table Now",
      services: [
        { title: "Gourmet Menu", description: "An outstanding selection of innovative dishes and desserts designed to please all palates.", iconName: "Utensils" },
        { title: "Catering & Events", description: "Professional setup and complete buffet catering for your special day to amaze your guests.", iconName: "Sparkles" },
        { title: "Fast Secure Delivery", description: "We deliver to your doorstep with ultimate speed, guaranteeing fresh, piping-hot dishes.", iconName: "Truck" }
      ],
      aboutSection: {
        title: "Our Story",
        story: "We started as a family's dream of cooking and hospitality, and grew representing authentic culinary arts. We blend historical recipes with modern presentation to feed your soul.",
        values: ["Premium Quality", "Fresh Daily Herbs", "Warm Generous Hospitality"]
      },
      accentColor: "emerald"
    }
  },
  construction: {
    ar: {
      businessName: "صرح الأعمار للمقاولات",
      slogan: "نبني مستقبلاً تفخر به الأجيال",
      heroTitle: "شريككم الموثوق في التأسيس والبناء",
      heroSubtitle: "مؤسسة رائدة في أعمال البناء، المقاولات، التشطيب الفاخر والتصميم المعماري المتكامل بخبرة ممتدة لعقود ومقاييس جودة متناهية.",
      ctaText: "اطلب استشارة مجانية",
      services: [
        { title: "المقاولات العامة والإنشاء", description: "إشراف هندسي دقيق على المشاريع السكنية والتجارية بدءاً من التأسيس وحتى تسليم المفتاح.", iconName: "Hammer" },
        { title: "التشطيبات والديكور الداخلي", description: "تصاميم عصرية وتنفيذ احترافي بالاعتماد على خامات فاخرة ومواد فائقة التحمل.", iconName: "Paintbrush" },
        { title: "الترميم وإعادة الهيكلة", description: "تحديث وتجديد المباني القائمة لرفع كفاءتها وإعطائها عمراً ومظهراً جديداً كلياً.", iconName: "ShieldCheck" }
      ],
      aboutSection: {
        title: "من نحـن",
        story: "تأسست صرح الأعمار لتكون منارة البناء والتطوير، مستندين إلى كادر هندسي وفني متمكن يحترم الآجال ويلتزم بالمواصفات والمعايير العالمية لتحقيق تطلعات عملائنا السكنية والاستثمارية.",
        values: ["الالتزام بالوقت", "الدقة الهندسية", "الشفافية الكاملة"]
      },
      accentColor: "amber"
    },
    en: {
      businessName: "Apex Pillars Construction",
      slogan: "Building a Future Generations Stand Proud Of",
      heroTitle: "Your Trusted Building Partner",
      heroSubtitle: "A leading firm in general contracting, structure building, luxury finishing, and comprehensive architectural designs with decades of field expert experience.",
      ctaText: "Request Free Consultation",
      services: [
        { title: "General Contracting", description: "Precise engineering supervision on residential and commercial developments from ground up to turnkey.", iconName: "Hammer" },
        { title: "Luxury Finishing & Interiors", description: "Contemporary layouts and expert finishing utilizing premium, heavy-duty materials tailored for you.", iconName: "Paintbrush" },
        { title: "Restoration & Repairs", description: "Rejuvenating existing buildings with modern building systems, preserving integrity and enhancing visual appeal.", iconName: "ShieldCheck" }
      ],
      aboutSection: {
        title: "Who We Are",
        story: "Apex Pillars was formed to build safe, stunning structures. Driven by professional engineers and certified technicians, we ensure deadlines and technical guidelines are met perfectly.",
        values: ["Strict Deadlines", "Engineering Integrity", "Uncompromising Quality"]
      },
      accentColor: "amber"
    }
  },
  services: {
    ar: {
      businessName: "رواق للأعمال والاستشارات",
      slogan: "حلول إدارية تطلق طاقات وتوسع آفاق شركتكم",
      heroTitle: "تمكين وتحسين أعمالكم لتنمو بلا حدود",
      heroSubtitle: "نهيئ لكم البيئة الاستشارية والدعم الإداري المتكامل لتبسيط عملياتكم، وزيادة أرباحكم، وتمكين فريقكم من تحقيق خططكم الاستراتيجية.",
      ctaText: "تواصل مع مستشارنا",
      services: [
        { title: "الاستشارات الإدارية والمالية", description: "تحليل وتصميم خطط أعمال استراتيجية تساعدك على تجاوز الأهداف وحوكمة الموارد.", iconName: "Briefcase" },
        { title: "تطوير الهوية والحلول التقنية", description: "تأسيس الحضور الرقمي لشركتكم وبناء هوية بصرية تخلق أثراً وتجذب العملاء المستهدفين.", iconName: "Globe" },
        { title: "تدريب وتطوير الكفاءات", description: "ورش عمل وبرامج تأهيلية متخصصة ترفع من أداء وخبرات طاقم العمل وتأهله للمستقبل.", iconName: "Users" }
      ],
      aboutSection: {
        title: "رسـالتنا",
        story: "في رواق للأعمال، غايتنا هي مشاركة عملائنا رحلة النجاح بخطوات واضحة ومدروسة. لا نطرح نصائح عامة، بل نصنع حلولاً مخصصة تتماشى مع سوق العمل وطبيعة نشاطكم الفريد.",
        values: ["الابتكار المستمر", "الأمانة المهنية", "النتائج القابلة للقياس"]
      },
      accentColor: "indigo"
    },
    en: {
      businessName: "Rowaq Business Solutions",
      slogan: "Unlock Enterprise Power & Expand Visual Horizons",
      heroTitle: "Optimize Your Operations to Scale Seamlessly",
      heroSubtitle: "We build integrated administrative structures and solid strategic frameworks to streamline your operations, drive continuous profits, and enable your staff.",
      ctaText: "Talk to a Consultant",
      services: [
        { title: "Strategic Advisory", description: "Analytical strategy maps helping you bypass bottlenecks and optimize direct corporate output.", iconName: "Briefcase" },
        { title: "Identity & Digital Design", description: "Sculpting visual assets and powerful digital layouts that retain attention and increase conversions.", iconName: "Globe" },
        { title: "Workforce Enablement", description: "Masterclasses and tailormade capability programs transforming employee output to industry leading levels.", iconName: "Users" }
      ],
      aboutSection: {
        title: "Our Mission",
        story: "At Rowaq, we thrive on unlocking structural capacity. We shy away from standardized reports, delivering custom, verified frameworks that fit your specific market landscape.",
        values: ["Continuous Innovation", "Ethical Partnership", "Measurable Performance Indicators"]
      },
      accentColor: "indigo"
    }
  },
  clinic: {
    ar: {
      businessName: "عيادات الشفاء التخصصية",
      slogan: "رعايتكم الصحية هي أسمى غاياتنا",
      heroTitle: "عناية طبية متكامله بأساليب ريادية",
      heroSubtitle: "نضم نخبة من كبار الاستشاريين والأطباء المجهزين بأحدث التقنيات الطبية لتوفير رعاية آمنة وصحية تضمن سلامة عائلتك.",
      ctaText: "احجز موعداً كشفياً",
      services: [
        { title: "عيادات الاستشارة المتكاملة", description: "تغطية شاملة لكل التخصصات مثل الباطنية، الأطفال، العظام والجلدية تحت سقف واحد.", iconName: "Heart" },
        { title: "الفحوصات العاجلة والمختبر", description: "أجهزة تحليل متطورة تعطي أدق النتائج في دقائق لمساعدة الطبيب في اتخاذ القرار الصائب.", iconName: "Activity" },
        { title: "وحدة الرعاية والمتابعة المستمرة", description: "برامج دورية متميزة لمتابعة الحالات المزمنة وكبار السن في بيئة تتسم بالحنان والتدفق.", iconName: "Calendar" }
      ],
      aboutSection: {
        title: "نبضة عن الشــفاء",
        story: "تأسست عيادات الشفاء لتشكل نموذجاً مختلفاً للرعاية الطبية، حيث يقبع المريض في مركز الاهتمام والقرارات. نؤمن بأن العلاج يبدأ بالاحترام والاستماع والتفهم الحقيقي لكل مراجع.",
        values: ["الإنسانية في التعامل", "الدقة العلمية", "الخصوصية المطلقة"]
      },
      accentColor: "teal"
    },
    en: {
      businessName: "Al Shifa Specialty Clinics",
      slogan: "Your Health and Well-being Is Our Premium Focus",
      heroTitle: "Comprehensive Medical Care Run Empathetically",
      heroSubtitle: "We house prominent consultants and specialists equipped with advanced diagnosis devices to secure safe, premium care across all age bands.",
      ctaText: "Schedule Checkup Appointment",
      services: [
        { title: "Integrated Outpatients", description: "Full coverage spanning Pediatrics, Internal Medicine, Orthopedics & Aesthetics under one roof.", iconName: "Heart" },
        { title: "Advanced Laboratory Tests", description: "Advanced diagnostic equipment yielding precise readouts in minutes to inform accurate therapies.", iconName: "Activity" },
        { title: "Continuous Wellness Plans", description: "Comprehensive plans supporting chronic diagnostics and senior citizens in dynamic, warm clinics.", iconName: "Calendar" }
      ],
      aboutSection: {
        title: "About Al Shifa",
        story: "Formed to anchor quality healthcare standards, Al Shifa surrounds patients with empathy. We assert that true healing is anchored to authentic active listening and personal dignity.",
        values: ["Empathetic Treatment", "Scientific Accuracy", "Utmost Confidentiality"]
      },
      accentColor: "teal"
    }
  }
};

// Main dynamic AI generator using gemini-3.5-flash
app.post("/api/generate-preview", async (req, res) => {
  const { businessType, businessName, businessDesc, lang } = req.body;
  const currentLang = lang || "ar";
  const currentType = businessType || "services";

  // Build high-quality prompt for standard structured output
  const languageTerm = currentLang === "ar" ? "اللغة العربية الفصحى الممتازة بصياغة تسويقية بليغة ومقنعة" : "Elegant professional marketing English Language";
  
  const systemInstruction = `
    You are an award-winning UI copywriter and UX strategist for a top-tier global design studio "9ii.xyz".
    Your goal is to write captivating, custom-tailored, and highly-converting website copy for a premium website based on the user's input.
    You must output your response strictly as a JSON object matching the provided schema, without any backticks, markdown markers, or text preamble.
    Your tone must be highly prestigious, modern, and perfectly attuned to elite businesses.
    Deliver the content strictly in ${languageTerm}.
    Ensure the JSON responds to the business type: "${currentType}" and name: "${businessName || 'اسم العميل'}" and description: "${businessDesc || ''}".
    Please output logical icon name fields for services. Choose from: Utensils, Sparkles, Truck, Hammer, Paintbrush, ShieldCheck, Briefcase, Globe, Users, Heart, Activity, Calendar, Trophy, Zap, Award.
    The output schema requires EXACTLY the following structure:
    {
      "businessName": "...",
      "slogan": "...",
      "heroTitle": "...",
      "heroSubtitle": "...",
      "ctaText": "...",
      "services": [
        {"title": "...", "description": "...", "iconName": "..."},
        {"title": "...", "description": "...", "iconName": "..."},
        {"title": "...", "description": "...", "iconName": "..."}
      ],
      "aboutSection": {
        "title": "...",
        "story": "...",
        "values": ["...", "...", "..."]
      },
      "accentColor": "emerald" | "amber" | "indigo" | "teal"
    }
  `;

  try {
    const ai = getGeminiClient();
    const prompt = `
      Please draft a stellar bespoke website copy.
      Name of Business: "${businessName || '9ii Studio'}"
      Type of Business: "${currentType}"
      Additional Notes/Context: "${businessDesc || 'تميز في الأداء والسرعة والاحترافية والجمال البصري'}"
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["businessName", "slogan", "heroTitle", "heroSubtitle", "ctaText", "services", "aboutSection", "accentColor"],
          properties: {
            businessName: { type: Type.STRING },
            slogan: { type: Type.STRING },
            heroTitle: { type: Type.STRING },
            heroSubtitle: { type: Type.STRING },
            ctaText: { type: Type.STRING },
            services: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ["title", "description", "iconName"],
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  iconName: { type: Type.STRING }
                }
              }
            },
            aboutSection: {
              type: Type.OBJECT,
              required: ["title", "story", "values"],
              properties: {
                title: { type: Type.STRING },
                story: { type: Type.STRING },
                values: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                }
              }
            },
            accentColor: {
              type: Type.STRING,
              description: "Must be one of: emerald, amber, indigo, teal"
            }
          }
        }
      }
    });

    const textResult = response.text ? response.text.trim() : "";
    if (textResult) {
      const data = JSON.parse(textResult);
      return res.json({ success: true, blueprint: data });
    } else {
      throw new Error("Empty Response Text");
    }
  } catch (err: any) {
    console.error("Gemini Generation failed, serving highly polished static fallback:", err.message);
    
    // Serve our premium custom-made static fallback based on chosen business category and language
    const typeKey = fallbackBlueprints[currentType] ? currentType : "services";
    const blueprint = { ...fallbackBlueprints[typeKey][currentLang] };
    if (businessName) {
      blueprint.businessName = businessName;
    }
    
    res.json({ 
      success: true, 
      blueprint, 
      isFallback: true, 
      errorReason: err.message === "GEMINI_API_KEY_MISSING" ? "API key not set yet" : err.message 
    });
  }
});

async function startServer() {
  // Serve static assets in production
  if (process.env.NODE_ENV === "production") {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Keep original Express v4 selector app.get("*")
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    // Mount Vite middleware for seamless dev server environment
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully started and listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
