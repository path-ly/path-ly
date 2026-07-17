"use client";
import { useState, useMemo } from "react";
import SiteIcon from "@/components/SiteIcon";

type Category = "all" | "professional" | "inspirational";
type ContentType = "song" | "poem" | "article" | "book" | "research" | "video";

interface LibraryItem {
  id: number;
  type: ContentType;
  category: "professional" | "inspirational";
  title: string;
  creator: string;
  tag: string;
  emoji: string;
  excerpt: string;
  accentColor: "sage" | "terra";
  featured?: boolean;
  isMine?: boolean;
  fullContent?: string;
  link?: string;
  linkLabel?: string;
}

const ITEMS: LibraryItem[] = [
  // ── Maya's own poems ──────────────────────────────────────────────────────
  {
    id:1, type:"poem", category:"inspirational",
    title:"סיזיפית", creator:"מאיה פלטי",
    tag:"הורות אמיתית", emoji:"sunrise",
    excerpt:"ממחר בבוקר אני אהיה אמא טובה, אעטוף אותם כל היום בביטוי גאווה ואהבה... שיר על המחזוריות, ההבטחות, והחמלה שאנחנו כל כך זקוקות לה.",
    accentColor:"terra", featured:true, isMine:true,
    fullContent:`ממחר בבוקר אני אהיה אמא טובה,
אעטוף אותם כל היום בביטוי גאווה ואהבה.
אתפעל, אכיל ואנצור
ואשב לצידם כשיפלו לעוד בור.

אעיר אותם בחיבוק, ליטוף ונשיקה,
וכשהם יתמהמהו אתבונן בם בשתיקה.
לצד הכריך אשלח פתק מעודד עם מדבקה,
שיזכיר להם שבתום הקרבות, אני שם מחכה.

לאורך כל היום אהיה סבלנית ומבינה,
אאסוף אותם מהמסגרת מלאה בכוונה.
וכשיצעקו וירעישו בעת הנהיגה,
זה יראה לי טבעי ויעלים כל דאגה.

כשאצא מהרכב עמוסת חפצים,
אומר "אני מקווה שהיה לכם יום מקסים",
וכשישאלו עוד בכניסה "אמא מה יש לאכול?"
אחייך בהכרת תודה, "כי רק כך אפשר לגדול".

כשהם יתחילו לריב, לצעוק, לילל ולהקניט,
אסתקרן ואתעניין כי אין עוד כזה תקליט...
וכשאזכיר בפעם המיליון, את הנעליים להכניס לארון,
אסתכל להם ישר בעיניים ואשמור על נועם הטון.

אתבטא בשקט ובמבט חומל ואגיד בליבי רק "הגומל".
אתפעל ואתרגש מהציור מהגן ואתלה אותו מיד במרכז הקיר הלבן.

אקדיש לכל אחד תשומת לב מלאה,
ואתייחס בהומור לביטויי הקנאה.
אשתדל לומר הרבה פחות "לא" מ"כן"
וכשיצרחו, יבעטו, ישתוללו, אנשום ואתבונן.

לא אברח אל משימות הניקיון והכביסה,
במקומם, אתיישב לשחק על הרצפה המכוסה....
אזכיר לעצמי (ולא להם), ששיעורי הבית הם רק שלהם
לא אקח את תפקיד השעון הדובר,
לא אזרז ולא אמהר.

לא אגלגל את עיני כשאשאל "למה?" בפעם הטריליון,
ובמקום זאת, אשאל: "אולי לך יש רעיון?".
לא אתקן ואעיר על אופן ישיבתם, אכילתם, התבטאותם...
אצחק צחוק מתגלגל, ארעיש, אשתולל וארקוד איתם.

לא אצעק,
לא אבקר,
לא אהדוף או אנזוף,
לא אשווה, לא אשלוט
ולא "אתן בראש".

בעת ההשכבה אתכרבל לצידם ואחרי הסיפור אשוחח איתם.
ואמנה בפניהם איים של שלווה והצלחה,
את כל המתנות שקיבלתי מהם כשכל כך הייתי צריכה,
אשתף בזיכרונות ילדותי, אלטף את גבם וארגיע אותי.

כי אחר כך כשאשכיב את עצמי לישון, שוב אחוש את אותו הגוש בגרון
ושוב אתפלל למחילה וסליחה על כל המקומות ש"לא הייתי צריכה".

ושוב אזכיר לעצמי שאנחנו לומדים כל יום יחדיו,
שהכי חשוב זה חמלה ולהיות רכה איתי עכשיו.`,
  },
  {
    id:3, type:"poem", category:"inspirational",
    title:"העיקר הכוונה?", creator:"מאיה פלטי",
    tag:"ילדות ואמהות", emoji:"flower",
    excerpt:"פעם, לא כל כך מזמן, כשהייתי קטנה, את היית אלוהים ואני המאמינה... שיר על הבת שנהיית אמא, ועל מה שנשאר בדרך.",
    accentColor:"terra", isMine:true,
    fullContent:`העיקר הכוונה?

פעם, לא כל כך מזמן, כשהייתי קטנה,
את היית אלוהים ואני "המאמינה".
כל כך חיכיתי לכל שן שתיפול כבר
ושמרתי עליה מכל משמר עד להגיעה אל מתחת לכר.

וכשאחת מהן בטעות לי אבדה,
כתבנו יחד מכתב לפיה, שתתחשב ותהיה נחמדה.
כל שישי לצידך בהדלקת הנרות,
לבשתי לבן, עצמתי עיניים ושיננתי ברכות.

וסמכתי עלייך "שהכל לטובה" גם כשזה עושה אותי עצובה.

חלמתי בהקיץ, לא מיהרתי לגדול,
ורציתי לפגוש חד קרן יותר מהכל.
נשפתי על המוני ריסים,
כי אמרת לי שכל הזמן קורים סביבנו ניסים...

עכשיו את לא כאן ואני אמורה...
להיות בטוחה, אבל מרגישה חסרה.
כי בעודי מטמינה מתנה,
מתחת לכר של ילדתי הקטנה.

משתוקקת אני לאותו בטחון,
שזהו אכן הדבר הנכון ושאולי את עוד תחזרי,
ותאמרי לי שוב ש:"הכל אפשרי".`,
  },
  {
    id:4, type:"poem", category:"inspirational",
    title:"הגורו של ארוחות הערב", creator:"מאיה פלטי",
    tag:"הומור ואמת", emoji:"dot",
    excerpt:"בפנטזיה היא הגורו של ארוחות הערב המשפחתיות, מזריקה לכל ביס ותבשיל ים של משמעויות... ארוחת ערב כמטפורה לכל הפער בין הפנטזיה ההורית למציאות.",
    accentColor:"sage", isMine:true,
    fullContent:`בפנטזיה היא הגורו של ארוחות הערב המשפחתיות
מזריקה לכל ביס ותבשיל ים של משמעויות
דורשת מכולם לשבת "יפה, כמו שצריך"
מתבלת בחוקים וערמות של טקסים,
ומרגישה בין השורות שכולם מפוספסים.
אבל היא לא מסתפקת בירקות וחביתה
למרות שבילדותה, זה כל מה שרצתה.
חושקת במשפחה "אמריקאית" מהסרטים,
כולם יושבים מחוייכים והיחסים משורטטים.

וככה כל יום מחמש וחצי מתחילה קלחת
איכשהו בסוף היא תמיד צורחת:
"נו, כנסו כבר למקלחת"
ובנתיים מבשלת ארוחת 5 מנות,
כי לכל אחד מגבלות ורצונות.
הבינונית צמחונית, הקטן בררן
וכל דבר נוזלי מוביל לבלאגן.
הילדים חולמים על פויקה במדורה,
עם מרשמלו בטעם ענפים
או סתם פירות וכמה חטיפים.
משהו בפיתה בידיים לנגוס.
או לאכול מול מסך, תוך כדי תנועה ולבלוס.

והיא עצבנית ועייפה ולא נותר כוח לשאול:
איך היה לך היום? ומה עזר לך לגדול?
מה היה לכם משמח ומה פחות?
ואיך הצלחת להפסיק לבכות?
אז היא נוזפת, נאנחת ואז שוב מרצה
"תפסיק לאכול בידיים ותגמור את הביצה".
ובפינת השולחן יש אוסף סמלים בערמה
שכמוהה, לא מצאה את מקומה:
חתיכה מפאזל, סיכת ראש, ציור לא גמור,
גרב אחד ובקבוק שבור
ועוד משהו מפלסטיק עם מבנה לא ברור.
וכל הלחץ של השעה וחצי האחרונות, מתנקז ל7 דקות מתונות.
לא 7 דקות בגן עדן, גם לא בגיהנום,
לא אמת, לא חובה ועוד לא נגמר היום.
פשוט יושבים רגע יחד
וגם אם הם לא מחייכים,
יש אותה ואותו ושלושה ילדים נינוחים.

וכשהיא סוף סוף נושמת, היא יכולה לשים לב,
שהקטן כבר מצליח לבד את הכיסא לקרב
ותוך כדי לחבר משפט שלם "אמא, אני לא רעב".
ובדיוק כשהיא שוקלת לשחרר צרחה,
הגדולה אומרת: "אמא, אני אפנה, את לא צריכה".
ועיניו של האיש שמעבר לשולחן, מחייכות באומרן:
אשת חיל מי ימצא`,
  },
  {
    id:5, type:"poem", category:"inspirational",
    title:"המפתח לארגז הכלים — אומנות המינון ההורי", creator:"מאיה פלטי",
    tag:"מסגרת", emoji:"dot",
    excerpt:"הכל עניין של מינונים. הורות היא התפקיד הקשה ביותר שרובנו בחרנו לעצמנו — הורות טובה דיה היא משימה מורכבת שרובנו מצליחים לעמוד בה.",
    accentColor:"sage", featured:true, isMine:true,
    fullContent:`הכל עניין של מינונים. הורות היא התפקיד הקשה ביותר שרובנו בחרנו לעצמנו — הורות טובה דיה היא משימה מורכבת מאוד שרובנו מצליחים לעמוד בה. ההורות היא עבודה של דיוקים. בכל תחום עלינו למצוא את המינון המדויק שמתאים גם לנו וגם לילד שלנו.

עלינו להיות רכים, אך גם סמכותיים, להיות אחראים אך גם לבטוח ולתת אמון, להאיר את הדרך ולכוון אך גם לאפשר חופש וביטוי עצמי, עלינו לעודד, אך לא לבקר, לחזק אך לא לסכן, להחזיק את כל הקצוות של הטוב ועדיין ללמד אנושיות.

ללמד שאסור לנו להיות גאים עד כדי שאיפה למושלמות, שעלינו ללמד את הילד שבנו ואת הילד שלנו לסלוח, לקבל, לחמול, לשמור על מידת הצניעות שלא הכל הוא בכוחותיי.

שעלינו לבטוח בדרך ובטוב ולשאוף אליו תמיד, אך להיות טובים אלינו בציפיותינו ושיפוטנו את עצמנו.

על לנו אף פעם לערער על היותנו ההורים הכי טובים שאנחנו מצליחים להיות ועל לנו לעולם להפסיק לשאוף להיות טובים יותר.`,
  },
  // ── Professional – Maya's own tools ──────────────────────────────────────
  {
    id:13, type:"article", category:"professional",
    title:"חמלה עצמית והורית — כלי 1", creator:"מאיה פלטי",
    tag:"כלי מרכזי", emoji:"heart",
    excerpt:"90-95% מהאוכלוסיה מנהלים דיבור פנימי יומיומי. הקול שאנחנו מדברים בו אל עצמנו — הוא הקול שהילדים שלנו יפנימו. לכן חמלה עצמית היא לא פינוק — היא תשתית.",
    accentColor:"terra", featured:true, isMine:true,
    link:"/model#tool-01",
  },
  {
    id:14, type:"article", category:"professional",
    title:"רפלקטיביות הורית — כלי 2", creator:"מאיה פלטי",
    tag:"כלי מרכזי", emoji:"dot",
    excerpt:"אנחנו מגיבים על אוטומט — כפתור נלחץ והתגובה מתרחשת. הרפלקטיביות היא ארבע שאלות פשוטות: מה אני חושב? מה אני מרגיש? מה האחר חושב? מה הוא מרגיש?",
    accentColor:"sage", isMine:true,
    link:"/model#tool-02",
  },
  {
    id:15, type:"article", category:"professional",
    title:"משחקיות — כלי 3", creator:"מאיה פלטי",
    tag:"יישום מידי", emoji:"dice",
    excerpt:"משחקיות היא לא פעילות מיוחדת — היא תנוחת נפש. כניסה דרך החלון כשדלת ההתנגדות נסגרת. לנטרל מאבקי כוח, להפחית התנגדות, ולהפוך אינטראקציות יומיומיות לחיבור.",
    accentColor:"terra", isMine:true,
    link:"/model#tool-03",
  },
  {
    id:16, type:"article", category:"professional",
    title:"ממאבק לשיתוף פעולה — כלי 7", creator:"מאיה פלטי",
    tag:"מניעה ותיקון", emoji:"handshake",
    excerpt:"רוב העבודה נעשית בין האירועים, לא בתוכם. מניעה, עצירת הסלמה ותיקון — שלושת השלבים שהורים מדווחים שמשנים הכל. המטרה היא לא לנצח — אלא ללכת יחד.",
    accentColor:"sage", featured:true, isMine:true,
    link:"/model#tool-07",
  },
  {
    id:17, type:"article", category:"professional",
    title:"זמן קסם — כלי 9", creator:"מאיה פלטי",
    tag:"קשר ואמון", emoji:"hourglass",
    excerpt:"5–20 דקות ביום, קבועות, בטוחות, ולא מוטלות בספק. הילד בוחר. ההורה נוכח. זהו הבסיס לסמכות שמבוססת על כבוד שהורווח — לא על כוח.",
    accentColor:"terra", isMine:true,
    link:"/model#tool-09",
  },
  // ── Professional – videos & research ──────────────────────────────────────
  {
    id:18, type:"video" as ContentType, category:"professional",
    title:"כל הסרטונים מארגז הכלים", creator:"מאיה פלטי",
    tag:"ארגז הכלים", emoji:"video",
    excerpt:"אוסף כל הסרטונים הרלוונטיים ל-10 הכלים בארגז הכלים ההורי — טיקטוק, יוטיוב ועוד.",
    accentColor:"terra", featured:true, isMine:true,
    link:"/model",
  },
  {
    id:21, type:"research", category:"professional",
    title:"ACE Study", creator:"CDC & Kaiser Permanente",
    tag:"טראומה", emoji:"clipboard",
    excerpt:"מחקר ה-ACE על חוויות ילדות שליליות — הבסיס המדעי לחשיבות הורות בריאה.",
    accentColor:"terra",
    link:"https://www.cdc.gov/aces/about/index.html",
  },
  {
    id:22, type:"article", category:"professional",
    title:"The Still Face Experiment", creator:"Edward Tronick",
    tag:"התקשרות", emoji:"video",
    excerpt:"ניסוי הפנים הדוממות — הדגמה של 3 דקות שמסבירה הכל על הצורך של ילד בקשר.",
    accentColor:"sage",
    link:"https://www.youtube.com/watch?v=apzXGEbZht0",
  },
  {
    id:23, type:"article", category:"professional",
    title:"שינה אצל ילדים: לא רק כמה שעות, אלא איך נרגעים לתוך הלילה", creator:"מאיה פלטי",
    tag:"ויסות רגשי וחוסן", emoji:"clock",
    excerpt:"כמה שעות שינה ילדים צריכים, איך שינה קשורה לפחדים ושליטה, ואיך בונים טקס שינה רגוע ובריא בבית.",
    accentColor:"sage", featured:true, isMine:true,
    link:"/library/child-sleep-routines",
    linkLabel:"למאמר המלא",
  },
  {
    id:24, type:"article", category:"professional",
    title:"הילדים שלנו קוראים אותנו: נוירוני מראה, ויסות ומודלינג בהורות", creator:"מאיה פלטי",
    tag:"מודלינג וויסות משותף", emoji:"brain",
    excerpt:"מהם נוירוני מראה, איך הם קשורים למודלינג, ויסות וחמלה בהורות, ומה אפשר לתרגל בבית בלי אשמה ובלי פתרונות קסם.",
    accentColor:"terra", featured:true, isMine:true,
    link:"/library/mirror-neurons-parenting",
    linkLabel:"למאמר המלא",
  },
  {
    id:25, type:"article", category:"professional",
    title:"5 שפות האהבה בהורות: איך ילדים מרגישים אהובים בגילים שונים?", creator:"מאיה פלטי",
    tag:"קשר הורה־ילד", emoji:"heart",
    excerpt:"איך 5 שפות האהבה משתנות לפי גיל, ומה הורים יכולים לעשות כדי לחזק קשר, נראות וביטחון רגשי עם הילד.",
    accentColor:"terra", featured:true, isMine:true,
    link:"/library/five-love-languages-parent-child",
    linkLabel:"למאמר המלא",
  },
  {
    id:26, type:"article", category:"professional",
    title:"ילדי סחלב וילדי סביון: איך להבין את הרגישות של הילד", creator:"מאיה פלטי",
    tag:"חומר מקצועי", emoji:"flower",
    excerpt:"מה אומרת מטאפורת ילדי הסחלב והסביון, איך היא עוזרת להבין רגישות, ויסות וקשר — ומה אפשר לעשות אחרת בבית.",
    accentColor:"sage", featured:true, isMine:true,
    link:"/library/orchid-dandelion-children-parenting",
    linkLabel:"למאמר המלא",
  },
  {
    id:27, type:"article", category:"professional",
    title:"הילד הוא לא הבעיה: החצנת הבעיה בהורות", creator:"מאיה פלטי",
    tag:"ויסות רגשי וחוסן", emoji:"book",
    excerpt:"איך החצנת הבעיה בגישה הנרטיבית עוזרת להורים ולילדים להתמודד עם כעס, חרדה, מסכים והתנגדות בלי להפוך את הילד לבעיה.",
    accentColor:"terra", featured:true, isMine:true,
    link:"/library/externalizing-the-problem-parenting",
    linkLabel:"למאמר המלא",
  },
  {
    id:28, type:"article", category:"professional",
    title:"בררנות באוכל אצל ילדים: מתי זה טבעי ומתי כדאי לבדוק?", creator:"מאיה פלטי",
    tag:"אכילה והרגלי תזונה", emoji:"shield",
    excerpt:"איך להבחין בין בררנות אכילה טבעית לבין קושי רחב יותר, ואיך לעזור לילדים בגילאים שונים בלי מאבקי כוח.",
    accentColor:"sage", featured:true, isMine:true,
    link:"/library/picky-eating-children",
    linkLabel:"למאמר המלא",
  },
  {
    id:29, type:"article", category:"professional",
    title:"אנקומפרזיס אצל ילדים: כשהגוף מדבר במקום הילד", creator:"מאיה פלטי",
    tag:"התפתחות וגמילה", emoji:"sunrise",
    excerpt:"אנקומפרזיס בילדים אינו לרוב \"דווקא\". הסבר נגיש על עצירות, בושה, שירותים ומה הורים יכולים לעשות אחרת.",
    accentColor:"terra", featured:true, isMine:true,
    link:"/library/encopresis-children-parenting",
    linkLabel:"למאמר המלא",
  },
];

