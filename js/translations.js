/**
 * translations.js
 * Comprehensive Bilingual Translation Dictionary (English / Vietnamese)
 * Default language: English ('en')
 */

const TRANSLATIONS = {
  en: {
    // Browser Page Title
    page_title: "Portfolio - Ngo Tien Tai",

    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_contact: "Contact",

    // Side Navigation Tooltips
    side_home: "Home",
    side_about: "About",
    side_skills: "Skills",
    side_experience: "Experience",
    side_projects: "Projects",
    side_contact: "Contact",

    // Hero Section
    hero_role: "Frontend • FullStack • Software Engineer",
    hero_greeting_1: "Hello,",
    hero_greeting_2: "I'm",
    hero_name_first: "Ngo",
    hero_name_middle: "Tien",
    hero_name_last: "Tai",
    hero_typewriter_prefix: "Specializing in",
    hero_typewriter_roles: [
      "Frontend Developer",
      "FullStack Developer",
      "Software Engineer",
      "React · Next.js · TypeScript",
      "Clean Code & Web Architecture"
    ],
    hero_desc: "Crafting high-performance web applications with seamless interactivity and modern aesthetics. Showcasing selected projects, technical craftsmanship, and UI engineering experience.",
    hero_btn_work: "View Projects",
    hero_btn_cv: "Download CV",
    hero_btn_contact: "Contact Now",
    scroll_explore: "Scroll to explore",

    // Section 02: About
    about_badge: "About Me",
    about_title: "Frontend • FullStack • Software Engineer",
    about_lead: "I am <strong>Ngo Tien Tai</strong>, a developer specializing in <strong>Frontend, FullStack &amp; Software Engineering</strong>. I focus on engineering robust web applications with <strong>JavaScript, TypeScript, React, Next.js, Node.js</strong>, and <strong>TailwindCSS</strong>.",
    about_text: "I prioritize clean software architecture, converting Figma designs into pixel-perfect web interfaces, writing maintainable code, and ensuring rock-solid performance across the full stack.",
    about_code_name: "'Ngo Tien Tai'",
    about_code_dev: '"Ngo Tien Tai"',
    ide_copy: "Copy",
    ide_copied: "Copied!",

    // Section 03: Skills
    skills_badge: "Technical Skills",
    skills_title: "Skills & Technologies",
    skills_desc: "Comprehensive toolchain, libraries, and frameworks applied in production to deliver resilient and high-performance digital products.",
    keyboard_hint: "Click keys or press your physical keyboard to interact with the 3D Mechanical Keyboard",
    keyboard_sound_btn: "Audio",

    // Section 04: Experience
    exp_badge: "Work Experience",
    exp_title: "Enterprise Experience",
    exp_subtitle: "Real-world engineering experience developing production applications in a corporate environment.",
    exp_role: "Full-stack Programming Intern",
    exp_company: "E-Solutions Co., Ltd. (Công ty TNHH Giải pháp Hiệu quả Esolutions)",
    exp_project: "Fixago Project",
    exp_location: "Ho Chi Minh City, Vietnam",
    exp_period: "03/2026 — 06/2026",
    exp_bullet_1: "Identified a spam vulnerability in the booking flow, researched and proposed a <strong>rate-limiting rule (max 5 orders/day)</strong>, which was adopted by the team and deployed to production.",
    exp_bullet_2: "Developed and modularized core backend services (booking, real-time order tracking, multi-channel notifications) using <strong>Nest.js</strong> with a <strong>Modular Monolith</strong> architecture in a 4-member team.",
    exp_bullet_3: "Integrated RESTful APIs with <strong>MySQL</strong> ensuring transactional ACID compliance, synchronizing and rendering order tracking and notification states on the <strong>Next.js</strong> frontend.",
    exp_bullet_4: "Built responsive UI components and pages, ensuring consistent and seamless user experience across diverse devices.",
    exp_bullet_5: "Optimized frontend rendering performance, eliminating unnecessary re-renders in React components.",
    exp_bullet_6: "Reported progress in <strong>1–2 week Agile/Scrum sprints</strong>, adapting engineering plans flexibly as business requirements evolved.",

    // Section 05: Projects
    projects_badge: "Featured Projects",
    projects_title: "Selected Works",
    projects_subtitle: "Each project combines resilient architecture with refined visual design and interactive user experience.",
    project_desc_kicker: "PROJECT OVERVIEW",
    project_roles_kicker: "Architecture & Tech Roles:",
    btn_view_project: "View Project",
    
    // Project 1: Fixago
    p1_kicker: "01 // OMNI-CHANNEL PLATFORM",
    p1_badge: "Full Stack · 2026",
    p1_desc: "Designed and developed an on-demand multi-channel home repair platform connecting customers with real-time technician dispatching, order management, and secure payments. Engineered a high-performance Next.js web portal with SSR/SEO optimization, a Modular Monolith backend using Nest.js paired with Redis queue for automated GPS technician matching, and a MySQL database ensuring ACID transactional integrity. Developed a cross-platform Flutter mobile app for service technicians and containerized the entire ecosystem with Docker.",
    p1_r1: "Web Booking Portal & SSR/SEO optimization",
    p1_r2: "Modular Monolith API & technician dispatch",
    p1_r3: "Mobile App for technicians & GPS matching",
    p1_r4: "Order database & financial records",
    p1_r5: "Dispatch queue, caching & Pub/Sub",
    p1_r6: "Containerization & automated CI/CD",

    // Project 2: Moni
    p2_kicker: "02 // PERSONAL FINANCE",
    p2_badge: "Full Stack · 2025",
    p2_desc: "Architected and developed a cross-platform personal finance management system supporting daily expense tracking, custom budget limits, multi-wallet accounts, and recurring summaries. Built an intuitive mobile client with Flutter providing real-time cash flow visualization, paired with a robust ASP.NET Core & C# backend handling business logic, JWT authentication, and spending analytics. Persisted financial data with SQL Server and containerized deployment with Docker.",
    p2_r1: "Cross-platform mobile app for expense tracking",
    p2_r2: "Backend Web API handling logic & JWT auth",
    p2_r3: "Transaction processing & budget limit analytics",
    p2_r4: "Relational database managing wallets & transactions",
    p2_r5: "Containerized backend and database environment",
    p2_repo1_title: "Moni App (Mobile)",
    p2_repo1_desc: "Flutter • Cross-platform Mobile Client",
    p2_repo2_title: "Moni API (Backend)",
    p2_repo2_desc: "ASP.NET Core & C# • RESTful Web API",

    // Project 3: VeritaShop
    p3_kicker: "03 // E-COMMERCE & AI",
    p3_badge: "FrontEnd & AI · 2026",
    p3_desc: "Designed and developed an e-commerce platform for smartphones integrated with an Aspect-Based Sentiment Analysis (ABSA) AI model. The system automatically extracts and visualizes customer review sentiments across granular dimensions such as Battery, Camera, Performance, Display, Design, and Price. Built a modern web storefront using Next.js 15 and React 19 with SSR/SSG optimization, a TypeScript Node.js/Express API, Prisma ORM over PostgreSQL, AWS S3 asset storage, and Docker containerization. Built the AI pipeline in Python with rigorous NLP preprocessing and Fleiss' Kappa inter-annotator agreement.",
    p3_r1: "E-commerce web app with SSR/SSG & AI metrics",
    p3_r2: "RESTful API handling cart, checkout, JWT & AI",
    p3_r3: "ORM mapping & safe database migrations",
    p3_r4: "Relational storage for products & sentiment scores",
    p3_r5: "NLP pipeline for preprocessing & sentiment scoring",
    p3_r6: "Containerized backend and PostgreSQL stack",
    p3_repo1_title: "VeritaShop (Web Platform)",
    p3_repo1_desc: "Next.js 15 • Node.js • Prisma • PostgreSQL",
    p3_repo2_title: "ABSA AI Model (NLP Core)",
    p3_repo2_desc: "Python • Aspect-Based Sentiment Analysis",

    // Section 06: Contact
    contact_badge: "Contact",
    contact_heading_pre: "Get in",
    contact_heading_accent: "Touch",
    contact_desc: "Whether you have an inquiry, a project proposal, or just want to chat about engineering and design, my inbox is always open!",
    contact_phone_title: "Phone",
    contact_email_title: "Email",
    contact_email_copy: "Copy",
    contact_email_send: "Send Mail",
    form_title: "Send a Direct Message",
    form_name: "Your Name",
    form_name_ph: "John Doe",
    form_email: "Email Address",
    form_email_ph: "name@company.com",
    form_msg: "Message",
    form_msg_ph: "How can I help with your project? Feel free to share details here...",
    form_btn_send: "Send Message",
    form_submitting: "Sending...",
    form_success: "Thank you! Your message has been sent successfully.",

    // Preloader
    preloader_init: "Initializing Four Seasons WebGL Core...",
    preloader_s1: "[01/05] Mounting Four Seasons dynamic core ({SEASON})...",
    preloader_s2: "[02/05] Compiling WebGL shaders & Living Tree buffers...",
    preloader_s3: "[03/05] Calibrating 3D mechanical keyboard audio & physics...",
    preloader_s4: "[04/05] Optimizing FullStack & Software Engineer runtime...",
    preloader_s5: "[05/05] Workspace ready. Launching portfolio...",
    preloader_complete: "[COMPLETE] All systems optimal. Welcome to my portfolio!",

    // Four Seasons Quotes
    spring_quote: "Cherry blossoms drifting in the breeze · 18°C crisp & refreshing",
    spring_avatar: "Blooming in the light",
    spring_footer: "Spring vibes · Fresh & Creative",

    summer_quote: "Vibrant canopy & summer fireflies · 28°C passionate energy",
    summer_avatar: "Dynamic & inventive",
    summer_footer: "Summer energy · Resilient & driven",

    autumn_quote: "Golden leaves dancing in the evening wind · 22°C focused depth",
    autumn_avatar: "Crafted with precision",
    autumn_footer: "Autumn focus · Refined & thoughtful",

    winter_quote: "Snow-covered branches & pure crystal frost · 12°C calm serenity",
    winter_avatar: "Composed & minimalist",
    winter_footer: "Winter serenity · Poised & purposeful"
  },

  vi: {
    // Browser Page Title
    page_title: "Portfolio - Ngô Tiến Tài",

    // Navigation
    nav_home: "Trang chủ",
    nav_about: "Về tôi",
    nav_skills: "Kỹ năng",
    nav_experience: "Kinh nghiệm",
    nav_projects: "Dự án",
    nav_contact: "Liên hệ",

    // Side Navigation Tooltips
    side_home: "Trang chủ",
    side_about: "Tiểu sử",
    side_skills: "Kỹ năng",
    side_experience: "Kinh nghiệm",
    side_projects: "Dự án",
    side_contact: "Liên hệ",

    // Hero Section
    hero_role: "Frontend • FullStack • Software Engineer",
    hero_greeting_1: "Xin chào,",
    hero_greeting_2: "tôi là",
    hero_name_first: "Ngô",
    hero_name_middle: "Tiến",
    hero_name_last: "Tài",
    hero_typewriter_prefix: "Chuyên về",
    hero_typewriter_roles: [
      "Frontend Developer",
      "FullStack Developer",
      "Kỹ Sư Phần Mềm",
      "React · Next.js · TypeScript",
      "Mã Sạch & Kiến Trúc Web"
    ],
    hero_desc: "Xây dựng các ứng dụng web hiệu năng cao, tương tác mượt mà và mỹ cảm hiện đại. Nơi trưng bày các dự án chọn lọc, kỹ năng lập trình và phong cách thiết kế giao diện của tôi.",
    hero_btn_work: "Xem dự án",
    hero_btn_cv: "Tải CV",
    hero_btn_contact: "Liên hệ ngay",
    scroll_explore: "Cuộn để khám phá",

    // Section 02: About
    about_badge: "Tiểu sử",
    about_title: "Frontend • FullStack • Software Engineer",
    about_lead: "Tôi là <strong>Ngô Tiến Tài</strong>, lập trình viên phát triển <strong>Frontend, FullStack &amp; Software Engineering</strong>. Tôi tập trung xây dựng các ứng dụng web với <strong>JavaScript, TypeScript, React, Next.js, Node.js</strong> và <strong>TailwindCSS</strong>.",
    about_text: "Tôi chú trọng thiết kế kiến trúc phần mềm mạch lạc, chuyển đổi chính xác thiết kế Figma thành giao diện web hoàn chỉnh, viết mã nguồn sạch sẽ, dễ bảo trì và tối ưu hiệu năng ổn định trên toàn bộ hệ thống.",
    about_code_name: "'Ngô Tiến Tài'",
    about_code_dev: '"Ngô Tiến Tài"',
    ide_copy: "Copy",
    ide_copied: "Đã chép!",

    // Section 03: Skills
    skills_badge: "Kỹ năng chuyên môn",
    skills_title: "Kỹ Năng & Công Nghệ",
    skills_desc: "Tổng hợp các ngôn ngữ, thư viện và framework tôi ứng dụng thực chiến để phát triển sản phẩm web hiệu năng cao.",
    keyboard_hint: "Nhấp chuột hoặc gõ phím để tương tác với bàn phím cơ 3D",
    keyboard_sound_btn: "Âm thanh",

    // Section 04: Experience
    exp_badge: "Kinh nghiệm làm việc",
    exp_title: "Thực chiến doanh nghiệp",
    exp_subtitle: "Kinh nghiệm thực tế qua quá trình tham gia phát triển sản phẩm tại môi trường doanh nghiệp.",
    exp_role: "Full-stack Programming Intern",
    exp_company: "Công ty TNHH Giải pháp Hiệu quả Esolutions",
    exp_project: "Dự án Fixago",
    exp_location: "Hồ Chí Minh, Việt Nam",
    exp_period: "03/2026 — 06/2026",
    exp_bullet_1: "Chủ động phát hiện lỗ hổng spam trong luồng đặt lịch, nghiên cứu và đề xuất quy tắc <strong>rate-limiting (tối đa 5 đơn/ngày)</strong>, được toàn đội ngũ chấp thuận và đưa thẳng vào hệ thống thực tế.",
    exp_bullet_2: "Xây dựng và module hóa các phân hệ backend trọng yếu (đặt lịch, theo dõi đơn hàng thời gian thực, thông báo đa kênh) bằng <strong>Nest.js</strong> theo kiến trúc <strong>Modular Monolith</strong> trong nhóm 4 thành viên.",
    exp_bullet_3: "Tích hợp RESTful API với CSDL <strong>MySQL</strong> bảo đảm toàn vẹn giao dịch (ACID), đồng bộ và hiển thị dữ liệu trạng thái đơn hàng lên giao diện <strong>Next.js</strong>.",
    exp_bullet_4: "Xây dựng các UI components và trang web responsive, bảo đảm trải nghiệm người dùng nhất quán và mượt mà trên đa dạng thiết bị.",
    exp_bullet_5: "Tối ưu hóa hiệu năng render phía frontend, triệt tiêu các lần re-render không cần thiết trên React components.",
    exp_bullet_6: "Làm việc theo quy trình <strong>Agile / Scrum</strong> với chu kỳ sprint 1–2 tuần, báo cáo tiến độ định kỳ, chủ động phản hồi nhanh và thích ứng linh hoạt khi yêu cầu nghiệp vụ thay đổi.",

    // Section 05: Projects
    projects_badge: "Dự án chọn lọc",
    projects_title: "Những tác phẩm tiêu biểu",
    projects_subtitle: "Mỗi dự án là một sự kết hợp giữa kiến trúc code vững vàng và trải nghiệm thị giác ấn tượng.",
    project_desc_kicker: "MÔ TẢ DỰ ÁN",
    project_roles_kicker: "Kiến trúc & Vai trò công nghệ:",
    btn_view_project: "Xem dự án",
    
    // Project 1: Fixago
    p1_kicker: "01 // NỀN TẢNG ĐA KÊNH",
    p1_badge: "Full Stack · 2026",
    p1_desc: "Thiết kế và phát triển nền tảng sửa chữa nhà theo yêu cầu đa kênh, hỗ trợ khách hàng đặt lịch, điều phối kỹ thuật viên thời gian thực, quản lý đơn hàng và thanh toán. Xây dựng web portal với Next.js tối ưu SSR/SEO, hệ thống backend kiến trúc Modular Monolith với Nest.js kết hợp hàng đợi Redis để tự động điều phối thợ theo định vị GPS, cùng cơ sở dữ liệu MySQL đảm bảo tính toàn vẹn giao dịch ACID. Phát triển ứng dụng di động đa nền tảng bằng Flutter cho kỹ thuật viên và đóng gói toàn bộ kiến trúc bằng Docker.",
    p1_r1: "Web Portal đặt lịch & tối ưu SEO SSR",
    p1_r2: "Modular Monolith API & điều phối thợ",
    p1_r3: "App Mobile KTV nhận việc & GPS",
    p1_r4: "CSDL quản lý đơn hàng & tài chính",
    p1_r5: "Queue điều phối, caching & Pub/Sub",
    p1_r6: "Container hóa & tự động CI/CD",

    // Project 2: Moni
    p2_kicker: "02 // TÀI CHÍNH CÁ NHÂN",
    p2_badge: "Full Stack · 2025",
    p2_desc: "Thiết kế và phát triển ứng dụng quản lý thu chi và tài chính cá nhân đa nền tảng, hỗ trợ ghi chép thu chi hàng ngày, phân loại danh mục tùy chỉnh, quản lý đa ví và thiết lập hạn mức ngân sách tháng. Xây dựng giao diện ứng dụng di động mượt mà với Flutter giúp trực quan hóa dòng tiền theo thời gian thực, kết hợp hệ thống backend RESTful API bằng ASP.NET Core và C# xử lý logic giao dịch, xác thực bảo mật JWT và phân tích thống kê chi tiêu. Lưu trữ dữ liệu giao dịch có cấu trúc với SQL Server và chuẩn hóa môi trường triển khai bằng Docker.",
    p2_r1: "App di động đa nền tảng theo dõi thu chi & ví tiền",
    p2_r2: "Backend Web API xử lý tính toán, phân quyền & JWT",
    p2_r3: "Xử lý logic giao dịch, hạn mức & báo cáo định kỳ",
    p2_r4: "CSDL quan hệ quản lý có cấu trúc ví & giao dịch",
    p2_r5: "Container hóa môi trường Backend & CSDL",
    p2_repo1_title: "Moni App (Mobile)",
    p2_repo1_desc: "Flutter • Ứng dụng di động",
    p2_repo2_title: "Moni API (Backend)",
    p2_repo2_desc: "ASP.NET Core & C# • Hệ thống API Backend",

    // Project 3: VeritaShop
    p3_kicker: "03 // THƯƠNG MẠI ĐIỆN TỬ & AI",
    p3_badge: "FrontEnd & AI · 2026",
    p3_desc: "Thiết kế và phát triển nền tảng thương mại điện tử mua bán điện thoại thông minh tích hợp mô hình AI Phân tích Cảm xúc Đa Khía Cạnh (ABSA). Hệ thống tự động bóc tách và trực quan hóa đánh giá của người dùng theo từng khía cạnh chi tiết như Pin, Camera, Hiệu năng, Màn hình, Thiết kế và Mức giá. Xây dựng giao diện Web hiện đại với Next.js 15 và React 19 tối ưu SSR/SSG, backend RESTful API Node.js / Express với TypeScript, quản lý CSDL PostgreSQL qua Prisma ORM, lưu trữ AWS S3 và chuẩn hóa môi trường bằng Docker. Mô hình AI lõi xây dựng trên Python với pipeline tiền xử lý NLP chặt chẽ và chuẩn hóa gán nhãn Fleiss' Kappa.",
    p3_r1: "Web TMĐT tối ưu SSR/SSG, lọc biến thể & trực quan hóa AI",
    p3_r2: "RESTful API xử lý giỏ hàng, đơn hàng, JWT & tích hợp AI",
    p3_r3: "Ánh xạ quan hệ & migration cấu trúc CSDL an toàn",
    p3_r4: "Lưu trữ quan hệ sản phẩm, biến thể & bảng điểm khía cạnh",
    p3_r5: "Pipeline NLP tiền xử lý, gán nhãn & phân tích đa khía cạnh",
    p3_r6: "Container hóa môi trường Backend & PostgreSQL",
    p3_repo1_title: "VeritaShop (Nền tảng Web)",
    p3_repo1_desc: "Next.js 15 • Node.js • Prisma • PostgreSQL",
    p3_repo2_title: "Mô hình AI ABSA (Lõi NLP)",
    p3_repo2_desc: "Python • Phân tích cảm xúc đa khía cạnh",

    // Section 06: Contact
    contact_badge: "Liên hệ",
    contact_heading_pre: "Thông tin",
    contact_heading_accent: "liên hệ",
    contact_desc: "Dù bạn đang có một dự án mới, một lời mời hợp tác hay đơn giản muốn trò chuyện về công nghệ và thiết kế web, tôi luôn sẵn sàng lắng nghe!",
    contact_phone_title: "Điện thoại",
    contact_email_title: "Email",
    contact_email_copy: "Sao chép",
    contact_email_send: "Gửi mail",
    form_title: "Gửi tin nhắn trực tiếp",
    form_name: "Tên của bạn",
    form_name_ph: "Nguyễn Văn A",
    form_email: "Email",
    form_email_ph: "name@company.com",
    form_msg: "Nội dung tin nhắn",
    form_msg_ph: "Bạn cần hỗ trợ dự án nào? Hãy chia sẻ tại đây...",
    form_btn_send: "Gửi lời nhắn",
    form_submitting: "Đang gửi...",
    form_success: "Cảm ơn bạn! Tin nhắn đã được gửi thành công.",

    // Preloader
    preloader_init: "Đang khởi tạo hệ thống Portfolio Four Seasons...",
    preloader_s1: "[01/05] Khởi động hệ thống Four Seasons ({SEASON})...",
    preloader_s2: "[02/05] Nạp tài nguyên đồ họa WebGL & Cây 3D Four Seasons...",
    preloader_s3: "[03/05] Hiệu chỉnh mô hình Bàn phím cơ 3D tương tác...",
    preloader_s4: "[04/05] Tối ưu hóa môi trường FullStack & Software Engineer...",
    preloader_s5: "[05/05] Không gian làm việc sẵn sàng. Đang mở Portfolio...",
    preloader_complete: "[HOÀN TẤT] Hệ thống đã sẵn sàng. Chào mừng bạn ghé thăm Portfolio!",

    // Four Seasons Quotes
    spring_quote: "Cánh hoa anh đào bay trong gió · 18°C dịu mát",
    spring_avatar: "Hoa nở đón nắng",
    spring_footer: "Spring vibes · Tươi mới & Sáng tạo",

    summer_quote: "Tán lá rực rỡ & Đom đóm đêm hè · 28°C nhiệt huyết",
    summer_avatar: "Năng động sáng tạo",
    summer_footer: "Summer energy · Năng động & Bền bỉ",

    autumn_quote: "Lá phong vàng bay trong gió chiều · 22°C sâu lắng",
    autumn_avatar: "Tinh tế từng chi tiết",
    autumn_footer: "Autumn focus · Tinh tế & Sâu lắng",

    winter_quote: "Tuyết trắng phủ cành & Băng tinh khiết · 12°C an yên",
    winter_avatar: "Điềm tĩnh & Tối giản",
    winter_footer: "Winter serenity · Điềm tĩnh & Tối giản"
  }
};

// Expose globally to window for browser scripts and module.exports for Node testing
if (typeof window !== 'undefined') {
  window.TRANSLATIONS = TRANSLATIONS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TRANSLATIONS;
}
