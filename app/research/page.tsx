import Link from "next/link";
import SiteIcon from "@/components/SiteIcon";

interface Study {
  author: string;
  finding: string;
  methodology: string;
  articleUrl: string;
  isIndirect?: boolean;
}

interface ToolResearch {
  num: string;
  toolTitle: string;
  slug: string;
  accent: boolean;
  studies: Study[];
}

const RESEARCH: ToolResearch[] = [
  {
    num: "01", toolTitle: "חמלה הורית ועצמית", slug: "self-compassion", accent: false,
    studies: [
      {
        author: "Neff, K. D., & Faso, D. J. (2015). Self-compassion and well-being in parents of children with autism. Mindfulness, 6(4), 938–947.",
        finding: "חמלה עצמית הורית נמצאה כגורם מגן מפני שחיקה ודיכאון, ומשפרת משמעותית את רווחת ההורה ואת איכות האינטראקציה עם הילד.",
        methodology: "מחקר חתך (cross-sectional) עם 51 הורים לילדים על הספקטרום האוטיסטי. המשתתפים מילאו שאלוני דיווח עצמי מקוונים, כולל סולם החמלה העצמית (SCS) של Neff, מדד שביעות רצון מהחיים, מדד תקווה, ושאלוני מצב רגשי. נבדקו קשרים סטטיסטיים בין חמלה עצמית לתוצאות רגשיות. אינו מחקר התערבותי.",
        articleUrl: "https://doi.org/10.1007/s12671-014-0359-2",
      },
      {
        author: "Jefferson, F. A., Shires, A., & McAloon, J. (2020). Parenting self-compassion: A systematic review and meta-analysis. Mindfulness, 11(9), 2067–2088.",
        finding: "מטא-אנליזה שמצאה כי תוכניות הורות הכוללות רכיבי חמלה עצמית שיפרו משמעותית את רמת החמלה העצמית ההורית והפחיתו דיכאון, חרדה וסטרס הורי.",
        methodology: "סקירה שיטתית ומטא-אנליזה של 13 מחקרי התערבות שפורסמו בין 2003 ל-2019. החמלה העצמית נמדדה ברובם באמצעות סולם SCS של Neff. גדלי האפקט עבור חמלה עצמית היו בינוניים עד גדולים (g=0.37–0.69). הסקירה ציינה שחלק מהמחקרים היו באיכות מתודולוגית נמוכה וללא קבוצות ביקורת.",
        articleUrl: "https://doi.org/10.1007/s12671-020-01401-x",
      },
      {
        author: "Moreira, H., Carona, C., Silva, N., & Canavarro, M. C. (2019). Self-compassion in parents of children with chronic health conditions. Mindfulness, 10(7), 1350–1362.",
        finding: "חמלה עצמית הורית נמצאה כמנבאת איכות הורות גבוהה יותר והסתגלות פסיכולוגית טובה יותר של ילדים עם מצבים בריאותיים כרוניים.",
        methodology: "מחקר חתך עם 263 הורים (רובם אמהות) לילדים עם מצבים בריאותיים כרוניים (אסתמה, סוכרת, אפילפסיה ועוד) בפורטוגל. שימוש בשאלוני דיווח עצמי כולל SCS, סולם הסתגלות פסיכולוגית, ומדדי הורות. נבדקו מודלים של תיווך (mediation). מחקר תצפיתי ולא ניסויי.",
        articleUrl: "https://link.springer.com/article/10.1007/s12671-019-01091-6",
      },
    ],
  },
  {
    num: "02", toolTitle: "רפלקטיביות הורית", slug: "reflectivity", accent: true,
    studies: [
      {
        author: "Fonagy, P., & Target, M. (1997). Attachment and reflective function: Their role in self-organization. Development and Psychopathology, 9(4), 679–700.",
        finding: "היכולת להבין התנהגות במונחים של רגשות, מחשבות, כוונות וצרכים פנימיים היא בסיס מרכזי להתקשרות בטוחה, לוויסות רגשי ולהתפתחות נפשית תקינה.",
        methodology: "מאמר תיאורטי-אמפירי מרכזי מבוסס על נתוני London Parent–Child Project. המחקר עקב אחרי 100 משפחות מלידה ומדד התקשרות באמצעות AAI ו-Strange Situation. שימוש בסולם Reflective Functioning Scale שפותח על ידי Fonagy ועמיתיו. התקשרות בטוחה של הילד נובאה על ידי יכולת רפלקטיבית של ההורה.",
        articleUrl: "https://doi.org/10.1017/S0954579497001399",
      },
      {
        author: "Menashe-Grinberg, A., Shneor, S., Meiri, G., & Atzaba-Poria, N. (2022). Enhancing parental reflective functioning. Infant Mental Health Journal, 43(3), 388–403.",
        finding: "חיזוק הרפלקטיביות ההורית נמצא קשור לשיפור באיכות האינטראקציה הורה–ילד, לשיפור בוויסות העצמי של הילד ולירידה בבעיות התנהגות — השפעות שנשמרו גם במעקב לאחר שישה חודשים.",
        methodology: "מחקר התערבות ישראלי (לא RCT) עם 60 זוגות הורה-ילד (גילאי 2–6). ההורים השתתפו בתוכנית לחיזוק רפלקטיביות הורית הכוללת מפגשים פרטניים ותצפיות וידאו. נמדדו רפלקטיביות הורית (PRFQ), אינטראקציה הורה-ילד (תצפית), בעיות התנהגות (CBCL), וויסות עצמי. מדידות לפני, אחרי ובמעקב של 6 חודשים.",
        articleUrl: "https://doi.org/10.1002/imhj.21981",
      },
      {
        author: "Menashe-Grinberg, A., & Atzaba-Poria, N. (2023). Differential susceptibility to parental reflective functioning among children with behavior problems. Development and Psychopathology, 35(2), 780–794.",
        finding: "שיפור ברפלקטיביות ההורית נמצא קשור לשיפור באינטראקציית הורה–ילד ולירידה בבעיות התנהגות. ילדים רגישים יותר מבחינה טמפרמנטלית הפיקו תועלת רבה יותר מהשינוי ההורי.",
        methodology: "מחקר ישראלי שבדק את תפקיד הרגישות הטמפרמנטלית כגורם ממתן. שימוש בתצפיות וידאו של אינטראקציות הורה-ילד, שאלוני טמפרמנט (IBQ/CBQ), ומדדי התנהגות. הודגמה רגישות דיפרנציאלית: ילדים רגישים יותר הושפעו יותר — לטוב ולרע — מהרפלקטיביות ההורית.",
        articleUrl: "https://doi.org/10.1017/S0954579422000141",
      },
    ],
  },
  {
    num: "03", toolTitle: "משחקיות", slug: "playfulness", accent: false,
    studies: [
      {
        author: "Shorer, M., Swissa, N., Levavi, P., & Atzaba-Poria, N. (2021). Parental playfulness and children's emotional regulation. Journal of Child and Family Studies, 30, 1570–1580.",
        finding: "משחקיות הורית גבוהה יותר נמצאה קשורה ליכולת טובה יותר של ילדים לווסת רגשות ולרמות נמוכות יותר של חרדה, חלקית דרך ויסות רגשי טוב יותר של ההורה.",
        methodology: "מחקר חתך ישראלי עם 155 משפחות (ילדים בגילאי 4–6). משחקיות הורית נמדדה באמצעות סולם Playfulness Scale, ויסות רגשי של הילד נמדד בשאלון ER, וחרדת הילד נמדדה ב-Spence Preschool Anxiety Scale. נבדקו מודלים של תיווך. מחקר תצפיתי ללא התערבות.",
        articleUrl: "https://www.tandfonline.com/doi/abs/10.1080/03004430.2019.1612385",
      },
      {
        author: "Majdandžić, M., de Vente, W., Bögels, S. M., & van den Boom, D. C. (2014). Is clinically anxious mothers' lack of challenging parenting protective? Journal of Child and Family Studies, 23(3), 416–426.",
        finding: "הורות מאתגרת-משחקית, שבה ההורה מעודד את הילד באופן שובב לצאת מעט מאזור הנוחות, נמצאה קשורה לפחות חרדה חברתית אצל ילדים.",
        methodology: "מחקר אורך הולנדי עם 159 משפחות שנבדקו בשלוש נקודות זמן (גיל הילד: 1, 2.5 ו-4.5 שנים). הורות מאתגרת נמדדה בתצפיות מעבדתיות מקודדות של אינטראקציות הורה-ילד. חרדת הילד נמדדה בשאלון PAS ובתצפיות. כלל אמהות עם וללא אבחנה קלינית של חרדה.",
        articleUrl: "https://scholar.google.com/scholar?q=Majdandzic+de+Vente+Bogels+2014+clinically+anxious+mothers+challenging",
      },
      {
        author: "Ginsburg, K. R. (2007). The importance of play in promoting healthy child development. Pediatrics, 119(1), 182–191.",
        finding: "דוח של האקדמיה האמריקאית לרפואת ילדים מסכם עדויות מחקריות רבות על כך שמשחק חיוני להתפתחות קוגניטיבית, גופנית, חברתית ורגשית, ושמשחק עם הורים מחזק את הקשר.",
        methodology: "דוח קליני (clinical report) של האקדמיה האמריקאית לרפואת ילדים (AAP), מבוסס על סקירה מקיפה של ספרות מחקרית. זהו מסמך מדיניות מקצועית ולא מחקר אמפירי יחיד, אך הוא מסכם עשרות מחקרים. התפרסם ב-Pediatrics, כתב העת הרשמי של ה-AAP.",
        articleUrl: "https://doi.org/10.1542/peds.2006-2697",
        isIndirect: true,
      },
    ],
  },
  {
    num: "04", toolTitle: "מודלינג הורי", slug: "modeling", accent: true,
    studies: [
      {
        author: "Bandura, A., Ross, D., & Ross, S. A. (1961). Transmission of aggression through imitation of aggressive models. Journal of Abnormal and Social Psychology, 63(3), 575–582.",
        finding: "ילדים לומדים התנהגות במידה רבה באמצעות צפייה וחיקוי של מודלים משמעותיים. כאשר הם נחשפים למודל תוקפני, הם נוטים לחקות יותר התנהגויות תוקפניות.",
        methodology: "ניסוי מעבדתי קלאסי (Bobo Doll) עם 72 ילדים בגילאי 3–6 מגן הילדים של אוניברסיטת סטנפורד. חולקו לשלוש קבוצות: חשיפה למודל תוקפני, מודל לא תוקפני, וביקורת. נמדדו התנהגויות חיקוי פיזיות ומילוליות. מחקר ניסויי מבוקר — אבן יסוד בתיאוריית הלמידה החברתית.",
        articleUrl: "https://doi.org/10.1037/h0045925",
      },
      {
        author: "Burstein, M., Ginsburg, G. S., & Tein, J.-Y. (2010). Parental anxiety and child symptomatology: An examination of additive and interactive effects of modeling. Child Psychiatry and Human Development, 41(4), 401–418.",
        finding: "כאשר הורים מדגימים חרדה, מחשבות מאיימות והימנעות, ילדים נוטים להפגין יותר חרדה ויותר רצון להימנע. גם דפוסי התמודדות נלמדים דרך מודלינג הורי.",
        methodology: "מחקר חתך עם 117 ילדים (גילאי 7–12) והוריהם, חלקם הורים עם אבחנה קלינית של הפרעת חרדה. שימוש בשאלונים סטנדרטיים למדידת חרדת ההורה (STAI, BAI), חרדת הילד (SCARED), ומודלינג חרדתי ספציפי. נבדקו מודלים אדיטיביים ואינטראקטיביים.",
        articleUrl: "https://scholar.google.com/scholar?q=Burstein+Ginsburg+Tein+2010+parental+anxiety+child+symptomatology",
      },
      {
        author: "Yao, C. A., & Rhodes, R. E. (2015). Parental correlates in child and adolescent physical activity: A meta-analysis. International Journal of Behavioral Nutrition and Physical Activity, 12, 10.",
        finding: "מטא-אנליזה הראתה שמודלינג הורי הוא אחד המשתנים המשמעותיים הקשורים להתנהגויות בריאות של ילדים, ובפרט לפעילות גופנית. מה שההורה עושה בפועל משפיע יותר ממה שהוא רק אומר.",
        methodology: "מטא-אנליזה שסקרה 115 מחקרים על הקשר בין התנהגויות הורים לפעילות גופנית של ילדים ומתבגרים. המחקרים כללו מדגמים מגוונים ממדינות שונות. נבחנו משתנים כמו מודלינג הורי, תמיכה, עידוד, והעברה לפעילויות. גדלי האפקט חושבו עבור כל משתנה.",
        articleUrl: "https://doi.org/10.1186/s12966-015-0163-y",
      },
    ],
  },
  {
    num: "05", toolTitle: "התאמה לשלב התפתחותי", slug: "developmental-fit", accent: false,
    studies: [
      {
        author: "Piaget, J. (1952). The Origins of Intelligence in Children. International Universities Press.",
        finding: "ילדים עוברים שלבים קוגניטיביים מוגדרים, וכל שלב מאופיין ביכולות חשיבה שונות. התאמת הדרישות ההוריות לשלב ההתפתחותי של הילד היא תנאי הכרחי ללמידה ולצמיחה.",
        methodology: "ספר יסוד בפסיכולוגיה התפתחותית, מבוסס על תצפיות שיטתיות ארוכות שנים. השיטה כללה ראיונות קליניים, מטלות קוגניטיביות, ותצפיות נטורליסטיות. אינו מחקר אמפירי עם מדגם סטנדרטי, אלא עבודה תיאורטית-תצפיתית שהניחה את הבסיס לתחום.",
        articleUrl: "https://scholar.google.com/scholar?q=Piaget+Origins+Intelligence+Children+1952",
      },
      {
        author: "Vygotsky, L. S. (1978). Mind in Society: The Development of Higher Psychological Processes. Harvard University Press.",
        finding: "אזור ההתפתחות הקרובה (ZPD) מתאר את הפער בין מה שהילד יכול לעשות לבד לבין מה שהוא יכול להשיג בתיווך מבוגר. הורות מותאמת התפתחותית פועלת בדיוק באזור הזה.",
        methodology: "ספר יסוד תיאורטי שפורסם לאחר מותו של ויגוצקי, מבוסס על כתביו המקוריים. מציג את תיאוריית ה-ZPD על בסיס תצפיות בילדים בסביבות למידה. טקסט תיאורטי-אמפירי מרכזי, לא מחקר כמותי סטנדרטי, אך אחד הספרים המצוטטים ביותר בחינוך ובפסיכולוגיה.",
        articleUrl: "https://scholar.google.com/scholar?q=Vygotsky+Mind+in+Society+1978",
      },
      {
        author: "Eccles, J. S., Midgley, C., Wigfield, A., Buchanan, C. M., Reuman, D., Flanagan, C., & Mac Iver, D. (1993). Development during adolescence: The impact of stage–environment fit. American Psychologist, 48(2), 90–101.",
        finding: "כאשר יש חוסר התאמה בין הצרכים ההתפתחותיים של הילד לבין הסביבה — כולל דרישות הוריות — נצפית ירידה במוטיבציה, בהערכה עצמית ובמעורבות. התאמה טובה מנבאת הסתגלות חיובית.",
        methodology: "מאמר תיאורטי-אמפירי ב-American Psychologist מבוסס על נתוני מחקר אורך (Michigan Study of Adolescent Life Transitions) שעקב אחרי אלפי מתבגרים. נבחנה ההתאמה בין צרכי המתבגר לסביבתו באמצעות שאלונים, ציונים אקדמיים, ומדדי מוטיבציה. לא מחקר ישיר על הורות.",
        articleUrl: "https://doi.org/10.1037/0003-066X.48.2.90",
        isIndirect: true,
      },
    ],
  },
  {
    num: "06", toolTitle: "נבואה הורית חיובית", slug: "positive-prophecy", accent: true,
    studies: [
      {
        author: "Madon, S., Jussim, L., & Eccles, J. S. (1997). In search of the powerful self-fulfilling prophecy. Journal of Personality and Social Psychology, 72(4), 791–809.",
        finding: "ציפיות הורים — חיוביות ושליליות כאחד — משפיעות על הישגי ילדים בלימודים לאורך זמן. ציפיות שליליות נמצאו כבעלות השפעה חזקה יותר מציפיות חיוביות.",
        methodology: "מחקר אורך (longitudinal) עם כ-90 אמהות ו-98 ילדים מ-Michigan Study of Adolescent Life Transitions. נמדדו ציפיות הוריות למתמטיקה בכיתה ו', והישגים נמדדו שנה לאחר מכן. שימוש ברגרסיה מרובה. פורסם ב-JPSP — כתב עת מוביל בפסיכולוגיה חברתית.",
        articleUrl: "https://doi.org/10.1037/0022-3514.72.4.791",
      },
      {
        author: "Dweck, C. S. (2006). Mindset: The New Psychology of Success. Random House.",
        finding: "עידוד 'דפוס חשיבה מתפתח' (Growth Mindset) בהורות משפר את החוסן של הילד מול כישלונות ומגביר מוטיבציה פנימית ללמידה.",
        methodology: "ספר המסכם עשרות שנות מחקר של Dweck ועמיתיה באוניברסיטאות קולומביה וסטנפורד. מבוסס על ניסויים מבוקרים, מחקרי אורך ומחקרי שדה עם ילדים, מתבגרים וסטודנטים. אינו מחקר יחיד אלא סיכום תוכנית מחקר רחבה. המחקרים המקוריים פורסמו בכתבי עת מובילים.",
        articleUrl: "https://scholar.google.com/scholar?q=Dweck+Mindset+New+Psychology+Success+2006",
      },
      {
        author: "Willard, J., Madon, S., Guyll, M., Scherr, K. C., & Buller, A. A. (2008). Self-fulfilling prophecy effects of mothers' expectations on children's alcohol use. Journal of Personality and Social Psychology, 95(1), 145–163.",
        finding: "ציפיות הוריות שליליות (כגון ציפיה שהילד ישתמש באלכוהול) נבאו שימוש מוגבר באלכוהול בקרב מתבגרים, גם לאחר בקרה על שימוש קודם. תיווך הורי חיובי יכול לשנות מגמות.",
        methodology: "מחקר אורך עם 505 משפחות ממדגם קהילתי באיווה (Iowa Youth and Families Project). נמדדו ציפיות אמהות לשימוש באלכוהול של ילדיהן ושימוש בפועל לאורך שנים. שימוש בשאלונים סטנדרטיים וברגרסיה היררכית. פורסם ב-JPSP.",
        articleUrl: "https://scholar.google.com/scholar?q=Willard+Madon+Guyll+2008+self-fulfilling+prophecy+mothers+expectations",
      },
    ],
  },
  {
    num: "07", toolTitle: "ממאבק להסכמה משותפת", slug: "cooperation", accent: false,
    studies: [
      {
        author: "Weinblatt, U., & Omer, H. (2008). Nonviolent resistance: A treatment for parents of children with acute behavior problems. Journal of Marital and Family Therapy, 34(1), 75–92.",
        finding: "הורים שעברו הכשרה בהתנגדות לא-אלימה (NVR) הראו ירידה בחוסר אונים הורי ובהתנהגויות אסקלטוריות, ועלייה בתמיכה חברתית. התנהגויות שליליות של הילדים ירדו משמעותית.",
        methodology: "מחקר RCT ישראלי עם 73 הורים (41 משפחות) שחולקו אקראית לקבוצת טיפול (NVR) ורשימת המתנה. מדידות לפני הטיפול, אחריו ובמעקב של חודש. שאלונים לחוסר אונים הורי, אסקלציה, תמיכה חברתית, ו-CBCL לבעיות התנהגות. פורסם ב-JMFT.",
        articleUrl: "https://doi.org/10.1111/j.1752-0606.2008.00054.x",
      },
      {
        author: "Omer, H., & Lebowitz, E. R. (2016). Nonviolent resistance: Helping caregivers reduce problematic behaviors in children and adolescents. Journal of Marital and Family Therapy, 42(4), 688–700.",
        finding: "סקירה של עקרונות ה-NVR ומחקרים על יישומו מראה שהגישה מפחיתה התנהגויות אלימות, מחזקת נוכחות הורית, ומתאימה למגוון סביבות כולל הורים, אומנה ומסגרות חינוכיות.",
        methodology: "מאמר סקירה (review) שנכתב על ידי מפתח הגישה, פרופ' חיים עומר (אוניברסיטת תל אביב), ו-Lebowitz מ-Yale. מסכם ממצאים ממספר מחקרים על NVR בהקשרים שונים — הורים, אומנה, בתי חולים פסיכיאטריים. אינו מחקר אמפירי יחיד. פורסם ב-JMFT.",
        articleUrl: "https://doi.org/10.1111/jmft.12168",
      },
      {
        author: "Schorr-Sapir, I., Gershy, N., Apter, A., & Omer, H. (2022). Parent training in non-violent resistance for children with ADHD: A controlled outcome study. European Child & Adolescent Psychiatry, 31(6), 929–938.",
        finding: "הכשרת הורים בגישת NVR הובילה לשיפור בתפקוד ההורי ולירידה בבעיות התנהגות אצל ילדים עם ADHD, כולל שיפור בוויסות רגשי.",
        methodology: "מחקר התערבות ישראלי (controlled trial) עם 60 משפחות לילדים עם ADHD (גילאי 6–12). קבוצת טיפול — הכשרה ב-NVR (12 מפגשים), קבוצת ביקורת — רשימת המתנה. נמדדו חוסר אונים הורי, אסקלציה, ויסות רגשי (DERS), בעיות התנהגות (CBCL/Conners). פורסם ב-European Child & Adolescent Psychiatry.",
        articleUrl: "https://doi.org/10.1007/s00787-021-01723-8",
      },
    ],
  },
  {
    num: "08", toolTitle: "חוסן רגשי", slug: "resilience", accent: true,
    studies: [
      {
        author: 'Lahad, M., Shacham, M., & Ayalon, O. (Eds.) (2013). The "BASIC Ph" Model of Coping and Resiliency: Theory, Research and Cross-Cultural Application. Jessica Kingsley Publishers.',
        finding: "מודל BASIC Ph מתאר שישה ערוצי התמודדות (אמונה, רגש, חברה, דמיון, קוגניציה, גוף). שימוש רב-ערוצי במשאבי התמודדות מגביר את היכולת להסתגל למצבי דחק מתמשכים.",
        methodology: 'ספר עריכה מרכזי המציג את מודל BASIC Ph שפותח על ידי פרופ\' מולי להד ממרכז החוסן הקהילתי (CSPC) ומכללת תל-חי, ישראל. כולל פרקי מחקר ויישום ממדינות שונות (ישראל, קרואטיה, סרי לנקה). השיטות כוללות "סיפור שישה חלקים" (6PSM), שאלונים, וניתוח מקרים. אוסף תיאוריה ומחקר.',
        articleUrl: "https://doi.org/10.3233/978-1-61499-490-9-71",
      },
      {
        author: "Lahad, M. (2017). From victim to victor: The development of the BASIC PH model of coping and resiliency. Traumatology, 23(1), 27–34.",
        finding: "מודל BASIC Ph מאפשר לזהות את ערוצי ההתמודדות המועדפים של כל אדם ולחזק אותם. המודל הוכח כיעיל בהתערבות עם ילדים ומשפחות לאחר אירועי חירום.",
        methodology: "מאמר ב-Traumatology (כתב העת של ה-APA לטראומה) המציג את התפתחות המודל לאורך 30 שנה. מבוסס על ניסיון קליני ומחקרי עם אוכלוסיות תחת לחץ בישראל (שדרות, קריית שמונה) ובמדינות נוספות. כולל נתונים מתצפיות, ראיונות ושאלונים. פורסם על ידי APA.",
        articleUrl: "https://doi.org/10.1037/trm0000072",
      },
      {
        author: "Masten, A. S. (2001). Ordinary magic: Resilience processes in development. American Psychologist, 56(3), 227–238.",
        finding: "חוסן אינו תכונה נדירה אלא תוצאה של מערכות הסתגלות בסיסיות — בראשן קשר הורי חם ותומך. ילדים עם לפחות מערכת יחסים משמעותית אחת עם מבוגר מגלים חוסן גם בתנאים קשים.",
        methodology: "מאמר סקירה מרכזי ב-American Psychologist המסכם עשרות שנות מחקר על חוסן בילדים ומתבגרים, כולל מחקרי אורך קלאסיים (Project Competence). סוקר מחקרים על ילדים בסיכון (עוני, מלחמה, מחלת נפש הורית) ומזהה גורמי הגנה עקביים.",
        articleUrl: "https://doi.org/10.1037/0003-066X.56.3.227",
      },
    ],
  },
  {
    num: "09", toolTitle: "זמן קסם", slug: "magic-time", accent: false,
    studies: [
      {
        author: "Gottman, J. M., Katz, L. F., & Hooven, C. (1996). Parental meta-emotion philosophy and the emotional life of families. Journal of Family Psychology, 10(3), 243–268.",
        finding: "\"אימון רגשי\" הורי — המשלב מודעות לרגשות הילד, קבלה ותיווך — מנבא הצלחה לימודית וחברתית של הילד ומפחית בעיות התנהגות.",
        methodology: "מחקר אורך (longitudinal) שעקב אחרי 56 משפחות לאורך שלוש שנים. ההורים עברו ראיון Meta-Emotion מקודד ותצפיות מעבדתיות של אינטראקציות הורה-ילד. הילדים (גיל התחלתי ~5) נמדדו בתפקוד אקדמי, חברתי ובריאותי. שימוש ב-path analysis. פורסם ב-Journal of Family Psychology (APA).",
        articleUrl: "https://doi.org/10.1037/0893-3200.10.3.243",
      },
      {
        author: "Katz, L. F., & Windecker-Nelson, B. (2004). Parental meta-emotion philosophy in families with conduct-problem children. Journal of Abnormal Child Psychology, 32(4), 385–398.",
        finding: "אמהות של ילדים עם בעיות התנהגות שהשתמשו בגישת אימון רגשי הראו תוצאות חיוביות — ילדיהן הפגינו יותר אינטראקציות חיוביות עם בני גיל.",
        methodology: "מחקר עם 62 ילדים (גילאי 4–8): 32 עם בעיות התנהגות ו-30 קבוצת ביקורת. ההורים עברו ראיון Meta-Emotion, והילדים נצפו באינטראקציות עם בני גיל במעבדה. נמדדו גם בעיות התנהגות (CBCL). מחקר תצפיתי-השוואתי. פורסם ב-Journal of Abnormal Child Psychology.",
        articleUrl: "https://doi.org/10.1023/B:JACP.0000030292.36168.30",
      },
      {
        author: 'Havighurst, S. S., Wilson, K. R., Harley, A. E., Kehoe, C., Efron, D., & Prior, M. R. (2013). "Tuning in to Kids": Reducing young children\'s behavior problems using an emotion coaching parenting program. Child Psychiatry and Human Development, 44(2), 247–264.',
        finding: 'תוכנית "Tuning in to Kids" שמבוססת על אימון רגשי הורי הובילה לירידה בבעיות התנהגות של ילדים, לשיפור בוויסות רגשי, ולעלייה ביכולת ההורים לעשות אימון רגשי.',
        methodology: "מחקר RCT אוסטרלי עם 216 משפחות לילדים בגילאי 4–6 (חלקם עם בעיות התנהגות). הוקצו אקראית לתוכנית (6 מפגשים קבוצתיים) או לקבוצת ביקורת. נמדדו סוציאליזציה רגשית (MESS), בעיות התנהגות (CBCL), ויסות רגשי, ומיומנויות רגשיות. מדידות לפני, אחרי ובמעקב 6 חודשים.",
        articleUrl: "https://doi.org/10.1007/s10578-012-0322-1",
      },
    ],
  },
  {
    num: "10", toolTitle: "צמיחה מחוזקות", slug: "growth-from-strengths", accent: true,
    studies: [
      {
        author: "Seligman, M. E. P., & Csikszentmihalyi, M. (2000). Positive psychology: An introduction. American Psychologist, 55(1), 5–14.",
        finding: "הפסיכולוגיה החיובית מציעה שהתמקדות בחוזקות, בסיפוק ובמשמעות — ולא רק בתיקון בעיות — היא הדרך לבנות רווחה נפשית, חוסן ותפקוד מיטבי.",
        methodology: "מאמר פתיחה לגיליון מיוחד של American Psychologist על פסיכולוגיה חיובית. מאמר תיאורטי-תוכניתי שהגדיר את התחום, לא מחקר אמפירי יחיד. נכתב על ידי שני מייסדי התחום (Seligman מאוניברסיטת פנסילבניה ו-Csikszentmihalyi). אחד המאמרים המצוטטים ביותר בפסיכולוגיה.",
        articleUrl: "https://doi.org/10.1037/0003-066X.55.1.5",
      },
      {
        author: "Peterson, C., & Seligman, M. E. P. (2004). Character Strengths and Virtues: A Handbook and Classification. Oxford University Press.",
        finding: "זיהוי ומינוף חוזקות אופי — כמו סקרנות, אדיבות ואומץ — הם דרך יעילה לצמיחה אישית ומשפחתית. חוזקות אופי ניתנות לפיתוח ולחיזוק.",
        methodology: "ספר מדעי מקיף (800 עמודים) שפותח לאורך שלוש שנים על ידי 55 חוקרים בינלאומיים. מציג 24 חוזקות אופי מאורגנות ב-6 סגולות (virtues). מבוסס על סקירת ספרות ענפה, מחקרי תוקף ואמינות של שאלון VIA, וניתוח בין-תרבותי. מיפוי תיאורטי-אמפירי מקיף.",
        articleUrl: "https://www.viacharacter.org/character-strengths",
      },
      {
        author: "Park, N., & Peterson, C. (2006). Moral competence and character strengths among adolescents. Journal of Adolescence, 29(6), 891–909.",
        finding: "חוזקות אופי כמו תקווה, אדיבות, חברותיות, סקרנות והנהגה נמצאו כמנבאות שביעות רצון מהחיים ותפקוד חברתי חיובי אצל מתבגרים.",
        methodology: "מחקר חתך עם 680 מתבגרים אמריקאים (גילאי 12–18) שמילאו את שאלון VIA-Youth. נבדקו הקשרים בין חוזקות אופי למדדי רווחה (שביעות רצון מהחיים) ומיומנויות חברתיות. שימוש ברגרסיה ובניתוח מתאמים. פורסם ב-Journal of Adolescence.",
        articleUrl: "https://doi.org/10.1016/j.adolescence.2006.04.011",
      },
    ],
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="sec-hero" style={{ background:"linear-gradient(150deg, #E8F2F0 0%, #F9F7F2 60%)", textAlign:"center", paddingBottom:"48px" }}>
        <span className="tag-sage" style={{ marginBottom:"20px", display:"inline-block" }}>ביסוס מחקרי</span>
        <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(36px,5vw,60px)", fontWeight:300, fontStyle:"italic", color:"var(--charcoal)", margin:"0 0 16px" }}>
          המחקר מאחורי ארגז הכלים
        </h1>
        <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", maxWidth:"680px", margin:"0 auto 20px", lineHeight:1.82, fontFamily:"var(--font-hebrew)" }}>
          ארגז הכלים ההורי מבוסס על עשרות שנים של מחקר בפסיכולוגיה התפתחותית, פסיכולוגיה חיובית, תיאוריית ההתקשרות ומדעי המוח. כל כלי נשען על ממצאים אמפיריים שהוכחו שוב ושוב — שהקשר ההורי הוא הגורם המשפיע ביותר על התפתחות הילד.
        </p>
        <p style={{ fontSize:"15px", color:"var(--charcoal-muted)", maxWidth:"600px", margin:"0 auto", lineHeight:1.82, fontFamily:"var(--font-hebrew)" }}>
          להלן רשימת מחקרים נבחרים לכל כלי, עם הממצא המרכזי, פירוט מתודולוגי, וקישור למאמר עצמו.
        </p>
      </section>

      {/* Research by tool */}
      <section className="sec-std" style={{ background:"var(--paper)", paddingTop:"48px" }}>
        <div style={{ maxWidth:"860px", margin:"0 auto" }}>
          {RESEARCH.map(({ num, toolTitle, slug, accent, studies }) => (
            <div key={num} id={`tool-${num}`} style={{ marginBottom:"56px", scrollMarginTop:"100px" }}>
              {/* Tool header */}
              <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"20px", flexWrap:"wrap" }}>
                <span style={{
                  display:"inline-flex", alignItems:"center", justifyContent:"center",
                  width:"36px", height:"36px", borderRadius:"50%",
                  background: accent ? "var(--terra-faint)" : "var(--sage-faint)",
                  color: accent ? "var(--terra-dark)" : "var(--sage-dark)",
                  fontFamily:"var(--font-serif)", fontSize:"15px", fontWeight:700,
                  border: `1.5px solid ${accent ? "rgba(196,114,122,0.3)" : "rgba(42,122,110,0.25)"}`,
                  flexShrink:0,
                }}>{num}</span>
                <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(20px,3vw,28px)", color:"var(--charcoal)", margin:0 }}>
                  {toolTitle}
                </h2>
                <Link href={`/model#tool-${num}`} style={{
                  fontSize:"13px", color: accent ? "var(--terra-dark)" : "var(--sage-dark)",
                  fontFamily:"var(--font-hebrew)", textDecoration:"none", fontWeight:600,
                  marginRight:"auto",
                }}>
                  לכלי ←
                </Link>
              </div>

              {/* Studies */}
              <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
                {studies.map((s, i) => (
                  <div key={i} style={{
                    background:"#FFFFFF", borderRadius:"var(--radius-card)", padding:"22px 24px",
                    border:"1px solid var(--border)", boxShadow:"var(--shadow-card)",
                    borderRight: `3px solid ${accent ? "var(--terra)" : "var(--sage)"}`,
                  }}>
                    {/* Indirect badge */}
                    {s.isIndirect && (
                      <span style={{
                        display:"inline-block", fontSize:"11px", fontFamily:"var(--font-hebrew)",
                        background: accent ? "var(--terra-faint)" : "var(--sage-faint)",
                        color: accent ? "var(--terra-dark)" : "var(--sage-dark)",
                        padding:"3px 10px", borderRadius:"var(--radius-pill)", marginBottom:"10px",
                        fontWeight:600,
                      }}>
                        מחקר על פרקטיקה קרובה
                      </span>
                    )}

                    {/* Citation */}
                    <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"12.5px", color:"var(--charcoal-muted)", margin:"0 0 10px", lineHeight:1.6, direction:"ltr", textAlign:"left" }}>
                      {s.author}
                    </p>

                    {/* Key finding */}
                    <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"15px", color:"var(--charcoal-soft)", margin:"0 0 14px", lineHeight:1.82, display:"flex", gap:"8px", alignItems:"flex-start" }}>
                      <span style={{ flexShrink:0, marginTop:"3px", display:"flex" }}><SiteIcon name="dot" size={12} /></span>
                      <span><strong style={{ color:"var(--charcoal)" }}>ממצא עיקרי:</strong> {s.finding}</span>
                    </p>

                    {/* Action buttons row */}
                    <div style={{ display:"flex", gap:"10px", flexWrap:"wrap", marginTop:"4px" }}>
                      {/* Methodology accordion */}
                      <details className="research-details">
                        <summary style={{
                          display:"inline-flex", alignItems:"center", gap:"6px",
                          fontSize:"13px", fontFamily:"var(--font-hebrew)", fontWeight:600,
                          color: accent ? "var(--terra-dark)" : "var(--sage-dark)",
                          cursor:"pointer", padding:"7px 14px", borderRadius:"var(--radius-pill)",
                          border: `1px solid ${accent ? "rgba(196,114,122,0.3)" : "rgba(42,122,110,0.25)"}`,
                          background: accent ? "var(--terra-faint)" : "var(--sage-faint)",
                          listStyle:"none",
                        }}>
                          <SiteIcon name="info" size={14} />
                          מתודולוגיה
                        </summary>
                        <div style={{
                          marginTop:"12px", padding:"14px 16px",
                          background:"var(--linen)", borderRadius:"var(--radius-card)",
                          fontSize:"14px", lineHeight:1.82, color:"var(--charcoal-soft)",
                          fontFamily:"var(--font-hebrew)",
                        }}>
                          {s.methodology}
                        </div>
                      </details>

                      {/* Article link */}
                      <a
                        href={s.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display:"inline-flex", alignItems:"center", gap:"6px",
                          fontSize:"13px", fontFamily:"var(--font-hebrew)", fontWeight:600,
                          color: accent ? "var(--terra-dark)" : "var(--sage-dark)",
                          padding:"7px 14px", borderRadius:"var(--radius-pill)",
                          border: `1px solid ${accent ? "rgba(196,114,122,0.3)" : "rgba(42,122,110,0.25)"}`,
                          textDecoration:"none",
                          background:"transparent",
                        }}
                      >
                        <SiteIcon name="external-link" size={14} />
                        לקריאת המאמר עצמו
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sec-md" style={{ background:"var(--sage)", textAlign:"center" }}>
        <div style={{ maxWidth:"600px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(24px,3vw,36px)", color:"#F9F7F2", marginBottom:"16px", fontStyle:"italic", fontWeight:300 }}>
            רוצים ליישם את המחקר בחיים שלכם?
          </h2>
          <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"16px", color:"rgba(249,247,242,0.8)", marginBottom:"32px", lineHeight:1.82 }}>
            ארגז הכלים ההורי מתרגם את הממצאים האלה לכלים מעשיים — ומאיה מלווה אתכם בתהליך.
          </p>
          <div style={{ display:"flex", gap:"14px", justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/model" style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"#F9F7F2", color:"var(--sage-dark)", padding:"13px 28px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"14px", textDecoration:"none" }}>
              לארגז הכלים
            </Link>
            <a href="https://wa.me/972523930681?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%90%D7%99%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%99" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"var(--terra)", color:"white", padding:"13px 28px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"14px", textDecoration:"none" }}>
              <SiteIcon name="dot" size={14} /> שיחת ייעוץ חינם
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