const TYPE_LABELS: Record<ContentType, string> = {
  song:"שיר", poem:"שירה", article:"מאמר/כלי", book:"ספר", research:"מחקר", video:"סרטון"
};

// ─── Decision-Tree Chat Bubble ────────────────────────────────────────────────

type ChatScreen = "menu" | "pricing" | "booking" | "toolbox" | "tools-list" | "tool-detail" | "who" | "zoom" | "ages" | "contact";

const TOOL_PREVIEWS: { label: string; slug: string; short: string; desc: string }[] = [
  { label: "חמלה הורית", slug: "self-compassion", short: "לקבל את עצמנו כדי לקבל את הילד", desc: "הקול שבו אנחנו מדברים לעצמנו הופך לקול שהילדים שלנו מפנימים. חמלה עצמית היא לא פינוק — היא תשתית." },
  { label: "רפלקטיביות", slug: "reflectivity", short: "להבין מה מתחת לפני השטח", desc: "4 שאלות פשוטות: מה אני חושב? מה אני מרגיש? מה הילד חושב? מה הוא מרגיש?" },
  { label: "משחקיות", slug: "playfulness", short: "להפוך התנגדות לחיבור", desc: "משחקיות היא לא פעילות מיוחדת — היא תנוחת נפש. כניסה דרך החלון כשדלת ההתנגדות נסגרת." },
  { label: "מודלינג", slug: "modeling", short: "הילדים קוראים אותנו כמו ספר פתוח", desc: "הילדים שלנו קוראים אותנו כמו ספר פתוח, לכן עלינו לשים לב לתוכן של הספר." },
  { label: "התאמה התפתחותית", slug: "developmental-fit", short: "לראות את הילד בגובה העיניים שלו", desc: "ציפיות שמתאימות לגיל ולשלב ההתפתחותי מפחיתות תסכול — גם אצל ההורה וגם אצל הילד." },
  { label: "נבואה חיובית", slug: "positive-prophecy", short: "להתמקד בטוב כדי לעזור לו לגדול", desc: "כשאנחנו מזהים ומחזקים את הטוב — הילד לומד לראות את עצמו דרך העיניים האלה." },
  { label: "שיתוף פעולה", slug: "cooperation", short: "ממאבק להסכמה משותפת", desc: "במקום מאבקי כוח — דרך שבה שני הצדדים מרגישים שנשמעו ושותפים להחלטה." },
  { label: "חוסן רגשי", slug: "resilience", short: "היכולת לשוב לצורה לאחר לחץ ולצמוח ממנו", desc: "חוסן הוא לא להיות חזק — אלא לדעת ליפול ולקום, ולגדול מהתהליך." },
  { label: "זמן קסם", slug: "magic-time", short: "זמן משותף שיוצר חיבור אישי", desc: "קשר אינטימי מצריך זמן משותף — רגעים קטנים של נוכחות מלאה שבונים ביטחון." },
  { label: "צמיחה מחוזקות", slug: "growth-from-strengths", short: "להכיר ולהשתמש במה שיש", desc: "כשמזהים את החוזקות של הילד ובונים עליהן — הצמיחה באה מתוך ביטחון ולא מתוך חסך." },
];

