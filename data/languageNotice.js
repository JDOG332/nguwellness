// Section 1557 notices (45 CFR 92.10 and 92.11), from HHS OCR's sample notices.
// Wording is HHS's own; only the placeholders are filled (NGU's phone, no TTY line).
// Languages: HHS/CMS list of the 15 most common non-English languages in Ohio
// (ACS 2009-2013 data). Chinese is shown in both scripts; "Cushite" is Somali.
// Sources, fetched 2026-09-28:
//   https://www.hhs.gov/sites/default/files/notice-non-discrimination-english.pdf
//   https://www.hhs.gov/sites/default/files/notice-availability-language-services-auxiliary-aids-<language>.docx
//   https://www.cms.gov/cciio/resources/regulations-and-guidance/downloads/appendix-a-top-15.pdf
// Romanian has no 2024 HHS version; its text is HHS's older Appendix B tagline.

// Who handles 1557 grievances (no title, per Jeff). Change here and the page follows.
export const CIVIL_RIGHTS_CONTACT = {
  name: "Nicole Walton, PhD, LISW-S, LPC",
};

export const LANGUAGE_TAGLINES = [
  { english: "Spanish", native: "Español", lang: "es", text: "ATENCIÓN: Si habla español, tiene a su disposición servicios gratuitos de asistencia lingüística. También están disponibles de forma gratuita ayuda y servicios auxiliares apropiados para proporcionar información en formatos accesibles. Llame al 1-888-648-9355 o hable con su proveedor." },
  { english: "Chinese (Simplified)", native: "简体中文", lang: "zh-Hans", text: "注意：如果您说中文，我们将免费为您提供语言协助服务。我们还免费提供适当的辅助工具和服务，以无障碍格式提供信息。致电 1-888-648-9355 或咨询您的服务提供商。" },
  { english: "Chinese (Traditional)", native: "繁體中文", lang: "zh-Hant", text: "注意：如果您說中文，我們可以為您提供免費語言協助服務。也可以免費提供適當的輔助工具與服務，以無障礙格式提供資訊。請致電 1-888-648-9355 或與您的提供者討論。" },
  { english: "German", native: "Deutsch", lang: "de", text: "ACHTUNG: Wenn Sie Deutsch sprechen, stehen Ihnen kostenlose Sprachassistenzdienste zur Verfügung. Entsprechende Hilfsmittel und Dienste zur Bereitstellung von Informationen in barrierefreien Formaten stehen ebenfalls kostenlos zur Verfügung. Rufen Sie 1-888-648-9355 an oder sprechen Sie mit Ihrem Provider." },
  { english: "Arabic", native: "العربية", lang: "ar", dir: "rtl", text: "تنبيه: إذا كنت تتحدث اللغة العربية، فستتوفر لك خدمات المساعدة اللغوية المجانية. كما تتوفر وسائل مساعدة وخدمات مناسبة لتوفير المعلومات بتنسيقات يمكن الوصول إليها مجانًا. اتصل على الرقم 1-888-648-9355 أو تحدث إلى مقدم الخدمة." },
  { english: "Pennsylvania Dutch", native: "Pennsylvanisch Deitsch", lang: "pdc", text: "ACHTUNG: Wann du Pennsylvanisch Deitsch schwetzscht, sin Hilfsdienst fer die Sprooch fer dich gratis verfügbar. Passende Hilfsmittel un Dienscht, fer Informatione in zugängliche Formate ze gebbe, sin aa gratis verfügbar. Ruf 1-888-648-9355 oder schwetz mit dein Anbieter." },
  { english: "Russian", native: "Русский", lang: "ru", text: "ВНИМАНИЕ: Если вы говорите на русском языке, вам доступны бесплатные услуги языковой поддержки. Соответствующие вспомогательные средства и услуги по предоставлению информации в доступных форматах также предоставляются бесплатно. Позвоните по телефону 1-888-648-9355 или обратитесь к своему поставщику услуг." },
  { english: "French", native: "Français", lang: "fr", text: "ATTENTION : Si vous parlez français, des services d'assistance linguistique gratuits sont à votre disposition. Des aides et services auxiliaires appropriés pour fournir des informations dans des formats accessibles sont également disponibles gratuitement. Appelez le 1-888-648-9355 ou parlez à votre fournisseur." },
  { english: "Vietnamese", native: "Tiếng Việt", lang: "vi", text: "LƯU Ý: Nếu bạn nói tiếng Việt, chúng tôi cung cấp miễn phí các dịch vụ hỗ trợ ngôn ngữ. Các hỗ trợ dịch vụ phù hợp để cung cấp thông tin theo các định dạng dễ tiếp cận cũng được cung cấp miễn phí. Vui lòng gọi theo số 1-888-648-9355 hoặc trao đổi với người cung cấp dịch vụ của bạn." },
  { english: "Somali", native: "Soomaali", lang: "so", text: "FIIRO GAAR AH: Haddaad ku hadasho Soomaali, adeegyo kaalmada luuqadda ah oo bilaash ah ayaad heli kartaa. Qalab caawinaad iyo adeegyo oo habboon si loogu bixiyo macluumaadka qaabab la adeegsan karo ayaa sidoo kale bilaa lacag heli karaa. Wac 1-888-648-9355 ama la hadal bixiyahaaga." },
  { english: "Korean", native: "한국어", lang: "ko", text: "주의: 한국어를 사용하시는 경우 무료 언어 지원 서비스를 이용하실 수 있습니다. 이용 가능한 형식으로 정보를 제공하는 적절한 보조 기구 및 서비스도 무료로 제공됩니다. 1-888-648-9355번으로 전화하거나 서비스 제공업체에 문의하십시오." },
  { english: "Italian", native: "Italiano", lang: "it", text: "ATTENZIONE: se parli italiano, sono disponibili servizi di assistenza linguistica gratuiti. Sono inoltre disponibili gratuitamente ausili e servizi ausiliari adeguati per fornire informazioni in formati accessibili. Chiama l'1-888-648-9355 o parla con il tuo fornitore." },
  { english: "Japanese", native: "日本語", lang: "ja", text: "注：日本語を話される場合、無料の言語支援サービスをご利用いただけます。アクセシブル（誰もが利用できるよう配慮された）な形式で情報を提供するための適切な補助支援やサービスも無料でご利用いただけます。1-888-648-9355までお電話ください。または、ご利用の事業者にご相談ください。" },
  { english: "Dutch", native: "Nederlands", lang: "nl", text: "LET OP: als je Nederlands spreekt, zijn er gratis taalhulpdiensten voor je beschikbaar. Passende hulpmiddelen en diensten om informatie in toegankelijke formaten te verstrekken, zijn ook gratis beschikbaar. Bel 1-888-648-9355 of spreek met je provider." },
  { english: "Ukrainian", native: "Українська", lang: "uk", text: "УВАГА: Якщо ви розмовляєте українською мовою, вам доступні безкоштовні мовні послуги. Відповідні допоміжні засоби та послуги для надання інформації у доступних форматах також доступні безкоштовно. Зателефонуйте за номером 1-888-648-9355 або зверніться до свого постачальника." },
  { english: "Romanian", native: "Română", lang: "ro", text: "ATENȚIE: Dacă vorbiți limba română, vă stau la dispoziție servicii de asistență lingvistică, gratuit. Sunați la 1-888-648-9355." },
];