const WA_LINK = "https://wa.me/972523930681?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%90%D7%99%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%99";
const CAL_LINK = "https://calendly.com/maya_palty/50min";

function AIChatBubble() {
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState<ChatScreen>("menu");
  const [selectedTool, setSelectedTool] = useState<number>(0);
  const scrollRef = { current: null as HTMLDivElement | null };

  const goTo = (s: ChatScreen) => {
    setScreen(s);
    setTimeout(() => { scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" }); }, 50);
  };

  const bubbleStyle = (isBot: boolean): React.CSSProperties => ({
    background: isBot ? "var(--terra-faint)" : "var(--sage-faint)",
    borderRadius: isBot ? "18px 18px 18px 4px" : "18px 18px 4px 18px",
    padding: "11px 15px",
    border: isBot ? "1px solid rgba(196,114,122,0.15)" : "1px solid rgba(42,122,110,0.15)",
    fontFamily: "var(--font-hebrew)", fontSize: "13.5px", color: "var(--charcoal-soft)", lineHeight: "1.75",
  });

  const btnStyle: React.CSSProperties = {
    background: "white", border: "1.5px solid var(--sage)", color: "var(--sage-dark)",
    padding: "8px 14px", borderRadius: "18px", fontFamily: "var(--font-hebrew)", fontSize: "12.5px",
    fontWeight: 500, cursor: "pointer", transition: "all 0.2s", textAlign: "right",
  };

  const ctaBtn = (href: string, label: string, bg: string): React.ReactNode => (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      padding: "9px 18px", borderRadius: "18px", fontFamily: "var(--font-hebrew)",
      fontSize: "12.5px", fontWeight: 600, color: "white", background: bg,
      textDecoration: "none", marginTop: "8px",
    }}>{label}</a>
  );

  const backBtn = (
    <button onClick={() => goTo("menu")} style={{ ...btnStyle, border: "1.5px solid var(--border)", color: "var(--charcoal-muted)", marginTop: "4px" }}>
      <SiteIcon name="chevron-right" size={12} /> חזרה לתפריט
    </button>
  );

  const renderScreen = () => {
    switch (screen) {
      case "menu":
        return (
          <>
            <div style={bubbleStyle(true)}>
              שלום! אני העוזרת הדיגיטלית של מאיה. בקרוב אשתדרג ואוכל גם לייעץ בהתאמה אישית — אבל כבר עכשיו אפשר לעזור עם כמה שאלות נפוצות:
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
              {([
                ["pricing", "כמה עולה פגישה?"],
                ["booking", "איך קובעים פגישה?"],
                ["toolbox", "מה זה ארגז הכלים?"],
                ["who", "מי את מאיה?"],
                ["zoom", "גם בזום?"],
                ["ages", "לאיזה גילאים?"],
                ["contact", "רוצה לדבר עם מאיה"],
              ] as [ChatScreen, string][]).map(([s, label]) => (
                <button key={s} onClick={() => goTo(s)} style={btnStyle}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)"; }}
                >{label}</button>
              ))}
            </div>
          </>
        );

      case "pricing":
        return (
          <>
            <div style={bubbleStyle(false)}>כמה עולה פגישה?</div>
            <div style={bubbleStyle(true)}>
              <strong>הדרכת הורים אישית:</strong> ₪354 / $115 לפגישה<br/>
              <strong>סדנת הורים בזום (קבוצתי):</strong> ₪1,200 / $400 לזוג — 12 מפגשים<br/><br/>
              שיחת ייעוץ ראשונה: 15 דקות, חינם, ללא התחייבות
            </div>
            {ctaBtn(WA_LINK, "לשיחת ייעוץ חינם בוואטסאפ", "#25D366")}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
              <button onClick={() => goTo("booking")} style={btnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)"; }}
              >איך קובעים פגישה?</button>
              <button onClick={() => goTo("zoom")} style={btnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)"; }}
              >גם בזום?</button>
              {backBtn}
            </div>
          </>
        );

      case "booking":
        return (
          <>
            <div style={bubbleStyle(false)}>איך קובעים פגישה?</div>
            <div style={bubbleStyle(true)}>
              <strong>שלב 1:</strong> שיחת ייעוץ ראשונה חינם (15 דקות) — כדי להכיר ולוודא שההדרכה מתאימה לכם.<br/>
              <strong>שלב 2:</strong> קביעת פגישה ראשונה ביומן של מאיה.<br/><br/>
              תהליך ההדרכה הוא קצר מועד — בדרך כלל 5 עד 12 פגישות.
            </div>
            {ctaBtn(WA_LINK, "שיחת ייעוץ חינם בוואטסאפ", "#25D366")}
            <br/>
            {ctaBtn(CAL_LINK, "לקביעת פגישה ב-Calendly", "var(--terra)")}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
              <button onClick={() => goTo("pricing")} style={btnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)"; }}
              >כמה עולה פגישה?</button>
              {backBtn}
            </div>
          </>
        );

      case "toolbox":
        return (
          <>
            <div style={bubbleStyle(false)}>מה זה ארגז הכלים?</div>
            <div style={bubbleStyle(true)}>
              ארגז הכלים ההורי הוא מודל שפיתחה מאיה — 10 כלים מעשיים מבוססי מחקר שעוזרים להורים לחזק את הקשר עם ילדיהם ולהתמודד עם אתגרי היומיום.<br/><br/>
              כל כלי עוסק בהיבט אחר של ההורות: חמלה, משחקיות, חוסן, שיתוף פעולה ועוד.
            </div>
            <a href="/model" style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "9px 18px", borderRadius: "18px", fontFamily: "var(--font-hebrew)",
              fontSize: "12.5px", fontWeight: 600, color: "white", background: "var(--sage)",
              textDecoration: "none", marginTop: "8px",
            }}><SiteIcon name="wrench" size={13} /> לעמוד ארגז הכלים</a>
            <div style={{ marginTop: "12px" }}>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "12px", color: "var(--charcoal-muted)", marginBottom: "6px" }}>רוצים להכיר כלי ספציפי?</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {TOOL_PREVIEWS.map((t, i) => (
                  <button key={t.slug} onClick={() => { setSelectedTool(i); goTo("tool-detail"); }} style={{ ...btnStyle, fontSize: "11.5px", padding: "6px 11px" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)"; }}
                  >{t.label}</button>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "8px" }}>{backBtn}</div>
          </>
        );

      case "tool-detail": {
        const t = TOOL_PREVIEWS[selectedTool];
        return (
          <>
            <div style={bubbleStyle(false)}>{t.label}</div>
            <div style={bubbleStyle(true)}>
              <strong>{t.label}</strong> — {t.short}<br/><br/>
              {t.desc}
            </div>
            <a href={`/model/${t.slug}`} style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "9px 18px", borderRadius: "18px", fontFamily: "var(--font-hebrew)",
              fontSize: "12.5px", fontWeight: 600, color: "white", background: "var(--sage)",
              textDecoration: "none", marginTop: "8px",
            }}>לקרוא עוד על {t.label}</a>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
              <button onClick={() => goTo("toolbox")} style={btnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)"; }}
              >כלי נוסף</button>
              {backBtn}
            </div>
          </>
        );
      }

      case "who":
        return (
          <>
            <div style={bubbleStyle(false)}>מי את מאיה?</div>
            <div style={bubbleStyle(true)}>
              מאיה פלטי היא פסיכולוגית חינוכית מומחית-מדריכה עם ניסיון של שנים בעבודה עם הורים וילדים.<br/><br/>
              מאיה מתמחה בהדרכת הורים לילדים בגילאי 3–15, ומלווה משפחות ישראליות בארץ ובעולם.<br/>
              היא גרה כיום בטקסס ומכירה מקרוב את המציאות של משפחות ישראליות בחו״ל.
            </div>
            <a href="/about" style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "9px 18px", borderRadius: "18px", fontFamily: "var(--font-hebrew)",
              fontSize: "12.5px", fontWeight: 600, color: "white", background: "var(--sage)",
              textDecoration: "none", marginTop: "8px",
            }}>לעמוד עליי</a>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
              <button onClick={() => goTo("booking")} style={btnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)"; }}
              >איך קובעים פגישה?</button>
              <button onClick={() => goTo("contact")} style={btnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)"; }}
              >רוצה לדבר עם מאיה</button>
              {backBtn}
            </div>
          </>
        );

      case "zoom":
        return (
          <>
            <div style={bubbleStyle(false)}>גם בזום?</div>
            <div style={bubbleStyle(true)}>
              בהחלט! רוב הפגישות מתקיימות בזום.<br/>
              מאיה עובדת עם הורים ישראלים בכל העולם — בשעות נוחות להורים עובדים בישראל.<br/><br/>
              יש גם אפשרות לפגישה פרונטלית בקליניקה בסידר פארק, אוסטין, טקסס.
            </div>
            {ctaBtn(WA_LINK, "לתיאום שיחה ראשונה", "#25D366")}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
              <button onClick={() => goTo("pricing")} style={btnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)"; }}
              >כמה עולה פגישה?</button>
              <button onClick={() => goTo("booking")} style={btnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)"; }}
              >איך קובעים פגישה?</button>
              {backBtn}
            </div>
          </>
        );

      case "ages":
        return (
          <>
            <div style={bubbleStyle(false)}>לאיזה גילאים?</div>
            <div style={bubbleStyle(true)}>
              מאיה מתמחה בהדרכת הורים לילדים בגילאי <strong>4 עד 14</strong>.<br/>
              ההדרכה מתמקדת בהורים — לא בילדים. אנחנו עובדים ביחד על הכלים וההתנהגויות שמשנות את הדינמיקה המשפחתית.<br/><br/>
              <strong>חשוב:</strong> בארה״ב מאיה עוסקת בהדרכת הורים ולא בטיפול או אבחון.
            </div>
            {ctaBtn(WA_LINK, "לבדוק אם מתאים לנו", "#25D366")}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
              <button onClick={() => goTo("toolbox")} style={btnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)"; }}
              >מה זה ארגז הכלים?</button>
              <button onClick={() => goTo("pricing")} style={btnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--sage)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--sage-dark)"; }}
              >כמה עולה פגישה?</button>
              {backBtn}
            </div>
          </>
        );

      case "contact":
        return (
          <>
            <div style={bubbleStyle(false)}>רוצה לדבר עם מאיה</div>
            <div style={bubbleStyle(true)}>
              כמובן! הדרך הכי מהירה להגיע למאיה היא דרך וואטסאפ.<br/>
              שלחו הודעה ומאיה תחזור אליכם בהקדם.
            </div>
            {ctaBtn(WA_LINK, "שליחת הודעה בוואטסאפ", "#25D366")}
            <br/>
            <a href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "9px 18px", borderRadius: "18px", fontFamily: "var(--font-hebrew)",
              fontSize: "12.5px", fontWeight: 600, color: "white", background: "var(--charcoal-muted)",
              textDecoration: "none", marginTop: "8px",
            }}><SiteIcon name="mail" size={13} /> טופס יצירת קשר</a>
            <div style={{ marginTop: "10px" }}>{backBtn}</div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "28px", left: "28px", zIndex: 1000 }}>
      {open && (
        <div style={{
          position: "absolute", bottom: "72px", left: 0, width: "350px",
          background: "#FFFFFF", borderRadius: "var(--radius-card-lg)",
          boxShadow: "0 24px 64px rgba(45,45,45,0.18)",
          border: "1px solid var(--border)", overflow: "hidden",
          animation: "scaleIn 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards",
          transformOrigin: "bottom left",
        }}>
          {/* Header */}
          <div style={{ background: "linear-gradient(135deg, var(--sage-dark) 0%, #3D3530 100%)", padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(249,247,242,0.15)", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid rgba(249,247,242,0.25)", flexShrink: 0 }}>
              <SiteIcon name="flower" size={16} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "13.5px", fontWeight: 700, color: "#F9F7F2", margin: 0 }}>העוזרת של מאיה פלטי</p>
              <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "11px", color: "rgba(249,247,242,0.6)", margin: "2px 0 0" }}>כאן כדי לעזור לכם להתמצא</p>
            </div>
            <button onClick={() => { setOpen(false); setScreen("menu"); }} style={{ background: "none", border: "none", color: "rgba(249,247,242,0.6)", cursor: "pointer", fontSize: "20px", lineHeight: 1, padding: "4px", flexShrink: 0 }}>×</button>
          </div>

          {/* Content */}
          <div ref={el => { scrollRef.current = el; }} style={{ maxHeight: "360px", overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {renderScreen()}
          </div>

          {/* Footer */}
          <p style={{ fontFamily: "var(--font-hebrew)", fontSize: "10px", color: "var(--charcoal-muted)", textAlign: "center", padding: "8px 16px 12px", margin: 0, borderTop: "1px solid var(--border)" }}>
            לייעוץ אישי — פנו למאיה פלטי ישירות.
          </p>
        </div>
      )}

      <button onClick={() => setOpen(!open)} style={{
        display: "flex", alignItems: "center", gap: "10px",
        background: open ? "var(--charcoal)" : "linear-gradient(135deg, var(--sage-dark) 0%, #3D3530 100%)",
        color: "#FFFFFF", border: "none", cursor: "pointer",
        padding: "13px 20px", borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-hebrew)", fontSize: "13.5px", fontWeight: 600,
        boxShadow: "0 8px 32px rgba(45,45,45,0.22)",
        transition: "all 280ms ease", whiteSpace: "nowrap",
      }}>
        {open ? <SiteIcon name="x" size={18} /> : <SiteIcon name="flower" size={18} />}
        {open ? "סגור" : "איך אפשר לעזור?"}
      </button>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function LibraryCard({ item }: { item: LibraryItem }) {
  const [expanded, setExpanded] = useState(false);
  const isSage = item.accentColor === "sage";

  return (
    <div id={`library-${item.id}`} style={{
      background:"#FFFFFF", borderRadius:"var(--radius-card)", border:"1px solid var(--border)",
      boxShadow:"var(--shadow-card)", overflow:"hidden", display:"flex", flexDirection:"column",
      transition:"transform 320ms cubic-bezier(0.4,0,0.2,1), box-shadow 320ms ease",
      position:"relative",
    }}>

      {item.featured && (
        <div style={{ position:"absolute", top:"14px", right:"-1px", background:"var(--terra)", color:"white", fontSize:"10px", fontWeight:700, fontFamily:"var(--font-hebrew)", letterSpacing:"0.06em", padding:"4px 12px 4px 14px", borderRadius:"3px 0 0 3px" }}>
          <><SiteIcon name="heart" size={12} /> מומלץ</>
        </div>
      )}
      {item.isMine && (
        <div style={{ position:"absolute", top: item.featured ? "40px" : "14px", right:"-1px", background:"var(--sage)", color:"white", fontSize:"10px", fontWeight:700, fontFamily:"var(--font-hebrew)", letterSpacing:"0.06em", padding:"4px 12px 4px 14px", borderRadius:"3px 0 0 3px" }}>
          כתיבה מקורית
        </div>
      )}

      <div style={{
        height:"88px",
        background: isSage
          ? "linear-gradient(135deg, var(--sage-faint) 0%, rgba(42,122,110,0.25) 100%)"
          : "linear-gradient(135deg, var(--terra-faint) 0%, rgba(212,160,136,0.25) 100%)",
        display:"flex", alignItems:"center", justifyContent:"center", gap:"12px",
        borderBottom:"1px solid var(--border)",
      }}>
        <SiteIcon name={item.emoji} size={28} />
        <span style={{ fontFamily:"var(--font-serif)", fontSize:"20px", fontWeight:600, color: isSage ? "var(--sage-dark)" : "var(--terra-dark)", lineHeight:1.2 }}>{item.title}</span>
      </div>

      <div style={{ padding:"22px", flex:1, display:"flex", flexDirection:"column", gap:"10px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"8px", flexWrap:"wrap" }}>
          <span style={{ background:"var(--linen)", color:"var(--charcoal-soft)", fontFamily:"var(--font-hebrew)", fontSize:"10px", fontWeight:700, padding:"3px 10px", borderRadius:"var(--radius-pill)", letterSpacing:"0.06em", border:"1px solid var(--border)" }}>
            {TYPE_LABELS[item.type]}
          </span>
          <span className={isSage ? "tag-sage" : "tag-terra"} style={{ fontSize:"10px" }}>{item.tag}</span>
        </div>
        <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"19px", fontWeight:600, color:"var(--charcoal)", lineHeight:1.25, margin:0 }}>{item.title}</h3>
        <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color: isSage ? "var(--sage-dark)" : "var(--terra-dark)", fontWeight:600, margin:0 }}>— {item.creator}</p>
        <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-muted)", lineHeight:1.75, margin:0, flex:1 }}>{item.excerpt}</p>

        {/* Expanded content */}
        {expanded && item.fullContent && (
          <div style={{ background:"var(--linen)", borderRadius:"10px", padding:"18px", border:"1px solid var(--border)", marginTop:"6px" }}>
            <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"14px", color:"var(--charcoal-soft)", lineHeight:2, margin:0, whiteSpace:"pre-line", direction:"rtl" }}>
              {item.fullContent}
            </p>
          </div>
        )}

        {/* Action button */}
        <div style={{ marginTop:"8px", display:"flex", flexDirection:"column", gap:"8px" }}>
          {item.fullContent && (
            <button onClick={() => setExpanded(!expanded)} style={{
              background: isSage ? "var(--sage-faint)" : "var(--terra-faint)",
              border: `1px solid ${isSage ? "rgba(42,122,110,0.3)" : "rgba(196,114,122,0.3)"}`,
              borderRadius:"var(--radius-pill)", padding:"8px 16px",
              fontFamily:"var(--font-hebrew)", fontSize:"13px", fontWeight:600,
              color: isSage ? "var(--sage-dark)" : "var(--terra-dark)",
              cursor:"pointer", width:"100%", transition:"all 180ms ease",
            }}>
              {expanded ? <><SiteIcon name="chevron-up" size={14} /> סגור</> : <><SiteIcon name="chevron-down" size={14} /> לקריאה מלאה</>}
            </button>
          )}
          {item.link && (
            <a href={item.link} target={item.link.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" style={{
              display:"block", textAlign:"center",
              background: isSage ? "var(--sage-faint)" : "var(--terra-faint)",
              border: `1px solid ${isSage ? "rgba(42,122,110,0.3)" : "rgba(196,114,122,0.3)"}`,
              borderRadius:"var(--radius-pill)", padding:"8px 16px",
              fontFamily:"var(--font-hebrew)", fontSize:"13px", fontWeight:600,
              color: isSage ? "var(--sage-dark)" : "var(--terra-dark)",
              textDecoration:"none", transition:"all 180ms ease",
            }}>
              ← {item.linkLabel ?? (item.link.startsWith("/") ? "לעמוד הכלי" : "פתח קישור")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Filter constants ──────────────────────────────────────────────────────────
const FILTER_OPTIONS: {value:Category; label:string; emoji:string}[] = [
  { value:"all",           label:"הכל",         emoji:"sparkle" },
  { value:"professional",  label:"חומר מקצועי", emoji:"book" },
  { value:"inspirational", label:"השראה",        emoji:"music" },
];

const TYPE_FILTERS: {value:ContentType|"all"; label:string}[] = [
  { value:"all",      label:"כל הסוגים" },
  { value:"poem",     label:"שירה ופרוזה" },
  { value:"article",  label:"כלים" },
  { value:"video",    label:"סרטונים" },
  { value:"research", label:"מחקרים" },
];

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function LibraryPage() {
  const [category,   setCategory]   = useState<Category>("all");
  const [typeFilter, setTypeFilter] = useState<ContentType|"all">("all");
  const [search,     setSearch]     = useState("");
  const [mineOnly,   setMineOnly]   = useState(false);

  const filtered = useMemo(() => ITEMS.filter(item => {
    const catMatch  = category === "all"   || item.category === category;
    const typeMatch = typeFilter === "all" || item.type === typeFilter;
    const mineMatch = !mineOnly || item.isMine;
    const q = search.toLowerCase();
    const textMatch = !q || item.title.toLowerCase().includes(q) || item.creator.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q);
    return catMatch && typeMatch && mineMatch && textMatch;
  }).sort((a, b) => b.id - a.id), [category, typeFilter, mineOnly, search]);

  const counts = {
    all: ITEMS.length,
    professional:  ITEMS.filter(i => i.category === "professional").length,
    inspirational: ITEMS.filter(i => i.category === "inspirational").length,
  };

  return (
    <>
      {/* Hero */}
      <section className="sec-hero" style={{ background:"linear-gradient(150deg, #E8F2F0 0%, #F9F7F2 60%)", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-60px", right:"-60px", width:"300px", height:"300px", borderRadius:"50%", background:"radial-gradient(circle, rgba(42,122,110,0.12) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-40px", left:"-40px", width:"220px", height:"220px", borderRadius:"50%", background:"radial-gradient(circle, rgba(196,114,122,0.10) 0%, transparent 70%)", pointerEvents:"none" }} />

        <span className="tag-sage" style={{ marginBottom:"20px", display:"inline-block" }}>עולם של תוכן</span>
        <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(40px,5.5vw,68px)", fontWeight:300, fontStyle:"italic", color:"var(--charcoal)", margin:"0 0 16px", letterSpacing:"-0.02em" }}>
          הספרייה
        </h1>
        <p style={{ fontSize:"17px", color:"var(--charcoal-soft)", maxWidth:"600px", margin:"0 auto 40px", lineHeight:1.82, fontFamily:"var(--font-hebrew)" }}>
          שירים ומאמרים שלי והשראה מאחרים — לפעמים אפשר ללמוד באמצעות ידע, ולפעמים צריך להרגיש את זה.
        </p>

        <div style={{ display:"flex", justifyContent:"center", gap:"12px", flexWrap:"wrap" }}>
          {[
            { n: ITEMS.filter(i=>i.isMine).length, label:"יצירות מאיה פלטי", color:"var(--terra)" },
            { n: counts.inspirational,              label:"יצירות השראה",       color:"var(--sage-dark)" },
            { n: counts.professional,               label:"מקורות מקצועיים",    color:"var(--charcoal)" },
          ].map(({ n, label, color }) => (
            <div key={label} style={{ background:"rgba(255,255,255,0.7)", border:"1px solid var(--border)", borderRadius:"var(--radius-pill)", padding:"8px 20px", display:"flex", gap:"8px", alignItems:"center", backdropFilter:"blur(8px)" }}>
              <span style={{ fontFamily:"var(--font-serif)", fontSize:"22px", fontWeight:600, color, lineHeight:1 }}>{n}</span>
              <span style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-soft)" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div style={{ position:"sticky", top:"64px", zIndex:50, background:"rgba(249,247,242,0.95)", backdropFilter:"blur(14px)", borderBottom:"1px solid var(--border)", boxShadow:"0 2px 12px rgba(45,45,45,0.06)" }}>
        <div style={{ maxWidth:"1160px", margin:"0 auto", padding:"0 20px" }}>
          <div className="library-filter-tabs" style={{ display:"flex", gap:"0", borderBottom:"1px solid var(--border)", overflowX:"auto" }}>
            {FILTER_OPTIONS.map(opt => (
              <button key={opt.value}
                onClick={() => { setCategory(opt.value); setTypeFilter("all"); setMineOnly(false); }}
                style={{
                  display:"flex", alignItems:"center", gap:"7px", padding:"16px 20px",
                  background:"none", border:"none", cursor:"pointer",
                  fontFamily:"var(--font-hebrew)", fontSize:"14px",
                  fontWeight: category === opt.value && !mineOnly ? 700 : 400,
                  color: category === opt.value && !mineOnly ? "var(--terra-dark)" : "var(--charcoal-soft)",
                  borderBottom: category === opt.value && !mineOnly ? "2.5px solid var(--terra)" : "2.5px solid transparent",
                  marginBottom:"-1px", transition:"all 200ms ease", whiteSpace:"nowrap",
                }}>
                <span><SiteIcon name={opt.emoji} size={14} /></span>
                <span>{opt.label}</span>
                <span style={{ background: category === opt.value && !mineOnly ? "var(--terra-faint)" : "var(--linen)", color: category === opt.value && !mineOnly ? "var(--terra-dark)" : "var(--charcoal-muted)", fontSize:"11px", fontWeight:700, padding:"2px 8px", borderRadius:"var(--radius-pill)" }}>
                  {counts[opt.value as keyof typeof counts]}
                </span>
              </button>
            ))}

            {/* Maya's content tab */}
            <button onClick={() => { setMineOnly(true); setCategory("all"); setTypeFilter("all"); }} style={{
              display:"flex", alignItems:"center", gap:"7px", padding:"16px 20px",
              background:"none", border:"none", cursor:"pointer",
              fontFamily:"var(--font-hebrew)", fontSize:"14px",
              fontWeight: mineOnly ? 700 : 400,
              color: mineOnly ? "var(--sage-dark)" : "var(--charcoal-soft)",
              borderBottom: mineOnly ? "2.5px solid var(--sage)" : "2.5px solid transparent",
              marginBottom:"-1px", transition:"all 200ms ease", whiteSpace:"nowrap",
            }}>
              <SiteIcon name="star" size={14} />
              <span>מאיה פלטי</span>
              <span style={{ background: mineOnly ? "var(--sage-faint)" : "var(--linen)", color: mineOnly ? "var(--sage-dark)" : "var(--charcoal-muted)", fontSize:"11px", fontWeight:700, padding:"2px 8px", borderRadius:"var(--radius-pill)" }}>
                {ITEMS.filter(i=>i.isMine).length}
              </span>
            </button>

            <div style={{ flex:1 }} />

            <div style={{ display:"flex", alignItems:"center", padding:"0 4px", position:"relative" }}>
              <span style={{ position:"absolute", right:"16px", opacity:0.45, pointerEvents:"none", display:"flex" }}><SiteIcon name="search" size={13} /></span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="חיפוש..."
                style={{ padding:"7px 36px 7px 14px", border:"1.5px solid var(--border)", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal)", background:"var(--linen)", outline:"none", width:"152px", textAlign:"right" }}
              />
            </div>
          </div>

          <div style={{ display:"flex", gap:"6px", padding:"10px 0", overflowX:"auto", scrollbarWidth:"none" }}>
            {TYPE_FILTERS.map(t => (
              <button key={t.value} onClick={() => setTypeFilter(t.value)} style={{
                padding:"5px 14px", borderRadius:"var(--radius-pill)",
                background: typeFilter === t.value ? "var(--sage)" : "transparent",
                color: typeFilter === t.value ? "white" : "var(--charcoal-soft)",
                border: typeFilter === t.value ? "1.5px solid var(--sage)" : "1.5px solid var(--border)",
                fontFamily:"var(--font-hebrew)", fontSize:"12.5px", fontWeight:500,
                cursor:"pointer", transition:"all 180ms ease", whiteSpace:"nowrap",
              }}>
                {t.label}
              </button>
            ))}
            {(category !== "all" || typeFilter !== "all" || search || mineOnly) && (
              <button onClick={() => { setCategory("all"); setTypeFilter("all"); setSearch(""); setMineOnly(false); }} style={{
                padding:"5px 14px", borderRadius:"var(--radius-pill)",
                background:"var(--terra-faint)", color:"var(--terra-dark)",
                border:"1.5px solid rgba(196,114,122,0.25)",
                fontFamily:"var(--font-hebrew)", fontSize:"12.5px", fontWeight:600,
                cursor:"pointer", whiteSpace:"nowrap", marginRight:"auto",
              }}>
                נקה × ({filtered.length})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="sec-std" style={{ background:"var(--paper)", minHeight:"60vh" }}>
        <div style={{ maxWidth:"1160px", margin:"0 auto" }}>
          <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"13px", color:"var(--charcoal-muted)", marginBottom:"28px" }}>
            מציג <strong style={{ color:"var(--charcoal)" }}>{filtered.length}</strong> פריטים
            {search && <span> עבור &quot;{search}&quot;</span>}
            {mineOnly && <span> — כתיבה של מאיה פלטי</span>}
          </p>

          {filtered.length === 0 ? (
            <div style={{ textAlign:"center", padding:"80px 0" }}>
              <div style={{ marginBottom:"20px" }}><SiteIcon name="search" size={52} /></div>
              <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"26px", color:"var(--charcoal)", marginBottom:"12px" }}>לא נמצאו תוצאות</h3>
              <p style={{ fontFamily:"var(--font-hebrew)", color:"var(--charcoal-muted)", fontSize:"15px" }}>נסו מילת חיפוש אחרת או נקו את הסינון</p>
            </div>
          ) : (
            <div className="library-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(288px, 1fr))", gap:"22px" }}>
              {filtered.map(item => <LibraryCard key={item.id} item={item} />)}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="sec-md" style={{ background:"var(--sage)", textAlign:"center" }}>
        <div style={{ maxWidth:"500px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(24px,3.5vw,38px)", color:"#FFFFFF", marginBottom:"14px", fontStyle:"italic", fontWeight:300 }}>קבלו תכנים ישירות למייל</h2>
          <p style={{ fontFamily:"var(--font-hebrew)", fontSize:"16px", color:"rgba(249,247,242,0.82)", marginBottom:"28px", lineHeight:1.82 }}>מדי חודש — שיר, מאמר, ורעיון אחד שיכול לשנות משהו.</p>
          <div className="newsletter-row" style={{ display:"flex", gap:"10px", justifyContent:"center" }}>
            <label htmlFor="newsletter-email" className="sr-only" style={{ position:"absolute", width:"1px", height:"1px", overflow:"hidden", clip:"rect(0,0,0,0)" }}>כתובת אימייל</label>
            <input id="newsletter-email" type="email" aria-label="כתובת אימייל" placeholder="כתובת האימייל שלכם" style={{ flex:1, padding:"13px 18px", borderRadius:"var(--radius-pill)", border:"none", fontSize:"15px", fontFamily:"var(--font-hebrew)", textAlign:"right", outline:"none", maxWidth:"260px", background:"#FFFFFF", color:"var(--charcoal)" }} />
            <button style={{ background:"var(--terra)", color:"white", border:"none", padding:"13px 22px", borderRadius:"var(--radius-pill)", fontFamily:"var(--font-hebrew)", fontWeight:700, fontSize:"14px", cursor:"pointer", whiteSpace:"nowrap" }}>הרשמה</button>
          </div>
        </div>
      </section>

      <AIChatBubble />
    </>
  );
}
